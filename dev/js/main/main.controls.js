'use strict';

var R6MMainControls = (function($, window, document, undefined) {
  var $mapControl = $('#map-control'),
    $floorControl = $('#floor-control'),
    $zoomControl = $('#zoom-range'),
    $menuControl = $('#mmenu-link'),
    $mapPanelsCountControl,
    $fullScreenControl,
    $menuMapSelectionControl,
    $menuPanel = $('#menu-panel'),
    SELECTED_CLASS = 'selected',
    ZOOMED_IN_FAR_CLASS = 'zoomed-in-far',
    ZOOMED_OUT_FAR_CLASS = 'zoomed-out-far',
    MAP_LAYERS = [
      {short: 'bmb', full: 'Bomb'},
      {short: 'sec', full: 'Secure'},
      {short: 'hst', full: 'Hostage'},
      {short: 'fh', full: 'Floor hatch'},
      {short: 'ch', full: 'Ceiling hatch'},
      {short: 'bw', full: 'Breakable wall'},
      {short: 'losf', full: 'Line of sight floor'},
      {short: 'sl', full: 'Skylight'},
      {short: 'dt', full: 'Drone tunnel'},
      {short: 'cam', full: 'Security camera'},
      {short: 'ld', full: 'Ladder'},
      {short: 'ip', full: 'Insertion point'},
      {short: 'txt', full: 'Label'},
      {short: 'cmp', full: 'Compass'},
      {short: 'lg', full: 'Legend'}
    ];

  var disableFullScreen = function disableFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  var enableFullScreen = function enableFunctionScreen() {
    var rootEl = document.documentElement;

    if (rootEl.requestFullscreen) {
      rootEl.requestFullscreen();
    } else if (rootEl.webkitRequestFullscreen) {
      rootEl.webkitRequestFullscreen();
    } else if (rootEl.webkitEnterFullscreen) {
      rootEl.webkitEnterFullscreen();
    } else if (rootEl.mozRequestFullScreen) {
      rootEl.mozRequestFullScreen();
    } else if (rootEl.msRequestFullscreen) {
      rootEl.msRequestFullscreen();
    }
  };

  var getSelectedFloor = function getSelectedFloor() {
    return $floorControl.find('.selected').data('index');
  };

  var getMinMaxFloor = function getMinMaxFloor() { // TO DO CHANGE TO MAX FLOOR INDEX
    var $floorInputs = $floorControl.find('button');

    return {
      min: $($floorInputs[0]).data('index'),
      max: $($floorInputs[$floorInputs.length - 1]).data('index')
    };
  };

  var getFloorButtonsHTML = function getFloorButtonsHTML(floors) {
    var buttonsAsString = '',
      classes = '',
      tooltip = '',
      initalFloor = getSelectedFloor();

    floors.forEach(function(floor) {
      // allows to have a bg image that can't be selected as a "floor"
      if (floor.dontSelect) {
        return;
      }
      classes = '';
      classes += (floor.default) ? SELECTED_CLASS : '';
      tooltip = getFloorTooltip(floor.index);
      buttonsAsString += '<button data-index="' + floor.index + '" class="' + classes + '" title="' + tooltip + '">';
      buttonsAsString += '<span class="short">' + floor.name.short + '</span>';
      buttonsAsString += '<span class="full">' + floor.name.full + '</span>';
      buttonsAsString += '</button>';
    });
    $floorControl.html(buttonsAsString);
    setSelectedFloor(initalFloor);
  };

  var setFloorsChangeEventAndHotkeys = function setFloorsChangeEventAndHotkeys(handleChangeCallback, showSelectedFloorFn) {
    setupFloorChangeEvent(handleChangeCallback);
    setupFloorHotkeys(showSelectedFloorFn);
  };

  var setSelectedFloor = function setSelectedFloor(floorIndex) {
    var $selectedFloor = $floorControl.find("[data-index='" + floorIndex + "']");

    if ($selectedFloor.length) {
      resetSelectedFloor();
      $selectedFloor.addClass(SELECTED_CLASS);
      $selectedFloor.trigger('click');
      return true;
    }
    return false;
  };

  var getFloorTooltip = function getFloorTooltip(floorIndex) {
    var shortcutTip = 'Shortcut: {shortcut}';

    if (floorIndex == 0) {
      return shortcutTip.replace('{shortcut}',"'0' or '~'");
    } else {
      return shortcutTip.replace('{shortcut}',floorIndex);
    }
  };

  var getHandleHotkeyFn = function getHandleHotkeyFn(showSelectedFloorFn) {
    return function handleHotKey(e) {
      var keyCode = e.which;

      if (keyCode >= 48 && keyCode <= 53) {  // '0' through '1'
        if (setSelectedFloor(keyCode - 48)) {
          showSelectedFloorFn();
        }
      } else if (keyCode == 192) { // '`'
        if (setSelectedFloor(0)) {
          showSelectedFloorFn();
        }
      }
    };
  };


  var getHandlePanZoomChangeFn = function getHandlePanZoomChangeFn($mapMains) {
    return function handlePanZoomChange(event, panzoom, transform) {
      if (getDisplayValue('lfa')) {
        $mapMains.each(function(index, map) {
          if (map !== event.target) {
            $(map).panzoom('pan', transform[4], transform[5], {silent: true});
          }
        });
      }
    };
  };

  var getHandleZoomChangeFn = function getHandleZoomChangeFn($mapElements) {
    return function handleZoomChange() {
      var zoomVal = $zoomControl.val();

      if ( zoomVal > 1.6) {
        $mapElements.addClass(ZOOMED_IN_FAR_CLASS);
      } else if ( zoomVal < 0.4 ) {
        $mapElements.addClass(ZOOMED_OUT_FAR_CLASS);
      } else {
        $mapElements.removeClass(ZOOMED_IN_FAR_CLASS);
        $mapElements.removeClass(ZOOMED_OUT_FAR_CLASS);
      }
    };
  };

  var getDisplayValue = function getDisplayValue(key) {
    return $('#option-' + key).is(':checked');
  };

  var getMenuR6MapsHtml = function getMenuR6MapsHtml() {
    var html = '';

    html += '<div class="mmenu-custom-panel">';
    html += '<h2>r6calls.com</h2>';
    html += '<button id="menu-map-selection">Select a map</button>';
    html += '<br>';
    if (isFullScreenAvailable()) {
      html += '<button href="" id="full-screen">Full screen</button>';
      html += '<br>';
    }
    html += '<a class="menu-item" id="menu-about" href="about/about.html">About</a>';
    html += '</div>';
    return html;
  };

  var getMenuOptionsHtml = function getMenuOptionsHtml() {
    var html = '';

    html += '<div id="options-wrapper" class="mmenu-custom-panel">';
    html += '<h2>Options</h2>';

    html += '<div class="map-panels-count-control">';
    html += '<label>Number of floors to display:</label>';
    html += '<select id="map-pane-count">';
    html += '<option value="1">1 - Full</option>';
    html += '<option value="2">2 - Split</option>';
    html += '<option value="4">4 - Grid</option>';
    html += '</select>';

    html += '<div id="lock-container">';
    html += '<div class="checkbox-wrapper">';
    html += '<input type="checkbox" checked="checked" id="option-lfa">Lock floor alignment</input>';
    html += '</div>';
    html += '</div>';

    html += '</div>';

    html += '<label>Elements to display:</label>';
    html += '<div class="checkbox-wrapper">';
    MAP_LAYERS.forEach(function(layer) {
      html += '<div class="checkbox-item">';
      html += '<img class="legend-icon" src="./img/legend/' + layer.short + '.png"><input type="checkbox" checked="checked" id="option-' + layer.short + '">' + layer.full + '</input><br>';
      html += '</div>';
    });
    html += '</div>';

    html += '</div>';

    return html;
  };

  var handlePanZoomEnd = function handlePanZoomEnd() {
    $zoomControl.trigger('input');
  };

  var isCurrentlyFullScreen = function isCurrentlyFullScreen() {
    return (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.webkitCurrentFullScreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    );
  };

  var isFullScreenAvailable = function isFullScreenAvailable() {
    return (
      document.fullscreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.webkitCancelFullScreen ||
      document.mozFullScreenEnabled ||
      document.msFullscreenEnabled
    );
  };

  var setMapChangeEvent = function setMapChangeEvent(callback) {
    $mapControl.on('change', callback);
  };

  var setMapPanelsCountChangeEvent = function setMapPanelsCountChangeEvent(callback) {
    $mapPanelsCountControl.on('change', function(event) {
      var mapPanelsCount = $mapPanelsCountControl.val();

      showLockControls(mapPanelsCount);
      callback(mapPanelsCount);
    });
  };

  var getSelectedMap = function getSelectedMap() {
    return $mapControl.val();
  };

  var createMapCombo = function createMapCombo(mapData) {
    var optionsAsString = '',
      maps = [],
      mapName = getSelectedMap();

    for (var mapKey in mapData) {
      if (mapData.hasOwnProperty(mapKey)) {
        maps.push({ key: mapKey, name: mapData[mapKey].name });
      }
    }

    maps.sort(function(a,b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    maps.forEach(function(map) {
      optionsAsString += '<option value="' + map.key + '">' + map.name + '</option>';
    });

    $mapControl.html(optionsAsString);
    setSelectedMap(mapName);
  };

  var setOption = function setOption($selectEl, optionName) {
    var $option = $selectEl.find('option[value="' + optionName + '"]');

    if ($option.length) {
      $option.prop('selected', true);
      return true;
    }
    return false;
  };

  var setSelectedMap = function setSelectedMap(mapName) {
    return setOption($mapControl, mapName);
  };

  var getMenuHTML = function getMenuHTML() {
    var html = '';

    html += getMenuR6MapsHtml();
    html += getMenuOptionsHtml();
    html += '<div class="faded-logo"></div>';
    $menuPanel.html(html);

    $menuControl.find('.menu-text').html('Menu');
    $mapPanelsCountControl = $('#map-pane-count');
    $fullScreenControl = $('#full-screen');
    $menuMapSelectionControl = $('#menu-map-selection');
  };

  var setMenuFullScreenClickEvent = function setMenuFullScreenClickEvent() {
    if ($fullScreenControl) {
      $fullScreenControl.on('click', toggleFullScreen);
    }
  };

  var setMenuSelectMapClickEvent = function setMenuSelectMapClickEvent(
    showSelectMapCallback,
    closeMenuCallback
  ) {
    $menuMapSelectionControl.on('click', function(event) {
      event.preventDefault();
      showSelectMapCallback();
      closeMenuCallback();
    });
  };

  var resetPan = function resetPan($mapMains, getResetDimensions) {
    var resetDimensions = getResetDimensions();

    $mapMains.panzoom(
      'pan',
      -resetDimensions.centerLeft * resetDimensions.zoomValue,
      -resetDimensions.centerTop * resetDimensions.zoomValue
    );
  };

  var setMapsPositionAndSize = function setMapsPositionAndSize() {
    var i;

    var svgMaps = document.getElementsByClassName('svgMap');

    for (i = 0; i < svgMaps.length; i++) {
      var svgObject = svgMaps[i].getSVGDocument();

      if (svgObject) {
        var mainSVG = svgObject.getElementById('mainSVG');
        var top = -1 * mainSVG.getAttribute('height') / 2;
        var left = -1 * mainSVG.getAttribute('width') / 2;
        var height = mainSVG.getAttribute('height');
        var width = mainSVG.getAttribute('width');

        svgMaps[i].parentElement.style.top = top + 'px';
        svgMaps[i].parentElement.style.left = left + 'px';
        svgMaps[i].parentElement.style.height = height + 'px';
        svgMaps[i].parentElement.style.width = width + 'px';
        svgMaps[i].style.top = top + 'px';
        svgMaps[i].style.left = left + 'px';
        svgMaps[i].style.height = height + 'px';
        svgMaps[i].style.width = width + 'px';
      }
    };
  };

  var removeHidden = function removeHidden(i) {
    var i;
    var svgMaps = document.getElementsByClassName('svgMap');

    for (i = 0; i < svgMaps.length; i++) {
      svgMaps[i].style.visibility = 'visible';
    };
  };

  var setLayerDisplay = function setLayerDisplay(key) {
    var visible = getDisplayValue(key),
      i, j;
    var svgMaps = document.getElementsByClassName('svgMap');

    for (i = 0; i < svgMaps.length; i++) {
      var svgObject = svgMaps[i].getSVGDocument();

      if (svgObject) {
        for (j = -2; j < 5; j++) {
          var layer = svgObject.getElementById(j + '-' + key);

          if (j == -2 ) {
            layer = svgObject.getElementById('bg-' + key);
          }
          if (layer) {
            if (visible) {
              layer.style.display = 'inline';
            } else {
              layer.style.display = 'none';
            }
          }
        }
      }
    };
  };

  var setFoorDisplay = function setFoorDisplay(floorNumber) {
    var minMaxFloor = getMinMaxFloor(),
      svgMaps = document.getElementsByClassName('svgMap'),
      selectedFloorNumber = floorNumber,
      currentFloor,
      i,
      j;

    var mapPanelsCount = $('#map-panels-container').attr('map-panels-count');

    if (mapPanelsCount > 2)  {
      selectedFloorNumber = Math.max(minMaxFloor.min, selectedFloorNumber - 1);
    }
    var tempMinIndex = Math.max(minMaxFloor.min, minMaxFloor.max - mapPanelsCount + 1),
      currentFloor = Math.min(tempMinIndex, selectedFloorNumber);

    for (i = 0; i < svgMaps.length; i++) {
      var svgObject = svgMaps[i].getSVGDocument();

      if (svgObject) {
        for (j = -1; j < 6; j++) {
          var layer = svgObject.getElementById('Floor ' + j);

          if (layer) {
            if (j == currentFloor) {
              layer.style.display = 'inline';
            } else {
              layer.style.display = 'none';
            }
          }
        }
      }
      currentFloor++;
    };
  };

  var setMenuCheckboxOption = function setMenuCheckboxOption(key, isChecked) {
    var boolValue = (isChecked === 'true') ? true : false;

    $('#option-' + key).prop('checked', boolValue);
  };

  var setMenuCheckboxChangeEvent = function setMenuCheckboxChangeEvent(key, callback) {
    $('#option-' + key).change(function(e) {
      setLayerDisplay(key);
      callback(key, getDisplayValue(key));
    });
  };

  var resetSelectedFloor = function resetSelectedFloor() {
    $floorControl.find('.' + SELECTED_CLASS + '').removeClass(SELECTED_CLASS);
  };

  var setupFloorChangeEvent = function setupFloorChangeEvent(callback) {
    $floorControl.on('click', 'button', function(e) {
      var floorButton =  (e.target.tagName == 'SPAN')
        ? $(e.target).parent()
        : $(e.target);

      resetSelectedFloor();
      floorButton.addClass(SELECTED_CLASS);
      setFoorDisplay(e.currentTarget.getAttribute('data-index'));
      callback();
    });
  };

  var setupFloorHotkeys = function setupFloorHotkeys(showSelectedFloorFn) {
    $(document).on('keydown', getHandleHotkeyFn(showSelectedFloorFn));
  };

  var setPanZoom = function setPanZoom($mapMains, $mapElements) {
    $mapMains.panzoom({
      $zoomRange: $zoomControl,
      minScale: 0.3,
      maxScale: 2.5
    });

    $mapMains.on('mousewheel', function(event) {
      $zoomControl.val(+$zoomControl.val() + (event.deltaY * 0.06));
      $zoomControl.trigger('input');
    });

    $zoomControl.on('change', getHandleZoomChangeFn($mapElements));
    $zoomControl.on('input', getHandleZoomChangeFn($mapElements));

    $mapMains.on('touchstart','a', function(e) {
      $(this).addClass('hover');
    });

    $mapMains.on('touchend','a', function(e) {
      $(this).removeClass('hover');
      this.click();
    });

    $mapMains.on('panzoomchange', getHandlePanZoomChangeFn($mapMains));
    $mapMains.on('panzoomend', handlePanZoomEnd);
  };

  var toggleFullScreen = function toggleFullScreen() {
    if (isCurrentlyFullScreen()) {
      disableFullScreen();
    } else {
      enableFullScreen();
    }
  };

  var setSelectedMapPanel = function setSelectedMapPanel(number) {
    var result = setOption($mapPanelsCountControl, number);

    $mapPanelsCountControl.trigger('change');
    return result;
  };

  var showLockControls = function showLockControls(panelsCount) {
    var $lockWrapper = $('#lock-container');

    if (panelsCount > 1) {
      $lockWrapper.show(600);
    } else {
      $lockWrapper.hide(600);
    }
  };

  var disableZoom = function disableZoom($mapElements) {
    $mapElements.panzoom('disable');
  };

  var enableZoom = function enableZoom($mapElements) {
    $mapElements.panzoom('enable');
  };

  var isZoomed = function isZoomed() {
    return ($zoomControl.val() != 1);
  };

  var resetZoom = function resetZoom($mapMains, getResetDimensions) {
    var resetDimensions = getResetDimensions();

    $zoomControl.val(resetDimensions.zoomValue);
    $zoomControl.trigger('input');
  };

  return  {
    // floor
    getSelectedFloor: getSelectedFloor,
    getMinMaxFloor: getMinMaxFloor,
    getFloorButtonsHTML: getFloorButtonsHTML,
    setFloorsChangeEventAndHotkeys: setFloorsChangeEventAndHotkeys,
    setSelectedFloor: setSelectedFloor,
    // mapPanel
    setMapPanelsCountChangeEvent: setMapPanelsCountChangeEvent,
    setSelectedMapPanel: setSelectedMapPanel,
    // map
    getSelectedMap: getSelectedMap,
    createMapCombo: createMapCombo,
    setMapChangeEvent: setMapChangeEvent,
    setSelectedMap: setSelectedMap,
    // menu
    getMenuHTML: getMenuHTML,
    setMenuFullScreenClickEvent: setMenuFullScreenClickEvent,
    setMenuSelectMapClickEvent: setMenuSelectMapClickEvent,
    setMenuCheckboxOption: setMenuCheckboxOption,
    setMenuCheckboxChangeEvent: setMenuCheckboxChangeEvent,
    // display
    setLayerDisplay: setLayerDisplay,
    setFoorDisplay: setFoorDisplay,
    setMapsPositionAndSize: setMapsPositionAndSize,
    removeHidden: removeHidden,
    MAP_LAYERS: MAP_LAYERS,
    // pan
    resetPan: resetPan,
    // zoom
    disableZoom: disableZoom,
    enableZoom: enableZoom,
    isZoomed: isZoomed,
    resetZoom: resetZoom,
    setPanZoom: setPanZoom
  };
})(window.jQuery, window, document);
