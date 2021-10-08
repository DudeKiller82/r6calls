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
    R6MMainControls.getMapComboHTML(R6MMainData.getMapData());

    setupEvents();
    $navLogo.on('click', toggleShowSelectMap);
    tryLoadMenuOptions();

    R6MMainControls.setPanZoom($mapMains, $mapElements);

    if (trySelectBookmarkedMap()) {
      loadMap();
      trySelectBookmarkedFloor();
      showMap();
    } else {
      showSelectMap();
      document.title = 'R6Calls.com';
    }

    setTimeout(function() {
      $body.removeClass('loading');
    }, 10);

    window.onload = function() {
      setLayerDisplays();
    };
  });

  var setLayerDisplays = function setLayerDisplays() {
    R6MMainControls.MAP_LAYER.forEach(function(layer) {
      R6MMainControls.setLayerDisplay(layer.short);
    });
  };

  var checkIfMapLoaded = function checkIfMapLoaded() {
    return $body.attr('loaded-map');
  };

  var closeMenu = function closeMenu() {
    getMenuApi().close();
  };

  var isShowingMap = function isShowingMap() {
    return $body.hasClass(SHOW_MAP);
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

  var handleFloorChange = function handleFloorChange() {
    showSelectedFloor();
    updateUrl();
    R6MMainDrawing.refreshPings(); // hacky drawing module for now
  };

  var handleMapChange = function handleMapChange() {
    loadMap();
    updateUrl();
  };

  var handleMapPanelCountChange = function handleMapPanelCountChange(numPanels) {
    setMapPanelCount(numPanels);
  };

  var handleMenuClick = function handleMenuClick(e) {
    var menuApi = getMenuApi();

    e.preventDefault();
    menuApi.open();
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
    var currentlySelectedMap = R6MMainControls.getSelectedMap(),
      mapData = R6MMainData.getMapData();

    R6MMainControls.getFloorButtonsHTML(mapData[currentlySelectedMap].floors);
    R6MMainRender.renderMap(mapData[currentlySelectedMap], $mapElements, $mapPanelLabels);

    R6MMainControls.resetPan($mapMains, getResetDimensions);
    R6MMainControls.resetZoom($mapMains, getResetDimensions);

    showSelectedFloor();

    setLoadedMapKey(currentlySelectedMap);
    $navLogo.addClass('enabled');
    updateTitle();

    R6MMainDrawing.setup(
      $mapMains,
      $drawingMarkerWrappers,
      R6MMainRender.SVG_DIM
    );
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
      R6MMainControls.resetPan($mapMains, getResetDimensions);
    }
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
        R6MMainControls.enableZoom($(map));
      } else {
        $(map).css('display', 'none');
        R6MMainControls.disableZoom($(map));
      }
    });

    R6MMainControls.resetPan($mapMains, getResetDimensions);
    R6MMainControls.resetZoom($mapMains, getResetDimensions);

    showSelectedFloor();
  };

  var setPageElements = function setPageElements() {
    $mapPanelWrappers = $('#map-panel-wrapper');
    $navLogo = $('#nav-logo');
    $body = $('body');
    $mainNav = $('#main-nav');
  };

  var setupEvents = function setupEvents() {
    R6MMainControls.setMapChangeEvent(handleMapChange);
    R6MMainControls.setFloorsChangeEventAndHotkeys(handleFloorChange, showSelectedFloor);
    R6MMainControls.setMapPanelChangeEvent(handleMapPanelCountChange);
    R6MMainControls.MAP_LAYER.forEach(function(layer) {
      R6MMainControls.setMenuCheckboxChangeEvent(layer.short, saveOption);
    });
    R6MMainControls.setMenuCheckboxChangeEvent('lp', saveOption);
    R6MMainControls.setMenuSelectMapClickEvent(showSelectMap, closeMenu);
    R6MMainControls.setMenuFullScreenClickEvent();

    $(window).on('orientationchange', function() {
      R6MMainControls.resetPan($mapMains, getResetDimensions);
      R6MMainControls.resetZoom($mapMains, getResetDimensions);
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

    R6MMainControls.getMenuHTML();

    $('#mmenu-menu').mmenu({
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
    var floorsMinMaxIndexes = R6MMainControls.getMinMaxFloor();

    R6MMainRender.showFloor(
      R6MMainControls.getSelectedFloor(),
      $mapPanelWrappers,
      $mapWrappers,
      floorsMinMaxIndexes.min,
      floorsMinMaxIndexes.max
    );
  };

  var switchToMap = function switchToMap(mapArg) {
    if (R6MMainControls.setSelectedMap(mapArg)) {
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

  var tryLoadMenuOption = function tryLoadDisplayption(key) {
    var menuOption = localStorage.getItem(key);

    if (menuOption !== null) {
      R6MMainControls.setMenuCheckboxOption(key, menuOption);
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
    R6MMainControls.setSelectedMapPanel(mapPanelCount);
    setMapPanelCount(mapPanelCount);
  };

  var tryLoadMenuOptions = function tryLoadMenuOptions() {
    tryLoadMapPanelCount();
    R6MMainControls.MAP_LAYER.forEach(function(layer) {
      tryLoadMenuOption(layer.short);
    });
    tryLoadMenuOption('lp');
  };

  var trySelectBookmarkedMap = function trySelectBookmarkedMap() {
    var hashArgs = getHashArgs(),
      mapArg = hashArgs[0];

    return R6MMainControls.setSelectedMap(mapArg);
  };

  var trySelectBookmarkedFloor = function trySelectBookmarkedFloor() {
    var hashArgs = getHashArgs(),
      floorArg = hashArgs[1];

    if (R6MMainControls.setSelectedFloor(floorArg)) {
      showSelectedFloor();
    }
  };

  var updateUrl = function updateUrl() {
    if (isShowingMap()) {
      var hashText = '';

      hashText += '' + R6MMainControls.getSelectedMap();
      hashText += HASH_SPLIT_CHAR + R6MMainControls.getSelectedFloor();
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
