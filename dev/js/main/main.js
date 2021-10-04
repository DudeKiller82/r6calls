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

    R6MMainControls.display.setBombLayerDisplay();
    R6MMainControls.display.setSecureLayerDisplay();
    R6MMainControls.display.setHostageLayerDisplay();
    R6MMainControls.display.setFloorHatchLayerDisplay();
    R6MMainControls.display.setCeilingHatchLayerDisplay();
    R6MMainControls.display.setBreakableWallLayerDisplay();
    R6MMainControls.display.setLineOfSightWallLayerDisplay();
    R6MMainControls.display.setDroneTunnelLayerDisplay();
    R6MMainControls.display.setLineOfSightFloorLayerDisplay();
    R6MMainControls.display.setInsertionPointLayerDisplay();
    R6MMainControls.display.setSecurityCameraLayerDisplay();
    R6MMainControls.display.setSkylightLayerDisplay();
    R6MMainControls.display.setLadderLayerDisplay();
    R6MMainControls.display.setCompassLayerDisplay();
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

  var saveDisplayBombOption = function saveDisplayBombOption(value) {
    localStorageSetItem('displaybomb', value);
    if (value) {
      R6MMainControls.pan.reset($mapMains, getResetDimensions);
    }
  };

  var saveDisplaySecureOption = function saveDisplaySecureOption(value) {
    localStorageSetItem('displaysecure', value);
    if (value) {
      R6MMainControls.pan.reset($mapMains, getResetDimensions);
    }
  };

  var saveDisplayHostageOption = function saveDisplayHostageOption(value) {
    localStorageSetItem('displayhostage', value);
    if (value) {
      R6MMainControls.pan.reset($mapMains, getResetDimensions);
    }
  };

  var saveDisplayFloorHatchOption = function saveDisplayFloorHatchOption(value) {
    localStorageSetItem('displayfloorhatch', value);
    if (value) {
      R6MMainControls.pan.reset($mapMains, getResetDimensions);
    }
  };

  var saveDisplayCeilingHatchOption = function saveDisplayCeilingHatchOption(value) {
    localStorageSetItem('displayceilinghatch', value);
    if (value) {
      R6MMainControls.pan.reset($mapMains, getResetDimensions);
    }
  };

  var saveDisplayBreakableWallOption = function saveDisplayBreakableWallOption(value) {
    localStorageSetItem('displaybreakablewall', value);
    if (value) {
      R6MMainControls.pan.reset($mapMains, getResetDimensions);
    }
  };

  var saveDisplayLineOfSightWallOption = function saveDisplayLineOfSightWallOption(value) {
    localStorageSetItem('displaylineofsightwall', value);
    if (value) {
      R6MMainControls.pan.reset($mapMains, getResetDimensions);
    }
  };

  var saveDisplayDroneTunnelOption = function saveDisplayDroneTunnelOption(value) {
    localStorageSetItem('lockpanning', value);
    if (value) {
      R6MMainControls.pan.reset($mapMains, getResetDimensions);
    }
  };

  var saveDisplayLineOfSightFloorOption = function saveDisplayLineOfSightFloorOption(value) {
    localStorageSetItem('displaylineofsightfloor', value);
    if (value) {
      R6MMainControls.pan.reset($mapMains, getResetDimensions);
    }
  };

  var saveDisplayInsertionPointOption = function saveDisplayInsertionPointOption(value) {
    localStorageSetItem('displayinsertionpoint', value);
    if (value) {
      R6MMainControls.pan.reset($mapMains, getResetDimensions);
    }
  };

  var saveDisplaySecurityCameraOption = function saveDisplaySecurityCameraOption(value) {
    localStorageSetItem('displaysecuritycamera', value);
    if (value) {
      R6MMainControls.pan.reset($mapMains, getResetDimensions);
    }
  };

  var saveDisplaySkylightOption = function saveDisplaySkylightOption(value) {
    localStorageSetItem('displayskylight', value);
    if (value) {
      R6MMainControls.pan.reset($mapMains, getResetDimensions);
    }
  };

  var saveDisplayLadderOption = function saveDisplayLadderOption(value) {
    localStorageSetItem('displayladder', value);
    if (value) {
      R6MMainControls.pan.reset($mapMains, getResetDimensions);
    }
  };

  var saveDisplayCompassOption = function saveDisplayCompassOption(value) {
    localStorageSetItem('displayCompass', value);
    if (value) {
      R6MMainControls.pan.reset($mapMains, getResetDimensions);
    }
  };

  var saveLockPanningOption = function saveLockPanningOption(value) {
    localStorageSetItem('lockpanning', value);
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
    R6MMainControls.display.setupDisplayBombOption(saveDisplayBombOption);
    R6MMainControls.display.setupDisplaySecureOption(saveDisplaySecureOption);
    R6MMainControls.display.setupDisplayHostageOption(saveDisplayHostageOption);
    R6MMainControls.display.setupDisplayFloorHatchOption(saveDisplayFloorHatchOption);
    R6MMainControls.display.setupDisplayCeilingHatchOption(saveDisplayCeilingHatchOption);
    R6MMainControls.display.setupDisplayBreakableWallOption(saveDisplayBreakableWallOption);
    R6MMainControls.display.setupDisplayLineOfSightWallOption(saveDisplayLineOfSightWallOption);
    R6MMainControls.display.setupDisplayDroneTunnelOption(saveDisplayDroneTunnelOption);
    R6MMainControls.display.setupDisplayLineOfSightFloorOption(saveDisplayLineOfSightFloorOption);
    R6MMainControls.display.setupDisplayInsertionPointOption(saveDisplayInsertionPointOption);
    R6MMainControls.display.setupDisplaySecurityCameraOption(saveDisplaySecurityCameraOption);
    R6MMainControls.display.setupDisplaySkylightOption(saveDisplaySkylightOption);
    R6MMainControls.display.setupDisplayLadderOption(saveDisplayLadderOption);
    R6MMainControls.display.setupDisplayCompassOption(saveDisplayCompassOption);
    R6MMainControls.pan.setupLockOption(saveLockPanningOption);
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

  var tryLoadDisplayBombOption = function tryLoadDisplayBombOption() {
    var displayBombOption = localStorage.getItem('displaybomb');

    if (displayBombOption !== null) {
      R6MMainControls.display.setDisplayBombOption(displayBombOption);
    }
  };

  var tryLoadDisplaySecureOption = function tryLoadDisplaySecureOption() {
    var displaySecureOption = localStorage.getItem('displaysecure');

    if (displaySecureOption !== null) {
      R6MMainControls.display.setDisplaySecureOption(displaySecureOption);
    }
  };

  var tryLoadDisplayHostageOption = function tryLoadDisplayHostageOption() {
    var displayHostageOption = localStorage.getItem('displayhostage');

    if (displayHostageOption !== null) {
      R6MMainControls.display.setDisplayHostageOption(displayHostageOption);
    }
  };

  var tryLoadDisplayFloorHatchOption = function tryLoadDisplayFloorHatchOption() {
    var displayFloorHatchOption = localStorage.getItem('displayfloorhatch');

    if (displayFloorHatchOption !== null) {
      R6MMainControls.display.setDisplayFloorHatchOption(displayFloorHatchOption);
    }
  };

  var tryLoadDisplayCeilingHatchOption = function tryLoadDisplayCeilingHatchOption() {
    var displayCeilingHatchOption = localStorage.getItem('displayceilinghatch');

    if (displayCeilingHatchOption !== null) {
      R6MMainControls.display.setDisplayCeilingHatchOption(displayCeilingHatchOption);
    }
  };

  var tryLoadDisplayBreakableWallOption = function tryLoadDisplayBreakableWallOption() {
    var displayBreakableWallOption = localStorage.getItem('displaybreakablewall');

    if (displayBreakableWallOption !== null) {
      R6MMainControls.display.setDisplayBreakableWallOption(displayBreakableWallOption);
    }
  };

  var tryLoadDisplayLineOfSightWallOption = function tryLoadDisplayLineOfSightWallOption() {
    var displayLineOfSightWallOption = localStorage.getItem('displaylineofsightwall');

    if (displayLineOfSightWallOption !== null) {
      R6MMainControls.display.setDisplayLineOfSightWallOption(displayLineOfSightWallOption);
    }
  };

  var tryLoadDisplayDroneTunnelOption = function tryLoadDisplayDroneTunnelOption() {
    var displayDroneTunnelOption = localStorage.getItem('displaydronetunnel');

    if (displayDroneTunnelOption !== null) {
      R6MMainControls.display.setDisplayDroneTunnelOption(displayDroneTunnelOption);
    }
  };

  var tryLoadDisplayLineOfSightFloorOption = function tryLoadDisplayLineOfSightFloorOption() {
    var displayLineOfSightFloorOption = localStorage.getItem('displaylineofsightfloor');

    if (displayLineOfSightFloorOption !== null) {
      R6MMainControls.display.setDisplayLineOfSightFloorOption(displayLineOfSightFloorOption);
    }
  };

  var tryLoadDisplayInsertionPointOption = function tryLoadDisplayInsertionPointOption() {
    var displayInsertionPointOption = localStorage.getItem('displayinsertionpoint');

    if (displayInsertionPointOption !== null) {
      R6MMainControls.display.setDisplayInsertionPointOption(displayInsertionPointOption);
    }
  };

  var tryLoadDisplaySecurityCameraOption = function tryLoadDisplaySecurityCameraOption() {
    var displaySecurityCameraOption = localStorage.getItem('displaysecuritycamera');

    if (displaySecurityCameraOption !== null) {
      R6MMainControls.display.setDisplaySecurityCameraOption(displaySecurityCameraOption);
    }
  };

  var tryLoadDisplaySkylightOption = function tryLoadDisplaySkylightOption() {
    var displaySkylightOption = localStorage.getItem('displayskylight');

    if (displaySkylightOption !== null) {
      R6MMainControls.display.setDisplaySkylightOption(displaySkylightOption);
    }
  };

  var tryLoadDisplayLadderOption = function tryLoadDisplayLadderOption() {
    var displayLadderOption = localStorage.getItem('displayladder');

    if (displayLadderOption !== null) {
      R6MMainControls.display.setDisplayLadderOption(displayLadderOption);
    }
  };

  var tryLoadDisplayCompassOption = function tryLoadDisplayCompassOption() {
    var displayCompassOption = localStorage.getItem('displayCompass');

    if (displayCompassOption !== null) {
      R6MMainControls.display.setDisplayCompassOption(displayCompassOption);
    }
  };

  var tryLoadLockPanningOption = function tryLoadLockPanningOption() {
    var lockPanningOption = localStorage.getItem('lockpanning');

    if (lockPanningOption !== null) {
      R6MMainControls.pan.setLockOption(lockPanningOption);
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
    tryLoadDisplayBombOption();
    tryLoadDisplaySecureOption();
    tryLoadDisplayHostageOption();
    tryLoadDisplayFloorHatchOption();
    tryLoadDisplayCeilingHatchOption();
    tryLoadDisplayBreakableWallOption();
    tryLoadDisplayLineOfSightWallOption();
    tryLoadDisplayDroneTunnelOption();
    tryLoadDisplayLineOfSightFloorOption();
    tryLoadDisplayInsertionPointOption();
    tryLoadDisplaySecurityCameraOption();
    tryLoadDisplaySkylightOption();
    tryLoadDisplayLadderOption();
    tryLoadDisplayCompassOption();
    tryLoadLockPanningOption();
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
