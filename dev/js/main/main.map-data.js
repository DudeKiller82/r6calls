'use strict';

var R6MMainData = (function(undefined){
  var floorTerms = {
    subBasement: { full: 'Sub-Basement', short: 'SB'},
    basement: { full: 'Basement', short: 'B' },
    firstFloor: { full: '1st Floor', short: '1' },
    secondFloor: { full: '2nd Floor', short: '2' },
    thirdFloor: { full: '3rd Floor', short: '3' },
    fourthFloor: { full: '4th Floor', short: '4' },
    roof: { full: 'Roof', short: 'R' }
  };

  var getMapData = function getMapData() {
    return {
      bank: {
        name: 'Bank',
        imgUrlPrefix: 'bank',
        floors: [
          { index: 'bg', name: floorTerms.basement, top: -1077, left: -1915, dontSelect: true },
          { index: 0, name: floorTerms.basement },
          { index: 1, name: floorTerms.firstFloor, default: true },
          { index: 2, name: floorTerms.secondFloor },
          { index: 3, name: floorTerms.roof }
        ]
      },
      bartlett: {
        name: 'Bartlett U.',
        imgUrlPrefix: 'bartlett',
        floors: [
          { index: 'bg', name: floorTerms.basement, top: -1077, left: -1915, dontSelect: true },
          { index: 1, name: floorTerms.firstFloor },
          { index: 2, name: floorTerms.secondFloor },
          { index: 3, name: floorTerms.roof }
        ]
      },
      border: {
        name: 'Border',
        imgUrlPrefix: 'border',
        floors: [
          { index: 'bg', name: floorTerms.basement, top: -1077, left: -1915, dontSelect: true },
          { index: 1, name: floorTerms.firstFloor },
          { index: 2, name: floorTerms.secondFloor },
          { index: 3, name: floorTerms.roof }
        ]
      },
      chalet: {
        name: 'Chalet',
        imgUrlPrefix: 'chalet',
        floors: [
          { index: 'bg', name: floorTerms.basement, top: -1077, left: -1915, dontSelect: true },
          { index: 0, name: floorTerms.basement },
          { index: 1, name: floorTerms.firstFloor },
          { index: 2, name: floorTerms.secondFloor },
          { index: 3, name: floorTerms.roof }
        ]
      },
      club: {
        name: 'Club House',
        imgUrlPrefix: 'club-house',
        floors: [
          { index: 'bg', name: floorTerms.basement, top: -1077, left: -1915, dontSelect: true },
          { index: 0, name: floorTerms.basement },
          { index: 1, name: floorTerms.firstFloor },
          { index: 2, name: floorTerms.secondFloor },
          { index: 3, name: floorTerms.roof }
        ]
      },
      coastline: {
        name: 'Coastline',
        imgUrlPrefix: 'coastline',
        floors: [
          { index: 'bg', name: floorTerms.basement, top: -1077, left: -1915, dontSelect: true },
          { index: 1, name: floorTerms.firstFloor },
          { index: 2, name: floorTerms.secondFloor },
          { index: 3, name: floorTerms.roof }
        ]
      },
      consulate: {
        name: 'Consulate',
        imgUrlPrefix: 'consulate',
        floors: [
          { index: 'bg', name: floorTerms.basement, top: -1077, left: -1915, dontSelect: true },
          { index: 0, name: floorTerms.basement },
          { index: 1, name: floorTerms.firstFloor },
          { index: 2, name: floorTerms.secondFloor },
          { index: 3, name: floorTerms.roof }
        ]
      },
      favela: {
        name: 'Favela',
        imgUrlPrefix: 'favela',
        floors: [
          { index: 'bg', name: floorTerms.basement, top: -1077, left: -1915, dontSelect: true },
          { index: 0, name: floorTerms.basement },
          { index: 1, name: floorTerms.firstFloor },
          { index: 2, name: floorTerms.secondFloor },
          { index: 3, name: floorTerms.thirdFloor },
          { index: 4, name: floorTerms.roof }
        ]
      },
      fortress: {
        name: 'Fortress',
        imgUrlPrefix: 'fortress',
        floors: [
          { index: 'bg', name: floorTerms.basement, top: -1077, left: -1915, dontSelect: true },
          { index: 1, name: floorTerms.firstFloor },
          { index: 2, name: floorTerms.secondFloor },
          { index: 3, name: floorTerms.roof }
        ]
      },
      hereford: {
        name: 'Hereford',
        imgUrlPrefix: 'hereford',
        floors: [
          { index: 'bg', name: floorTerms.basement, top: -1077, left: -1915, dontSelect: true },
          { index: 0, name: floorTerms.basement },
          { index: 1, name: floorTerms.firstFloor },
          { index: 2, name: floorTerms.secondFloor },
          { index: 3, name: floorTerms.thirdFloor },
          { index: 4, name: floorTerms.roof }
        ]
      },
      house: {
        name: 'House',
        imgUrlPrefix: 'house',
        floors: [
          { index: 'bg', name: floorTerms.basement, top: -1077, left: -1915, dontSelect: true },
          { index: 0, name: floorTerms.basement },
          { index: 1, name: floorTerms.firstFloor },
          { index: 2, name: floorTerms.secondFloor },
          { index: 3, name: floorTerms.roof }
        ]
      },
      kafe: {
        name: 'Kafe Dostoyevsky',
        imgUrlPrefix: 'kafe',
        floors: [
          { index: 'bg', name: floorTerms.basement, top: -1077, left: -1915, dontSelect: true },
          { index: 1, name: floorTerms.firstFloor },
          { index: 2, name: floorTerms.secondFloor },
          { index: 3, name: floorTerms.thirdFloor },
          { index: 4, name: floorTerms.roof }
        ]
      },
      kanal: {
        name: 'Kanal',
        imgUrlPrefix: 'kanal',
        floors: [
          { index: 'bg', name: floorTerms.basement, top: -1077, left: -1915, dontSelect: true },
          { index: -1, name: floorTerms.subBasement },
          { index: 0, name: floorTerms.basement },
          { index: 1, name: floorTerms.firstFloor },
          { index: 2, name: floorTerms.secondFloor },
          { index: 3, name: floorTerms.roof }
        ]
      },
      oregon: {
        name: 'Oregon',
        imgUrlPrefix: 'oregon',
        floors: [
          { index: 'bg', name: floorTerms.basement, top: -1077, left: -1915, dontSelect: true },
          { index: 0, name: floorTerms.basement },
          { index: 1, name: floorTerms.firstFloor },
          { index: 2, name: floorTerms.secondFloor },
          { index: 3, name: floorTerms.thirdFloor },
          { index: 4, name: floorTerms.roof }
        ]
      },
      outback: {
        name: 'Outback',
        imgUrlPrefix: 'outback',
        floors: [
          { index: 'bg', name: floorTerms.basement, top: -1077, left: -1915, dontSelect: true },
          { index: 1, name: floorTerms.firstFloor },
          { index: 2, name: floorTerms.secondFloor },
          { index: 3, name: floorTerms.roof }
        ]
      },
      plane: {
        name: 'Plane',
        imgUrlPrefix: 'plane',
        floors: [
          { index: 'bg', name: floorTerms.basement, top: -1077, left: -1915, dontSelect: true },
          { index: 1, name: floorTerms.firstFloor },
          { index: 2, name: floorTerms.secondFloor },
          { index: 3, name: floorTerms.thirdFloor },
          { index: 4, name: floorTerms.roof }
        ]
      },
      skyscraper: {
        name: 'Skyscraper',
        imgUrlPrefix: 'skyscraper',
        floors: [
          { index: 'bg', name: floorTerms.basement, top: -1077, left: -1915, dontSelect: true },
          { index: 1, name: floorTerms.firstFloor },
          { index: 2, name: floorTerms.secondFloor },
          { index: 3, name: floorTerms.roof }
        ]
      },
      themepark: {
        name: 'Theme Park',
        imgUrlPrefix: 'themepark',
        floors: [
          { index: 'bg', name: floorTerms.basement, top: -1077, left: -1915, dontSelect: true },
          { index: 1, name: floorTerms.firstFloor },
          { index: 2, name: floorTerms.secondFloor },
          { index: 3, name: floorTerms.roof }
        ]
      },
      tower: {
        name: 'Tower',
        imgUrlPrefix: 'tower',
        floors: [
          { index: 'bg', name: floorTerms.basement, top: -1077, left: -1915, dontSelect: true },
          { index: 1, name: floorTerms.firstFloor },
          { index: 2, name: floorTerms.secondFloor },
          { index: 3, name: floorTerms.thirdFloor },
          { index: 4, name: floorTerms.roof }
        ]
      },
      villa: {
        name: 'Villa',
        imgUrlPrefix: 'villa',
        floors: [
          { index: 'bg', name: floorTerms.basement, top: -1077, left: -1915, dontSelect: true },
          { index: 0, name: floorTerms.basement },
          { index: 1, name: floorTerms.firstFloor },
          { index: 2, name: floorTerms.secondFloor },
          { index: 3, name: floorTerms.roof }
        ]
      },
      yacht: {
        name: 'Yacht',
        imgUrlPrefix: 'yacht',
        floors: [
          { index: 'bg', name: floorTerms.basement, top: -1077, left: -1915, dontSelect: true },
          { index: 1, name: floorTerms.firstFloor },
          { index: 2, name: floorTerms.secondFloor },
          { index: 3, name: floorTerms.thirdFloor },
          { index: 4, name: floorTerms.fourthFloor },
          { index: 5, name: floorTerms.roof }
        ]
      }
    };
  };

  return  {
    getMapData: getMapData
  };
})();
