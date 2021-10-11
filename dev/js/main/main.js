'use strict';

(function(pagecode) { //eslint-disable-line wrap-iife
  pagecode(window.jQuery, window, document, R6MMainData, R6MMainRender, R6MMainControls, R6MMainDrawing, R6MMainMapSelectionGrid);
}(function($, window, document, R6MMainData, R6MMainRender, R6MMainControls, R6MMainDrawing, R6MMainMapSelectionGrid, undefined) {
  var $mapContainer,
    $mapPanelsContainer,
    $mapMains,
    $mapElements,
    $mapPanelsLabels,
    $drawingMarkerWrappers,
    $navLogo,
    $body,
    $mainNav,
    SHOW_MAP = 'show-map',
    SHOW_MAP_SELECTION_GRID = 'show-map-selection-grid',
    HASH_SPLIT_CHAR = '/';

  $(function() { // equivanelt to $(document).ready() - but a bit faster
    associatePageVariables();
    R6MMainRender.createMapPanels($mapPanelsContainer, 4);
    associateMapVariables();
    createMenu();
    createMapSelectionGrid();
    R6MMainControls.createMapCombo(R6MMainData.getMapData());
    setPageEvents();
    setMenuOptions();
    R6MMainControls.setPanZoom($mapMains, $mapElements);

    if (setSelectedMapFromBookmark()) {
      loadMap();
      setSelectedFloorFromBookmark();
      showMapContainer();
    } else {
      showMapSelectionGrid();
      document.title = 'R6Calls.com';
    }

    setTimeout(function() {
      $body.removeClass('loading');
    }, 10);
  });

  var associatePageVariables = function associatePageVariables() {
    $mapPanelsContainer = $('#map-panels-container');
    $navLogo = $('#nav-logo');
    $body = $('body');
    $mainNav = $('#main-nav');
  };

  var associateMapVariables = function associateMapVariables() {
    $mapContainer = $('.map-container');
    $mapMains = $mapContainer.find('.map-main');
    $mapElements = $mapMains.find('.map-elements');
    $mapPanelsLabels = $('.map-panel-label');
    $drawingMarkerWrappers = $mapMains.find('.svg-wrapper.drawing-markers');
  };

  var createMenu = function createMenu() {
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

    $menuLink.click(menuClickEvent);
  };

  var createMapSelectionGrid = function createMapSelectionGrid() {
    R6MMainMapSelectionGrid.createMapSelectionGrid(
      $('#map-selection-grid'),
      $('#map-selection-heading'),
      $mainNav,
      R6MMainData.getMapData(),
      showSelectedMap,
      hideMapSelectionGrid
    );
  };

  var setPageEvents = function setPageEvents() {
    R6MMainControls.setMapChangeEvent(mapChangeEvent);
    R6MMainControls.setFloorsChangeEventAndHotkeys(floorChangeEvent, showSelectedFloor);
    R6MMainControls.setMapPanelsCountChangeEvent(setMapPanelsCountChangeEvent);
    R6MMainControls.MAP_LAYERS.forEach(function(layer) {
      R6MMainControls.setMenuCheckboxChangeEvent(layer.short, saveOption);
    });
    R6MMainControls.setMenuCheckboxChangeEvent('lp', saveOption);
    R6MMainControls.setMenuSelectMapClickEvent(showMapSelectionGrid, closeMenu);
    R6MMainControls.setMenuFullScreenClickEvent();

    $(window).on('orientationchange', function() {
      R6MMainControls.resetPan($mapMains, getResetDimensions);
      R6MMainControls.resetZoom($mapMains, getResetDimensions);
    });
    $navLogo.on('click', toggleShowSelectMap);
  };

  var setMenuOptions = function setMenuOptions() {
    loadMapPanelCount();
    R6MMainControls.MAP_LAYERS.forEach(function(layer) {
      setMenuCheckboxOption(layer.short);
    });
    setMenuCheckboxOption('lp');
  };

  var loadMap = function loadMap() {
    var mapName = R6MMainControls.getSelectedMap(),
      mapData = R6MMainData.getMapData();

    R6MMainControls.getFloorButtonsHTML(mapData[mapName].floors);
    R6MMainRender.getMapHTML(mapData[mapName], $mapElements, $mapPanelsLabels);

    R6MMainControls.resetPan($mapMains, getResetDimensions);
    R6MMainControls.resetZoom($mapMains, getResetDimensions);

    showSelectedFloor();

    setLoadedMapKey(mapName);
    $navLogo.addClass('enabled');
    setTitle();

    var svgMaps = document.getElementsByClassName('svgMap'),
      i;

    for (i = 0; i < svgMaps.length; i++) {
      svgMaps[i].onload = function() {
        setBackgroundTopLeft();
        setLayerDisplays();
        setFloorDisplay();
      };
    }

    R6MMainDrawing.setup(
      $mapMains,
      $drawingMarkerWrappers,
      R6MMainRender.SVG_DIM
    );
  };

  var setBackgroundTopLeft = function setBackgroundTopLeft() {
    R6MMainControls.setBackgroundTopLeft();
  };

  var setLayerDisplays = function setLayerDisplays() {
    R6MMainControls.MAP_LAYERS.forEach(function(layer) {
      R6MMainControls.setLayerDisplay(layer.short);
    });
  };

  var setFloorDisplay = function setFloorDisplay() {
    R6MMainControls.setFoorDisplay(R6MMainControls.getSelectedFloor());
  };

  var isMapLoaded = function isMapLoaded() {
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

  var getLoadedMap = function getLoadedMap() {
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
      panelWidth = $mapContainer.width(),
      panelHeight = $mapContainer.height(),
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

  var floorChangeEvent = function floorChangeEvent() {
    showSelectedFloor();
    setPageURL();
    R6MMainDrawing.refreshPings(); // hacky drawing module for now
  };

  var mapChangeEvent = function mapChangeEvent() {
    loadMap();
    setPageURL();
  };

  var setMapPanelsCountChangeEvent = function setMapPanelsCountChangeEvent(mapPanelsCount) {
    setMapPanelsCount(mapPanelsCount);
    setFloorDisplay();
  };

  var menuClickEvent = function menuClickEvent(e) {
    var menuApi = getMenuApi();

    e.preventDefault();
    menuApi.open();
  };

  var localStorageSetItem = function localStorageSetItem(index, value) {
    try {
      localStorage.setItem(index, value);
    } catch (e) {
      //guarding against safari in private browsing mode
    }
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

  var setLoadedMapKey = function setLoadedMapKey(mapName) {
    $body.attr('loaded-map', mapName);
  };

  var setMapPanelsCount = function setMapPanelsCount(mapPanelsCount) {
    localStorageSetItem('mappanelscount', mapPanelsCount);
    $mapPanelsContainer.attr('map-panels-count', mapPanelsCount);

    $.each($mapMains, function (index, map) {
      if (index < mapPanelsCount) {
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

  var showMapSelectionGrid = function showMapSelectionGrid() {
    $body.removeClass(SHOW_MAP);
    $body.addClass(SHOW_MAP_SELECTION_GRID);
    setPageURL();
    setTitle();
  };

  var showMapContainer = function showMapContainer() {
    $body.removeClass(SHOW_MAP_SELECTION_GRID);
    $body.addClass(SHOW_MAP);
    setPageURL();
    setTitle();
  };

  var showSelectedFloor =  function showSelectedFloor() {
    var floorsMinMaxIndexes = R6MMainControls.getMinMaxFloor();

    R6MMainRender.showFloor(
      R6MMainControls.getSelectedFloor(),
      $mapPanelsContainer,
      $mapContainer,
      floorsMinMaxIndexes.min,
      floorsMinMaxIndexes.max
    );
  };

  var showSelectedMap = function showSelectedMap(mapName) {
    if (R6MMainControls.setSelectedMap(mapName)) {
      hideMapSelectionGrid();
      setTimeout(function() {
        loadMap();
        showMapContainer();
      },1);
    }
  };

  var toggleShowSelectMap = function toggleShowSelectMap(event) {
    var menuApi = getMenuApi();

    event.preventDefault();
    if (isShowingMap()) {
      showMapSelectionGrid();
      menuApi.close();
    } else if (isMapLoaded()) {
      showMapContainer();
      menuApi.close();
    }
  };

  var hideMapSelectionGrid = function hideMapSelectionGrid() {
    if (isMapLoaded()) {
      showMapContainer();
    }
  };

  var setMenuCheckboxOption = function setMenuCheckboxOption(key) {
    var menuOption = localStorage.getItem(key);

    if (menuOption !== null) {
      R6MMainControls.setMenuCheckboxOption(key, menuOption);
    }
  };

  var loadMapPanelCount = function loadMapPanelCount() {
    var mapPanelsCount = localStorage.getItem('mappanelscount');

    if (!mapPanelsCount) {
      var $window = $(window);

      mapPanelsCount = (
        ($window.width() > 1000) || ($window.height() > 1000)
      ) ? 2 : 1;
    }
    R6MMainControls.setSelectedMapPanel(mapPanelsCount);
    setMapPanelsCount(mapPanelsCount);
  };

  var setSelectedMapFromBookmark = function setSelectedMapFromBookmark() {
    var hashArgs = getHashArgs(),
      mapName = hashArgs[0];

    return R6MMainControls.setSelectedMap(mapName);
  };

  var setSelectedFloorFromBookmark = function setSelectedFloorFromBookmark() {
    var hashArgs = getHashArgs(),
      floorArg = hashArgs[1];

    if (R6MMainControls.setSelectedFloor(floorArg)) {
      showSelectedFloor();
    }
  };

  var setPageURL = function setPageURL() {
    if (isShowingMap()) {
      var hashText = '';

      hashText += '' + R6MMainControls.getSelectedMap();
      hashText += HASH_SPLIT_CHAR + R6MMainControls.getSelectedFloor();
      window.location.hash = hashText;
    } else {
      removeHashFromUrl();
    }
  };

  var setTitle = function setTitle() {
    document.title = isShowingMap() ?
      'R6Calls.com - {mapName}'.replace(
        '{mapName}',
        R6MMainData.getMapData()[getLoadedMap()].name
      ) :
      'R6Calls.com - Select a map';
  };
}));
