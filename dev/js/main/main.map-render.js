'use strict';

var R6MMainRender = (function($,window,document,undefined) {
  var SVG_WIDTH = 2560,
    SVG_HEIGHT = 1474,
    SVG_DIM = {
      WIDTH: SVG_WIDTH,
      HEIGHT: SVG_HEIGHT,
      TOP_OFFSET: (SVG_HEIGHT / 2) + 12,
      LEFT_OFFSET: (SVG_WIDTH / 2) - 5
    };

  $.fn.removeClassPrefix = function(prefix) {
    this.each(function(i, el) {
      var classes = el.className.split(' ').filter(function(c) {
        return c.lastIndexOf(prefix, 0) !== 0;
      });

      el.className = $.trim(classes.join(' '));
    });
    return this;
  };

  var IMG_URL = 'img/',
    FLOOR_CSS_TEXT = {
      '-1': 'neg-one', // bare -1 doesn't lint, but this should still work
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five'
    },
    ROOM_LABEL_STYLES = ['Light', 'Dark', 'LightAndLarge', 'DarkAndLarge', 'LightAndSmall', 'DarkAndSmall', 'DisplayNone', 'Learning'],
    ROOM_LABEL_CSS_TEXT = {
      Dark: 'room-label-dark',
      Light: 'room-label-light',
      DarkAndLarge: 'room-label-dark room-label-large',
      LightAndLarge: 'room-label-light room-label-large',
      DarkAndSmall: 'room-label-dark room-label-small',
      LightAndSmall: 'room-label-light room-label-small',
      DisplayNone: 'room-label-display-none',
      Learning: 'room-label-learning'
    };

  var getMaxFloorIndexHtml = function getMaxFloorIndexHtml($mapWrappers, floors, imgUrlPrefix) {
    /** Generates the HTML for the given floors.
     *
     * While waiting for the images of the floors to load, a loading spinner is added to the
     * $mapWrappers.
     *
     * @param $mapWrappers A reference to the DOM element that will contain the floors.
     *  A loading spinner is added to this element when generation starts, and is removed
     *  when all the floor images are loaded.
     *
     * @param floors A list of objects, each containing its index and whether it's a background
     *  floor, along with items that define the style of the floor.
     *
     * @param imgUrlPrefix A string defining the prefix for this map's floor images, which is
     *  assumed to be the folder the images are in, as well as the prefix of the actual images'
     *  filenames.
     *
     * @returns An HTML string, which is every floor as an img, each with its styles, classes
     *  and image source.
     */
    var html = '',
      prefix,
      imgSrc,
      inlineStyle,
      classes,
      deferrs = [];

    $mapWrappers.addClass('loading');

    var currentDeferr = $.Deferred();

    prefix = imgUrlPrefix;
    imgSrc = IMG_URL + prefix + '/' + prefix + '.svg';
    inlineStyle = getPositionStyle(floors[0]);
    classes = 'background';
    //              https://greensock.com/forums/topic/11187-accessing-svg-paths-in-external-file/
    // html += '<img src="' + imgSrc + '" style="' + inlineStyle + '" class="' + classes + '"></img>';
    html += '<div style="' + inlineStyle + '" class="' + classes + '"></object>';
    html += '<object data="' + imgSrc + '" type="image/svg+xml"></object>';
    // Creates a ghost image for every floor, which removes itself when it's loaded, and then
    // resolves the deferrer for this floor.
    // The "ghost image" is just asking to load the bg image another time, and since this will
    // just load from cache, it shouldnt impact performance too much.
    // This allows us to remove the loading spinner when all the deferrers are resolved, as
    // they all resolve once all the images load in.
    $('<img/>').attr('src', imgSrc).load(function() {
      $(this).remove(); // prevent memory leaks
      currentDeferr.resolve();
    });
    deferrs.push(currentDeferr);

    $.when.apply($, deferrs).then(function() {
      $mapWrappers.removeClass('loading');
    });

    return html;
  };

  var getPanelLabelsHtml = function getPanelLabelsHtml(floors) {
    var html = '',
      cssClass = '';

    floors.forEach(function(floor) {
      // allows to have a bg image that can't be selected as a "floor"
      if (floor.dontSelect) {
        return;
      }
      cssClass = FLOOR_CSS_TEXT[floor.index];
      html += '<span class="' + cssClass + '">' + floor.name.full + '</span>';
    });
    return html;
  };

  var getPositionStyle = function getPositionStyle(element) {
    var styleString = '';

    if ('top' in element) {
      styleString += 'top: ' + element.top + 'px;';
    }
    if ('bottom' in element) {
      styleString += 'bottom: ' + element.bottom + 'px;';
    }
    if ('right' in element) {
      styleString += 'right: ' + element.right + 'px;';
    }
    if ('left' in element) {
      styleString += 'left: ' + element.left + 'px;';
    }
    if ('height' in element) {
      styleString += 'height: ' + element.height + 'px;';
    }
    if ('width' in element) {
      styleString += 'width: ' + element.width + 'px;';
    }
    if ('rotate' in element) {
      styleString += 'transform: rotate(' + element.rotate + 'deg);';
    }
    return styleString;
  };

  var renderMap = function renderMap(mapData, $mapWrappers, $mapElements, $mapPanelLabels) {
    var html = '';

    html += getMaxFloorIndexHtml($mapWrappers, mapData.floors, mapData.imgUrlPrefix);

    $mapElements.html(html);
    $mapPanelLabels.html(getPanelLabelsHtml(mapData.floors));
  };

  var setupMapPanels = function setupMapPanels($mapPanelWrappers, numPanels) {
    var html;

    for (var x = 0; x < numPanels; x++) {
      html = '';
      html += '<div class="map-wrapper">';
      html += '<div class="helper-border vertical"></div>';
      html += '<div class="helper-border horizontal"></div>';
      html += '<p class="map-panel-label"></p>';
      html += '<div class="map-main">';
      html += '<div class="center-helper">';
      html += '<div class="map-elements"></div>';
      html += '<div class="svg-wrapper drawing-markers"></div>';
      html += '<div class="svg-wrapper map"></div>';
      html += '</div>'; // end center-helper
      html += '</div>'; // end map-main
      html += '</div>'; // end map-wrapper
      $mapPanelWrappers.append(html);
    }
  };

  var showFloor = function showFloor(
    selectedFloorIndex,
    $mapPanelWrappers,
    $mapWrappers,
    minFloorIndex,
    maxFloorIndex
  ) {
    $mapPanelWrappers.attr('selected-floor-index', selectedFloorIndex);
    var numPanels = $mapPanelWrappers.attr('map-panel-count');

    if (numPanels > 2)  {
      selectedFloorIndex = Math.max(minFloorIndex, selectedFloorIndex - 1);
    }
    var tempMinIndex = Math.max(minFloorIndex, maxFloorIndex - numPanels + 1),
      startingIndex = Math.min(tempMinIndex, selectedFloorIndex);

    $mapWrappers.each(function(index, map) {
      $(map).attr('show-floor-index', Math.min(startingIndex, maxFloorIndex));
      startingIndex++;
    });
  };

  var showObjective = function showObjective(objective, $mapElements) {
    var objectivePrefix = 'show-objective-';

    $mapElements.removeClassPrefix(objectivePrefix);
    $mapElements.addClass(objectivePrefix + objective);
  };

  return  {
    renderMap: renderMap,
    setupMapPanels: setupMapPanels,
    showFloor: showFloor,
    showObjective: showObjective,
    SVG_DIM: SVG_DIM
  };
})(window.jQuery, window, document);
