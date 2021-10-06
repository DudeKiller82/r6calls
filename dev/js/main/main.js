'use strict';

(function(pagecode) { //eslint-disable-line wrap-iife
  pagecode(window.jQuery, window, document, R6MMainData, R6MMainRender, R6MMainControls, R6MMainDrawing, R6MMainSelectMaps, R6MHelpers);
}(function($, window, document, R6MMainData, R6MMainRender, R6MMainControls, R6MMainDrawing, R6MMainSelectMaps, R6MHelpers, undefined) {
  var $mapWrappers,
    $mapPanelWrappers,
    $mapMains,
    $mapElements,
    $mapPanelLabels,
    $drawingMarkerWrappers,
    $navLogo,
    $body,
    $mainNav,
    SHOW_MAP = 'show-map',
    SHOW_SELECT_MAP = 'show-select-map',
    HASH_SPLIT_CHAR = '/';

  $(function() { // equivanelt to $(document).ready() - but a bit faster
    setPageElements();
    R6MMainRender.setupMapPanels($mapPanelWrappers, 4);
    setMapElements();
    setupMenu();
    setupSelectMap();
    R6MMainControls.maps.populate(R6MMainData.getMapData());

    setupEvents();
    $navLogo.on('click', toggleShowSelectMap);
    tryLoadMenuOptions();

    R6MMainControls.setupPanZoom($mapMains, $mapElements);

    if (trySelectBookmarkedMap()) {
      loadMap();
      trySelectBookmarkedObjective();
      trySelectBookmarkedFloor();
      showMap();
    } else {
      showSelectMap();
      document.title = 'R6Calls.com';
    }

    setTimeout(function() {
      $body.removeClass('loading');
    }, 10);
  });

  var checkIfMapLoaded = function checkIfMapLoaded() {
    return $body.attr('loaded-map');
  };

  var closeMenu = function closeMenu() {
    getMenuApi().close();
  };

  var isCamera = function isCamera(element) {
    return element.hasClass('camera');
  };

  var isShowingMap = function isShowingMap() {
    return $body.hasClass(SHOW_MAP);
  };

  var getCameraIdFromEvent = function getCameraIdFromEvent(event) {
    return $(event.target).data('camera-id');
  };

  var getHashArgs = function getHashArgs() {
    return window.location.hash.substr(1).split(HASH_SPLIT_CHAR);
  };

  var getLoadedMapKey = function getLoadedMapKey() {
    return $('body').attr('loaded-map');
  };

  var getMenuApi = function getMenuApi() {
    return $('#mmenu-menu').data( 'mmenu' );
  };

  var getResetDimensions = function getResetDimensions() {
    var zoomPoints = {
      topLeft: { top: -180, left: -312 }, // default
      bottomRight: { top: 180, left: 312 }
    };
    var zoomWidth = zoomPoints.bottomRight.left - zoomPoints.topLeft.left,
      zoomHeight = zoomPoints.bottomRight.top - zoomPoints.topLeft.top,
      centerTop = Math.round(zoomPoints.bottomRight.top - (zoomHeight / 2)),
      centerLeft = Math.round(zoomPoints.topLeft.left + (zoomWidth / 2)),
      panelWidth = $mapWrappers.width(),
      panelHeight = $mapWrappers.height(),
      navHeight = $mainNav.height(),
      paddingWidth = Math.min(panelHeight * 0.1, navHeight),
      paddingHeight = Math.min(panelHeight * 0.1, navHeight * 2);

    panelWidth = panelWidth - paddingWidth;
    panelHeight = panelHeight - paddingHeight;
    var result = {
      debugZoomWidth: zoomWidth,
      debugZoomHeight: zoomHeight,
      centerTop: centerTop,
      centerLeft: centerLeft,
      debugPanelWidth: panelWidth,
      debugPanelHeight: panelHeight,
      debugPaddingWidth: paddingWidth,
      debugPaddingHeight: paddingHeight,
      zoomValue: Math.max(
        Math.min(
          1,
          panelWidth / zoomWidth,
          panelHeight / zoomHeight
        ),
        0.5
      )
    };

    return result;
  };

  var handleCameraIn = function handleCameraHoverIn(event) {
    var cameraId = getCameraIdFromEvent(event);
  };

  var handleCameraOut = function handleCameraHoverOut(event) {
    var cameraId = getCameraIdFromEvent(event);
  };

  var handleFloorChange = function handleFloorChange() {
    sendFloorSelectAnalyticsEvent();
    showSelectedFloor();
    updateUrl();
    R6MMainDrawing.refreshPings(); // hacky drawing module for now
  };

  var handleMapChange = function handleMapChange() {
    sendMapSelectAnalyticsEvent();
    loadMap();
    updateUrl();
  };

  var handleMapPanelCountChange = function handleMapPanelCountChange(numPanels) {
    sendMapPanelCountEvent(numPanels);
    setMapPanelCount(numPanels);
  };

  var handleMenuClick = function handleMenuClick(e) {
    var menuApi = getMenuApi();

    e.preventDefault();
    menuApi.open();
    R6MMainControls.removeLatestUpdateHighlight(200);
  };

  var handleObjectiveChange = function handleObjectiveChange() {
    sendObjectiveSelectAnalyticsEvent();
    showSelectedObjective();
    updateUrl();
  };

  var hideSelectMap = function hideSelectMap() {
    $body.removeClass(SHOW_SELECT_MAP);
  };

  var localStorageSetItem = function localStorageSetItem(index, value) {
    try {
      localStorage.setItem(index, value);
    } catch (e) {
      //guarding against safari in private browsing mode
    }
  };

  var loadMap = function loadMap() {
    var currentlySelectedMap = R6MMainControls.maps.get(),
      mapData = R6MMainData.getMapData();

    R6MMainControls.objectives.populate(['bomb', 'hostage', 'secure']);
    R6MMainControls.floors.populate(mapData[currentlySelectedMap].floors);
    R6MMainRender.renderMap(mapData[currentlySelectedMap], $mapWrappers, $mapElements, $mapPanelLabels);

    R6MMainControls.pan.reset($mapMains, getResetDimensions);
    R6MMainControls.zoom.reset($mapMains, getResetDimensions);

    showSelectedFloor();
    showSelectedObjective();

    setLoadedMapKey(currentlySelectedMap);
    $navLogo.addClass('enabled');
    updateTitle();

    R6MMainDrawing.setup(
      $mapMains,
      $drawingMarkerWrappers,
      isCamera,
      R6MMainRender.SVG_DIM
    );

    R6MMainControls.display.setLayerDisplay('bmb');
    R6MMainControls.display.setLayerDisplay('sec');
    R6MMainControls.display.setLayerDisplay('hst');
    R6MMainControls.display.setLayerDisplay('fh');
    R6MMainControls.display.setLayerDisplay('ch');
    R6MMainControls.display.setLayerDisplay('bw');
    R6MMainControls.display.setLayerDisplay('losw');
    R6MMainControls.display.setLayerDisplay('dt');
    R6MMainControls.display.setLayerDisplay('losf');
    R6MMainControls.display.setLayerDisplay('ip');
    R6MMainControls.display.setLayerDisplay('cam');
    R6MMainControls.display.setLayerDisplay('sl');
    R6MMainControls.display.setLayerDisplay('lad');
    R6MMainControls.display.setLayerDisplay('cmp');
  };

  var removeHashFromUrl = function removeHashFromUrl() {
    var scrollV, scrollH, loc = window.location;

    if ('pushState' in history) {
      history.pushState('', document.title, loc.pathname + loc.search);
    } else {
      // Prevent scrolling by storing the page's current scroll offset
      scrollV = document.body.scrollTop;
      scrollH = document.body.scrollLeft;

      loc.hash = '';
      // Restore the scroll offset, should be flicker free
      document.body.scrollTop = scrollV;
      document.body.scrollLeft = scrollH;
    }
  };

  var saveOption = function saveOption(key, value) {
    localStorageSetItem(key, value);
    if (value) {
      R6MMainControls.pan.reset($mapMains, getResetDimensions);
    }
  };

  var sendControlAnalyticsEvent = function sendControlAnalyticsEvent(control, value) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Controls',
      eventAction: control,
      eventLabel: value
    });
  };

  var sendFloorSelectAnalyticsEvent = function sendFloorSelectAnalyticsEvent() {
    sendControlAnalyticsEvent('Floor', R6MMainControls.floors.get());
  };

  var sendMapPanelCountEvent = function sendMapPanelCountEvent(panelCount) {
    sendControlAnalyticsEvent('PanelsCount', panelCount);
  };

  var sendMapSelectAnalyticsEvent = function sendMapSelectAnalyticsEvent() {
    sendControlAnalyticsEvent('Map', R6MMainControls.maps.get());
  };

  var sendObjectiveSelectAnalyticsEvent = function sendObjectiveSelectAnalyticsEvent() {
    sendControlAnalyticsEvent('Objective', R6MMainControls.objectives.get());
  };

  var sendRoomLabelEvent = function sendRoomLabelEvent(style) {
    sendControlAnalyticsEvent('RoomLabel', style);
  };

  var setLoadedMapKey = function setLoadedMapKey(mapKey) {
    $body.attr('loaded-map', mapKey);
  };

  var setMapElements = function setMapElements() {
    $mapWrappers = $('.map-wrapper');
    $mapMains = $mapWrappers.find('.map-main');
    $mapElements = $mapMains.find('.map-elements');
    $mapPanelLabels = $('.map-panel-label');
    $drawingMarkerWrappers = $mapMains.find('.svg-wrapper.drawing-markers');
  };

  var setMapPanelCount = function setMapPanelCount(numPanels) {
    localStorageSetItem('mappanelcount', numPanels);
    $mapPanelWrappers.attr('map-panel-count', numPanels);

    $.each($mapMains, function (index, map) {
      if (index < numPanels) {
        $(map).css('display', 'block');
        R6MMainControls.zoom.enable($(map));
      } else {
        $(map).css('display', 'none');
        R6MMainControls.zoom.disable($(map));
      }
    });

    R6MMainControls.pan.reset($mapMains, getResetDimensions);
    R6MMainControls.zoom.reset($mapMains, getResetDimensions);

    showSelectedFloor();
  };

  var setPageElements = function setPageElements() {
    $mapPanelWrappers = $('#map-panel-wrapper');
    $navLogo = $('#nav-logo');
    $body = $('body');
    $mainNav = $('#main-nav');
  };

  var setupEvents = function setupEvents() {
    R6MMainControls.objectives.setup(handleObjectiveChange);
    R6MMainControls.maps.setup(handleMapChange);
    R6MMainControls.floors.setup(handleFloorChange, showSelectedFloor);
    R6MMainControls.mapPanels.setup(handleMapPanelCountChange);
    R6MMainControls.display.setupDisplayChangeEvent('bmb', saveOption);
    R6MMainControls.display.setupDisplayChangeEvent('sec', saveOption);
    R6MMainControls.display.setupDisplayChangeEvent('hst', saveOption);
    R6MMainControls.display.setupDisplayChangeEvent('fh', saveOption);
    R6MMainControls.display.setupDisplayChangeEvent('ch', saveOption);
    R6MMainControls.display.setupDisplayChangeEvent('bw', saveOption);
    R6MMainControls.display.setupDisplayChangeEvent('losw', saveOption);
    R6MMainControls.display.setupDisplayChangeEvent('dt', saveOption);
    R6MMainControls.display.setupDisplayChangeEvent('losf', saveOption);
    R6MMainControls.display.setupDisplayChangeEvent('ip', saveOption);
    R6MMainControls.display.setupDisplayChangeEvent('cam', saveOption);
    R6MMainControls.display.setupDisplayChangeEvent('sl', saveOption);
    R6MMainControls.display.setupDisplayChangeEvent('lad', saveOption);
    R6MMainControls.display.setupDisplayChangeEvent('cmp', saveOption);
    R6MMainControls.pan.setupLockOption(saveOption);
    R6MMainControls.menu.setupSelectMaps(showSelectMap, closeMenu);
    R6MMainControls.menu.setupFullScreen();

    $(window).on('orientationchange', function() {
      R6MMainControls.pan.reset($mapMains, getResetDimensions);
      R6MMainControls.zoom.reset($mapMains, getResetDimensions);
    });
  };

  var showMap = function showMap() {
    hideSelectMap();
    $body.addClass(SHOW_MAP);
    updateUrl();
    updateTitle();
  };

  var showSelectMap = function showSelectMap() {
    $body.removeClass(SHOW_MAP);
    $body.addClass(SHOW_SELECT_MAP);
    updateUrl();
    updateTitle();
  };

  var setupMenu = function setupMenu() {
    var $menuLink = $('#mmenu-link');

    R6MMainControls.menu.setup();

    var foo = $('#mmenu-menu').mmenu({
      offCanvas: {
        position: 'right',
        pageSelector: '#mmenu-page'
      },
      extensions: ['pagedim'],
      rtl: {
        use: false
      }
    });

    $menuLink.click(handleMenuClick);
  };

  var setupSelectMap = function setupSelectMap() {
    R6MMainSelectMaps.setup(
      $('#select-map-grid'),
      $('#select-map-heading'),
      $mainNav,
      R6MMainData.getMapData(),
      switchToMap,
      tryHideMapSelect
    );
  };

  var showSelectedFloor =  function showSelectedFloor() {
    var minMadFlorIndexes = R6MMainControls.floors.getMinMaxIndex();

    R6MMainRender.showFloor(
      R6MMainControls.floors.get(),
      $mapPanelWrappers,
      $mapWrappers,
      minMadFlorIndexes.min,
      minMadFlorIndexes.max
    );
  };

  var showSelectedObjective =  function showSelectedObjective() {
    R6MMainRender.showObjective(R6MMainControls.objectives.get(), $mapElements);
  };

  var switchToMap = function switchToMap(mapArg) {
    if (R6MMainControls.maps.trySelect(mapArg)) {
      hideSelectMap();
      setTimeout(function() {
        loadMap();
        showMap();
      },1);
    }
  };

  var toggleShowSelectMap = function toggleShowSelectMap(event) {
    var menuApi = getMenuApi();

    event.preventDefault();
    if (isShowingMap()) {
      showSelectMap();
      menuApi.close();
    } else if (checkIfMapLoaded()) {
      showMap();
      menuApi.close();
    }
  };

  var tryHideMapSelect = function tryHideMapSelect() {
    if (checkIfMapLoaded()) {
      showMap();
    }
  };

  var tryLoadDisplayOption = function tryLoadDisplayption(key) {
    var displayBombOption;

    switch (key) {
    case 'bmb':
      displayOption = localStorage.getItem('displaybomb');
      break;
    case 'sec':
      displayOption = localStorage.getItem('displaysecure');
      break;
    case 'hst':
      displayOption = localStorage.getItem('displayhostage');
      break;
    case 'fh':
      displayOption = localStorage.getItem('displayfloorhatch');
      break;
    case 'ch':
      displayOption = localStorage.getItem('displayceilinghatch');
      break;
    case 'bw':
      displayOption = localStorage.getItem('displaybreakablewall');
      break;
    case 'losw':
      displayOption = localStorage.getItem('displaylineofsightwall');
      break;
    case 'dt':
      displayOption = localStorage.getItem('displaydronetunnel');
      break;
    case 'losf':
      displayOption = localStorage.getItem('displaylineofsightfloor');
      break;
    case 'ip':
      displayOption = localStorage.getItem('displayinsertionpoint');
      break;
    case 'cam':
      displayOption = localStorage.getItem('displaysecuritycamera');
      break;
    case 'sl':
      displayOption = localStorage.getItem('displayskylight');
      break;
    case 'lad':
      displayOption = localStorage.getItem('displayladder');
      break;
    case 'cmp':
      displayOption = localStorage.getItem('displayCompass');
      break;
    case 'lp':
      displayOption = localStorage.getItem('lockpanning');
      break;
    default:
      break;
    }
    if (displayOption !== null) {
      R6MMainControls.display.setDisplayOption(key, displayOption);
    }
  };

  var tryLoadMapPanelCount = function tryLoadMapPanelCount() {
    var mapPanelCount = localStorage.getItem('mappanelcount');

    if (!mapPanelCount) {
      var $window = $(window);

      mapPanelCount = (
        ($window.width() > 1000) || ($window.height() > 1000)
      ) ? 2 : 1;
    }
    R6MMainControls.mapPanels.trySelect(mapPanelCount);
    setMapPanelCount(mapPanelCount);
  };

  var tryLoadMenuOptions = function tryLoadMenuOptions() {
    tryLoadMapPanelCount();
    tryLoadDisplayOption('bmb');
    tryLoadDisplayOption('sec');
    tryLoadDisplayOption('hst');
    tryLoadDisplayOption('fh');
    tryLoadDisplayOption('ch');
    tryLoadDisplayOption('bw');
    tryLoadDisplayOption('losw');
    tryLoadDisplayOption('dt');
    tryLoadDisplayOption('losf');
    tryLoadDisplayOption('ip');
    tryLoadDisplayOption('cam');
    tryLoadDisplayOption('sl');
    tryLoadDisplayOption('lad');
    tryLoadDisplayOption('cmp');
    tryLoadDisplayOption('lp');
  };

  var trySelectBookmarkedMap = function trySelectBookmarkedMap() {
    var hashArgs = getHashArgs(),
      mapArg = hashArgs[0];

    return R6MMainControls.maps.trySelect(mapArg);
  };

  var trySelectBookmarkedObjective = function trySelectBookmarkedObjective() {
    var hashArgs = getHashArgs(),
      objectiveArg = hashArgs[2];

    if (R6MMainControls.objectives.trySelect(objectiveArg)) {
      showSelectedObjective();
    }
  };

  var trySelectBookmarkedFloor = function trySelectBookmarkedFloor() {
    var hashArgs = getHashArgs(),
      floorArg = hashArgs[1];

    if (R6MMainControls.floors.trySelect(floorArg)) {
      showSelectedFloor();
    }
  };

  var updateUrl = function updateUrl() {
    if (isShowingMap()) {
      var hashText = '';

      hashText += '' + R6MMainControls.maps.get();
      hashText += HASH_SPLIT_CHAR + R6MMainControls.floors.get();
      hashText += HASH_SPLIT_CHAR + R6MMainControls.objectives.get();
      window.location.hash = hashText;
    } else {
      removeHashFromUrl();
    }
  };

  var updateTitle = function updateTitle() {
    document.title = isShowingMap() ?
      'R6Calls.com - {mapName}'.replace(
        '{mapName}',
        R6MMainData.getMapData()[getLoadedMapKey()].name
      ) :
      'R6Calls.com - Select a map';
  };
}));
