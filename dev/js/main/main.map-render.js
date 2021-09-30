'use strict';

var R6MMainRender = (function($,window,document,R6MLangTerms,undefined) {
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

  var getCommonClasses = function getCommonClasses(element) {
    var classes = '';

    if (element.floor != null) {
      classes += FLOOR_CSS_TEXT[element.floor] + ' ';
    }

    if (element.otherFloor != null && !element.alwaysShow) {
      classes += 'other-floor ';
      classes += element.otherFloor + ' ';
    }

    classes += element.outdoor ? 'outdoor ' : '';
    classes += 'hard-to-read ';
    classes += element.veryHardToRead ? 'very-hard-to-read ' : '';
    classes += element.site ? 'site ' : '';
    classes += element.hostage ? 'hostage ' : '';
    classes += element.secure ? 'secure ' : '';
    classes += element.bomb ? 'bomb ' : '';
    classes += element.call ? 'call ' : '';

    return classes;
  };

  var getCompassHtml = function getCompassHtml(compassPoints) {
    var html = '',
      positionPoints,
      inlineStyle;

    positionPoints = { top: 448, left: 550 }; // default if none provided
    positionPoints = $.extend(
      positionPoints,
      compassPoints
    );
    inlineStyle = getPositionStyle(positionPoints);

    html += '<div id="compass" style="' + inlineStyle + '">';
    html += '<div class="compass-background"></div>';
    html += '<p class="letter-n"><span>N</span></p>';
    html += '<p class="letter-e"><span>E</span></p>';
    html += '<p class="letter-s"><span>S</span></p>';
    html += '<p class="letter-w"><span>W</span></p>';
    html += '</div>';
    return html;
  };

  var getMaxFloorIndexHtml = function getMaxFloorIndexHtml(imgUrlPrefix) {
    /** Generates the HTML for the given floors.
     *
     * While waiting for the images of the floors to load, a loading spinner is added to the
     * $mapWrappers.
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
      imgSrc;

    prefix = imgUrlPrefix;
    imgSrc = IMG_URL + prefix + '/' + prefix;
    html += '<object id="svg-object" data="' + imgSrc + '.svg" type="image/svg+xml"></object>';

    return html;
  };

  var getHostageObjectivesHtml = function getHostageObjectivesHtml(hostageObjectives) {
    /** Generates the HTML for the given hostage objectives.
     *
     * Nominally, this will be called on only all the hostage objectives of a single map.
     *
     * @param hostageObjectives A list of objects containing the data of the hostage objective
     *  markers, including the position of the markers, and their classes, such as being a
     *  small marker, or what floor it's on.
     *
     * @returns An HTML string containing a div for every hostage objective defining its location
     *  and classes.
     *
     * @see getCommonClasses
     */
    var html = '',
      inlineStyle,
      classes,
      hostageLabel;

    hostageObjectives.forEach(function(hostage) {
      inlineStyle = getPositionStyle(hostage);
      classes = 'objective hostage ';
      classes += getCommonClasses(hostage);
      hostageLabel = 'H' + hostage.set;
      html += '<div style="' + inlineStyle + '" class="' + classes + '"><p>' + hostageLabel + '</p><span></span></div>';
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

  var getDimensionStyle = function getDimensionStyle(element) {
    if ('width' in element && 'height' in element) {
      return 'px;background-size: ' + element.width + 'px,' + element.height + 'px;';
    } else {
      return '';
    }
  };

  var getRoomLabelsHtml = function getRoomLabelsHtml(roomLabels) {
    var html = '',
      inlineStyle,
      classes;

    roomLabels.forEach(function(roomLabel) {
      inlineStyle = getPositionStyle(roomLabel);
      classes = 'room-label ';
      classes += getCommonClasses(roomLabel);
      html += '<div style="' + inlineStyle + '" class="' + classes + '"><p>' + roomLabel.description + '</p></div>';
    });
    return html;
  };

  var getRotateCssStatements = function getRotateCssStatements(degree) {
    var css = '';

    css += 'transform: rotate(' + degree + 'deg); ';
    css += '-webkit-transform: rotate(' + degree + 'deg); ';
    css += '-moz-transform: rotate(' + degree + 'deg); ';
    css += '-o-transform: rotate(' + degree + 'deg); ';
    css += '-ms-transform: rotate(' + degree + 'deg); ';
    return css;
  };

  var getSkylightsHtml = function getSkylightsHtml(skylights) {
    var html = '',
      inlineStyle,
      classes;

    skylights.forEach(function(skylight) {
      inlineStyle = getPositionStyle(skylight);
      classes = 'skylight ';
      classes += getCommonClasses(skylight);
      html += '<div style="' + inlineStyle + '" class="' + classes + '"><span></span></div>';
    });
    return html;
  };

  var getSpawnPointsHtml = function getSpawnPointsHtml(spawnPoints) {
    var html = '',
      inlineStyle = '',
      classes;

    spawnPoints.forEach(function(spawnPoint) {
      inlineStyle = getPositionStyle(spawnPoint);
      classes = 'spawn-point ' + getCommonClasses(spawnPoint);
      html += '</div><div class="spawn-description"><p>' + spawnPoint.description + '</p></div></div></div>';
    });
    return html;
  };

  var renderMap = function renderMap(mapData, $mapWrappers, $mapElements, $mapPanelLabels) {
    var html = '';

    html += getMaxFloorIndexHtml(mapData.imgUrlPrefix);
    html += getRoomLabelsHtml(mapData.roomLabels);
    html += getSpawnPointsHtml(mapData.spawnPoints);
    html += getCompassHtml(mapData.compassPoints);

    $mapElements.html(html);
    $mapPanelLabels.html(getPanelLabelsHtml(mapData.floors));
  };

  var setRoomLabelStyle = function setRoomLabelStyle($mapElements, style) {
    ROOM_LABEL_STYLES.forEach(function(roomLabelStyle) {
      $mapElements.removeClass(ROOM_LABEL_CSS_TEXT[roomLabelStyle]);
    });
    $mapElements.addClass(ROOM_LABEL_CSS_TEXT[style]);
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
    roomLabelStyles: ROOM_LABEL_STYLES,
    setRoomLabelStyle: setRoomLabelStyle,
    setupMapPanels: setupMapPanels,
    showFloor: showFloor,
    showObjective: showObjective,
    SVG_DIM: SVG_DIM
  };
})(window.jQuery, window, document, R6MLangTerms);
