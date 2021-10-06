'use strict';

var R6MMainControls = (function($, window, document, undefined) {
  var $mapControl = $('#map-control'),
    $objectiveControl = $('#objective-control'),
    $floorControl = $('#floor-control'),
    $zoomControl = $('#zoom-range'),
    $menuControl = $('#mmenu-link'),
    $lockPanningControl,
    $displayBombControl,
    $displaySecureControl,
    $displayHostageControl,
    $displayFloorHatchControl,
    $displayCeilingHatchControl,
    $displayBreakableWallControl,
    $displayLineOfSightWallControl,
    $displayDroneTunnelControl,
    $displayLineOfSightFloorControl,
    $displayInsertionPointControl,
    $displaySecurityCameraControl,
    $displaySkylightControl,
    $displayLadderControl,
    $displayCompassControl,
    $mapPanelCountControl,
    $fullScreenControl,
    $menuSelectMapsControl,
    $menuPanel = $('#menu-panel'),
    SELECTED_CLASS = 'selected',
    ZOOMED_IN_FAR_CLASS = 'zoomed-in-far',
    ZOOMED_OUT_FAR_CLASS = 'zoomed-out-far',
    CSS_TRANSITION_MS = 1800; // currently in highlighted-item mixin for .highlighted-item-in-transition

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

  var floorsGetCurrentIndex = function floorsGetCurrentIndex() {
    return $floorControl.find('.selected').data('index');
  };

  var floorsGetMinAndMaxIndex = function floorsGetMinAndMaxIndex() { // TO DO CHANGE TO MAX FLOOR INDEX
    var $floorInputs = $floorControl.find('button');

    return {
      min: $($floorInputs[0]).data('index'),
      max: $($floorInputs[$floorInputs.length - 1]).data('index')
    };
  };

  var floorsPopulate = function floorsPopulate(floors) {
    var buttonsAsString = '',
      classes = '',
      tooltip = '',
      initalFloor = floorsGetCurrentIndex();

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
    floorsTrySelect(initalFloor);
  };

  var floorsSetup = function floorsSetup(handleChangeCallback, showSelectedFloorFn) {
    setupFloorChangeEvent(handleChangeCallback);
    setupFloorHotkeys(showSelectedFloorFn);
  };

  var floorsTrySelect = function floorsTrySelect(floorIndex) {
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
      var keyVal = e.key;

      if (keyCode >= 48 && keyCode <= 53) {  // '0' through '1'
        if (floorsTrySelect(keyCode - 48)) {
          showSelectedFloorFn();
        }
      } else if (keyCode == 192) { // '`'
        if (floorsTrySelect(0)) {
          showSelectedFloorFn();
        }
      }
    };
  };


  var getHandlePanZoomChangeFn = function getHandlePanZoomChangeFn($mapMains) {
    return function handlePanZoomChange(event, panzoom, transform) {
      if (getDisplayValue('lp')) {
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
    switch (key) {
    case 'bmb':
      return $displayBombControl.is(':checked');
    case 'sec':
      return $displaySecureControl.is(':checked');
    case 'hst':
      return $displayHostageControl.is(':checked');
    case 'fh':
      return $displayFloorHatchControl.is(':checked');
    case 'ch':
      return $displayCeilingHatchControl.is(':checked');
    case 'bw':
      return $displayBreakableWallControl.is(':checked');
    case 'losw':
      return $displayLineOfSightWallControl.is(':checked');
    case 'dt':
      return $displayDroneTunnelControl.is(':checked');
    case 'losf':
      return $displayLineOfSightFloorControl.is(':checked');
    case 'ip':
      return $displayInsertionPointControl.is(':checked');
    case 'cam':
      return $displaySecurityCameraControl.is(':checked');
    case 'sl':
      return $displaySkylightControl.is(':checked');
    case 'lad':
      return $displayLadderControl.is(':checked');
    case 'cmp':
      return $displayCompassControl.is(':checked');
    case 'lp':
      return $lockPanningControl.is(':checked');
    default:
      return false;
    }
  };

  var getMenuOptionsHtml = function getMenuOptionsHtml() {
    var html = '';

    html += '<div id="options-wrapper" class="mmenu-custom-panel">';
    html += '<h2>Options</h2>';

    html += '<div class="map-panel-count-control">';
    html += '<label>Number of floors to display</label>';
    html += '<select id="map-pane-count">';
    html += '<option value="1">1 - Full</option>';
    html += '<option value="2">2 - Split</option>';
    html += '<option value="4">4 - Grid</option>';
    html += '</select>';

    html += '<div id="lock-wrapper">';
    html += '<div class="checkbox-wrapper">';
    html += '<input type="checkbox" checked="checked" id="lock-panning">Lock panning</input>';
    html += '</div>';
    html += '</div>';

    html += '</div>';

    html += '<label>Elements to display</label>';
    html += '<div class="checkbox-wrapper">';
    html += '<input type="checkbox" checked="checked" id="display-bomb">Bomb</input><br>';
    html += '<input type="checkbox" checked="checked" id="display-secure">Secure</input><br>';
    html += '<input type="checkbox" checked="checked" id="display-hostage">Hostage</input><br>';
    html += '<input type="checkbox" checked="checked" id="display-floor-hatch">Floor hatch</input><br>';
    html += '<input type="checkbox" checked="checked" id="display-ceiling-hatch">Ceiling hatch</input><br>';
    html += '<input type="checkbox" checked="checked" id="display-breakable-wall">Breakable wall</input><br>';
    html += '<input type="checkbox" checked="checked" id="display-line-of-sight-wall">Line of sight or half wall</input><br>';
    html += '<input type="checkbox" checked="checked" id="display-drone-tunnel">Drone tunnel</input><br>';
    html += '<input type="checkbox" checked="checked" id="display-line-of-sight-floor">Line of sight floor</input><br>';
    html += '<input type="checkbox" checked="checked" id="display-insertion-point">Insertion point</input><br>';
    html += '<input type="checkbox" checked="checked" id="display-security-camera">Security camera</input><br>';
    html += '<input type="checkbox" checked="checked" id="display-skylight">Skylight</input><br>';
    html += '<input type="checkbox" checked="checked" id="display-ladder">Ladder</input><br>';
    html += '<input type="checkbox" checked="checked" id="display-compass">Compass</input><br>';
    html += '</div>';

    html += '</div>';

    return html;
  };

  var getMenuR6MapsHtml = function getMenuR6MapsHtml() {
    var html = '',
      legendItems,
      CSS_ABBREV = 'legend-';

    html += '<div class="mmenu-custom-panel">';
    html += '<h2>r6calls.com</h2>';
    html += '<button id="menu-select-maps">Select a map</button>';
    html += '<a class="menu-item" id="menu-about" href="about/about.html">About</a>';
    if (isFullScreenAvailable()) {
      html += '<button href="" id="full-screen">Full screen</button>';
    }
    legendItems = [
      { class: CSS_ABBREV + 'floor-hatch', description: 'Floor hatch' },
      { class: CSS_ABBREV + 'ceiling-hatch', description: 'Ceiling hatch' },
      { class: CSS_ABBREV + 'breakable-walls', description: 'Breakable wall' },
      { class: CSS_ABBREV + 'line-of-sight-walls', description: 'Line of sight or half wall' },
      { class: CSS_ABBREV + 'drone-tunnels', description: 'Drone tunnel' },
      { class: CSS_ABBREV + 'lineof-sight-floors', description: 'Line of sight floor' },
      { class: CSS_ABBREV + 'insertion-point', description: 'Insertion point' },
      { class: CSS_ABBREV + 'skylight', description: 'Skylight' },
      { class: CSS_ABBREV + 'bomb', description: 'Bomb site' },
      { class: CSS_ABBREV + 'security-camera', description: 'Security camera' },
      { class: CSS_ABBREV + 'secure', description: 'Secure site' },
      { class: CSS_ABBREV + 'ladder', description: 'Ladder' },
      { class: CSS_ABBREV + 'hostage', description: 'Hostage site' }
    ];
    html += '<label>Legend</label>';
    html += '<ul id="legend"; style="height: 217px;width: 462px; position: relative">';
    legendItems.forEach(function(item) {
      html += '<li class="' + item.class + '">' + item.description + '</li>';
    });
    html += '</ul>';

    html += '</div>';
    return html;
  };

  var handlePanZoomEnd = function handlePanZoomEnd() {
    $zoomControl.trigger('input');
  };

  var highlightControl = function highlightControl($el) {
    $el.addClass('highlighted-item');
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

  var mapsSetupChangeEvent = function mapsSetupChangeEvent(callback) {
    $mapControl.on('change', callback);
  };

  var mapPanelsSetupChangeEvent = function mapPanelsSetupChangeEvent(callback) {
    $mapPanelCountControl.on('change', function(event) {
      var panelCount = $mapPanelCountControl.val();

      tryShowLockControls(panelCount);
      callback(panelCount);
    });
  };

  var mapsGetCurrentlySelected = function mapsGetCurrentlySelected() {
    return $mapControl.val();
  };

  var mapsPopulateOptions = function mapsPopulateOptions(mapData) {
    var optionsAsString = '',
      maps = [],
      currentMap = mapsGetCurrentlySelected();

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
    mapsTrySelect(currentMap);
  };

  var mapsTrySelect = function mapsTrySelect(map) {
    return R6MHelpers.trySelectOption($mapControl, map);
  };

  var menuSetup = function menuSetup() {
    var html = '';

    html += getMenuR6MapsHtml();
    html += getMenuOptionsHtml();
    html += '<div class="faded-logo"></div>';
    $menuPanel.html(html);

    $menuControl.find('.menu-text').html('Menu');
    $displayBombControl = $('#display-bomb');
    $displaySecureControl = $('#display-secure');
    $displayHostageControl = $('#display-hostage');
    $displayFloorHatchControl = $('#display-floor-hatch');
    $displayCeilingHatchControl = $('#display-ceiling-hatch');
    $displayBreakableWallControl = $('#display-breakable-wall');
    $displayLineOfSightWallControl = $('#display-line-of-sight-wall');
    $displayDroneTunnelControl = $('#display-drone-tunnel');
    $displayLineOfSightFloorControl = $('#display-line-of-sight-floor');
    $displayInsertionPointControl = $('#display-insertion-point');
    $displaySecurityCameraControl = $('#display-security-camera');
    $displaySkylightControl = $('#display-skylight');
    $displayLadderControl = $('#display-ladder');
    $displayCompassControl = $('#display-compass');
    $mapPanelCountControl = $('#map-pane-count');
    $lockPanningControl = $('#lock-panning');
    $fullScreenControl = $('#full-screen');
    $menuSelectMapsControl = $('#menu-select-maps');
  };

  var menuSetupFullScreen = function menuSetupFullScreen() {
    if ($fullScreenControl) {
      $fullScreenControl.on('click', toggleFullScreen);
    }
  };

  var menuSetupSelectMaps = function menuSetupSelectMaps(
    showSelectMapCallback,
    closeMenuCallback
  ) {
    $menuSelectMapsControl.on('click', function(event) {
      event.preventDefault();
      showSelectMapCallback();
      closeMenuCallback();
    });
  };

  var panReset = function panReset($mapMains, getResetDimensions) {
    var resetDimensions = getResetDimensions();

    $mapMains.panzoom(
      'pan',
      -resetDimensions.centerLeft * resetDimensions.zoomValue,
      -resetDimensions.centerTop * resetDimensions.zoomValue
    );
  };

  var setLayerDisplay = function setLayerDisplay(key) {
    var visible = getDisplayValue(key),
      x = document.getElementsByClassName(key),
      i;

    for (i = 0; i < x.length; i++) {
      if (visible) {
        x[i].hidden = false;
      } else {
        x[i].hidden = true;
      }
    }
  };

  var setDisplayOption = function setDisplayOption(key, isChecked) {
    var boolValue = (isChecked === 'true') ? true : false;

    setLayerDisplay(key);
    switch (key) {
    case 'bmb':
      $displayBombControl.prop('checked', boolValue);
      break;
    case 'sec':
      $displaySecureControl.prop('checked', boolValue);
      break;
    case 'hst':
      $displayHostageControl.prop('checked', boolValue);
      break;
    case 'fh':
      $displayFloorHatchControl.prop('checked', boolValue);
      break;
    case 'ch':
      $displayCeilingHatchControl.prop('checked', boolValue);
      break;
    case 'bw':
      $displayBreakableWallControl.prop('checked', boolValue);
      break;
    case 'losw':
      $displayLineOfSightWallControl.prop('checked', boolValue);
      break;
    case 'dt':
      $displayDroneTunnelControl.prop('checked', boolValue);
      break;
    case 'losf':
      $displayLineOfSightFloorControl.prop('checked', boolValue);
      break;
    case 'ip':
      $displayInsertionPointControl.prop('checked', boolValue);
      break;
    case 'cam':
      $displaySecurityCameraControl.prop('checked', boolValue);
      break;
    case 'sl':
      $displaySkylightControl.prop('checked', boolValue);
      break;
    case 'lad':
      $displayLadderControl.prop('checked', boolValue);
      break;
    case 'cmp':
      $displayCompassControl.prop('checked', boolValue);
      break;
    default:
      break;
    }
  };

  var setupDisplayChangeEvent = function setupDisplayChangeEvent(key, callback) {
    switch (key) {
    case 'bmb':
      $displayBombControl.change(function(e) {
        setLayerDisplay(key);
        callback('displaybomb', getDisplayValue(key));
      });
      break;
    case 'sec':
      $displaySecureControl.change(function(e) {
        setLayerDisplay(key);
        callback('displaysecure', getDisplayValue(key));
      });
      break;
    case 'hst':
      $displayHostageControl.change(function(e) {
        setLayerDisplay(key);
        callback('displayhostage', getDisplayValue(key));
      });
      break;
    case 'fh':
      $displayFloorHatchControl.change(function(e) {
        setLayerDisplay(key);
        callback('displayfloorhatch', getDisplayValue(key));
      });
      break;
    case 'ch':
      $displayCeilingHatchControl.change(function(e) {
        setLayerDisplay(key);
        callback('displayceilinghatch', getDisplayValue(key));
      });
      break;
    case 'bw':
      $displayBreakableWallControl.change(function(e) {
        setLayerDisplay(key);
        callback('displaybreakablewall', getDisplayValue(key));
      });
      break;
    case 'losw':
      $displayLineOfSightWallControl.change(function(e) {
        setLayerDisplay(key);
        callback('displaylineofsightwall', getDisplayValue(key));
      });
      break;
    case 'dt':
      $displayDroneTunnelControl.change(function(e) {
        setLayerDisplay(key);
        callback('displaydronetunnel', getDisplayValue(key));
      });
      break;
    case 'losf':
      $displayLineOfSightFloorControl.change(function(e) {
        setLayerDisplay(key);
        callback('displaylineofsightfloor', getDisplayValue(key));
      });
      break;
    case 'ip':
      $displayInsertionPointControl.change(function(e) {
        setLayerDisplay(key);
        callback('displayinsertionpoint', getDisplayValue(key));
      });
      break;
    case 'cam':
      $displaySecurityCameraControl.change(function(e) {
        setLayerDisplay(key);
        callback('displaysecuritycamera', getDisplayValue(key));
      });
      break;
    case 'sl':
      $displaySkylightControl.change(function(e) {
        setLayerDisplay(key);
        callback('displayskylight', getDisplayValue(key));
      });
      break;
    case 'lad':
      $displayLadderControl.change(function(e) {
        setLayerDisplay(key);
        callback('displayladder', getDisplayValue(key));
      });
      break;
    case 'cmp':
      $displayCompassControl.change(function(e) {
        setLayerDisplay(key);
        callback('displayCompass', getDisplayValue(key));
      });
      break;
    default:
      break;
    }
  };

  var panSetLockOption = function panSetLockOption(isChecked) {
    var boolValue = (isChecked === 'true') ? true : false;

    $lockPanningControl.prop('checked', boolValue);
  };

  var panSetupLockPanningChangeEvent = function panSetupLockPanningChangeEvent(callback) {
    $lockPanningControl.change(function(e) {
      callback('lockpanning', getLockPanningValue());
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
      callback();
    });
  };

  var setupFloorHotkeys = function setupFloorHotkeys(showSelectedFloorFn) {
    $(document).on('keydown', getHandleHotkeyFn(showSelectedFloorFn));
  };

  var setupPanZoom = function setupPanZoom($mapMains, $mapElements) {
    $mapMains.panzoom({
      $zoomRange: $zoomControl,
      minScale: 0.3,
      maxScale: 2.5
    });

    $mapMains.on('mousewheel', function(event) {
      $zoomControl.val(+$zoomControl.val() + (event.deltaY * 0.06));
      $zoomControl.trigger('input');
      //$zoomControl.trigger('change'); // todo: needed??
    });

    $zoomControl.on('change', getHandleZoomChangeFn($mapElements));
    $zoomControl.on('input', getHandleZoomChangeFn($mapElements));

    // camera links were not working on touch devices:
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

  var mapPanelsTrySelect = function mapPanelsTrySelect(number) {
    var result = R6MHelpers.trySelectOption($mapPanelCountControl, number);

    $mapPanelCountControl.trigger('change');
    return result;
  };

  var objectivesGetCurrentlySelected = function objectivesGetCurrentlySelected() {
    return $objectiveControl.val();
  };

  var objectivesPopulateOptions = function objectivesPopulateOptions(objectives) {
    var options = '',
      initialObjective = objectivesGetCurrentlySelected();

    options += '<option value="bomb">Bomb</option>';
    options += '<option value="hostage">Hostage</option>';
    options += '<option value="secure">Secure</option>';
    options += '<option value="all">Show All</option>';
    $objectiveControl.html(options);
    objectivesTrySelect(initialObjective);
  };

  var objectivesSetupChangeEvent = function objectivesSetupChangeEvent(callback) {
    $objectiveControl.on('change', callback);
  };

  var objectivesTrySelect = function objectivesTrySelect(objective) {
    return R6MHelpers.trySelectOption($objectiveControl, objective);
  };

  var removeLatestUpdateHighlight = function removeLatestUpdateHighlight(initialDelayMs) {
    unhighlightControl($('#menu-latest-updates'), initialDelayMs);
  };

  var tryShowLockControls = function tryShowLockControls(numberPanels) {
    var $lockWrapper = $('#lock-wrapper');

    if (numberPanels > 1) {
      $lockWrapper.show(600);
    } else {
      $lockWrapper.hide(600);
    }
  };

  var unhighlightControl = function unhighlightControl($el, initialDelayMs) {
    if ($el.hasClass('highlighted-item')) {
      $el.addClass('highlighted-item-in-transition');
      setTimeout(function() {
        $el.removeClass('highlighted-item');

        setTimeout(function() {
          $el.removeClass('highlighted-item-in-transition');
        }, CSS_TRANSITION_MS);
      }, initialDelayMs);
    }
  };

  var zoomDisable = function zoomDisable($mapElements) {
    $mapElements.panzoom('disable');
  };

  var zoomEnable = function zoomEnable($mapElements) {
    $mapElements.panzoom('enable');
  };

  var zoomIsZoomed = function zoomIsZoomed() {
    return ($zoomControl.val() != 1);
  };

  var zoomReset = function zoomReset($mapMains, getResetDimensions) {
    var resetDimensions = getResetDimensions();

    $zoomControl.val(resetDimensions.zoomValue);
    $zoomControl.trigger('input');
  };

  return  {
    floors: {
      get: floorsGetCurrentIndex,
      getMinMaxIndex: floorsGetMinAndMaxIndex,
      populate: floorsPopulate,
      setup: floorsSetup,
      trySelect: floorsTrySelect
    },
    mapPanels: {
      setup: mapPanelsSetupChangeEvent,
      trySelect: mapPanelsTrySelect
    },
    maps: {
      get: mapsGetCurrentlySelected,
      populate: mapsPopulateOptions,
      setup: mapsSetupChangeEvent,
      trySelect: mapsTrySelect
    },
    menu: {
      setup: menuSetup,
      setupFullScreen: menuSetupFullScreen,
      setupSelectMaps: menuSetupSelectMaps
    },
    objectives: {
      get: objectivesGetCurrentlySelected,
      populate: objectivesPopulateOptions,
      setup: objectivesSetupChangeEvent,
      trySelect: objectivesTrySelect
    },
    display: {
      reset: panReset,
      setLayerDisplay: setLayerDisplay,
      setDisplayOption: setDisplayOption,
      setupDisplayChangeEvent: setupDisplayChangeEvent
    },
    pan: {
      reset: panReset,
      setLockOption: panSetLockOption,
      setupLockOption: panSetupLockPanningChangeEvent
    },
    zoom: {
      disable: zoomDisable,
      enable: zoomEnable,
      isZoomed: zoomIsZoomed,
      reset: zoomReset
    },
    highlightControl: highlightControl,
    removeLatestUpdateHighlight: removeLatestUpdateHighlight,
    setupPanZoom: setupPanZoom,
    unhighlightControl: unhighlightControl
  };
})(window.jQuery, window, document);
