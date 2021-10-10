'use strict';

var R6MMainRender = (function($,window,document,undefined) {
  var SVG_WIDTH = 5000,
    SVG_HEIGHT = 5000,
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
    };

  var getSVGMapHTML = function getSVGMapHTML(floors, imgUrlPrefix) {
    var html = '',
      prefix = imgUrlPrefix,
      imgSrc = IMG_URL + prefix + '/' + prefix + '.svg',
      inlineStyle = getPositionStyle(floors[0]);

    html += '<div style="' + inlineStyle + '" class="background loading">';
    html += '<object class="svgMap" data="' + imgSrc + '" type="image/svg+xml"></object>';
    html += '</div>';
    return html;
  };

  var getPanelLabelHTML = function getPanelLabelHTML(floors) {
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

  var getMapHTML = function getMapHTML(mapData, $mapElements, $mapPanelsLabels) {
    var html = '';

    html += getSVGMapHTML(mapData.floors, mapData.imgUrlPrefix);

    $mapElements.html(html);
    $mapPanelsLabels.html(getPanelLabelHTML(mapData.floors));
  };

  var createMapPanels = function createMapPanels($mapPanelsContainer, mapPanelsCount) {
    var html;

    for (var x = 0; x < mapPanelsCount; x++) {
      html = '';
      html += '<div class="map-container">';
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
      html += '</div>'; // end map-container
      $mapPanelsContainer.append(html);
    }
  };

  var showFloor = function showFloor(
    selectedFloorIndex,
    $mapPanelsContainer,
    $mapContainer,
    minFloorIndex,
    maxFloorIndex
  ) {
    $mapPanelsContainer.attr('selected-floor-index', selectedFloorIndex);
    var mapPanelsCount = $mapPanelsContainer.attr('map-panels-count');

    if (mapPanelsCount > 2)  {
      selectedFloorIndex = Math.max(minFloorIndex, selectedFloorIndex - 1);
    }
    var tempMinIndex = Math.max(minFloorIndex, maxFloorIndex - mapPanelsCount + 1),
      startingIndex = Math.min(tempMinIndex, selectedFloorIndex);

    $mapContainer.each(function(index, map) {
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
    getMapHTML: getMapHTML,
    createMapPanels: createMapPanels,
    showFloor: showFloor,
    showObjective: showObjective,
    SVG_DIM: SVG_DIM
  };
})(window.jQuery, window, document);
