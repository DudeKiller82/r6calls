'use strict';

var R6MLangTerms = (function(undefined) {
  var terms = {
    roomLabelStyles: {
      Dark: 'Dark',
      Light: 'Light (Default)',
      DarkAndLarge: 'Large and Dark',
      LightAndLarge: 'Large and Light',
      DarkAndSmall: 'Small and Dark',
      LightAndSmall: 'Small and Light',
      DisplayNone: 'Turn Off',
      Learning: 'Learning Mode'
    },
    objectives: {
      bombShortA: 'A',
      bombShortB: 'B',
      bomb: 'Bomb',
      hostageShort: 'H',
      hostage: 'Hostage',
      secureShort: 'S',
      secure: 'Secure',
      showAll: 'Show All'
    },
    floorTerms: {
      subBasement: { full: 'Sub-Basement', short: 'B'},
      basement: { full: 'Basement', short: 'B' },
      firstFloor: { full: '1st Floor', short: '1' },
      secondFloor: { full: '2nd Floor', short: '2' },
      thirdFloor: { full: '3rd Floor', short: '3' },
      fourthFloor: { full: '4th Floor', short: '4' },
      roof: { full: 'Roof', short: 'R' }
    }
  };

  return  {
    terms: terms
  };
})();
