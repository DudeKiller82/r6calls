'use strict';

var R6MMainData = (function(R6MLangTerms, undefined){
  var DRONE_MED = 18,
    DRONE_SMALL = 14,
    floorTerms = {
      subBasement: { full: 'Sub-Basement', short: 'B'},
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
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -806, right: -1132, height: 217, width: 462
        },
        floors: [
          { index: 0, top: -660, left: -1042, width: 1811, name: floorTerms.basement, background: true },
          { index: 1, top: -538, left: -587, width: 1180, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -538, left: -587, width: 1180, name: floorTerms.secondFloor },
          { index: 3, top: -538, left: -587, width: 1180, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 0, top: -160, left: -69, set: 1 },
          { floor: 1, top: -26, left: -15, set: 2 },
          { floor: 1, top: 65, left: 281, set: 3 },
          { floor: 2, top: -102, left: 138, set: 4 }
        ],
        bombObjectives: [
          { floor: 0, top: 8, left: 193, set: 4, letter: 'A' },
          { floor: 0, top: 34, left: -31, set: 4, letter: 'B' },
          { floor: 1, top: -26, left: 26, set: 3, letter: 'A' },
          { floor: 1, top: -100, left: 169, set: 3, letter: 'B' },
          { floor: 1, top: 160, left: 97, set: 2, letter: 'A' },
          { floor: 1, top: 100, left: 345, set: 2, letter: 'B' },
          { floor: 2, top: -52, left: -13, set: 1, letter: 'B' },
          { floor: 2, top: -151, left: 138, set: 1, letter: 'A' }
        ],
        secureObjectives: [
          { floor: 0, top: 10, left: -67, set: 1 },
          { floor: 1, top: 209, left: 113, set: 2 },
          { floor: 1, top: -100, left: 125, set: 3 },
          { floor: 2, top: -52, left: 138, set: 4 }
        ],
        zoomPoints: {
          topLeft: { top: -368, left: -483 },
          bottomRight: { top: 310, left: 397 }
        },
        compassPoints: {
          top: 306, left: 662
        },
        ladders: [
          { floor: 1, top: -440, left: 554, otherFloor: 'down' },
          { floor: 0, top: -440, left: 554, otherFloor: 'up' },
          { floor: 1, top: -415, left: -711, otherFloor: 'up' },
          { floor: 2, top: -415, left: -711, otherFloor: 'down' },
          { floor: 1, top: 542, left: 588, otherFloor: 'up' },
          { floor: 2, top: 542, left: 588, otherFloor: 'down' }
        ],
        cameras: [
          { floor: 1, otherFloor: 'up', top: -157, left: -392, id: 1 },
          { floor: 2, top: -157, left: -392, id: 1 },
          { floor: 1, top: 100, left: 42, id: 2 },
          { floor: 2, top: -171, left: 244, id: 3 },
          { floor: 0, top: 119, left: -203, id: 4 },
          { outdoor: true, top: -431, left: 5, id: 5 },
          { floor: 0, top: 148, left: -518, id: 6 },
          { floor: 1, otherFloor: 'down', top: 148, left: -518, id: 6 },
          { outdoor: true, top: 115, left: 562, id: 7 }
        ],
        ceilingHatches: [
          { floor: 0, top: 10, left: -138 },
          { floor: 0, top: 197, left: -190 },
          { floor: 0, top: 112, left: 88 },
          { floor: 0, top: 50, left: 169 },
          { floor: 0, top: -101, left: 320 },
          { floor: 1, top: 196, left: -123 },
          { floor: 1, top: 258, left: 55 },
          { floor: 1, top: 139, left: 139 },
          { floor: 1, top: 52, left: 134 }
        ],
        skylights: [
          { floor: 1, otherFloor: 'up', top: -102, left: 320 },
          { floor: 1, otherFloor: 'up', top: -176, left: -314 },
          { floor: 1, otherFloor: 'up', top: 32, left: -314 },
          { floor: 1, otherFloor: 'up', top: 201, left: -36 },
          { floor: 2, top: -102, left: 320 },
          { floor: 2, top: -176, left: -314 },
          { floor: 2, top: 40, left: -314 },
          { floor: 2, top: 201, left: -36 },
          { floor: 3, otherFloor: 'down', top: -102, left: 320 },
          { floor: 3, otherFloor: 'down', top: -176, left: -314 },
          { floor: 3, otherFloor: 'down', top: 40, left: -314 },
          { floor: 3, otherFloor: 'down', top: 201, left: -36 }
        ],
        droneTunnels: [
          { floor: 0, top: -190, left: -422, rotate: 116, size: 22 },
          { floor: 0, top: 59, left: -223, rotate: 116, size: DRONE_MED },
          { floor: 1, top: 80, left: -101, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 5, left: 84, rotate: 0, size: DRONE_MED },
          { floor: 2, top: -6, left: 90, rotate: 0, size: DRONE_MED },
          { floor: 2, top: 89, left: 95, rotate: 0, size: DRONE_MED },
          { floor: 1, top: 277, left: 321, rotate: 90, size: DRONE_MED }
        ],
        spawnPoints: [
          { letter: 'A', top: -590, left: -888, description: 'Boulevard' },
          { letter: 'B', top: -446, left: 641, description: 'Jewelry' },
          { letter: 'C', top: 497, left: 652, description: 'Alley' }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: -575, left: -661, description: 'Parking Lot' },
          { outdoor: true, top: -575, left: -156, description: 'Boulevard' },
          { outdoor: true, top: -575, left: 538, description: 'Jewelry' },
          { outdoor: true, top: -295, left: 239, description: 'Plaza' },
          { outdoor: true, top: -448, left: -225, description: 'Main Entrance' },
          { outdoor: true, top: -143, left: -473, description: 'Garage Ramp' },
          { outdoor: true, top: -216, left: -720, description: 'Parking' },
          { outdoor: true, top: 648, left: 657, description: 'Alley Access', rotate: -90 },
          { outdoor: true, top: 495, left: 360, description: 'Alley Rooftop' },
          { outdoor: true, top: 336, left: 647, description: 'Alley' },
          // OF
          { floor: 0, top: -150, left: -151, description: 'Vault', site: true, hostage: true },
          { floor: 0, top: -114, left: 37, description: 'Cash' },
          { floor: 0, top: -114, left: 146, description: 'Gold' },
          { floor: 0, top: -161, left: 278, description: 'Blue Stairs' },
          { floor: 0, top: -64, left: 321, description: 'Server' },
          { floor: 0, top: 53, left: 201, description: 'CCTV', site: true, bomb: true },
          { floor: 0, top: 167, left: 65 , description: 'Dock' },
          { floor: 0, top: 21, left: 103, description: 'Red Hallway', rotate: -90},
          { floor: 0, top: 115, left: 35, description: 'Lockers Hallway'  },
          { floor: 0, top: -255, left: 455, description: 'Tunnel' },
          { floor: 0, top: 4, left: 2, description: 'Lockers', site: true, bomb: true, secure: true },
          { floor: 0, top: 94, left: -152, description: 'Vault Lobby' },
          { floor: 0, top: -5, left: -166, description: 'Vault Entrance' },
          { floor: 0, top: 237, left: -38, description: 'Main Stairs' },
          { floor: 0, top: 315, left: -137, description: 'Garage' },
          { floor: 0, top: 170, left: -183, description: 'Elevators' },
          { floor: 0, top: 359, left: -15, description: 'Red Truck', call: true },
          // 1F
          { floor: 1, top: 236, left: -274, description: 'Garage Roof' },
          { floor: 1, top: 255, left: 265, description: 'Printer' },
          { floor: 1, top: -92, left: 27, description: 'Tellers\' Office', site: true, hostage: true, bomb: true },
          { floor: 1, top: -56, left: 153, description: 'Archives', site: true, bomb: true, secure: true },
          { floor: 1, top: -70, left: -90, description: 'Tellers' },
          { floor: 1, top: 132, left: -328, description: 'Loan' },
          { floor: 1, top: 123, left: -81, description: 'Open Space Hallway' },
          { floor: 1, top: 245, left: -34, description: 'Main Stairs' },
          { floor: 1, top: -61, left: 318, description: 'Square' },
          { floor: 1, top: -141, left: -234, description: 'Lobby' },
          { floor: 1, top: 183, left: 162, description: 'Open Space', site: true, bomb: true, secure: true },
          { floor: 1, top: 145, left: 283, description: 'Kitchen', site: true, hostage: true, bomb: true },
          { floor: 1, top: 18, left: 441, description: 'Electrical' },
          { floor: 1, top: 34, left: 143, description: 'Admin' },
          { floor: 1, top: -318, left: -223, description: 'ATMs' },
          { floor: 1, top: 170, left: -183, description: 'Elevators' },
          { floor: 1, top: 170, left: -114, description: 'Elevators' },
          { floor: 1, top: -155, left: 322, description: 'Square Stairs' },
          { floor: 1, top: -10, left: -274, description: 'Lobby Stairs', rotate: 45 },
          // 2F
          { floor: 2, top: 236, left: -274, description: 'Garage Roof' },
          { floor: 2, top: -141, left: -234, description: 'Lobby' },
          { floor: 2, top: -159, left: 33, description: 'Exec Hallway' },
          { floor: 2, top: -32, left: -105, description: 'Front Desk' },
          { floor: 2, top: -75, left: 39, description: 'Exec', site: true, bomb: true },
          { floor: 2, top: -77, left: 184, description: 'CEO', site: true, hostage: true, bomb: true, secure: true },
          { floor: 2, top: -8, left: 319, description: 'Top Square' },
          { floor: 2, top: 47, left: 185, description: 'Janitor' },
          { floor: 2, top: 127, left: -20, description: 'Meeting Hallway' },
          { floor: 2, top: 240, left: -25, description: 'Main Stairs' },
          { floor: 2, top: 147, left: 320, description: 'Terrace' },
          { floor: 2, top: 279, left: 117, description: 'Stock' },
          { floor: 2, top: 50, left: -2, description: 'Meeting' },
          { floor: 2, top: 173, left: -110, description: 'Elevators' },
          { floor: 2, top: -318, left: -223, description: 'ATMs' },
          { floor: 2, top: 132, left: -328, description: 'Loan' },
          { floor: 2, top: -128, left: -148, description: 'Banana', rotate: -45 },
          { floor: 2, top: -158, left: 330, description: 'Square Stairs' },
          { floor: 2, top: -10, left: -274, description: 'Lobby Stairs', rotate: 45 },
          { floor: 2, top: 127, left: 145, description: 'Stock Hallway' },
          // 3F
          { floor: 3, top: 236, left: -274, description: 'Garage Roof' },
          { floor: 3, top: -13, left: -136, description: 'High Roof' },
          { floor: 3, top: 56, left: 129, description: 'Low Roof' }
        ]
      },
      bartlett: {
        name: 'Bartlett U.',
        imgUrlPrefix: 'bartlett',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -725, right: -1179, width: 475
        },
        floors: [
          { index: 1, top: -716, left: -892, width: 1721, name: floorTerms.firstFloor, background: true, default: true },
          { index: 2, top: -466, left: -454, width: 1236, name: floorTerms.secondFloor },
          { index: 3, top: -466, left: -454, width: 1236, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 1, top: -96, left: -296, set: 1 },
          { floor: 1, top: -199, left: 643, set: 2 },
          { floor: 2, top: 265, left: 336, set: 3 },
          { floor: 2, top: -171, left: 577, set: 4 }
        ],
        bombObjectives: [
          { floor: 2, top: -116, left: 577, set: 1, letter: 'A' },
          { floor: 2, top: 92, left: 596, set: 1, letter: 'B' },
          { floor: 1, top: 102, left: 524, set: 2, letter: 'A' },
          { floor: 1, top: -199, left: 573, set: 2, letter: 'B' },
          { floor: 1, top: -63, left: -255, set: 3, letter: 'A' },
          { floor: 1, top: 293, left: -255, set: 3, letter: 'B' },
          { floor: 2, top: 148, left: -265, set: 4, letter: 'A' },
          { floor: 2, top: -18, left: -298, set: 4, letter: 'B' }
        ],
        secureObjectives: [
          { floor: 1, top: -172, left: -353, set: 1, otherFloor: 'up' },
          { floor: 2, top: -172, left: -353, set: 1, otherFloor: 'down' },
          { floor: 1, top: 125, left: 312, set: 2 },
          { floor: 2, top: 193, left: -265, set: 3 },
          { floor: 2, top: -17, left: 388, set: 4 }
        ],
        zoomPoints: {
          topLeft: { top: -426, left: -389 },
          bottomRight: { top: 330, left: 731 }
        },
        compassPoints: {
          top: 392, left: 699
        },
        cameras: [
          { floor: 2, top: 175, left: 67, id: 1 },
          { floor: 2, top: -185, left: 176, id: 2 },
          { floor: 1, top: -188, left: -106, id: 3 },
          { floor: 1, top: 177, left: -124, id: 4 },
          { floor: 1, top: -400, left: 356, id: 5 },
          { outdoor: true, top: 666, left: 457, id: 6 },
          { outdoor: true, top: -525, left: 551, id: 7 }
        ],
        ceilingHatches: [
          { floor: 1, top: 233, left: -337 },
          { floor: 1, top: 56, left: -17 },
          { floor: 1, top: 168, left: 194 },
          { floor: 1, top: 64, left: 374 },
          { floor: 1, top: -17, left: 482 },
          { floor: 1, top: 95, left: 558 },
          { floor: 2, top: -174, left: 433 }
        ],
        skylights: [
          { floor: 1, top: -319, left: 272, otherFloor: 'up' },
          { floor: 2, top: -319, left: 272 },
          { floor: 3, top: -319, left: 272 }
        ],
        droneTunnels: [
          { floor: 1, top: -274, left: 137, rotate: 90, size: DRONE_MED },
          { floor: 1, top: 109, left: 704, rotate: 90, size: DRONE_MED },
          { floor: 1, top: 176, left: 140, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: -31, left: -408, rotate: 0, size: 86 },
          { floor: 1, top: -69, left: -395, rotate: 90, size: 34 },

          { floor: 2, top: 1, left: 267, rotate: 90, size: 120 }
        ],
        spawnPoints: [
          { letter: 'A', top: 595, left: -793, description: 'Festival' },
          { letter: 'B', top: 646, left: 320, description: 'Main Gate'  },
          { letter: 'C', top: -650, left: -329, description: 'Courtyard' }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 377, left: -200, description: 'Patio' },
          { outdoor: true, top: 377, left: 289, description: 'Patio' },
          { outdoor: true, top: 619, left: 36, description: 'Front Entrance' },
          { outdoor: true, top: 619, left: -448, description: 'Festival' },
          { outdoor: true, top: -70, left: -797, description: 'Campus Field' },
          { outdoor: true, top: -250, left: -251, description: 'Terrace' },
          { outdoor: true, top: -310, left: 69, description: 'Terrace' },
          { outdoor: true, top: -486, left: -127, description: 'Back Alley' },
          { outdoor: true, top: -431, left: 587, description: 'Parking' },
          { outdoor: true, top: 298, left: 655, description: 'Main Gate' },
          { outdoor: true, top: 615, left: 655, description: 'Main Gate' },
          { outdoor: true, top: 704, left: 573, description: 'East Balcony' },
          { outdoor: true, top: 704, left: -349, description: 'West Balcony' },
          // 1F
          { floor: 1, top: 202, left: -261, description: 'Reading', site: true, bomb: true },
          { floor: 1, top: 9, left: -253, description: 'Library', site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: 143, left: -29, description: 'Lobby' },
          { floor: 1, top: 118, left: 109, description: 'Coat' },
          { floor: 1, top: -101, left: -1, description: 'Fireplace' },
          { floor: 1, top: -9, left: 26, description: 'Archway Hall' },
          { floor: 1, top: -94, left: 182, description: 'Dining Hallway', rotate: -90 },
          { floor: 1, top: -160, left: 287, description: 'Dining Hallway'  },
          { floor: 1, top: -39, left: 249, description: 'Main Stairs' },
          { floor: 1, top: -90, left: 401, description: 'Bathroom' },
          { floor: 1, top: -273, left: 263, description: 'Dining' },
          { floor: 1, top: -153, left: 566, description: 'Kitchen', site: true, hostage: true, bomb: true },
          { floor: 1, top: -238, left: 427, description: 'Service' },
          { floor: 1, top: -34, left: 667, description: 'Kitchen Corridor', rotate: -90 },
          { floor: 1, top: -40, left: 530, description: 'Pantry' },
          { floor: 1, top: 76, left: 565, description: 'Piano', site: true, bomb: true },
          { floor: 1, top: 178, left: 313, description: 'Lounge', site: true, secure: true },
          { floor: 1, top: -204, left: 764, description: 'Garden Pass', rotate: -90 },
          { floor: 1, top: 73, left: 764, description: 'Garden Pass', rotate: -90 },
          { floor: 1, top: -166, left: -279, description: 'Library Stairs' },
          { floor: 1, top: 163, left: 561, description: 'Piano Stairs' },
          // 2F
          { floor: 2, top: 40, left: -254, description: 'Top Library', site: true, bomb: true, secure: true },
          { floor: 2, top: -39, left: 256, description: 'Main Stairs' },
          { floor: 2, top: -250, left: 532, description: 'Roof' },
          { floor: 2, top: 108, left: -342, description: 'Classroom Corridor', rotate: -90 },
          { floor: 2, top: 199, left: -207, description: 'Classroom', site: true, bomb: true, secure: true },
          { floor: 2, top: 166, left: -28, description: 'Compass' },
          { floor: 2, top: 112, left: 159, description: 'Front Office' },
          { floor: 2, top: 208, left: 339, description: 'Office', site: true, hostage: true },
          { floor: 2, top: 71, left: 576, description: 'Museum', site: true, bomb: true },
          { floor: 2, top: 37, left: 389, description: 'Model', site: true, secure: true },
          { floor: 2, top: -69, left: 578, description: 'Trophy', site: true, hostage: true, bomb: true },
          { floor: 2, top: -204, left: 774, description: 'Garden Pass', rotate: -90 },
          { floor: 2, top: 73, left: 774, description: 'Garden Pass', rotate: -90 },
          { floor: 2, top: -158, left: -275, description: 'Library Stairs' },
          { floor: 2, top: 167, left: 561, description: 'Piano Stairs' },
          { floor: 2, top: -78, left: -95, description: 'Mezzanine', rotate: -90 },
          { floor: 2, top: -5, left: 57, description: 'Mezzanine'  },
          { floor: 2, top: -158, left: 339, description: 'Model Hallway' },
          // 3F
          { floor: 3, top: -250, left: 532, description: 'Roof' },
          { floor: 3, top: 30, left: -70, description: 'Roof' },
          { floor: 3, top: 30, left: 465, description: 'Roof' },
          { floor: 3, top: -129, left: 436, description: 'Roof Hatch' }
        ]
      },
      border: {
        name: 'Border',
        imgUrlPrefix: 'border',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -293, right: -866, height: 210, width: 462
        },
        floors: [
          { index: 1, top: -560, left: -744, width: 1517, name: floorTerms.firstFloor, background: true, default: true },
          { index: 2, top: -475, left: -307, width: 681, name: floorTerms.secondFloor },
          { index: 3, top: -475, left: -307, width: 681, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 1, top: -292, left: 23, set: 1 },
          { floor: 1, top: -108, left: -125, set: 2 },
          { floor: 2, top: -272, left: 193, set: 3 },
          { floor: 2, top: 34, left: -118, set: 4 }
        ],
        bombObjectives: [
          { floor: 1, top: -123, left: -249, set: 1, letter: 'A' },
          { floor: 1, top: -22, left: -123, set: 1, letter: 'B' },
          { floor: 1, top: -337, left: 23, set: 2, letter: 'A' },
          { floor: 1, top: -337, left: -213, set: 2, letter: 'B' },
          { floor: 1, top: -318, left: 156, set: 3, letter: 'A' },
          { floor: 1, top: -186, left: 213, set: 3, letter: 'B' },
          { floor: 2, top: -325, left: -67, set: 4, letter: 'A' },
          { floor: 2, top: -321, left: 125, set: 4, letter: 'B' }
        ],
        secureObjectives: [
          { floor: 1, top: -186, left: 249, set: 1 },
          { floor: 1, top: -282, left: -12, set: 2 },
          { floor: 2, top: -212, left: 193, set: 3 },
          { floor: 2, top: -325, left: -103, set: 4 }
        ],
        zoomPoints: {
          topLeft: { top: -443, left: -305 },
          bottomRight: { top: 125, left: 350 }
        },
        compassPoints: {
          top: -74, left: 660
        },
        ladders: [
          { floor: 1, top: -128, left: -767, otherFloor: 'up' },
          { floor: 2, top: -128, left: -767, otherFloor: 'down' },
          { floor: 1, top: -505, left: -52, otherFloor: 'up' },
          { floor: 2, top: -505, left: -52, otherFloor: 'down' }
        ],
        cameras: [
          { floor: 2, top: -92, left: 326, id: 1 },
          { floor: 2, top: -81, left: -33 , id: 2 },
          { floor: 1, top: -99, left: 122, id: 3 },
          { floor: 1, top: -245, left: -172, id: 4 },
          { outdoor: true, top: 268, left: -462, id: 5 },
          { outdoor: true, top: -568, left: 425, id: 6 },
          { outdoor: true, top: -425, left: -347, id: 7 }
        ],
        ceilingHatches: [
          { floor: 1, top: -237, left: -122 },
          { floor: 1, top: -109, left: -91 },
          { floor: 1, top: -19, left: -153 },
          { floor: 1, top: -330, left: 67 },
          { floor: 1, top: -142, left: 228 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 1, top: 85, left: -254, rotate: 0, size: DRONE_MED },
          { floor: 1, top: -99, left: -305, rotate: 90, size: DRONE_MED },
          { floor: 1, top: -392, left: -188, rotate: 0, size: DRONE_MED },
          { floor: 1, top: -391, left: 158, rotate: 0, size: DRONE_MED },
          { floor: 1, top: -253, left: 220, rotate: 0, size: DRONE_MED },
          { floor: 1, top: -215, left: 108, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: -103, left: 330, rotate: 0, size: 39 },
          { floor: 1, top: -83, left: 331, rotate: 90, size: 58 }
        ],
        spawnPoints: [
          { letter: 'A', top: -194, left: 810, description: 'East Vehicle Entrance' },
          { letter: 'B', top: 567, left: -128, description: 'Valley' },
          { letter: 'C', top: -140, left: -872, description: 'West Vehicle Exit' }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: -155, left: -656, description: 'West Tower' },
          { outdoor: true, top: 89, left: -681, description: 'Pedestrian Exit' },
          { outdoor: true, top: 404, left: -307, description: 'Valley' },
          { outdoor: true, top: 442, left: 74, description: 'Valley' },
          { outdoor: true, top: 180, left: -429, description: 'Parkin Entrance' },
          { outdoor: true, top: -158, left: -448, description: 'Parking' },
          { outdoor: true, top: -399, left: -622, description: 'West Road' },
          { outdoor: true, top: -530, left: -169, description: 'Vehicle Customs' },
          { outdoor: true, top: -512, left: 308, description: 'Crash' },
          { outdoor: true, top: -390, left: 509, description: 'East Road' },
          { outdoor: true, top: 15, left: 556, description: 'Pedestrian Entrance' },
          { outdoor: true, top: 188, left: 264, description: 'Pedestrian Customs' },
          { outdoor: true, top: 257, left: -73, description: 'Pedestrian Customs' },
          { outdoor: true, top: 296, left: 293, description: 'Watch Tower' },
          { outdoor: true, top: -156, left: 366, description: 'East Alley' },
          { outdoor: true, top: -12, left: -304, description: 'Parking Alley', rotate: -90 },
          { outdoor: true, top: -311, left: -304, description: 'Parking Alley', rotate: -90 },
          { outdoor: true, top: -461, left: 54, description: 'Archives Balcony' },
          { outdoor: true, top: -474, left: -105, description: 'Bus Roof' },
          // 1F
          { floor: 1, top: -1, left: 341, description: 'East Stairs', rotate: -90 },
          { floor: 1, top: -222, left: -220, description: 'Exit' },
          { floor: 1, top: -292, left: -198, description: 'Ventilation', site: true, bomb: true },
          { floor: 1, top: -79, left: -241, description: 'Supply', site: true, bomb: true },
          { floor: 1, top: -1, left: -246, description: 'Supply Corridor' },
          { floor: 1, top: 59, left: -247, description: 'Detention' },
          { floor: 1, top: -105, left: 65, description: 'Lobby' },
          { floor: 1, top: -22, left: 65, description: 'Passport' },
          { floor: 1, top: 47, left: -93, description: 'Customs', site: true, bomb: true },
          { floor: 1, top: -69, left: -105, description: 'Customs Desk', site: true, hostage: true },
          { floor: 1, top: 27, left: 211, description: 'Waiting' },
          { floor: 1, top: -210, left: 231, description: 'Tellers', site: true, bomb: true, secure: true },
          { floor: 1, top: -181, left: -107, description: 'Main Stairs' },
          { floor: 1, top: -279, left: -82, description: 'Server' },
          { floor: 1, top: -218, left: 42, description: 'Workshop', site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: -276, left: 156, description: 'Bathroom', site: true, bomb: true },
          { floor: 1, top: -189, left: 147, description: 'Bathroom Hallway', rotate: -90 },
          // 2F
          { floor: 2, top: -364, left: 63, description: 'Archives', site: true, bomb: true },
          { floor: 2, top: -312, left: -164, description: 'Armory', site: true, bomb: true, secure: true },
          { floor: 2, top: -249, left: -98, description: 'Armory Desk' },
          { floor: 2, top: 0, left: -142, description: 'CCTV', site: true, hostage: true },
          { floor: 2, top: 25, left: 36, description: 'Cafeteria' },
          { floor: 2, top: -152, left: -5, description: 'Red Hallway', rotate: -90 },
          { floor: 2, top: -72, left: 115, description: 'Red Hallway' },
          { floor: 2, top: -150, left: 64, description: 'Fountain' },
          { floor: 2, top: -225, left: 64, description: 'Offices Hallway' },
          { floor: 2, top: -165, left: 214, description: 'Offices', site: true, hostage: true, secure: true },
          { floor: 2, top: -1, left: 341, description: 'East Stairs', rotate: -90 },
          { floor: 2, top: -176, left: -95, description: 'Main Stairs' },
          { floor: 2, top: -363, left: 208, description: 'North Balcony' },
          { floor: 2, top: -289, left: 313, description: 'East Balcony', rotate: -90 },
          { floor: 2, top: -163, left: -219, description: 'West Balcony' },
          { floor: 2, top: -45, left: -261, description: 'West Balcony', rotate: -90 },
          { floor: 2, top: 123, left: -157, description: 'South Balcony' },
          { floor: 2, top: 123, left: 169, description: 'South Balcony' },
          { floor: 2, top: -61, left: 308, description: 'Generator' },
          { floor: 2, top: 73, left: 200, description: 'Waiting Balcony' },
          { floor: 2, top: -357, left: -111, description: 'Sandwich', call: true, rotate: -90 },
          // 3F
          { floor: 3, top: 17, left: -9, description: 'Roof' },
          { floor: 3, top: -138, left: -215, description: 'Roof' },
          { floor: 3, top: -318, left: 152, description: 'Roof' }
        ]
      },
      chalet: {
        name: 'Chalet',
        imgUrlPrefix: 'chalet',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -718, right: -1319, height: 215, width: 465
        },
        floors: [
          { index: 0, top: -131, left: -273, width: 1386, name: floorTerms.basement, background: true },
          { index: 1, top: -128, left: 126, width: 723, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -128, left: 126, width: 723, name: floorTerms.secondFloor },
          { index: 3, top: -128, left: 126, width: 723, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 0, top: 500, left: 440, set: 1 },
          { floor: 1, top: 476, left: 528, set: 2 },
          { floor: 2, top: 135, left: 650, set: 3 },
          { floor: 2, top: 530, left: 240, set: 4 }
        ],
        bombObjectives: [
          { floor: 0, top: 542, left: 423, set: 4, letter: 'B' },
          { floor: 0, top: 391, left: 514, set: 4, letter: 'A' },
          { floor: 1, top: 92, left: 637, set: 3, letter: 'B' },
          { floor: 1, top: 265, left: 541, set: 3, letter: 'A' },
          { floor: 1, top: 490, left: 428, set: 2, letter: 'B' },
          { floor: 1, top: 524, left: 217, set: 2, letter: 'A' },
          { floor: 2, top: 115, left: 640, set: 1, letter: 'B' },
          { floor: 2, top: 215, left: 566, set: 1, letter: 'A' }
        ],
        secureObjectives: [
          { floor: 0, top: 305, left: 583, set: 1 },
          { floor: 1, top: 438, left: 478, set: 2 },
          { floor: 2, top: 220, left: 430, set: 3 },
          { floor: 2, top: 535, left: 215, set: 4 }
        ],
        zoomPoints: {
          topLeft: { top: -130, left: 80 },
          bottomRight: { top: 680, left: 890 }
        },
        compassPoints: {
          top: 258, left: 1020
        },
        ladders: [
          { floor: 0, top: 645, left: 405, otherFloor: 'up' },
          { floor: 1, top: 645, left: 405, otherFloor: 'down' },
          { floor: 1, top: 380, left: 135, otherFloor: 'up' },
          { floor: 2, top: 380, left: 135, otherFloor: 'down' },
          { floor: 1, top: 575, left: 605, otherFloor: 'up' },
          { floor: 2, top: 575, left: 605, otherFloor: 'down' },
          { floor: 1, top: 267, left: 361, otherFloor: 'up' },
          { floor: 2, top: 267, left: 361, otherFloor: 'down' },

          { floor: 1, top: 600, left: -108, otherFloor: 'up' },
          { floor: 2, top: 600, left: -108, otherFloor: 'down' }
        ],
        cameras: [
          { floor: 2, top: -83, left: 650, id: 1 },
          { floor: 1, otherFloor: 'up', top: 363, left: 206, id: 2 },
          { floor: 2, top: 363, left: 206, id: 2 },
          { floor: 1, otherFloor: 'up', top: 570, left: 580, id: 3 },
          { floor: 2, top: 570, left: 580, id: 3 },
          { floor: 1, top: 143, left: 424, id: 4 },
          { floor: 0, top: 415, left: 421, id: 5 },
          { outdoor: true, top: -83, left: 37, id: 6 },
          { outdoor: true, top: 160, left: 1060, id: 7 }
        ],
        ceilingHatches: [
          { floor: 0, top: 538, left: 557 },
          { floor: 0, top: -70, left: 631 },
          { floor: 0, top: 307, left: 629 },
          { floor: 1, top: 475, left: 217 },
          { floor: 1, top: 414, left: 359 },
          { floor: 1, top: 164, left: 636 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 0, top: 612, left: 457, rotate: 0, size: DRONE_SMALL },
          { floor: 0, top: 378, left: 488, rotate: 90, size: DRONE_SMALL },
          { floor: 0, top: -83, left: 486, rotate: 0, size: DRONE_MED },
          { floor: 1, top: 5, left: 662, rotate: 90, size: DRONE_MED },
          { floor: 1, top: 229, left: 656, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: 217, left: 477, rotate: 90, size: 45 },
          { floor: 1, top: 300, left: 400, rotate: 0, size: 60 },
          { floor: 1, top: 539, left: 200, rotate: 90, size: DRONE_SMALL }
        ],
        spawnPoints: [
          { letter: 'A', top: -175, left: 865, description: 'Campfire' },
          { letter: 'B', top: 400, left: 1080, description: 'Cliffside' },
          { letter: 'C', top: 445, left: -195, description: 'Lakeside' }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: -73, left: 350, description: 'Wood Trail' },
          { outdoor: true, top: -263, left: 850, description: 'Campfire Wood' },
          { outdoor: true, top: -150, left: 940, description: 'Campfire' },
          { outdoor: true, top: 447, left: 910, description: 'Backyard' },
          { outdoor: true, top: 65, left: 1063, description: 'Gazebo' },
          { outdoor: true, top: 490, left: 1085, description: 'Cliffside Stairs' },
          { outdoor: true, top: 649, left: 789, description: 'Cliffside Woods' },
          { outdoor: true, top: 720, left: 1090, description: 'Cliffside' },
          { outdoor: true, top: 115, left: 915, description: 'Backyard' },
          { outdoor: true, top: 452, left: 706, description: 'Back Patio' },
          { outdoor: true, top: 265, left: -239, description: 'Helipad Trail' },
          { outdoor: true, top: 500, left: -29, description: 'Helipad' },
          { outdoor: true, top: 450, left: 135, description: 'Front Patio', rotate: -90 },
          { outdoor: true, top: 127, left: 279, description: 'Front Yard' },
          { outdoor: true, top: 700, left: 400, description: 'Snowmobiles' },
          // OF
          { floor: 0, top: 385, left: 248, description: 'Blue Stairs' },
          { floor: 0, top: 393, left: 379, description: 'Blue' },
          { floor: 0, top: 340, left: 464, description: 'Blue', rotate: -90 },
          { floor: 0, top: 466, left: 434, description: 'Garage', site: true, hostage: true, bomb: true },
          { floor: 0, top: 597, left: 409, description: 'Garage Stairs' },
          { floor: 0, top: 506, left: 543, description: 'Storage' },
          { floor: 0, top: 335, left: 535, description: 'Wine', site: true, bomb: true, secure: true },
          { floor: 0, top: 256, left: 596, description: 'Basement Hallway' },
          { floor: 0, top: 204, left: 727, description: 'Backyard Stairs', rotate: -90 },
          { floor: 0, top: 205, left: 487, description: 'Main Stairs', rotate: -90 },
          { floor: 0, top: 41, left: 540, description: 'Car Garage' },
          { floor: 0, top: -35, left: 625, description: 'Car<br/>Garage<br/>Entrance' },
          // 1F
          { floor: 1, top: 358, left: 254, description: 'Library Stairs' },
          { floor: 1, top: 403, left: 314, description: 'Gaming Hallway', rotate: -90 },
          { floor: 1, top: 363, left: 400, description: 'Bar Hallway' },
          { floor: 1, top: 505, left: 275, description: 'Gaming', site: true, bomb: true },
          { floor: 1, top: 599, left: 283, description: 'Stock' },
          { floor: 1, top: 455, left: 390, description: 'Bar', site: true, bomb: true },
          { floor: 1, top: 603, left: 534, description: 'Fireplace Stairs' },
          { floor: 1, top: 430, left: 525, description: 'Fireplace', site: true, hostage: true, secure: true },
          { floor: 1, top: 315, left: 270, description: 'Mudroom' },
          { floor: 1, top: 290, left: 496, description: 'Dining Hallway', rotate: -90 },
          { floor: 1, top: 240, left: 580, description: 'Dining', site: true, bomb: true },
          { floor: 1, top: -65, left: 505, description: 'Trophy Stairs' },
          { floor: 1, top: 120, left: 470, description: 'Main' },
          { floor: 1, top: -30, left: 555, description: 'Trophy' },
          { floor: 1, top: 60, left: 570, description: 'Kitchen Hallway', rotate: -90 },
          { floor: 1, top: 70, left: 640, description: 'Kitchen', site: true, bomb: true },
          { floor: 1, top: 204, left: 727, description: 'Backyard Stairs', rotate: -90 },
          // 2F
          { floor: 2, top: 560, left: 525, description: 'Fireplace' },
          { floor: 2, top: 358, left: 254, description: 'Library Stairs' },
          { floor: 2, top: 375, left: 400, description: 'Library Hallway' },
          { floor: 2, top: 441, left: 320, description: 'Library Entrance' },
          { floor: 2, top: 492, left: 300, description: 'Library', site: true, hostage: true, secure: true },
          { floor: 2, top: -65, left: 510, description: 'Trophy Stairs' },
          { floor: 2, top: 112, left: 494, description: 'Bathroom' },
          { floor: 2, top: 75, left: 635, description: 'Master', site: true, hostage: true, bomb: true },
          { floor: 2, top: -20, left: 575, description: 'Solarium' },
          { floor: 2, top: 190, left: 485, description: 'Piano', site: true, secure: true },
          { floor: 2, top: 442, left: 516, description: 'Mezzanine' },
          { floor: 2, top: 510, left: 430, description: 'Mezzanine', rotate: -90 },
          { floor: 2, top: 310, left: 580, description: 'Office', site: true, bomb: true },
          { floor: 2, top: 455, left: 186, description: 'Library Balcony', rotate: -90 },
          { floor: 2, top: 475, left: 636, description: 'Office Balcony', rotate: -90 },
          { floor: 2, top: 165, left: 403, description: 'Bathroom Balcony', rotate: -90 }
        ]
      },
      club: {
        name: 'Club House',
        imgUrlPrefix: 'club-house',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -857, right: -881, width: 462
        },
        floors: [
          //
          { index: 0, top: -642, left: -908, width: 1789, name: floorTerms.basement, background: true },
          { index: 1, top: -494, left: -449, width: 840, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -494, left: -449, width: 840, name: floorTerms.secondFloor },
          { index: 3, top: -494, left: -449, width: 840, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: -13, left: -17 , set: 1 },
          { floor: 2, top: -34, left: 173 , set: 2 },
          { floor: 1, top: 94, left: -281 , set: 3 },
          { floor: 0, top: -33, left: 9 , set: 4 }
        ],
        bombObjectives: [
          { floor: 2, top: -1, left: 17, set: 1, letter: 'A' },
          { floor: 2, top: -12, left: -136, set: 1, letter: 'B' },
          { floor: 2, top: 6, left: 176, set: 2, letter: 'A' },
          { floor: 2, top: 106, left: 187, set: 2, letter: 'B' },

          { floor: 1, top: -3, left: -102, set: 3, letter: 'A' },
          { floor: 1, top: -35, left: 144, set: 3, letter: 'B' },
          { floor: 0, top: -61, left: 31, set: 4, letter: 'A' },
          { floor: 0, top: -159, left: 47, set: 4, letter: 'B' }
        ],
        secureObjectives: [
          { floor: 1, top: 201, left: 227, set: 1 },
          { floor: 1, top: 41, left: -82, set: 2 },
          { floor: 2, top: -1, left: 14, set: 3 },
          { floor: 0, top: -174, left: 32, set: 4 }
        ],
        zoomPoints: {
          topLeft: { top: -336, left: -416 },
          bottomRight: { top: 275, left: 397 }
        },
        compassPoints: {
          top: 503, left: 758
        },
        ladders: [
          // Garage
          { floor: 1, top: 247, left: 177, otherFloor: 'down' },
          { floor: 0, top: 247, left: 177, otherFloor: 'up' },
          // Construction Balcony
          { floor: 1, top: -131, left: 181, otherFloor: 'up' },
          { floor: 2, top: -131, left: 181, otherFloor: 'down' },
          // Construction Spawn
          { floor: 1, top: -475, left: 312, otherFloor: 'up' },
          { floor: 2, top: -475, left: 312, otherFloor: 'down' }
        ],
        cameras: [
          { floor: 2, top: -121, left: -13, id: 1 },
          { floor: 1, top: -73, left: -70, id: 2 },
          { floor: 1, otherFloor: 'up', top: 295, left: 240, id: 3 },
          { floor: 2, top: 306, left: 256, id: 3 },
          { floor: 0, top: -114, left: -73, id: 4 },
          { outdoor: true, top: 281, left: -170, id: 5 },
          { outdoor: true, top: -158, left: -305, id: 6 },
          { outdoor: true, top: 329, left: 409, id: 7 }
        ],
        ceilingHatches: [
          { floor: 0, top: 18, left: -63 },
          { floor: 0, top: -12, left: 173 },
          { floor: 0, top: -190, left: 44 },

          { floor: 1, top: 197, left: -216 },
          { floor: 1, top: 14, left: -144 },

          { floor: 2, top: -225, left: 63 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 0, top: -457, left: -17, rotate: 210, size: DRONE_SMALL },
          { floor: 1, top: 150, left: -379, rotate: 90, size: 51 },
          { floor: 1, top: 179, left: -186, rotate: 90, size: 10 },
          { floor: 1, top: 215, left: 114, rotate: 90, size: 10 },
          { floor: 1, top: 124, left: 140, rotate: 0, size: 8 },
          { floor: 2, top: -74, left: -152, rotate: 90, size: 10 },
          { floor: 2, top: 20, left: 281, rotate: 90, size: 10 },
          { floor: 2, top: 37, left: 241, rotate: 90, size: 8 }
        ],
        spawnPoints: [
          { letter: 'A', top: 504, left: 74, description: 'Main Gate' },
          { letter: 'B', top: 88, left: -776, description: 'Shipping Dock' },
          { letter: 'C', top: 187, left: 648, description: 'Warehouse' },
          { letter: 'D', top: -500, left: 346, description: 'Construction Site' }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 435, left: -157, description: 'Main Gate' },
          { outdoor: true, top: 284, left: -483, description: 'Junkyard' },
          { outdoor: true, top: 94, left: -483, description: 'Junkyard' },
          { outdoor: true, top: 329, left: -249, description: 'VIP Parking' },
          { outdoor: true, top: 260, left: -44, description: 'Parking' },
          { outdoor: true, top: 265, left: 342, description: 'Kennels' },
          { outdoor: true, top: -31, left: 375, description: 'Kennels' },
          { outdoor: true, top: -72, left: -407, description: 'Recreation' },
          { floor: 1, top: -152, left: 185, description: 'Trash' },
          { floor: 2, top: -152, left: 185, description: 'Trash' },
          { floor: 3, top: -152, left: 185, description: 'Trash' },
          { outdoor: true, top: -186, left: -189, description: 'Graffiti' },
          { outdoor: true, top: -348, left: 33, description: 'Construction Site' },
          // OF
          { floor: 0, top: 227, left: 158, description: 'Ladder' },
          { floor: 0, top: 15, left: 144, description: 'Blue' },
          { floor: 0, top: 47, left: -67, description: 'Bike' },
          { floor: 0, top: -13, left: 51, description: 'Church', site: true, hostage: true, bomb: true },
          { floor: 0, top: 13, left: 251, description: 'Blue Stairs' },
          { floor: 0, top: -101, left: 3, description: 'Church Hallway' },
          { floor: 0, top: -114, left: 150, description: 'Armory', site: true, bomb: true, secure: true },
          { floor: 0, top: -170, left: -11, description: 'Armory', site: true, bomb: true, secure: true },
          { floor: 0, top: -190, left: -92, description: 'Main Stairs' },
          { floor: 0, top: -328, left: 134, description: 'Tunnel' },
          { floor: 0, top: -423, left: -7, description: 'Container' },
          { floor: 0, top: -53, left: -60, description: 'Bike Hallway', rotate: -90 },
          // 1F
          { floor: 1, top: 225, left: 188, description: 'Garage', site: true, secure: true },
          { floor: 1, top: 218, left: -345, description: 'Side Entrance' },
          { floor: 1, top: 202, left: -238, description: 'Changing' },
          { floor: 1, top: 121, left: -275, description: 'Strip Club', site: true, hostage: true },
          { floor: 1, top: 98, left: 86, description: 'Lobby' },
          { floor: 1, top: 101, left: -29, description: 'Porch' },
          { floor: 1, top: 85, left: 173, description: 'Lounge' },
          { floor: 1, top: 70, left: 256, description: 'Lounge' },
          { floor: 1, top: 63, left: -390, description: 'Junkyard<br/>Entrance' },
          { floor: 1, top: 50, left: 338, description: 'Storage' },
          { floor: 1, top: 38, left: -163, description: 'Pool' },
          { floor: 1, top: -4, left: -61, description: 'Bar', site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: -4, left: 49, description: 'Stage' },
          { floor: 1, top: 30, left: 314, description: 'Blue Stairs', rotate: -90 },
          { floor: 1, top: -32, left: 188, description: 'Stock', site: true, bomb: true },
          { floor: 1, top: 0, left: 286, description: 'Red Stairs', rotate: -90 },
          { floor: 1, top: -62, left: -216, description: 'Strip Hallway' },
          { floor: 1, top: -102, left: -167, description: 'Toilets' },
          { floor: 1, top: -97, left: -13, description: 'Kitchen Hallway' },
          { floor: 1, top: -167, left: 22, description: 'Kitchen' },
          { floor: 1, top: -190, left: -76, description: 'Main Stairs' },
          { floor: 1, top: -247, left: -10, description: 'Kitchen<br/>Entrance' },
          // 2F
          { floor: 2, top: 225, left: 188, description: 'Garage' },
          { floor: 2, top: 123, left: -296, description: 'Strip Roof' },
          { floor: 2, top: 122, left: -1, description: 'Porch' },
          { floor: 2, top: 80, left: 202, description: 'CCTV', site: true, bomb: true },
          { floor: 2, top: 55, left: 330, description: 'Blacony' },
          { floor: 2, top: 26, left: -109, description: 'Gym', site: true, bomb: true },
          { floor: 2, top: 39, left: -21, description: 'Bedroom', site: true, hostage: true, bomb: true, secure: true },
          { floor: 2, top: 1, left: 81, description: 'Construction' },
          { floor: 2, top: -55, left: 179, description: 'Cash', site: true, hostage: true, bomb: true },
          { floor: 2, top: -32, left: 303, description: 'Red Stairs', rotate: -90 },
          { floor: 2, top: -79, left: -207, description: 'Jacuzzi' },
          { floor: 2, top: -69, left: -72, description: 'Bathroom' },
          { floor: 2, top: -117, left: -74, description: 'Bedroom Hallway' },
          { floor: 2, top: -115, left: 27, description: 'Secret' },
          { floor: 2, top: -196, left: -66, description: 'Main Stairs' },
          { floor: 2, top: -180, left: 49, description: 'Office' },
          { floor: 2, top: 215, left: 151, description: 'Catwalk', rotate: -90},
          { floor: 2, top: 156, left: 203, description: 'Catwalk' },
          // 3F
          { floor: 3, top: 44, left: 210, description: 'Eastern Roof' },
          { floor: 3, top: 234, left: 210, description: 'Eastern Roof' },
          { floor: 3, top: 123, left: -296, description: 'Strip Roof' },
          { floor: 3, top: 122, left: -1, description: 'Porch' },
          { floor: 3, top: 55, left: 330, description: 'Blacony' },
          { floor: 3, top: -85, left: -60, description: 'Central Roof' },
          { floor: 3, top: -79, left: -207, description: 'Jacuzzi' }
        ]
      },
      coastline: {
        name: 'Coastline',
        imgUrlPrefix: 'coastline',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -737, right: -1004, height: 212, width: 462
        },
        floors: [
          { index: 1, top: -751, left: -797, width: 1801, name: floorTerms.firstFloor, background: true, default: true },
          { index: 2, top: -210, left: -365, width: 740, name: floorTerms.secondFloor },
          { index: 3, top: -210, left: -365, width: 740, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: -46, left: 53, set: 1 },
          { floor: 2, top: 148, left: 229, set: 2 },
          { floor: 1, top: -72, left: 80, set: 3 },
          { floor: 1, top: 150, left: -95, set: 4 }
        ],
        bombObjectives: [
          { floor: 2, top: 45, left: -137, set: 1, letter: 'B' },
          { floor: 2, top: 203, left: -139, set: 1, letter: 'A' },
          { floor: 2, top: 14, left: 279, set: 2, letter: 'B' },
          { floor: 2, top: 148, left: 264, set: 2, letter: 'A' },
          { floor: 1, top: -63, left: 165, set: 3, letter: 'B' },
          { floor: 1, top: -18, left: 63, set: 3, letter: 'A' },
          { floor: 1, top: 181, left: -153, set: 4, letter: 'A' },
          { floor: 1, top: -24, left: -248, set: 4, letter: 'B' }
        ],
        secureObjectives: [
          { floor: 1, top: 181, left: -189, set: 1 },
          { floor: 1, top: -18, left: 15, set: 2 },
          { floor: 2, top: 72, left: 229, set: 3 },
          { floor: 2, top: 203, left: -194, set: 4 }
        ],
        zoomPoints: {
          topLeft: { top: -134, left: -317 },
          bottomRight: { top: 375, left: 332 }
        },
        compassPoints: {
          top: 522, left: 409
        },
        cameras: [
          { floor: 1, top: 95, left: -84, id: 1 },
          { floor: 1, top: 292, left: 198, id: 2 },
          { floor: 2, top: 316, left: -194, id: 3 },
          { floor: 2, top: 77, left: 156, id: 4 },
          { outdoor: true, top: -195, left: 415, id: 5 },
          { outdoor: true, top: 436, left: -300, id: 6 },
          { outdoor: true, top: -109, left: -551, id: 7 }
        ],
        ceilingHatches: [
          { floor: 1, top: 74, left: -178 },
          { floor: 1, top: 315, left: -192 },
          { floor: 1, top: 274, left: 105 },
          { floor: 1, top: 77, left: 191 },
          { floor: 2, top: -72, left: 286 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 1, top: 63, left: 316, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 258, left: 82, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 226, left: -53, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 215, left: -214, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: -81, left: -40, rotate: 90, size: 24 },
          { floor: 1, top: -90, left: -48, rotate: 0, size: 30 },
          { floor: 2, top: 223, left: -65, rotate: 0, size: DRONE_SMALL },
          { floor: 2, top: -4, left: -40, rotate: 90, size: DRONE_SMALL },
          { floor: 2, top: 94, left: 176, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: -86, left: -74, rotate: 0, size: DRONE_MED, otherFloor: 'up' },
          { floor: 2, top: -86, left: -74, rotate: 0, size: DRONE_MED, otherFloor: 'upanddown' },
          { floor: 3, top: -86, left: -74, rotate: 0, size: DRONE_MED, otherFloor: 'down' },
          { floor: 1, top: 334, left: 275, rotate: 0, size: DRONE_MED, otherFloor: 'up' },
          { floor: 2, top: 334, left: 275, rotate: 0, size: DRONE_MED, otherFloor: 'upanddown' },
          { floor: 3, top: 334, left: 275, rotate: 0, size: DRONE_MED, otherFloor: 'down' },
          { floor: 2, top: 235, left: -51, rotate: 0, size: DRONE_MED, otherFloor: 'up' },
          { floor: 3, top: 235, left: -51, rotate: 0, size: DRONE_MED, otherFloor: 'down' },
          { floor: 2, top: -81, left: 214, rotate: 0, size: DRONE_MED, otherFloor: 'up' },
          { floor: 3, top: -81, left: 214, rotate: 0, size: DRONE_MED, otherFloor: 'down' }
        ],
        spawnPoints: [
          { letter: 'A', top: 186, left: 814, description: 'Main Entrance'  },
          { letter: 'B', top: -522, left: -280, description: 'Pool Side' },
          { letter: 'C', top: 497, left: -525, description: 'Ruins' }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 167, left: -332, description: 'Ruins' },
          { outdoor: true, top: -310, left: 189, description: 'Pool' },
          { outdoor: true, top: -296, left: -145, description: 'Pool' },
          { outdoor: true, top: -15, left: 412, description: 'Main Entrance' },
          { outdoor: true, top: 305, left: 412, description: 'Main Entrance' },
          { outdoor: true, top: 201, left: 44, description: 'Courtyard' },
          { outdoor: true, top: 421, left: -121, description: 'Terrace' },
          { outdoor: true, top: -346, left: 485, description: 'Back Alley' },
          { outdoor: true, top: -575, left: 211, description: 'Pool Side' },
          { outdoor: true, top: -166, left: -465, description: 'Walkway' },
          { outdoor: true, top: -239, left: 445, description: 'Garage Roof' },
          { outdoor: true, top: 573, left: -211, description: 'Promenade' },
          { outdoor: true, top: 397, left: 43, description: 'Promenade' },
          // 1F
          { floor: 1, top: -43, left: 265, description: 'Delivery', site: true, bomb: true },
          { floor: 1, top: -14, left: 166, description: 'Delivery', site: true, bomb: true },
          { floor: 1, top: 27, left: 265, description: 'Toilets' },
          { floor: 1, top: 151, left: 222, description: 'Lobby' },
          { floor: 1, top: 337, left: 229, description: 'White Stairs' },
          { floor: 1, top: 47, left: 44, description: 'Kitchen', site: true, bomb: true, secure: true },
          { floor: 1, top: -51, left: 12, description: 'Kitchen', site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: 94, left: 54, description: 'Kitchen Hallway' },
          { floor: 1, top: 329, left: 112, description: 'Security' },
          { floor: 1, top: 295, left: 4, description: 'Sun' },
          { floor: 1, top: 286, left: -122, description: 'Library' },
          { floor: 1, top: 147, left: -151, description: 'Blue Bar', site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: 32, left: -215, description: 'Sunrise', site: true, bomb: true },
          { floor: 1, top: -76, left: -249, description: 'Pool Entrance' },
          { floor: 1, top: -34, left: -43, description: 'Blue Stairs', rotate: -90 },
          { floor: 1, top: -122, left: -17, description: 'Cantina' },
          { floor: 1, top: 207, left: 210, description: 'Reception', rotate: -90 },
          { floor: 1, top: 27, left: -67, description: 'Sunrise Hallway', rotate: -90 },
          // 2F
          { floor: 2, top: 351, left: 229, description: 'White Stairs'  },
          { floor: 2, top: -38, left: -79, description: 'Blue Stairs', rotate: -90 },
          { floor: 2, top: 97, left: 39, description: 'VIP Hallway' },
          { floor: 2, top: 3, left: -161, description: 'Hookah', site: true, bomb: true },
          { floor: 2, top: 160, left: -164, description: 'Pool Table', site: true, bomb: true, secure: true },
          { floor: 2, top: 189, left: 170, description: 'TV Hallway', rotate: -90 },
          { floor: 2, top: 299, left: 44, description: 'Luggage' },
          { floor: 2, top: 301, left: -121, description: 'Aqua' },
          { floor: 2, top: -57, left: 170, description: 'Guitars' },
          { floor: 2, top: -36, left: 285, description: 'Bathroom' },
          { floor: 2, top: 27, left: 212, description: 'Penthouse', site: true, bomb: true, secure: true },
          { floor: 2, top: 212, left: 237, description: 'TV', site: true, hostage: true, bomb: true },
          { floor: 2, top: -20, left: -241, description: 'Hookah Balcony', rotate: -90 },
          { floor: 2, top: 36, left: 44, description: 'VIP', site: true, hostage: true },
          { floor: 2, top: -124, left: 123, description: 'VIP Balcony' },
          { floor: 2, top: 384, left: -121, description: 'Aqua Balcony' },
          { floor: 2, top: 267, left: 26, description: 'Roof Drop' },
          { floor: 2, top: 32, left: -60, description: 'Hookah Hallway', rotate: -90 },
          // 3F
          { floor: 3 , top: 111, left: -121, description: 'Rooftop' },
          { floor: 3 , top: 78, left: 221, description: 'Rooftop' },
          { floor: 3, top: 266, left: 26, description: 'Roof Drop' }
        ]
      },
      consulate: {
        name: 'Consulate',
        imgUrlPrefix: 'consulate',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -722, right: -872, height: 217, width: 462
        },
        floors: [
          { index: 0, top: -604, left: -811, width: 1683, name: floorTerms.basement, background: true },
          { index: 1, top: -222, left: -448, width: 943, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -222, left: -448, width: 943, name: floorTerms.secondFloor },
          { index: 3, top: -222, left: -448, width: 943, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 1, top: 41, left: 203, set: 1 },
          { floor: 2, top: 121, left: -294, set: 2 },
          { floor: 2, top: 45, left: 328, set: 3 },
          { floor: 0, top: -34, left: 328, set: 4 }
        ],
        bombObjectives: [
          { floor: 0, top: -34, left: 292, set: 4, letter: 'A' },
          { floor: 1, top: 75, left: 115, set: 4, letter: 'B' },
          { floor: 0, top: 56, left: -239, set: 3, letter: 'B' },
          { floor: 0, top: 130, left: -29, set: 3, letter: 'A' },
          { floor: 1, top: 153, left: -255, set: 2, letter: 'A' },
          { floor: 1, top: 153, left: 11, set: 2, letter: 'B' },
          { floor: 2, top: 167, left: 11, set: 1, letter: 'A' },
          { floor: 2, top: 121, left: -256, set: 1, letter: 'B' }
        ],
        secureObjectives: [
          { floor: 0, top: -26, left: -183, set: 1 },
          { floor: 0, top: -34, left: 364, set: 2 },
          { floor: 1, top: -6, left: 326, set: 3 },
          { floor: 2, top: 0, left: 305, set: 4 }
        ],
        zoomPoints: {
          topLeft: { top: -196, left: -354 },
          bottomRight: { top: 299, left: 455 }
        },
        compassPoints: {
          top: 314, left: 422
        },
        cameras: [
          { floor: 2, top: 26, left: -220, id: 1 },
          { floor: 2, top: -168, left: 11, id: 2 },
          { floor: 1, otherFloor: 'up', top: -168, left: 11, id: 2 },
          { floor: 1, top: -78, left: 374, id: 3 },
          { floor: 1, top: 243, left: 11, id: 4 },
          { floor: 0, top: -79, left: 40, id: 5 },
          { floor: 0, top: -35, left: -150, id: 6 },
          { outdoor: true, top: 498, left: -50, id: 7 },
          { outdoor: true, top: -32, left: -537, id: 8 }
        ],
        ceilingHatches: [
          { floor: 0, top: 20, left: -172 },
          { floor: 0, top: 179, left: 108 },
          { floor: 0, top: -78, left: 150 },
          { floor: 0, top: 177, left: 316 },
          { floor: 0, top: -79, left: 374 },
          { floor: 0, top: 94, left: 2 },
          { floor: 1, top: 28, left: -320 },
          { floor: 1, top: 100, left: -37 },
          { floor: 1, top: 28, left: 261 }
        ],
        skylights: [
          { floor: 1, otherFloor: 'up', top: -102, left: 10 },
          { floor: 1, otherFloor: 'up', top: -24, left: -303 },
          { floor: 2, top: -24, left: -303 },
          { floor: 2, top: -102, left: 10 },
          { floor: 3, otherFloor: 'down', top: -24, left: -303 },
          { floor: 3, otherFloor: 'down', top: -102, left: 10 }
        ],
        droneTunnels: [
          { floor: 0, top: 26, left: -356, rotate: 90, size: DRONE_MED },
          { floor: 0, top: 103, left: 87, rotate: 90, size: DRONE_SMALL },
          { floor: 0, top: 200, left: 138, rotate: 0, size: DRONE_MED },
          { floor: 1, top: -1, left: -142, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 186, left: 291, rotate: 90, size: DRONE_SMALL },
          { floor: 2, top: 67, left: 148, rotate: 90, size: DRONE_SMALL }
        ],
        spawnPoints: [
          { letter: 'A', top: 412, left: 622, description: 'Riot Barricade' },
          { letter: 'B', top: 634, left: -329, description: 'Police Line' },
          { letter: 'C', top: -509, left: -664, description: 'Gas Station' },
          { letter: 'D', top: -322, left: 745, description: 'Side Entrance' }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 60, left: -602, description: 'Garage Way' },
          { outdoor: true, top: -323, left: -267, description: 'Courtyard' },
          { outdoor: true, top: -323, left: 204, description: 'Courtyard' },
          { outdoor: true, top: -314, left: -119, description: 'Back Courtyard' },
          { outdoor: true, top: -284, left: 577, description: 'Side Entrance' },
          { outdoor: true, top: -118, left: 476, description: 'Dumpster' },
          { outdoor: true, top: 23, left: 592, description: 'Parking' },
          { outdoor: true, top: 272, left: 592, description: 'Parking' },
          { outdoor: true, top: -137, left: 227, description: 'Gardens' },
          { outdoor: true, top: -137, left: -201, description: 'Gardens' },
          { outdoor: true, top: 358, left: -522, description: 'Fountain' },
          { outdoor: true, top: -97, left: -368, description: 'Yellow Entrance', rotate: -90 },
          { outdoor: true, top: 66, left: -399, description: 'Garage Roof' },
          { outdoor: true, top: -127, left: -660, description: 'Memorial' },
          { outdoor: true, top: 622, left: -85, description: 'Police' },
          { outdoor: true, top: 622, left: 358, description: 'Barracade' },
          { outdoor: true, top: 438, left: -219, description: 'West Front Yard' },
          { outdoor: true, top: 438, left: 224, description: 'East Front Yard' },
          { outdoor: true, top: 438, left: 9, description: 'Front Alley' },
          // OF
          { floor: 0, top: -73, left: -307, description: 'Yellow Stairs' },
          { floor: 0, top: 29, left: -222, description: 'Garage', site: true, bomb: true, secure: true },
          { floor: 0, top: -62, left: -67, description: 'Garage Corridor' },
          { floor: 0, top: 7, left: -47, description: 'Security' },
          { floor: 0, top: 121, left: -67, description: 'Kitchen', site: true, bomb: true },
          { floor: 0, top: -150, left: 11, description: 'Spiral' },
          { floor: 0, top: 31, left: 46, description: 'Locker' },
          { floor: 0, top: 144, left: 122, description: 'Visa Stairs' },
          { floor: 0, top: -62, left: 113, description: 'Electric' },
          { floor: 0, top: 77, left: 127, description: 'Storage' },
          { floor: 0, top: -24, left: 245, description: 'Archives', site: true, hostage: true, bomb: true, secure: true },
          { floor: 0, top: 185, left: 245, description: 'Archives Corridor' },
          { floor: 0, top: 64, left: -182, description: 'Pillar' },
          { floor: 0, top: 126, left: -252, description: 'White Truck' },
          { floor: 0, top: -61, left: -203, description: 'Pipes' },
          // 1F
          { floor: 1, top: -73, left: -305, description: 'Yellow Stairs' },
          { floor: 1, top: 105, left: -276, description: 'Piano', site: true, bomb: true },
          { floor: 1, top: -61, left: -133, description: 'West Corridor' },
          { floor: 1, top: -13, left: -133, description: 'West Corridor' },
          { floor: 1, top: 49, left: -105, description: 'Bathroom' },
          { floor: 1, top: 167, left: -139, description: 'Antechamber' },
          { floor: 1, top: 44, left: 9, description: 'Lobby', site: true, bomb: true },
          { floor: 1, top: -40, left: 166, description: 'East Corridor' },
          { floor: 1, top: 52, left: 138, description: 'Tellers', site: true, hostage: true, bomb: true },
          { floor: 1, top: 149, left: 139, description: 'Visa Stairs' },
          { floor: 1, top: 189, left: 184, description: 'Visa Stairs' },
          { floor: 1, top: -7, left: 260, description: 'Visa', site: true, secure: true },
          { floor: 1, top: 64, left: 352, description: 'Visa', site: true, secure: true },
          { floor: 1, top: -36, left: 10, description: 'Spiral' },
          { floor: 1, top: 168, left: 442, description: 'Visa Entrance' },
          { floor: 1, top: 298, left: 10, description: 'Front Door' },
          // 2F
          { floor: 2, top: 300, left: 10, description: 'Balcony' },
          { floor: 2, top: 195, left: 184, description: 'Visa Stairs' },
          { floor: 2, top: -48, left: 161, description: 'Copy' },
          { floor: 2, top: 39, left: -275, description: 'Cabinet' },
          { floor: 2, top: 100, left: 323, description: 'Admin', site: true, hostage: true, secure: true },
          { floor: 2, top: -32, left: 10, description: 'Spiral' },
          { floor: 2, top: 29, left: 186, description: 'Break' },
          { floor: 2, top: 132, left: 156, description: 'Front Office' },
          { floor: 2, top: 142, left: 19, description: 'Meeting', site: true, bomb: true },
          { floor: 2, top: 28, left: 11, description: 'Long Desk' },
          { floor: 2, top: 38, left: -146, description: 'Flag' },
          { floor: 2, top: -48, left: -137, description: 'Top Bathroom' },
          { floor: 2, top: -71, left: -300, description: 'Yellow Stairs' },
          { floor: 2, top: 156, left: -109, description: 'Connector' },
          { floor: 2, top: 164, left: -265, description: 'CEO', site: true, hostage: true, bomb: true },
          // 3F
          { floor: 3, top: 300, left: 10, description: 'Balcony' },
          { floor: 3, top: 42, left: -166, description: 'Roof' },
          { floor: 3, top: 42, left: 177, description: 'Roof' }
        ]
      },
      favela: {
        name: 'Favela',
        imgUrlPrefix: 'favela',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -451, right: -800, height: 217, width: 462
        },
        floors: [
          { index: 0, top: -450, left: -800, width: 1600, name: floorTerms.basement, background: true },
          { index: 1, top: -450, left: -532, width: 883, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -450, left: -532, width: 883, name: floorTerms.secondFloor },
          { index: 3, top: -450, left: -532, width: 883, name: floorTerms.thirdFloor },
          { index: 4, top: -450, left: -532, width: 883, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: -56, left: -99, set: 1 },
          { floor: 2, top: 144, left: -32, set: 2 },
          { floor: 1, top: -69, left: -38, set: 3 },
          { floor: 1, top: 133, left: -61, set: 4 }
        ],
        bombObjectives: [
          { floor: 2, top: -160, left: 151, set: 1, letter: 'A' },
          { floor: 2, top: -217, left: 45, set: 1, letter: 'B' },
          { floor: 2, top: -27, left: -262, set: 2, letter: 'B' },
          { floor: 2, top: 78, left: -263, set: 2, letter: 'A' },
          { floor: 1, top: 155, left: -96, set: 3, letter: 'A' },
          { floor: 1, top: 270, left: -151, set: 3, letter: 'B' },
          { floor: 1, top: -62, left: -190, set: 4, letter: 'A' },
          { floor: 1, top: 83, left: -344, set: 4, letter: 'B' }
        ],
        secureObjectives: [
          { floor: 2, top: -116, left: 80, set: 1 },
          { floor: 1, top: -69, left: -47, set: 2 },
          { floor: 2, top: -241, left: -81, set: 3 },
          { floor: 1, top: 97, left: -73, set: 4 }
        ],
        zoomPoints: {
          topLeft: { top: -310, left: -584 },
          bottomRight: { top: 354, left: 183 }
        },
        compassPoints: {
          top: 102, left: 690
        },
        ladders: [
          { floor: 1, top: 476, left: -161, otherFloor: 'up' },
          { floor: 2, top: 476, left: -161, otherFloor: 'down' },
          { floor: 1, top: 309, left: 19, otherFloor: 'up' },
          { floor: 2, top: 309, left: 19, otherFloor: 'down' },
          { floor: 2, top: 166, left: 343, otherFloor: 'up' },
          { floor: 3, top: 166, left: 343, otherFloor: 'down' },
          { floor: 3, top: -138, left: 477, otherFloor: 'up' },
          { floor: 4, top: -138, left: 477, otherFloor: 'down' }
        ],
        cameras: [
          { floor: 3, top: -295, left: -45, id: 1 },
          { floor: 2, top: 299, left: -210, id: 2 },
          { floor: 1, top: -126, left: -69, id: 3 },
          { floor: 1, top: 156, left: -246, id: 4 },
          { outdoor: true, top: -384, left: -498, id: 5 },
          { outdoor: true, top: 346, left: 18, id: 6 },
          { outdoor: true, top: -525, left: 230, id: 7 }
        ],
        ceilingHatches: [
          { floor: 1, top: 1, left: -179 },
          { floor: 1, top: 39, left: -292 },
          { floor: 2, top: -222, left: 79 },
          { floor: 2, top: 264, left: -66 },
          { floor: 1, top: -244, left: -121 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 1, top: 111, left: -380, rotate: 90, size: DRONE_MED },
          { floor: 1, top: -285, left: -32, rotate: 0, size: DRONE_MED },
          { floor: 2, top: 128, left: -135, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 5, left: -281, rotate: 0, size: DRONE_SMALL },
          { floor: 2, top: -110, left: -184, rotate: 0, size: DRONE_SMALL },
          { floor: 2, top: -91, left: -201, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: 126, left: -99, rotate: 0, size: DRONE_SMALL }
        ],
        spawnPoints: [
          { letter: 'A', top: -213, left: 657, description: 'Rooftops' },
          { letter: 'B', top: 469, left: -543, description: 'Market' },
          { letter: 'C', top: -617, left: -409, description: 'Schoolyard' }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: -521, left: -416, description: 'Schoolyard' },
          { outdoor: true, top: -501, left: -34, description: 'School Roof' },
          { outdoor: true, top: -417, left: 108, description: 'Back Alley' },
          { outdoor: true, top: -87, left: 524, description: 'Courtyard' },
          { outdoor: true, top: -238, left: 409, description: 'Rooftops' },
          { outdoor: true, top: 36, left: 469, description: 'Rooftops' },
          { outdoor: true, top: 346, left: -44, description: 'Street' },
          { outdoor: true, top: 176, left: 502, description: 'Street' },
          { outdoor: true, top: 237, left: -591, description: 'Market Alley' },
          { outdoor: true, top: -156, left: -401, description: 'Football Field' },
          // 0F
          { floor: 0, top: 94, left: -53, description: 'Market' },
          { floor: 0, top: 208, left: -175, description: 'Tunnel', rotate: -90 },
          // 1F
          { floor: 1, top: -354, left: 116, description: 'Trash Chute Stairs' },
          { floor: 1, top: -54, left: 138, description: 'Laundry Hall', rotate: -90 },
          { floor: 1, top: 103, left: 224, description: 'Pink Solarium', rotate: -90 },
          { floor: 1, top: 177, left: -45, description: 'Pink Appartment', site: true, hostage: true, secure: true },
          { floor: 1, top: 98, left: 69, description: 'Pink Kitchen' },
          { floor: 1, top: 147, left: -179, description: 'Mezzanine Stairs', rotate: -90 },
          { floor: 1, top: -57, left: -243, description: 'Football Hall', rotate: -90 },
          { floor: 1, top: -207, left: -153, description: 'Green Appartment', site: true, bomb: true },
          { floor: 1, top: -262, left: -248, description: 'Green Bathroom', rotate: -90 },
          { floor: 1, top: -233, left: 36, description: 'Green Foosball', rotate: -90 },
          { floor: 1, top: -28, left: -21, description: 'Blue Appartment', site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: 13, left: 33, description: 'Blue Kitchen', site: true, bomb: true },
          { floor: 1, top: -96, left: -165, description: 'Blue Bedroom', site: true, bomb: true },
          // 2F
          { floor: 2, top: 111, left: -208, description: 'Mezzanine Stairs' },
          { floor: 2, top: -89, left: -190, description: 'Red Corridor', rotate: -90 },
          { floor: 2, top: -102, left: -240, description: 'Red Stairs', rotate: -90 },
          { floor: 2, top: -219, left: -15, description: 'Storage', site: true, bomb: true, secure: true },
          { floor: 2, top: -269, left: -125, description: 'Armory', rotate: -90 },
          { floor: 2, top: -262, left: -228, description: 'Armory Balcony' },
          { floor: 2, top: -358, left: 182, description: 'Trash Chute Stairs' },
          { floor: 2, top: -48, left: 43, description: 'Coin Farm', site: true, bomb: true, secure: true },
          { floor: 2, top: 3, left: -120, description: 'Haker Den', site: true, hostage: true },
          { floor: 2, top: 124, left: -17, description: 'Bunks', site: true, hostage: true, bomb: true },
          { floor: 2, top: 184, left: 125, description: 'Office' },
          { floor: 2, top: 36, left: 149, description: 'Stairs', rotate: -90 },
          { floor: 2, top: 127, left: 215, description: 'Solarium Roof' },
          // 3F
          { floor: 3, top: 0, left: 0, description: 'Roof' },
          { floor: 3, top: 265, left: -411, description: 'Market Roof' },
          { floor: 3, top: 127, left: 215, description: 'Solarium Roof' },
          { floor: 3, top: -102, left: -240, description: 'Red Stairs', rotate: -90 },
          { floor: 3, top: -243, left: 157, description: 'Trash Chute Stairs' },
          { floor: 3, top: -345, left: 112, description: 'Electrical' }
        ]
      },
      fortress: {
        name: 'Fortress',
        imgUrlPrefix: 'fortress',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -922, right: -649, height: 215, width: 462
        },
        floors: [
          { index: 1, top: -824, left: -603, width: 1252, name: floorTerms.firstFloor, background: true, default: true },
          { index: 2, top: -370, left: -362, width: 946, name: floorTerms.secondFloor },
          { index: 3, top: -370, left: -362, width: 946, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: -36, left: -25, set: 1 },
          { floor: 2, top: 204, left: 215, set: 2 },
          { floor: 1, top: 37, left: 63, set: 3 },
          { floor: 1, top: 141, left: -202, set: 4 }
        ],
        bombObjectives: [
          { floor: 2, top: -161, left: -178, set: 1, letter: 'B' },
          { floor: 2, top: -178, left: 1, set: 1, letter: 'A' },
          { floor: 2, top: -4, left: 144, set: 2, letter: 'B' },
          { floor: 2, top: 258, left: 13, set: 2, letter: 'A' },
          { floor: 1, top: 108, left: 196, set: 3, letter: 'B' },
          { floor: 1, top: 37, left: 93, set: 3, letter: 'A' },
          { floor: 1, top: -64, left: -268, set: 4, letter: 'B' },
          { floor: 1, top: 141, left: -232, set: 4, letter: 'A' }
        ],
        secureObjectives: [
          { floor: 2, top: -151, left: -148, set: 1 },
          { floor: 2, top: 142, left: 54, set: 2 },
          { floor: 1, top: 108, left: 166, set: 3 },
          { floor: 1, top: -157, left: -10, set: 4 }
        ],
        zoomPoints: {
          topLeft: { top: -344, left: -388 },
          bottomRight: { top: 436, left: 522 }
        },
        compassPoints: {
          top: 575, left: 533
        },
        ladders: [
          { floor: 1, top: -238, left: 279, otherFloor: 'up' },
          { floor: 2, top: -238, left: 279, otherFloor: 'down' }
        ],
        cameras: [
          { floor: 2, top: -278, left: -267, id: 1 },
          { floor: 2, top: 46, left: -57, id: 2 },
          { floor: 2, top: 313, left: 330, id: 3 },
          { floor: 1, top: -234, left: -176, id: 4 },
          { floor: 1, top: 224, left: -40, id: 5 },
          { outdoor: true, top: -234, left: -375, id: 6 },
          { outdoor: true, top: 202, left: 415, id: 7 },
          { floor: 3, top: 315, left: 123, id: 8 }
        ],
        ceilingHatches: [
          { floor: 2, top: 358, left: 89 },
          { floor: 1, top: 297, left: 322 },
          { floor: 1, top: 37, left: 56 },
          { floor: 1, top: -10, left: -63 }
        ],
        skylights: [
          { floor: 1, otherFloor: 'up', top: -113, left: 186 },
          { floor: 2, top: -113, left: 186 },
          { floor: 3, otherFloor: 'down', top: -113, left: 186 }
        ],
        droneTunnels: [
          // 1F
          // external walls, starting south west going ccw
          { floor: 1, top: 298, left: -98, rotate: 0, size: 23 },
          { floor: 1, top: 259, left: 106, rotate: 90, size: 23 },
          { floor: 1, top: 307, left: 263, rotate: 90, size: 23 },
          { floor: 1, top: -56, left: 259, rotate: 90, size: 23 },
          { floor: 1, top: -268, left: 287, rotate: 0, size: 23 },
          { floor: 1, top: -316, left: -13, rotate: 0, size: 51 },
          { floor: 1, top: -251, left: -283, rotate: 90, size: 40 },
          { floor: 1, top: -258, left: -260, rotate: 45, size: 23 },
          // internal walls, starting south, going north
          { floor: 1, top: 223, left: -109, rotate: 135, size: 10 },
          { floor: 1, top: 223, left: -93, rotate: 90, size: 29 },
          { floor: 1, top: 147, left: 22, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: -16, left: 61, rotate: 0, size: 44 },
          { floor: 1, top: -152, left: -97, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: -199, left: -194, rotate: 90, size: DRONE_SMALL },
          // 2F
          // external walls
          { floor: 2, top: 261, left: -83, rotate: 90, size: 23 },
          { floor: 2, top: -50, left: 280, rotate: 90, size: 23 },
          // internal walls
          { floor: 2, top: 282, left: 132, rotate: 0, size: DRONE_SMALL },
          { floor: 2, top: 185, left: 118, rotate: 90, size: DRONE_SMALL },
          { floor: 2, top: 74, left: 46, rotate: 0, size: DRONE_SMALL },
          { floor: 2, top: 32, left: -28, rotate: 0, size: DRONE_SMALL },
          { floor: 2, top: -117, left: 58, rotate: 90, size: DRONE_SMALL },
          { floor: 2, top: -235, left: -176, rotate: 0, size: DRONE_SMALL }
        ],
        spawnPoints: [
          { letter: 'A', top: -690, left: -370, description: 'Main Gate' },
          { letter: 'B', top: -690, left: 170, description: 'Parking' },
          { letter: 'C', top: 670, left: 15, description: 'Garden' },
          { letter: 'D', top: 580, left: 415, description: 'Stable' }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 372, left: -260, description: 'Garden Path' },
          { floor: 1, top: 345, left: 0, description: 'Garden Path' },
          { outdoor: true, top: 380, left: 180, description: 'Garden Path' },
          { outdoor: true, top: 400, left: 370, description: 'Stable Path' },
          { outdoor: true, top: 201, left: 509, description: 'Cliffside' },
          { outdoor: true, top: -9, left: 499, description: 'Cliffside' },
          { outdoor: true, top: -239, left: 419, description: 'Cliffside' },
          { outdoor: true, top: -499, left: 380, description: 'Cliffside' },
          { outdoor: true, top: 108, left: 384, description: 'Courtyard Path' },
          { outdoor: true, top: -120, left: 363, description: 'Courtyard Path', rotate: -90 },
          { outdoor: true, top: 219, left: -401, description: 'Cannon' },
          { outdoor: true, top: -19, left: -401, description: 'Cannon' },
          { outdoor: true, top: -290, left: -341, description: 'Cannon' },
          { outdoor: true, top: -287, left: 225, description: 'Unloading' },
          { outdoor: true, top: -367, left: -120, description: 'Front Entrance' },
          // 1F
          { floor: 1, top: 277, left: 329, description: 'Laundry' },
          { floor: 1, top: 156, left: -153, description: 'Hammam', site: true, hostage: true, bomb: true },
          { floor: 1, top: 255, left: -242, description: 'Hammam', site: true, bomb: true },
          { floor: 1, top: 280, left: -107, description: 'Showers' },
          { floor: 1, top: 250, left: 191, description: 'Cafeteria Hallway' },
          { floor: 1, top: 212, left: -30, description: 'Hammam Hallway' },
          { floor: 1, top: 184, left: 294, description: 'Old Stairs' },
          { floor: 1, top: 156, left: 143, description: 'Cafeteria', site: true, bomb: true, secure: true },
          { floor: 1, top: 97, left: -15, description: 'Main Stairs' },
          { floor: 1, top: 70, left: 275, description: 'Infirmary' },
          { floor: 1, top: 32, left: 16, description: 'Kitchen', site: true, hostage: true, bomb: true },
          { floor: 1, top: 44, left: -197, description: 'Changing' },
          { floor: 1, top: -83, left: -115, description: 'Dining Hallway', rotate: -90 },
          { floor: 1, top: 69, left: -49, description: 'Changing Hallway', rotate: -90 },
          { floor: 1, top: 12, left: 168, description: 'Waiting' },
          { floor: 1, top: -31, left: -207, description: 'Sitting', site: true, bomb: true },
          { floor: 1, top: -96, left: -4, description: 'Dining', site: true, secure: true },
          { floor: 1, top: -103, left: 138, description: 'Fountain' },
          { floor: 1, top: -158, left: -239, description: 'Music' },
          { floor: 1, top: -223, left: -128, description: 'Lobby' },
          { floor: 1, top: -220, left: 246, description: 'Ladder' },
          { floor: 1, top: -251, left: -13, description: 'Office' },
          { floor: 1, top: -200, left: 6, description: 'Office Hallway' },
          { floor: 1, top: -299, left: -237, description: 'Lobby Stairs' },
          // 2F
          { floor: 2, top: 190, left: -200, description: 'Hammam Roof' },
          { floor: 2, top: 366, left: 33, description: 'Shisha' },
          { floor: 2, top: 313, left: 190, description: 'Gaming Hallway' },
          { floor: 2, top: 220, left: -39, description: 'Dormitory Hallway', rotate: -90 },
          { floor: 2, top: 62, left: 30, description: 'Bathroom  Hallway' },
          { floor: 2, top: 230, left: 52, description: 'Dormitory', site: true, bomb: true, secure: true },
          { floor: 2, top: 132, left: 104, description: 'Dormitory', site: true, bomb: true, secure: true },
          { floor: 2, top: 249, left: 191, description: 'Gaming', site: true, hostage: true },
          { floor: 2, top: 163, left: -7, description: 'Main Stairs' },
          { floor: 2, top: 58, left: 200, description: 'Briefing', site: true, bomb: true },
          { floor: 2, top: 56, left: 327, description: 'Courtyard Balcony', rotate: -90 },
          { floor: 2, top: -145, left: -240, description: 'Portrait' },
          { floor: 2, top: 6, left: -141, description: 'Horse' },
          { floor: 2, top: 6, left: -14, description: 'Bathroom', site: true, hostage: true },
          { floor: 2, top: -103, left: -120, description: 'Commander', site: true, bomb: true, secure: true },
          { floor: 2, top: -131, left: 7, description: 'Bedroom', site: true, bomb: true },
          { floor: 2, top: -101, left: 143, description: 'Fountain' },
          { floor: 2, top: -43, left: 186, description: 'mezzanine' },
          { floor: 2, top: -158, left: 186, description: 'mezzanine' },
          { floor: 2, top: -200, left: 280, description: 'Fountain Tower' },
          { floor: 2, top: -297, left: -236, description: 'Lobby Stairs' },
          { floor: 2, top: -246, left: -160, description: 'Renovation Hallway' },
          { floor: 2, top: -279, left: 0, description: 'Renovation' },
          { floor: 2, top: 190, left: 309, description: 'Old Stairs' },
          // 3F
          { floor: 3, top: 190, left: -200, description: 'Hammam Roof' },
          { floor: 3, top: 230, left: 100, description: 'Old Roof' },
          { floor: 3, top: 282, left: 356, description: 'Old' },
          { floor: 3, top: -108, left: 0, description: 'Modern Roof' },
          { floor: 3, top: 56, left: 327, description: 'Courtyard Balcony', rotate: -90 },
          { floor: 3, top: -288, left: -226, description: 'West Tower' },
          { floor: 3, top: -288, left: 16, description: 'East Tower' },
          { floor: 3, top: -228, left: 280, description: 'Guard Tower' }
        ]
      },
      hereford: {
        name: 'Hereford',
        imgUrlPrefix: 'hereford',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -412, right: -823, height: 217, width: 481
        },
        floors: [
          { index: 0, top: -851, left: -754, width: 1577, name: floorTerms.basement, background: true },
          { index: 1, top: -292, left: -277, width: 514, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -292, left: -277, width: 514, name: floorTerms.secondFloor },
          { index: 3, top: -292, left: -277, width: 514, name: floorTerms.thirdFloor },
          { index: 4, top: -292, left: -277, width: 514, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 3, top: 58, left: -30, set: 1 },
          { floor: 2, top: -59, left: 102, set: 2 },
          { floor: 1, top: 83, left: -76, set: 3 },
          { floor: 0, top: 73, left: -117, set: 4 }
        ],
        bombObjectives: [
          { floor: 0, top: 58, left: -37, set: 4, letter: 'B' },
          { floor: 0, top: -119, left: -100, set: 4, letter: 'A' },
          { floor: 1, top: 72, left: -35, set: 3, letter: 'A' },
          { floor: 1, top: 72, left: 73, set: 3, letter: 'B' },
          { floor: 2, top: -37, left: 147, set: 2, letter: 'B' },
          { floor: 2, top: -133, left: -9, set: 2, letter: 'A' },
          { floor: 3, top: 58, left: -60, set: 1, letter: 'B' },
          { floor: 3, top: -198, left: -64, set: 1, letter: 'A' }
        ],
        secureObjectives: [
          { floor: 2, top: 112, left: -47, set: 1 },
          { floor: 2, top: -93, left: -9, set: 2 },
          { floor: 1, top: -67, left: 69, set: 3 },
          { floor: 0, top: -74, left: 79, set: 4 }
        ],
        zoomPoints: {
          topLeft: { top: -280, left: -340 },
          bottomRight: { top: 234, left: 285 }
        },
        compassPoints: {
          top: 74, left: 569
        },
        ladders: [
          { floor: 0, top: 165, left: 95, otherFloor: 'up' },
          { floor: 1, top: 163, left: 112, otherFloor: 'down' }
        ],
        cameras: [
          { floor: 3, top: -54, left: 66, id: 1 },
          { floor: 2, top: 8, left: 58, id: 2 },
          { floor: 1, top: -16, left: 35, id: 3 },
          { floor: 0, top: -13, left: 35, id: 4 },
          { outside: true, top: -181, left: -326, id: 5 },
          { outside: true, top: 218, left: 190, id: 6 },
          { outside: true, top: -361, left: 273, id: 7 }
        ],
        ceilingHatches: [
          { floor: 0, top: -125, left: -119 },
          { floor: 0, top: 86, left: -230 },
          { floor: 0, top: 86, left: 123 },
          { floor: 1, top: 129, left: -111 },
          { floor: 1, top: -215, left: -3 },
          { floor: 2, top: -209, left: -167 },
          { floor: 2, top: -209, left: 147 },
          { floor: 2, top: 143, left: 147 },
          { floor: 2, top: 20, left: -62 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 1, top: 193, left: -65, rotate: 0, size: 9 },
          { floor: 1, top: 146, left: 141, rotate: 0, size: 9 },
          { floor: 1, top: 7, left: -244, rotate: 90, size: 9 },
          { floor: 1, top: -231, left: -13, rotate: 0, size: 9 },
          { floor: 2, top: 3, left: -115, rotate: 0, size: 9 },
          { floor: 4, top: -1, left: -41, rotate: 90, size: DRONE_SMALL, otherFloor: 'down' }
        ],
        spawnPoints: [
          { letter: 'A', top: 93, left: -639, description: 'Tower' },
          { letter: 'B', top: 105, left: 753, description: 'Spitfire' },
          { letter: 'C', top: -820, left: 39, description: 'Shooting Range' }
        ],
        roomLabels: [
          // EXT
          { outside: true, top: 293, left: -274, description: 'Street' },
          { outside: true, top: 290, left: -3, description: 'Street' },
          { outside: true, top: 287, left: 225, description: 'Street' },
          { outside: true, top: 205, left: -154, description: 'Street' },
          { outside: true, top: 141, left: -313, description: 'West Courtyard' },
          { outside: true, top: -126, left: -300, description: 'West Courtyard' },
          { outside: true, top: 150, left: 241, description: 'East Courtyard' },
          { outside: true, top: -188, left: 240, description: 'East Courtyard' },
          { outside: true, top: -309, left: -186, description: 'Barnyard' },
          { outside: true, top: -317, left: 143, description: 'Barnyard' },
          // OF
          { floor: 0, top: -1, left: 168, description: 'East Tunnel', rotate: -90 },
          { floor: 0, top: 115, left: -63, description: 'Fermentation', site: true, hostage: true, bomb: true },
          { floor: 0, top: 96, left: 42, description: 'Main Stairs', rotate: -90 },
          { floor: 0, top: 64, left: -206, description: 'Generator' },
          { floor: 0, top: 47, left: 93, description: 'Workshop' },
          { floor: 0, top: -79, left: -204, description: 'West Tunnel', rotate: -90 },
          { floor: 0, top: -49, left: -75, description: 'Brewery', site: true, bomb: true },
          { floor: 0, top: -95, left: 83, description: 'Barrel', site: true, secure: true },
          { floor: 0, top: -112, left: -167, description: 'Blue Stairs' },
          { floor: 0, top: -173, left: 88, description: 'Barn' },
          { floor: 0, top: -26, left: -155, description: 'Brewery Hallway', rotate: -90 },
          { floor: 0, top: -5, left: 18, description: 'Workshop Hallway', rotate: -90 },
          // 1F
          { floor: 1, top: 182, left: 16, description: 'Prep' },
          { floor: 1, top: 51, left: -68, description: 'Kitchen', site: true, hostage: true, bomb: true },
          { floor: 1, top: 111, left: 53, description: 'Main Stairs', rotate: -90 },
          { floor: 1, top: 45, left: 103, description: 'Dining', site: true, bomb: true },
          { floor: 1, top: 54, left: -187, description: 'Garage' },
          { floor: 1, top: 36, left: 23, description: 'Kitchen<br/>Hallway' },
          { floor: 1, top: -104, left: -162, description: 'Blue Stairs' },
          { floor: 1, top: -65, left: 111, description: 'Piano', site: true, secure: true },
          { floor: 1, top: -74, left: -61, description: 'Living' },
          { floor: 1, top: -165, left: -7, description: 'Foyer' },
          { floor: 1, top: -171, left: 97, description: 'Barn' },
          { floor: 1, top: -13, left: -60, description: 'Garage Hallway' },
          { floor: 1, top: -88, left: 36, description: 'Living Hallway', rotate: -90 },
          // 2F
          { floor: 2, top: 90, left: -60, description: 'Loom', site: true, secure: true },
          { floor: 2, top: 122, left: 62, description: 'Main Stairs', rotate: -90 },
          { floor: 2, top: 110, left: 124, description: 'Laundry' },
          { floor: 2, top: 33, left: -187, description: 'Garage Roof' },
          { floor: 2, top: 40, left: -99, description: 'Closet' },
          { floor: 2, top: -67, left: -82, description: 'Ninety' },
          { floor: 2, top: -14, left: 10, description: 'Ninety' },
          { floor: 2, top: -81, left: 114, description: 'Master', site: true, hostage: true, bomb: true },
          { floor: 2, top: -98, left: -151, description: 'Blue Stairs' },
          { floor: 2, top: -109, left: 27, description: 'Kids', site: true, bomb: true, secure: true },
          { floor: 2, top: -154, left: 109, description: 'Bathroom' },
          { floor: 2, top: -171, left: -116, description: 'Sewing' },
          { floor: 2, top: 37, left: 83, description: 'Master Hallway' },
          { floor: 2, top: 190, left: 19, description: 'Loom Balcony' },
          { floor: 2, top: -97, left: 222, description: 'Outside Stairs', rotate: -90 },
          { floor: 2, top: -173, left: 193, description: 'Bathroom Balcony', rotate: -90 },
          // 3F
          { floor: 3, top: 120, left: -50, description: 'Tractor', site: true, hostage: true, bomb: true },
          { floor: 3, top: 127, left: 61, description: 'Main Stairs', rotate: -90 },
          { floor: 3, top: 96, left: 124, description: 'Attic South' },
          { floor: 3, top: -68, left: 66, description: 'Attic Middle' },
          { floor: 3, top: -157, left: 93, description: 'Attic North' },
          { floor: 3, top: -93, left: -146, description: 'Blue Stairs' },
          { floor: 3, top: -37, left: 201, description: 'Outside Stairs', rotate: -90 },
          { floor: 3, top: -150, left: -80, description: 'Armory', site: true, bomb: true },
          { floor: 3, top: 33, left: -187, description: 'Garage Roof' },
          { floor: 3, top: 206, left: 27, description: 'Tractor Balcony' },
          // 4F
          { floor: 4, top: 135, left: -35, description: 'Rooftop' },
          { floor: 4, top: -34, left: 121, description: 'Rooftop' },
          { floor: 4, top: -161, left: -17, description: 'Rooftop' },
          { floor: 4, top: 33, left: -187, description: 'Garage Roof' }
        ]
      },
      house: {
        name: 'House',
        imgUrlPrefix: 'house',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -455, right: -891, height: 217, width: 462
        },
        floors: [
          { index: 0, top: -383, left: -337, width: 990, name: floorTerms.basement, background: true },
          { index: 1, top: -283, left: -204, width: 515, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -283, left: -204, width: 515, name: floorTerms.secondFloor },
          { index: 3, top: -283, left: -204, width: 515, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 0, top: 56, left: 5, set: 1 },
          { floor: 1, top: 16, left: 198, set: 2 },
          { floor: 2, top: -140, left: -55, set: 3 },
          { floor: 2, top: 28, left: 203, set: 4 }
        ],
        bombObjectives: [
          { floor: 0, top: -16, left: 123, set: 4, letter: 'A' },
          { floor: 0, top: -115, left: -68, set: 4, letter: 'B' },
          { floor: 1, top: 160, left: 62, set: 3, letter: 'A' },
          { floor: 1, top: 144, left: -70, set: 3, letter: 'B' },
          { floor: 2, top: 28, left: 133, set: 2, letter: 'A' },
          { floor: 2, top: 70, left: -50, set: 2, letter: 'B' },
          { floor: 2, top: 70, left: -85, set: 1, letter: 'A' },
          { floor: 2, top: -140, left: -90, set: 1, letter: 'B' }
        ],
        secureObjectives: [
          { floor: 0, top: -16, left: 158, set: 1 },
          { floor: 1, top: -114, left: -71, set: 2 },
          { floor: 2, top: 70, left: -15, set: 3 },
          { floor: 2, top: 28, left: 168, set: 4 }
        ],
        zoomPoints: {
          topLeft: { top: -250, left: -250 },
          bottomRight: { top: 250, left: 250 }
        },
        compassPoints: {
          top: 100, left: 534
        },
        ladders: [
          { floor: 1, top: -10, left: -331, otherFloor: 'up' },
          { floor: 2, top: -10, left: -331, otherFloor: 'down' },
          { floor: 1, top: 46, left: -270, otherFloor: 'up' },
          { floor: 2, top: 46, left: -270, otherFloor: 'down' }
        ],
        cameras: [
          { floor: 2, top: -8, left: -166, id: 5 },
          { floor: 1, top: -8, left: -166, otherFloor: 'up', id: 5 },
          { floor: 2, top: -70, left: 74, id: 4 },
          { floor: 1, top: 13, left: 52, id: 3 },
          { floor: 0, top: -65, left: -122, id: 1 },
          { floor: 0, top: -75, left: 85, id: 2 },
          { outdoor: true, top: -175, left: -270, id: 6 },
          { outdoor: true, top: 394, left: 345, id: 7 }
        ],
        ceilingHatches: [
          { floor: 0, top: -106, left: -145 },
          { floor: 0, top: -20, left: -18 },
          { floor: 0, top: 32, left: 235 },
          { floor: 1, top: -70, left: 48 },
          { floor: 1, top: -20, left: 240 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 1, top: -74, left: -169, rotate: 351, size: 55, alternate: true },
          { floor: 1, top: 38, left: -141, rotate: 90, size: 10, alternate: true },
          { floor: 1, top: -183, left: 6, rotate: 0, size: 12, alternate: true },
          { floor: 1, top: 205, left: 21, rotate: 0, size: 12, alternate: true }
        ],
        spawnPoints: [
          { letter: 'A', top: -439, left: 118, description: 'Front Street' },
          { letter: 'B', top: 348, left: -140, description: 'APC' },
          { letter: 'C', top: 150, left: 479, description: 'Side Street' }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 308, left: 271, description: 'APC' },
          { outdoor: true, top: 308, left: -146, description: 'APC' },
          { outdoor: true, top: 20, left: 461, description: 'Side Street' },
          { outdoor: true, top: -36, left: 315, description: 'Garage Front' },
          { outdoor: true, top: 150, left: 275, description: 'Garage Side' },
          { outdoor: true, top: 218, left: -265, description: 'Patio' },
          { outdoor: true, top: -135, left: -189, description: 'Depot Stairs' },
          { outdoor: true, top: -70, left: -236, description: 'Treehouse Alley' },
          { outdoor: true, top: -337, left: 160, description: 'Front Yard' },
          { outdoor: true, top: -337, left: -95, description: 'Front Yard' },
          { outdoor: true, top: 22, left: -284, description: 'Treehouse' },
          // OF
          { floor: 0, top: -60, left: 10, description: 'Kitchen Stairs' },
          { floor: 0, top: 14, left: -141, description: 'Back Stairs' },
          { floor: 0, top: -198, left: -80, description: 'Depot' },
          { floor: 0, top: -142, left: -55, description: 'Gym', site: true, bomb: true },
          { floor: 0, top: 30, left: 5, description: 'Laundry', site: true, hostage: true },
          { floor: 0, top: -46, left: 147, description: 'Garage', site: true, bomb: true, secure: true },
          { floor: 0, top: 35, left: 197, description: 'Garage<br/>Entrance' },
          // 1F
          { floor: 1, top: 198, left: 153, description: 'Red Stairs' },
          { floor: 1, top: -57, left: 33, description: 'Kitchen Stairs', veryHardToRead: true },
          { floor: 1, top: -146, left: 99, description: 'Lobby Stairs' },
          { floor: 1, top: -19, left: -129, description: 'Back Stairs' },
          { floor: 1, top: -193, left: 128, description: 'Front Balcony' },
          { floor: 1, top: 238, left: -35, description: 'Porch' },
          { floor: 1, top: -150, left: -71, description: 'Gaming', site: true, secure: true },
          { floor: 1, top: 237, left: 114, description: 'TV Entrance' },
          { floor: 1, top: -112, left: 66, description: 'Lobby' },
          { floor: 1, top: -2, left: 68, description: 'Kitchen' },
          { floor: 1, top: -117, left: 198, description: 'Office' },
          { floor: 1, top: -8, left: 198, description: 'Dining', site: true, hostage: true },
          { floor: 1, top: 109, left: 184, description: 'Connector' },
          { floor: 1, top: 129, left: 78, description: 'TV', site: true, bomb: true },
          { floor: 1, top: 106, left: -70, description: 'Music', site: true, bomb: true },
          // 2F
          { floor: 2, top: -237, left: 117, description: 'Front Balcony' },
          { floor: 2, top: 246, left: 7, description: 'Porch' },
          { floor: 2, top: -191, left: 236, description: 'Porch Top', rotate: 45 },
          { floor: 2, top: 108, left: 201, description: 'Reading<br/>Balcony' },
          { floor: 2, top: 202, left: 149, description: 'Red Stairs' },
          { floor: 2, top: -148, left: 99, description: 'Lobby Stairs' },
          { floor: 2, top: -19, left: -130, description: 'Back Stairs' },
          { floor: 2, top: -170, left: -49, description: 'Pink', site: true, hostage: true, bomb: true },
          { floor: 2, top: -115, left: -1, description: 'Pink<br/>Dressing' },
          { floor: 2, top: 50, left: -50, description: 'Car', site: true, bomb: true, secure: true },
          { floor: 2, top: 163, left: -57, description: 'Play' },
          { floor: 2, top: -27, left: 27, description: 'Top Hallway' },
          { floor: 2, top: 36, left: 42, description: 'Master<br/>Dressing' },
          { floor: 2, top: 8, left: 168, description: 'Master', site: true, hostage: true, bomb: true, secure: true },
          { floor: 2, top: 131, left: 85, description: 'Reading' },
          { floor: 2, top: -91, left: 195, description: 'Bathroom' },
          { floor: 2, top: -190, left: 112, description: 'Bathroom Hallway' },
          // 3F/Roof
          { floor: 3, top: -10, left: 50, description: 'Rooftop' }
        ]
      },
      kafe: {
        name: 'Kafe Dostoyevsky',
        imgUrlPrefix: 'kafe',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -844, right: -484, height: 217, width: 462
        },
        floors: [
          { index: 1, top: -579, left: -758, width: 1242, name: floorTerms.firstFloor, background: true, default: true },
          { index: 2, top: -193, left: -242, width: 726, name: floorTerms.secondFloor },
          { index: 3, top: -193, left: -242, width: 726, name: floorTerms.thirdFloor },
          { index: 4, top: -193, left: -242, width: 726, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 1, top: 174, left: 9, set: 1 },
          { floor: 2, top: 70, left: 307, set: 2 },
          { floor: 2, top: 151, left: 34, set: 3 },
          { floor: 3, top: 178, left: 221, set: 4 }
        ],
        bombObjectives: [
          { floor: 1, top: 151, left: -32, set: 4, letter: 'A' },
          { floor: 1, top: 120, left: 129, set: 4, letter: 'B' },
          { floor: 2, top: 207, left: 174, set: 3, letter: 'A' },
          { floor: 2, top: 25, left: 242, set: 3, letter: 'B' },
          { floor: 2, top: 59, left: 25, set: 2, letter: 'A' },
          { floor: 2, top: 180, left: 174, set: 2, letter: 'B' },
          { floor: 3, top: 101, left: 318, set: 1, letter: 'A' },
          { floor: 3, top: -38, left: 192, set: 1, letter: 'B' }
        ],
        secureObjectives: [
          { floor: 1, top: 163, left: -9, set: 1 },
          { floor: 2, top: 23, left: 270, set: 2 },
          { floor: 2, top: 151, left: -61, set: 3 },
          { floor: 3, top: 92, left: -58, set: 4 }
        ],
        zoomPoints: {
          topLeft: { top: -209, left: -238 },
          bottomRight: { top: 335, left: 479 }
        },
        compassPoints: {
          top: 460, left: 390
        },
        ladders: [
          { floor: 1, top: 608, left: 298, otherFloor: 'up' },
          { floor: 2, top: 608, left: 298, otherFloor: 'down' },
          { floor: 1, top: 151, left: -374, otherFloor: 'up' },
          { floor: 2, top: 151, left: -374, otherFloor: 'down' },
          { floor: 1, top: -345, left: 290, otherFloor: 'up' },
          { floor: 2, top: -345, left: 290, otherFloor: 'down' }
        ],
        cameras: [
          { floor: 2, otherFloor: 'up', top: -129, left: 268, id: 1 },
          { floor: 3, top: -126, left: 281, id: 1 },
          { floor: 2, top: 135, left: 96, id: 2 },
          { floor: 1 , top: 62, left: 244 , id: 3 },
          { floor: 1, top: 34, left: -197, id: 4 },
          { outdoor: true, top: -138, left: -328, id: 5 },
          { outdoor: true, top: 445, left: 396, id: 6 }
        ],
        ceilingHatches: [
          { floor: 1, top: 218, left: 184 },
          { floor: 2, top: 188, left: 30 },
          { floor: 2, top: 156, left: 339 },
          { floor: 2, top: -32, left: 55 },
          { floor: 3, top: -23, left: -31 },
          { floor: 3, top: -99, left: 59 }
        ],
        skylights: [
          { floor: 3, top: -27, left: 193 },
          { floor: 4, otherFloor: 'down', top: -15, left: 200 }
        ],
        droneTunnels: [
          { floor: 1, top: 247, left: 11, rotate: 0, size: 11 },
          { floor: 1, top: 152, left: 214, rotate: 90, size: 8 },
          { floor: 1, top: 28, left: -79, rotate: 0, size: 8 },
          { floor: 2, top: 119, left: 359, rotate: 0, size: 12 },
          { floor: 2, top: 108, left: 78, rotate: 90, size: 8 },
          { floor: 2, top: 11, left: 135, rotate: 0, size: 8 },
          { floor: 3, top: 34, left: -4, rotate: 90, size: 8 }
        ],
        spawnPoints: [
          { letter: 'A', top: -528, left: 111, description: 'Docks' },
          { letter: 'B', top: 112, left: -689, description: 'Market' },
          { letter: 'C', top: 571, left: 161, description: 'Park' }
        ],
        roomLabels: [
          // EXT
          { outdoor: true,  top: 577, left: 387, description: 'Back Alley' },
          { outdoor: true,  top: 344, left: -230, description: 'Garage' },
          { outdoor: true,  top: 379, left: 131, description: 'Back Alley' },
          { outdoor: true,  top: 74, left: -287, description: 'Parking' },
          { outdoor: true, top: -229, left: -268, description: 'West Street' },
          { outdoor: true,  top: -227, left: 153, description: 'Main Street' },
          { outdoor: true,  top: -228, left: 631, description: 'East Street' },
          { outdoor: true,  top: 44, left: 425, description: 'Terrace' },
          // 1F
          { floor: 1, top: 137, left: 248, description: 'VIP Corridor', rotate: -90 },
          { floor: 1, top: 264, left: 273, description: 'Garage' },
          { floor: 1, top: 97, left: -163, description: 'Bakery' },
          { floor: 1, top: 208, left: -96, description: 'Prep' },
          { floor: 1, top: 102, left: -23, description: 'Cooking', site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: 95, left: 126, description: 'Service', site: true, bomb: true },
          { floor: 1, top: 197, left: 169, description: 'Freezer' },
          { floor: 1, top: 207, left: 296, description: 'White Stairs' },
          { floor: 1, top: 102, left: 295, description: 'VIP' },
          { floor: 1, top: -6, left: 171, description: 'Bottom Bar' },
          { floor: 1, top: -49, left: 296, description: 'Restaurant' },
          { floor: 1, top: -27, left: -157, description: 'Small Bakery' },
          { floor: 1, top: -94, left: -59, description: 'Red Stairs' },
          { floor: 1, top: -83, left: 10, description: 'Coat' },
          { floor: 1, top: -73, left: 108, description: 'Reception' },
          { floor: 1, top: -101, left: 216, description: 'Wood Stairs' },
          { floor: 1, top: -3, left: 0, description: 'Bakery Corridor' },
          // 2F
          { floor: 2,  top: 174, left: -162, description: 'Bakery Roof' },
          { floor: 2, top: 164, left: 0, description: 'Train', site: true, hostage: true, secure: true },
          { floor: 2, top: 195, left: 138, description: 'Dining', site: true, bomb: true },
          { floor: 2, top: 139, left: 179, description: 'Reading Corridor' },
          { floor: 2, top: 230, left: 308, description: 'White Stairs' },
          { floor: 2, top: 143, left: 315, description: 'Laundry' },
          { floor: 2, top: 62, left: 191, description: 'Reading', site: true, bomb: true, secure: true },
          { floor: 2, top: 35, left: 304, description: 'Reading', site: true, hostage: true, bomb: true, secure: true },
          { floor: 2, top: 46, left: -15, description: 'Mining', site: true, bomb: true },
          { floor: 2, top: 53, left: 106, description: 'Mining Corridor', rotate: -90 },
          { floor: 2, top: -13, left: 185, description: 'Pillar' },
          { floor: 2, top: -19, left: -3, description: 'Red Corridor' },
          { floor: 2, top: -97, left: -48, description: 'Red Stairs' },
          { floor: 2, top: 195, left: 68, description: 'Fireplace', call: true },
          { floor: 2, top: -108, left: 209, description: 'Wood Stairs' },
          { floor: 2, top: -73, left: 180, description: 'Main' },
          { floor: 2, top: -83, left: 330, description: 'Terrace<br/>Entrance' },
          // 3F
          { floor: 3,  top: 174, left: -162, description: 'Bakery Roof' },
          { floor: 3, top: 140, left: 5, description: 'Piano', site: true, secure: true },
          { floor: 3, top: 235, left: 208, description: 'White Corridor' },
          { floor: 3, top: 215, left: 320, description: 'White Stairs' },
          { floor: 3, top: 175, left: 167, description: 'Bathroom' },
          { floor: 3, top: 172, left: 222, description: 'Bar<br/>Freezer', site: true, hostage: true },
          { floor: 3, top: 146, left: 285, description: 'Cocktail Entrance', rotate: -90 },
          { floor: 3, top: 55, left: 331, description: 'Cocktail', site: true, bomb: true },
          { floor: 3, top: 114, left: 196, description: 'Storage' },
          { floor: 3, top: 39, left: 39, description: 'Cigar' },
          { floor: 3, top: 50, left: 193, description: 'Bar', site: true, bomb: true },
          { floor: 3, top: -97, left: -41, description: 'Red Stairs' },
          { floor: 3, top: -119, left: 79, description: 'Cigar Balcony' },
          { floor: 3, top: -91, left: 328, description: 'Cocktail Balcony' },
          { floor: 3, top: -104, left: 209, description: 'Wood Stairs' },
          // 4F
          { floor: 4,  top: 174, left: -162, description: 'Bakery Roof' },
          { floor: 4,  top: 62, left: 149, description: 'Roof' },
          { floor: 4,  top: -13, left: 20, description: 'Red Hatch' },
          { floor: 4,  top: -82, left: 115, description: 'New hatch' }
        ]
      },
      kanal: {
        name: 'Kanal',
        imgUrlPrefix: 'kanal',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -581, right: -965, height: 217, width: 462
        },
        floors: [
          { index: -1, top: -559, left: -1042, width: 2009, name: floorTerms.subBasement, background: true },
          { index: 0, top: -364, left: -382, width: 843, name: floorTerms.basement },
          { index: 1, top: -364, left: -382, width: 843, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -364, left: -382, width: 843, name: floorTerms.secondFloor },
          { index: 3, top: -364, left: -382, width: 843, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 0, top: -30, left: -312, set: 1 },
          { floor: 1, top: -39, left: -305, set: 2 },
          { floor: 1, top: -168, left: 213, set: 3 },
          { floor: 2, top: -172, left: 135, set: 4 }
        ],
        bombObjectives: [
          { floor: 0, top: -30, left: -283, set: 4, letter: 'A' },
          { floor: 0, top: -95, left: -334, set: 4, letter: 'B' },
          { floor: 1, top: -39, left: -295, set: 3, letter: 'A' },
          { floor: 1, top: -189, left: -149, set: 3, letter: 'B' },
          { floor: 1, top: -246, left: 196, set: 2, letter: 'A' },
          { floor: 1, top: -114, left: 84, set: 2, letter: 'B' },
          { floor: 2, top: -172, left: 140, set: 1, letter: 'A' },
          { floor: 2, top: -178, left: 265, set: 1, letter: 'B' }
        ],
        secureObjectives: [
          { floor: 0, top: -30, left: -288, set: 1 },
          { floor: 1, top: -39, left: -300, set: 2 },
          { floor: 1, top: -168, left: 208, set: 3 },
          { floor: 2, top: -178, left: 260, set: 4 }
        ],
        zoomPoints: {
          topLeft: { top: -337, left: -507 },
          bottomRight: { top: 259, left: 547 }
        },
        compassPoints: {
          top: 214, left: 871
        },
        ladders: [
          { floor: -1, top: -36, left: -126, otherFloor: 'up' },
          { floor: 0, top: -36, left: -110, otherFloor: 'down' },
          { floor: -1, top: -240, left: -234, otherFloor: 'up' },
          { floor: 0, top: -235, left: -230, otherFloor: 'down' }
        ],
        cameras: [
          { floor: 2, top: -67, left: 216, id: 1 },
          { floor: 1, top: -69, left: 163,  id: 2 },
          { floor: 1, top: 16, left: -180, id: 3 },
          { floor: 0, top: -55, left: -191, id: 4 },
          { outdoor: true, top: 437, left: -366, id: 5 },
          { outdoor: true, top: -391, left: -465, id: 6 },
          { outdoor: true, top: -374, left: 430, id: 7 }
        ],
        ceilingHatches: [
          { floor: 0, top: -156, left: -106 },
          { floor: 0, top: -43, left: -342 },
          { floor: 1, top: -248, left: 302 },
          { floor: 1, top: -248, left: 126 },
          { floor: 1, top: -56, left: 86 }
        ],
        skylights: [],
        droneTunnels: [
          // north vents on coast guard
          { floor: 1, top: -346, left: -171, rotate: 0, size: 8 },
          { floor: 1, top: -341, left: -161, rotate: 0, size: DRONE_MED },
          { floor: 1, top: -346, left: -166, rotate: 90, size: DRONE_MED },

          { floor: 2, top: -353, left: -171, rotate: 0, size: 12 },
          { floor: 2, top: -353, left: -161, rotate: 0, size: 12 },
          { floor: 2, top: -353, left: -166, rotate: 90, size: DRONE_MED },

          { floor: 3, top: -353, left: -171, rotate: 0, size: 12 },
          { floor: 3, top: -340, left: -161, rotate: 0, size: 38 },
          { floor: 3, top: -353, left: -166, rotate: 90, size: DRONE_MED },
          { floor: 3, top: -324, left: -150, rotate: 90, size: 29 },

          // east vents on coast guard
          { floor: 1, top: -193, left: -55, rotate: 0, size: 8 },
          { floor: 1, top: -193, left: -66, rotate: 90, size: 30 },

          { floor: 2, top: -193, left: -56, rotate: 0, size: 10 },
          { floor: 2, top: -193, left: -54, rotate: 0, size: 10 },
          { floor: 2, top: -193, left: -55, rotate: 90, size: 10 },

          { floor: 3, top: -204, left: -95, rotate: 0, size: 35 },
          { floor: 3, top: -210, left: -87, rotate: 90, size: 9 },
          { floor: 3, top: -192, left: -53, rotate: 0, size: 11 },
          { floor: 3, top: -192, left: -74, rotate: 90, size: 51 },

          // west vents on coast guard
          { floor: 0, top: -206, left: -371, rotate: 0, size: 18 },
          { floor: 0, top: -202, left: -365, rotate: 90, size: 21 },

          { floor: 1, top: -211, left: -367, rotate: 0, size: 11 },
          { floor: 1, top: -211, left: -367, rotate: 90, size: 10 },

          { floor: 2, top: -211, left: -367, rotate: 0, size: 11 },
          { floor: 2, top: -211, left: -357, rotate: 90, size: 29 },

          { floor: 3, top: -211, left: -367, rotate: 0, size: 11 },
          { floor: 3, top: -211, left: -357, rotate: 90, size: 29 },

          // tunnel vents
          { floor: -1, top: -177, left: -348, rotate: 0, size: 11 },
          { floor: -1, top: -177, left: -298, rotate: 90, size: 109 },

          { floor: 0, top: -190, left: -365, rotate: 0, size: 11 },
          { floor: 0, top: -190, left: -366, rotate: 90, size: 11 },

          // OF bathroom
          { floor: 0, top: 55, left: -85, rotate: 90, size: 14 },
          // diving room
          { floor: 0, top: -335, left: -260, rotato: 0, size: 12 }

        ],
        spawnPoints: [
          { letter: 'A', top: -495, left: -976, description: 'Dock' },
          { letter: 'B', top: 465, left: -426, description: 'Sailboats' },
          { letter: 'C', top: -432, left: 871, description: 'Construction' }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 314, left: -4, description: 'Middle' },
          { outdoor: true, top: -79, left: -4, description: 'Middle' },
          { outdoor: true, top: 319, left: 178, description: 'Parking' },
          { outdoor: true, top: 266, left: -261, description: 'Lawn' },
          { outdoor: true, top: -463, left: -560, description: 'Lock Gate Tunnel' },
          { outdoor: true, top: 167, left: -527, description: 'Lock Gate Tunnel' },
          { outdoor: true, top: 69, left: -395, description: 'Forklift' },
          { outdoor: true, top: -281, left: -395, description: 'Forklift' },
          { outdoor: true, top: 108, left: 243, description: 'Parking Entrance' },
          { outdoor: true, top: -313, left: -635, description: 'Lock Gate' },
          { outdoor: true, top: 27, left: -453, description: 'Lock Gate' },
          { outdoor: true, top: -351, left: 511, description: 'Construction' },
          { outdoor: true, top: -81, left: 511, description: 'Construction' },
          { outdoor: true, top: -71, left: 851, description: 'Construction' },
          { outdoor: true, top: -410, left: -281, description: 'Containers' },
          { outdoor: true, top: -392, left: 169, description: 'Containers' },
          { outdoor: true, top: -448, left: -66, description: 'Docks Bridge' },
          { outdoor: true, top: 131, left: -276, description: 'Lawn Stairs' },
          // -1F
          { floor: -1, top: -31, left: -206, description: 'Tunnel' },
          // OF
          { floor: 0, top: 14, left: 203, description: 'Red Stairs' },
          { floor: 0, top: -293, left: -328, description: 'Yellow Stairs', rotate: -90 },
          { floor: 0, top: -24, left: -152, description: 'White Stairs'  },
          { floor: 0, top: -159, left: 192, description: 'Garage' },
          { floor: 0, top: -269, left: -147, description: 'Alcove' },
          { floor: 0, top: 81, left: -315, description: 'Pipes' },
          { floor: 0, top: -123, left: -178, description: 'Basement Corridor', rotate: -90 },
          { floor: 0, top: 74, left: -129, description: 'Bathroom' },
          { floor: 0, top: 24, left: -272, description: 'Supply', site: true, hostage: true, bomb: true, secure: true },
          { floor: 0, top: 7, left: -92, description: 'Shower', rotate: -90 },
          { floor: 0, top: -103, left: -279, description: 'Kayaks', site: true, bomb: true },
          { floor: 0, top: -121, left: -128, description: 'Locker' },
          { floor: 0, top: -254, left: -266, description: 'Diving' },
          { floor: 0, top: 81, left: -228, description: 'Lawn Entrance' },
          { floor: 0, top: -182, left: -266, description: 'Diving Corridor' },
          // 1F
          { floor: 1, top: -50, left: -123, description: 'White Stairs' },
          { floor: 1, top: 13, left: 217, description: 'Red Stairs' },
          { floor: 1, top: -182, left: 406, description: 'Green Stairs', rotate: -90 },
          { floor: 1, top: -308, left: -318, description: 'Yellow Stairs' },
          { floor: 1, top: -308, left: -113, description: 'Blue Stairs' },
          { floor: 1, top: 80, left: -280, description: 'Archives' },
          { floor: 1, top: 80, left: -139, description: 'Reception' },
          { floor: 1, top: 39, left: 127, description: 'Model' },
          { floor: 1, top: -1, left: 330, description: 'Museum' },
          { floor: 1, top: 7, left: -278, description: 'Meeting', site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: -221, left: -213, description: 'Radio Hallway', rotate: -90 },
          { floor: 1, top: 24, left: -2, description: 'Bridge' },
          { floor: 1, top: -54, left: 280, description: 'Map Corridor' },
          { floor: 1, top: -68, left: 111, description: 'Security', site: true, bomb: true },
          { floor: 1, top: -211, left: -136, description: 'Lounge', site: true, bomb: true },
          { floor: 1, top: -194, left: 221, description: 'Map', site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: -168, left: 322, description: 'Kitchen' },
          { floor: 1, top: -102, left: 416, description: 'Construction<br/>Entrance' },
          { floor: 1, top: -191, left: -299, description: 'Radio' },
          { floor: 1, top: -194, left: 106, description: 'Projector' },
          { floor: 1, top: -188, left: 441, description: 'Construction Stairs', rotate: -90 },
          { floor: 1, top: -117, left: -133, description: 'Gym' },
          { floor: 1, top: -85, left: -175, description: 'Meeting Hallway', rotate: -90 },
          // 2F
          { floor: 2, top: -44, left: -113, description: 'White Stairs' },
          { floor: 2, top: 23, left: 235, description: 'Red Stairs' },
          { floor: 2, top: -178, left: 422, description: 'Green Stairs', rotate: -90 },
          { floor: 2, top: -308, left: -113, description: 'Blue Stairs' },
          { floor: 2, top: -32, left: 120, description: 'Renovations' },
          { floor: 2, top: -42, left: 177, description: 'Roof Entrance', rotate: -90 },
          { floor: 2, top: -49, left: 302, description: 'Radar Corridor' },
          { floor: 2, top: -126, left: 142, description: 'Radar', site: true, hostage: true, bomb: true },
          { floor: 2, top: -208, left: 282, description: 'Server', site: true, bomb: true, secure: true },
          { floor: 2, top: -166, left: 385, description: 'Server Corridor', rotate: -90 },
          { floor: 2, top: -218, left: -122, description: 'Printer' },
          { floor: 2, top: -208, left: 150, description: 'Control' },
          { floor: 2, top: -249, left: -6, description: 'Upper Bridge' },
          { floor: 2, top: -243, left: -213, description: 'West Roof' },
          { floor: 2, top: -6, left: -253, description: 'West Roof' },
          { floor: 2, top: 47, left: 134, description: 'Balcony Renovations' },
          { floor: 2, top: 25, left: 3, description: 'Bridge Roof' },
          { floor: 2, top: 8, left: 344, description: '"L"' },
          // 3F
          { floor: 3, top: -243, left: -213, description: 'West Roof' },
          { floor: 3, top: -6, left: -253, description: 'West Roof' },
          { floor: 3, top: 33, left: 134, description: 'Balcony Renovations' },
          { floor: 3, top: 25, left: 3, description: 'Bridge Roof' },
          { floor: 3, top: -146, left: 207, description: 'East Roof' },
          { floor: 3, top: 8, left: 344, description: '"L"' },
          { floor: 3, top: -260, left: -2, description: 'Upper Bridge Roof' }
        ]
      },
      oregon: {
        name: 'Oregon',
        imgUrlPrefix: 'oregon',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -477, right: -968, height: 217, width: 462
        },
        floors: [
          { index: 0, top: -525, left: -815, width: 1782, name: floorTerms.basement, background: true },
          { index: 1, top: -312, left: -418, width: 811, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -312, left: -418, width: 811, name: floorTerms.secondFloor },
          { index: 3, top: -312, left: -418, width: 811, name: floorTerms.thirdFloor },
          { index: 4, top: -312, left: -418, width: 811, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: 118, left: -32, set: 1 },
          { floor: 1, top: -84, left: 161, set: 2 },
          { floor: 1, top: 12, left: -11, set: 3 },
          { floor: 0, top: -37, left: 152, set: 4 }
        ],
        bombObjectives: [
          { floor: 2, top: 161, left: -32, set: 1, letter: 'A' },
          { floor: 2, top: 27, left: 29, set: 1, letter: 'B' },
          { floor: 1, top: -35, left: -198, set: 2, letter: 'A' },
          { floor: 1, top: -3, left: -14, set: 2, letter: 'B' },
          { floor: 1, top: -104, left: 122, set: 3, letter: 'A' },
          { floor: 1, top: 24, left: -14, set: 3, letter: 'B' },
          { floor: 0, top: 118, left: 89, set: 4, letter: 'A' },
          { floor: 0, top: -40, left: 163, set: 4, letter: 'B' }
        ],
        secureObjectives: [
          { floor: 2, top: 94, left: 54, set: 1 },
          { floor: 1, top: -17, left: -195, set: 2 },
          { floor: 1, top: -56, left: 149, set: 3 },
          { floor: 0, top: 93, left: 94, set: 4 }
        ],
        zoomPoints: {
          topLeft: { top: -355, left: -509 },
          bottomRight: { top: 303, left: 463 }
        },
        compassPoints: {
          top: 92, left: 863
        },
        ladders: [
          { floor: 2, top: -255, left: 210, otherFloor: 'up' },
          { floor: 3, top: -264, left: 227, otherFloor: 'down' }
        ],
        cameras: [
          { floor: 2, top: 54, left: 242, id: 1 },
          { floor: 1, top: 86, left: 168, id: 2 },
          { floor: 1, top: 203, left: -125, id: 3 },
          { floor: 1, top: -192, left: 230, id: 4 },
          { floor: 0, top: 74, left: -53, id: 5 },
          { outdoor: true, top: 187, left: -502, id: 6 },
          { outdoor: true, top: 216, left: 413, id: 7 },
          { outdoor: true, top: -420, left: 325, id: 8 }
        ],
        ceilingHatches: [
          { floor: 0, top: 162, left: 177 },
          { floor: 0, top: 107, left: 13 },
          { floor: 0, top: -111, left: 183 },
          { floor: 1, top: 157, left: 318 },
          { floor: 1, top: 28, left: -90 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 0, top: 35, left: 236, rotate: 0, size: 47 },
          { floor: 0, top: 30, left: 67, rotate: 90, size: 8 },
          { floor: 0, top: 20, left: 120, rotate: 90, size: 10 },
          { floor: 1, top: -123, left: 91, rotate: 0, size: 8 },
          { floor: 1, top: -21, left: 73, rotate: 90, size: 10 },
          { floor: 1, top: 72, left: 57, rotate: 0, size: 10 },
          { floor: 1, top: 220, left: -119, rotate: 0, size: 12 },
          { floor: 1, top: 213, left: 0, rotate: 0, size: 23 },
          { floor: 1, top: -17, left: -307, rotate: 90, size: 14 },
          { floor: 2, top: -143, left: 148, rotate: 90, size: 14 }
        ],
        spawnPoints: [
          { letter: 'A', top: 318, left: -692, description: 'Junkyard' },
          { letter: 'B', top: 405, left: 437, description: 'Street' },
          { letter: 'C', top: -353, left: 645, description: 'Construction' }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 468, left: 260, description: 'Street' },
          { outdoor: true, top: 143, left: -594, description: 'Junkyard' },
          { outdoor: true, top: 325, left: -201, description: 'Bus' },
          { outdoor: true, top: 344, left: 172, description: 'Main Entrance' },
          { outdoor: true, top: 277, left: 407, description: 'Parking' },
          { outdoor: true, top: -24, left: 407, description: 'Construction' },
          { outdoor: true, top: -370, left: 207, description: 'Construction' },
          { outdoor: true, top: -112, left: -243, description: 'Garden' },
          { outdoor: true, top: -226, left: -5, description: 'Shooting Range' },
          // OF
          { floor: 0, top: 187, left: 163, description: 'Storage' },
          { floor: 0, top: 171, left: 221, description: 'Laundry Stairs', rotate: -90 },
          { floor: 0, top: 192, left: -58, description: 'Freezer Stairs' },
          { floor: 0, top: 98, left: -14, description: 'Freezer' },
          { floor: 0, top: 98, left: 131, description: 'Laundry', site: true, bomb: true, secure: true },
          { floor: 0, top: -9, left: 105, description: 'Basement Corridor', rotate: -90 },
          { floor: 0, top: 41, left: 149, description: 'Closet' },
          { floor: 0, top: -29, left: 195, description: 'Supply', site: true, hostage: true, bomb: true },
          { floor: 0, top: -87, left: 266, description: 'Blue' },
          { floor: 0, top: -102, left: 358, description: 'Bunker' },
          { floor: 0, top: -149, left: 124, description: 'Pillar' },
          { floor: 0, top: -112, left: 197, description: 'Electric' },
          { floor: 0, top: -241, left: 146, description: 'Tower<br/>Stairs' },
          // 1F
          { floor: 1, top: 190, left: 106, description: 'Classroom' },
          { floor: 1, top: 145, left: 171, description: 'Lobby' },
          { floor: 1, top: 182, left: 237, description: 'Main Stairs', rotate: -90 },
          { floor: 1, top: 208, left: -216, description: 'Shower Corridor' },
          { floor: 1, top: 161, left: -17, description: 'Security Corridor' },
          { floor: 1, top: 198, left: -27, description: 'White Stairs' },
          { floor: 1, top: 148, left: 292, description: 'Garage' },
          { floor: 1, top: 94, left: -332, description: 'Small Tower' },
          { floor: 1, top: 138, left: -208, description: 'Showers' },
          { floor: 1, top: 111, left: -36, description: 'Security' },
          { floor: 1, top: 15, left: -192, description: 'Dining', site: true, bomb: true, secure: true },
          { floor: 1, top: 27, left: -53, description: 'Kitchen', site: true, hostage: true, bomb: true },
          { floor: 1, top: -39, left: 148, description: 'Meeting', site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: 59, left: 153, description: 'Split' },
          { floor: 1, top: -107, left: 66, description: 'Kitchen Corridor', rotate: -90 },
          { floor: 1, top: -186, left: 151, description: 'Tower' },
          { floor: 1, top: -250, left: 158, description: 'Tower<br/>Stairs' },
          { floor: 1, top: -136, left: 183, description: 'Stage' },
          { floor: 1, top: 34, left: -368, description: 'Small Stairs' },
          // 2F
          { floor: 2, top: 251, left: 152, description: 'Balcony' },
          { floor: 2, top: 198, left: 252, description: 'Main Stairs', rotate: -90 },
          { floor: 2, top: 84, left: -145, description: 'Dining Roof' },
          { floor: 2, top: 208, left: -19, description: 'White Stairs' },
          { floor: 2, top: 214, left: 115, description: 'Walk In' },
          { floor: 2, top: 167, left: 183, description: 'Master' },
          { floor: 2, top: 171, left: -268, description: 'Small Tower Roof' },
          { floor: 2, top: -19, left: -253, description: 'Small Tower Roof' },
          { floor: 2, top: 132, left: -29, description: 'Dorm', site: true, hostage: true, bomb: true, secure: true },
          { floor: 2, top: 153, left: 94, description: 'Gaming' },
          { floor: 2, top: 140, left: 302, description: 'Armory' },
          { floor: 2, top: 108, left: 252, description: 'Armory Corridor', rotate: -90 },
          { floor: 2, top: 71, left: -338, description: 'Small Tower' },
          { floor: 2, top: 71, left: -230, description: 'Office' },
          { floor: 2, top: 75, left: 184, description: 'Trophy' },
          { floor: 2, top: 36, left: -26, description: 'Kids', site: true, bomb: true },
          { floor: 2, top: 10, left: 115, description: 'Attic' },
          { floor: 2, top: -82, left: 174, description: 'Attic' },
          { floor: 2, top: -110, left: 80, description: 'Meeting Roof' },
          { floor: 2, top: -60, left: 233, description: 'Meeting Roof' },
          { floor: 2, top: -189, left: 175, description: 'Cat Walk' },
          { floor: 2, top: -251, left: 168, description: 'Tower<br/>Stairs' },
          { floor: 2, top: 80, left: 104, description: 'Middle' },
          { floor: 2, top: 34, left: -368, description: 'Small Stairs' },
          // 3F
          { floor: 3, top: 171, left: -32, description: 'Dorms Roof' },
          { floor: 3, top: 31, left: -32, description: 'Dorms Roof' },
          { floor: 3, top: 201, left: 177, description: 'Dorms Roof' },
          { floor: 3, top: 84, left: -145, description: 'Dining Roof' },
          { floor: 3, top: 73, left: -257, description: 'Small Tower Roof' },
          { floor: 3, top: 142, left: 321, description: 'Garage Roof' },
          { floor: 3, top: -110, left: 80, description: 'Meeting Roof' },
          { floor: 3, top: -60, left: 244, description: 'Meeting Roof', rotate: -90 },
          { floor: 3, top: -60, left: 178, description: 'Attic Roof', rotate: -90 },
          { floor: 3, top: -198, left: 108, description: 'Tower Roof' },
          { floor: 3, top: -181, left: 225, description: 'Cat Walk' },
          // 4F
          { floor: 4, top: 171, left: -32, description: 'Dorms Roof' },
          { floor: 4, top: 31, left: -32, description: 'Dorms Roof' },
          { floor: 4, top: 201, left: 177, description: 'Dorms Roof' },
          { floor: 4, top: 84, left: -145, description: 'Dining Roof' },
          { floor: 4, top: 73, left: -257, description: 'Small Tower Roof' },
          { floor: 4, top: 142, left: 321, description: 'Garage Roof' },
          { floor: 4, top: -110, left: 80, description: 'Meeting Roof' },
          { floor: 4, top: -60, left: 233, description: 'Meeting Roof' },
          { floor: 4, top: 17, left: 154, description: 'Meeting Roof' },
          { floor: 4, top: -198, left: 108, description: 'Tower Roof' },
          { floor: 4, top: -232, left: 238, description: 'Tower Roof' }
        ]
      },
      outback: {
        name: 'Outback',
        imgUrlPrefix: 'outback',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -829, right: -1028, height: 217, width: 462
        },
        floors: [
          { index: 1, top: -488, left: -329, width: 1215, name: floorTerms.firstFloor, background: true, default: true },
          { index: 2, top: -162, left: 13, width: 692, name: floorTerms.secondFloor },
          { index: 3, top: -162, left: 13, width: 692, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: -43, left: 275, set: 1 },
          { floor: 2, top: 187, left: 488, set: 2 },
          { floor: 1, top: -48, left: 331, set: 3 },
          { floor: 1, top: 267, left: 632, set: 4 }
        ],
        bombObjectives: [
          { floor: 2, top: -63, left: 275, set: 1, letter: 'A'  },
          { floor: 2, top: 10, left: 388, set: 1, letter: 'B'  },
          { floor: 2, top: 101, left: 566, set: 2, letter: 'A'  },
          { floor: 2, top: 211, left: 493, set: 2, letter: 'B'  },
          { floor: 1, top: -19, left: 221, set: 3, letter: 'A'  },
          { floor: 1, top: -25, left: 309, set: 3, letter: 'B'  },
          { floor: 1, top: 189, left: 609, set: 4, letter: 'A'  },
          { floor: 1, top: 210, left: 465, set: 4, letter: 'B'  }
        ],
        secureObjectives: [
          { floor: 2, top: 4, left: 144, set: 1 },
          { floor: 2, top: 192, left: 464, set: 2 },
          { floor: 1, top: 325, left: 497, set: 3 },
          { floor: 1, top: 109, left: 468, set: 4 }
        ],
        zoomPoints: {
          topLeft: { top: -300, left: 0 },
          bottomRight: { top: 500, left: 500}
        },
        compassPoints: { top: 484, left: 790 },
        ladders: [],
        cameras: [
          { outdoor: true, top: 456, left: 815, id: 1 },
          { outdoor: true, top: -211, left: 590, id: 2 },
          { outdoor: true, top: 339, left: 241, id: 3 },
          { floor: 2, top: -101, left: 319, id: 4 },
          { floor: 2, top: 452, left: 493, id: 5 },
          { floor: 1, otherFloor: 'up', top: 443, left: 497, id: 5 },
          { floor: 2, top: -56, left: 568, id: 6 },
          { floor: 1, otherFloor: 'up', top: -56, left: 568, id: 6 },
          { floor: 1, top: 28, left: 132, id: 7 }
        ],
        ceilingHatches: [
          { floor: 1, top: 54, left: 144 },
          { floor: 1, top: -93, left: 258 },
          { floor: 1, top: 147, left: 475 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 1, top: 302, left: 690, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: 254, left: 554, rotate: 90, size: 12 },
          { floor: 1, top: 457, left: 497, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 340, left: 421, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 117, left: 407, rotate: 90, size: 12 },
          { floor: 1, top: -17, left: 435, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: -144, left: 290, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 67, left: 97, rotate: 0, size: DRONE_SMALL },

          { floor: 2, top: 70, left: 189, rotate: 0, size: DRONE_SMALL },
          { floor: 2, top: 164, left: 418, rotate: 0, size: DRONE_SMALL },
          { floor: 2, top: -38, left: 483, rotate: 90, size: DRONE_SMALL },
          { floor: 2, top: 260, left: 617, rotate: 0, size: 49 },
          { floor: 2, top: 278, left: 620, rotate: 90, size: DRONE_SMALL }
        ],
        spawnPoints: [
          { letter: 'A', top: -406, left: 634, description: 'Storage Yard' },
          { letter: 'B', top: 657, left: 464, description: 'Pumps' },
          { letter: 'C', top: -145, left: -236, description: 'Camping' }
        ],
        roomLabels: [
          // EXT
          { outside: true, top: 549, left: 319, description: 'Pumps' },
          { outside: true, top: 444, left: 654, description: 'Pumps' },
          { outside: true, top: 394, left: 369, description: 'Motel Parking' },
          { outside: true, top: 224, left: 211, description: 'Motel Parking' },
          { outside: true, top: -28, left: 744, description: 'Restaurant Parking', rotate: -90 },
          { outside: true, top: 262, left: 744, description: 'Restaurant Parking', rotate: -90 },
          { outside: true, top: -155, left: 468, description: 'Picnic' },
          { outside: true, top: -195, left: 184, description: 'Golf' },
          // 1F
          { floor: 1, top: 96, left: 145, description: 'Walkway' },
          { floor: 1, top: 148, left: 258, description: 'Walkway' },
          { floor: 1, top: 26, left: 683, description: 'Restaurant Entrance', rotate: -90 },
          { floor: 1, top: -47, left: 458, description: 'Loading' },
          { floor: 1, top: 281, left: 438, description: 'Garage Stairs', rotate: -90 },
          { floor: 1, top: -26, left: 83, description: 'Balcony Stairs', rotate: -90 },
          { floor: 1, top: -73, left: 118, description: 'Back Stairs', rotate: -90 },
          { floor: 1, top: -85, left: 368, description: 'Piano Stairs' },
          { floor: 1, top: -70, left: 563, description: 'Shark Stairs' },
          { floor: 1, top: -103, left: 486, description: 'Terrace Stairs' },
          { floor: 1, top: 400, left: 495, description: 'Garage', site: true, secure: true },
          { floor: 1, top: 300, left: 495, description: 'Garage', site: true, secure: true },
          { floor: 1, top: 380, left: 584, description: 'Waiting', rotate: -90 },
          { floor: 1, top: 310, left: 642, description: 'Shop', site: true, hostage: true },
          { floor: 1, top: 281, left: 584, description: 'Beer', rotate: -90 },
          { floor: 1, top: 218, left: 644, description: 'Gear', site: true, bomb: true },
          { floor: 1, top: 192, left: 506, description: 'Compressor', site: true, bomb: true },
          { floor: 1, top: 164, left: 375, description: 'Reception' },
          { floor: 1, top: 96, left: 260, description: 'Reptile' },
          { floor: 1, top: 20, left: 380, description: 'Reptile' },
          { floor: 1, top: 88, left: 456, description: 'Kitchen', site: true, secure: true },
          { floor: 1, top: 124, left: 554, description: 'Restaurant' },
          { floor: 1, top: -4, left: 554, description: 'Restaurant' },
          { floor: 1, top: -29, left: 141, description: 'Back Entrance', rotate: -90 },
          { floor: 1, top: 27, left: 205, description: 'Ranger', site: true, bomb: true },
          { floor: 1, top: 27, left: 310, description: 'Nature', site: true, hostage: true, bomb: true },
          { floor: 1, top: 60, left: 625, description: 'Lobby' },
          { floor: 1, top: 11, left: 459, description: 'Kitchen Hallway' },
          { floor: 1, top: -81, left: 213, description: 'Connector', rotate: -90 },
          { floor: 1, top: -48, left: 237, description: 'Closet' },
          { floor: 1, top: -100, left: 256, description: 'Bathroom' },
          // 2F
          { floor: 2, top: 285, left: 435, description: 'Garage Stairs', rotate: -90 },
          { floor: 2, top: -26, left: 83, description: 'Balcony Stairs', rotate: -90 },
          { floor: 2, top: -85, left: 121, description: 'Back Stairs' },
          { floor: 2, top: -87, left: 371, description: 'Piano Stairs' },
          { floor: 2, top: -70, left: 567, description: 'Shark Stairs' },
          { floor: 2, top: -103, left: 486, description: 'Terrace Stairs' },
          { floor: 2, top: 279, left: 507, description: 'Lounge' },
          { floor: 2, top: 307, left: 626, description: 'Shop Roof' },
          { floor: 2, top: 140, left: 289, description: 'Balcony' },
          { floor: 2, top: 215, left: 545, description: 'Office', site: true, hostage: true, bomb: true, secure: true },
          { floor: 2, top: 201, left: 618, description: 'Supplies', rotate: -90 },
          { floor: 2, top: 110, left: 467, description: 'Bull' },
          { floor: 2, top: 127, left: 545, description: 'Party', site: true, bomb: true },
          { floor: 2, top: 116, left: 618, description: 'Electrical', rotate: -90 },
          { floor: 2, top: 62, left: 380, description: 'Gaming', site: true, bomb: true },
          { floor: 2, top: -23, left: 125, description: 'Dorms', site: true, secure: true },
          { floor: 2, top: 51, left: 274, description: 'Showers' },
          { floor: 2, top: -7, left: 511, description: 'Shark' },
          { floor: 2, top: -47, left: 229, description: 'Laundry', site: true, hostage: true, bomb: true },
          { floor: 2, top: 11, left: 250, description: 'Showers Hallway' },
          { floor: 2, top: -42, left: 335, description: 'Piano' },
          { floor: 2, top: -22, left: 445, description: 'Terrace' },
          // 3F
          { floor: 3, top: 307, left: 626, description: 'Shop Roof' },
          { floor: 3, top: 0, left: 550, description: 'Restaurant Roof' },
          { floor: 3, top: 280, left: 490, description: 'Garage Roof' },
          { floor: 3, top: 0, left: 220, description: 'Motel Roof' }
        ]
      },
      plane: {
        name: 'Plane',
        imgUrlPrefix: 'plane',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -650, right: -590, height: 217, width: 462
        },
        floors: [
          { index: 1, top: -637, left: -879, width: 1470, name: floorTerms.firstFloor, background: true },
          { index: 2, top: -91, left: -655, width: 1194, name: floorTerms.secondFloor, default: true },
          { index: 3, top: -91, left: -655, width: 1194, name: floorTerms.thirdFloor },
          { index: 4, top: -91, left: -655, width: 1194, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: 30, left: 358, set: 1 },
          { floor: 2, top: -12, left: -278, set: 2 },
          { floor: 1, top: -47, left: 75, set: 3 },
          { floor: 2, top: 30, left: -15, set: 4 }
        ],
        bombObjectives: [
          { floor: 1, top: -10, left: 103, set: 3, letter: 'B' },
          { floor: 1, top: -33, left: -203, set: 3, letter: 'A' },
          { floor: 2, top: 31, left: 293, set: 1, letter: 'B' },
          { floor: 2, top: -28, left: 459, set: 1, letter: 'A' },
          { floor: 2, top: 30, left: 14, set: 2, letter: 'A' },
          { floor: 2, top: -45, left: -105, set: 2, letter: 'B' }
        ],
        secureObjectives: [
          { floor: 1, top: -10, left: 75, set: 1 },
          { floor: 2, top: -45, left: -140, set: 2 },
          { floor: 2, top: 31, left: 325, set: 3 },
          { floor: 2, top: 30, left: -43, set: 4 }
        ],
        zoomPoints: {
          topLeft: { top: -218, left: -515 },
          bottomRight: { top: 178, left: 482 }
        },
        compassPoints: {
          top: 305, left: 494
        },
        ladders: [
          { floor: 2, top: -33, left: -186, otherFloor: 'up' },
          { floor: 3, top: -33, left: -186, otherFloor: 'down' },
          { floor: 2, top: -4, left: -373, otherFloor: 'up' },
          { floor: 3, top: -4, left: -373, otherFloor: 'down' },
          { floor: 1, top: -166, left: -232, otherFloor: 'up' },
          { floor: 2, top: -166, left: -232, otherFloor: 'down' },
          { floor: 1, top: -127, left: -330, otherFloor: 'up' },
          { floor: 2, top: -127, left: -330, otherFloor: 'down' },
          { floor: 1, top: -323, left: -304, otherFloor: 'up' },
          { floor: 2, top: -323, left: -304, otherFloor: 'down' },
          { floor: 1, top: -152, left: 248, otherFloor: 'up' },
          { floor: 2, top: -152, left: 248, otherFloor: 'down' },
          { floor: 1, top: -296, left: 145, otherFloor: 'up' },
          { floor: 2, top: -296, left: 145, otherFloor: 'down' },
          { floor: 1, top: 136, left: 329, otherFloor: 'up' },
          { floor: 2, top: 136, left: 329, otherFloor: 'down' },
          { floor: 1, top: 207, left: 335, otherFloor: 'up' },
          { floor: 2, top: 207, left: 335, otherFloor: 'upanddown' },
          { floor: 3, top: 207, left: 335, otherFloor: 'down' },
          { floor: 2, top: 156, left: -470, otherFloor: 'up' },
          { floor: 3, top: 156, left: -470, otherFloor: 'upanddown' },
          { floor: 4, top: 156, left: -470, otherFloor: 'down' },
          { floor: 1, top: 218, left: -497, otherFloor: 'up' },
          { floor: 2, top: 218, left: -497, otherFloor: 'down' }
        ],
        cameras: [
          { floor: 3, top: -14, left: 248, id: 1 },
          { floor: 2, top: -60, left: 188, id: 2 },
          { floor: 2, top: -41, left: -215, id: 3 },
          { floor: 1, top: 33, left: 21, id: 4 },
          { floor: 1, top: -49, left: -289, id: 5 }
        ],
        ceilingHatches: [
          { floor: 2, top: 17, left: -116 },
          { floor: 2, top: -34, left: 49 },
          { floor: 2, top: 22, left: 111 },
          { floor: 2, top: 22, left: 407 },
          { floor: 1, top: 24, left: 72 },
          { floor: 1, top: -2, left: -218 },
          { floor: 1, top: 8, left: -78 },
          { floor: 3, top: -10, left: -496 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 2, top: -42, left: 172, rotate: 90, size: DRONE_SMALL, alternate: true }
        ],
        spawnPoints: [
          { letter: 'A', top: -428, left: 434, description: 'Official Entrance' },
          { letter: 'B', top: -489, left: -408, description: 'Reporter Entrance' },
          { letter: 'C', top: 340, left: 342, description: 'Service Entrance' }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: -295, left: 389, description: 'Main Entrance' },
          { outdoor: true, top: 162, left: 277, description: 'Front Service Entrance' },
          { outdoor: true, top: 223, left: -85, description: 'Right Wing' },
          { outdoor: true, top: 221, left: -609, description: 'Back Service Entrance' },
          { outdoor: true, top: -295, left: -367, description: 'Reporter Entrance' },
          { outdoor: true , top: -295, left: -124, description: 'Left Wing' },
          { outdoor: true, top: -189, left: 412, description: 'Front Stairway', rotate: -90 },
          { outdoor: true, top: -184, left: -429, description: 'Back Stairway', rotate: -90 },
          // OF
          // 1F
          { floor: 1, top: 1, left: -395, description: 'Back Stairs' },
          { floor: 1, top: 34, left: -202, description: 'Cargo', site: true, bomb: true },
          { floor: 1, top: -16, left: -48, description: 'Storage Corridor' },
          { floor: 1, top: 29, left: -37, description: 'Storage' },
          { floor: 1, top: -3, left: 32, description: 'Luggage', site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: 25, left: 174, description: 'Infirmary' },
          { floor: 1, top: -6, left: 253, description: 'Front Stairs' },
          { floor: 1, top: -30, left: 222, description: 'Technical' },
          // 2F
          { floor: 2, top: 3, left: 333, description: 'Meeting', site: true, hostage: true, bomb: true, secure: true },
          { floor: 2, top: -5, left: 408, description: 'Office Hallway', rotate: -90 },
          { floor: 2, top: 9, left: 444, description: 'Office', site: true, bomb: true },
          { floor: 2, top: -37, left: 310, description: 'Meeting Hallway' },
          { floor: 2, top: -5, left: 240, description: 'Front Stairs' },
          { floor: 2, top: 33, left: 244, description: 'Pantry' },
          { floor: 2, top: 33, left: 158, description: 'Kitchen' },
          { floor: 2, top: -32, left: 114, description: 'Bedroom Hallway' },
          { floor: 2, top: -11, left: -15, description: 'Bedroom', site: true, hostage: true, bomb: true, secure: true },
          { floor: 2, top: 48, left: 74, description: 'Changing' },
          { floor: 2, top: -4, left: 84, description: 'Laundry' },
          { floor: 2, top: 1, left: -114, description: 'Staff', site: true, bomb: true, secure: true },
          { floor: 2, top: 6, left: -180, description: 'Security' },
          { floor: 2, top: -39, left: -270, description: 'Press A', site: true, hostage: true },
          { floor: 2, top: -39, left: -375, description: 'Press B' },
          { floor: 2, top: 2, left: -408, description: 'Back Stairs' },
          { floor: 2, top: -7, left: -333, description: 'Bath<br/>room' },
          { floor: 2, top: -5, left: 160, description: 'Cockpit Stairs' },
          { floor: 2, top: 112, left: -436, description: 'Back Caterer', rotate: -90 },
          { floor: 2, top: -52, left: -154, description: 'Ladder', rotate: -90 },
          // 3F
          { floor: 3, top: -8, left: 197, description: 'Cockpit Stairs' },
          { floor: 3, top: -2, left: 284, description: 'Cabin Staff', rotate: -90 },
          { floor: 3, top: -2, left: 340, description: 'Radio' },
          { floor: 3, top: -2, left: 419, description: 'Cabin' },
          { floor: 3, top: 99, left: 408, description: 'Front Caterer', rotate: -90 },
          { floor: 3, top: 0, left: 8, description: 'Server A' },
          { floor: 3, top: 0, left: -221, description: 'Server B' },
          { floor: 3, top: 0, left: -428, description: 'Server B' }
        ]
      },
      skyscraper: {
        name: 'Skyscraper',
        imgUrlPrefix: 'skyscraper',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -765, right: -1130, height: 217, width: 462
        },
        floors: [
          { index: 1, top: -165, left: -411, width: 1221, name: floorTerms.firstFloor, background: true, default: true },
          { index: 2, top: -115, left: -84, width: 851, name: floorTerms.secondFloor },
          { index: 3, top: -115, left: -84, width: 851, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: 295, left: 200, set: 1 },
          { floor: 2, top: 390, left: 500, set: 2 },
          { floor: 1, top: 340, left: 45, set: 3 },
          { floor: 1, top: 495, left: 455, set: 4 }
        ],
        bombObjectives: [
          { floor: 2, top: 320, left: 175, set: 1, letter: 'A' },
          { floor: 2, top: 285, left: 30, set: 1, letter: 'B' },
          { floor: 2, top: 500, left: 545, set: 2, letter: 'A' },
          { floor: 2, top: 385, left: 495, set: 2, letter: 'B' },
          { floor: 1, top: 335, left: 40, set: 3, letter: 'A' },
          { floor: 1, top: 435, left: 50, set: 3, letter: 'B' },
          { floor: 1, top: 450, left: 550, set: 4, letter: 'A' },
          { floor: 1, top: 490, left: 450, set: 4, letter: 'B' }
        ],
        secureObjectives: [
          { floor: 2, top: 290, left: 35, set: 1 },
          { floor: 2, top: 525, left: 520, set: 2 },
          { floor: 1, top: 330, left: 35, set: 3 },
          { floor: 1, top: 455, left: 555, set: 4 }
        ],
        zoomPoints: {
          topLeft: { top: -105, left: -75 },
          bottomRight: { top: 600, left: 655 }
        },
        compassPoints: {
          top: 357, left: 722
        },
        cameras: [
          { floor: 1, otherFloor: 'up', top: 365, left: 310, id: 1 },
          { floor: 2, top: 365, left: 310, id: 1 },
          { floor: 1, top: 145, left: 115, id: 2 },
          { floor: 1, otherFloor: 'up', top: 280, left: 555, id: 3 },
          { floor: 2, top: 280, left: 555, id: 3 },
          { floor: 1, top: 335, left: 415, id: 4 },
          { outdoor: true, top: -10, left: -30, id: 5 },
          { outdoor: true, top: 150, left: 690, id: 6 },
          { outdoor: true, top: 670, left: 633, id: 7 }
        ],
        ceilingHatches: [
          { floor: 1, top: 527, left: 581 },
          { floor: 1, top: 463, left: 118 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 1, top: 150, left: 45, rotate: 0, size: 30 },
          { floor: 1, top: 160, left: 55, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: 245, left: 410, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: 245, left: 310, rotate: 90, size: 8 },
          { floor: 1, top: 255, left: 310, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 535, left: 610, rotate: 90, size: DRONE_SMALL },
          { floor: 2, top: 420, left: 620, rotate: 90, size: DRONE_MED },
          { floor: 2, top: 385, left: 330, rotate: 0, size: DRONE_SMALL },
          { floor: 2, top: 345, left: 250, rotate: 90, size: DRONE_SMALL }
        ],
        spawnPoints: [
          { letter: 'A', top: 120, left: -355, description: 'Helipad' },
          { letter: 'B', top: -100, left: 665, description: 'Tower' },
          { letter: 'C', top: 680, left: 380, description: 'Ventilation' }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 275, left: -95, description: 'Tree' },
          { outdoor: true, top: -73, left: -79, description: 'Contemplation' },
          { outdoor: true, top: 35, left: -5, description: 'West Garden' },
          { outdoor: true, top: 5, left: 260, description: 'Gazebo' },
          { outdoor: true, top: -10, left: 390, description: 'Bridge' },
          { outdoor: true, top: 185, left: 530, description: 'East Garden' },
          { outdoor: true, top: 380, left: 660, description: 'Sand' },
          { outdoor: true, top: 360, left: 750, description: 'Side Path' },
          { outdoor: true, top: 483, left: 749, description: 'Side Stairs', rotate: -90 },
          { outdoor: true, top: 658, left: 510, description: 'Ventilation' },
          { outdoor: true, top: 70, left: 505, description: 'Tower' },
          { outdoor: true, top: 170, left: -218, description: 'Helipad' },
          // 1F
          { floor: 1, top: 505, left: 45, description: 'Kitchen', site: true, bomb: true },
          { floor: 1, top: 469, left: 215, description: 'Pantry' },
          { floor: 1, top: 485, left: 358, description: 'Delivery' },
          { floor: 1, top: 347, left: 464, description: 'Lobby' },
          { floor: 1, top: 295, left: 268, description: 'Coat' },
          { floor: 1, top: 290, left: 355, description: 'Reception' },
          { floor: 1, top: 430, left: 545, description: 'Bedroom', site: true, bomb: true, secure: true },
          { floor: 1, top: 390, left: 585, description: 'Closet' },
          { floor: 1, top: 316, left: 598, description: 'Lobby Entrance', rotate: -90 },
          { floor: 1, top: 563, left: 543, description: 'Dressing' },
          { floor: 1, top: 440, left: 453, description: 'Bathroom', site: true, hostage: true, bomb: true },
          { floor: 1, top: 328, left: 525, description: 'Lobby Stairs' },
          { floor: 1, top: 205, left: 170, description: 'Restaurant' },
          { floor: 1, top: 200, left: 70, description: 'Toilet' },
          { floor: 1, top: 305, left: 55, description: 'BBQ', site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: 375, left: 255, description: 'Bar' },
          { floor: 1, top: 355, left: 165, description: 'Sushi' },
          { floor: 1, top: 265, left: 30, description: 'Back Hallway' },
          { floor: 1, top: 401, left: 202, description: 'Geisha Stairs', rotate: -90 },
          { floor: 1, top: 166, left: 15, description: 'Karaoke Stairs' },
          { floor: 1, top: 215, left: 350, description: 'Main Entrance' },
          { floor: 1, top: 262, left: 570, description: 'House Balcony' },
          { floor: 1, top: 547, left: 75, description: 'Kitchen Balcony' },
          // 2F
          { floor: 2, top: 443, left: 173, description: 'Geisha Stairs', rotate: -90 },
          { floor: 2, top: 473, left: 25, description: 'Geisha' },
          { floor: 2, top: 511, left: 133, description: 'Makeup' },
          { floor: 2, top: 400, left: 146, description: 'Geisha Hallway' },
          { floor: 2, top: 283, left: 120, description: 'Karaoke Hallway', rotate: -90 },
          { floor: 2, top: 275, left: 170, description: 'Tea', site: true, hostage: true, bomb: true },
          { floor: 2, top: 255, left: 30, description: 'Karaoke', site: true, bomb: true, secure: true },
          { floor: 2, top: 170, left: 15, description: 'Karaoke Stairs' },
          { floor: 2, top: 467, left: 260, description: 'Drums' },
          { floor: 2, top: 291, left: 270, description: 'Mezzanine', rotate: -90 },
          { floor: 2, top: 230, left: 310, description: 'Shrine' },
          { floor: 2, top: 315, left: 360, description: 'Dragon' },
          { floor: 2, top: 430, left: 360, description: 'Terrace' },
          { floor: 2, top: 324, left: 459, description: 'VIP' },
          { floor: 2, top: 300, left: 509, description: 'Lobby Stairs' },
          { floor: 2, top: 505, left: 450, description: 'Lounge' },
          { floor: 2, top: 365, left: 515, description: 'Museum', site: true, hostage: true, bomb: true },
          { floor: 2, top: 400, left: 590, description: 'Display' },
          { floor: 2, top: 465, left: 545, description: 'Office', site: true, bomb: true, secure: true },
          { floor: 2, top: 162, left: 219, description: 'Shrine Balcony' },
          { floor: 2, top: 579, left: 506, description: 'Office Balcony' },
          { floor: 2, top: 263, left: 582, description: 'Office Balcony' },
          { floor: 2, top: 552, left: 310, description: 'Terrace Balcony' },
          { floor: 2, top: 552, left: 75, description: 'Geisha Balcony' }
        ]
      },
      themepark: {
        name: 'Theme Park',
        imgUrlPrefix: 'themepark',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -488, right: -889, height: 217, width: 462
        },
        floors: [
          { index: 1, top: -455, left: -655, width: 1544, name: floorTerms.firstFloor, background: true, default: true },
          { index: 2, top: -305, left: -292, width: 813, name: floorTerms.secondFloor },
          { index: 3, top: -305, left: -292, width: 813, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: 123, left: 149, set: 1 },
          { floor: 2, top: 118, left: 1, set: 2 },
          { floor: 1, top: -86, left: 102, set: 3 },
          { floor: 1, top: -97, left: -146, set: 4 }
        ],
        bombObjectives: [
          { floor: 2, top: -99, left: 166, set: 1, letter: 'A' },
          { floor: 2, top: 56, left: 111, set: 1, letter: 'B' },
          { floor: 2, top: -8, left: -16, set: 2, letter: 'A' },
          { floor: 2, top: 111, left: 46, set: 2, letter: 'B' },
          { floor: 1, top: 99, left: 114, set: 3, letter: 'A' },
          { floor: 1, top: -70, left: 183, set: 3, letter: 'B' },
          { floor: 1, top: -101, left: -109, set: 4, letter: 'A' },
          { floor: 1, top: -207, left: -135, set: 4, letter: 'B' }
        ],
        secureObjectives: [
          { floor: 2, top: -99, left: 177, set: 1 },
          { floor: 2, top: -38, left: -24, set: 2 },
          { floor: 1, top: 84, left: 91, set: 3 },
          { floor: 1, top: -128, left: -105, set: 4 }
        ],
        zoomPoints: {
          topLeft: { top: -344, left: -303 },
          bottomRight: { top: 283, left: 533 }
        },
        compassPoints: {
          top: 29, left: 793
        },
        ladders: [
        ],
        cameras: [
          { floor: 2, top: -28, left: 381, id: 1 },
          { floor: 2, top: 48, left: -212, id: 2 },
          { floor: 1, otherFloor: 'up', top: 48, left: -218, id: 2 },
          { floor: 1, top: 122, left: 213, id: 3 },
          { floor: 1, top: -175, left: -8, id: 4 },
          { outdoor: true, top: -384, left: -286, id: 5 },
          { outdoor: true, top: -246, left: 583, id: 6 },
          { outdoor: true, top: 296, left: -359, id: 7 }
        ],
        ceilingHatches: [
          { floor: 1, top: -28, left: 39 },
          { floor: 1, top: 129, left: -73 },
          { floor: 1, top: -186, left: 342},
          { floor: 2 , top: -112, left: 75},
          { floor: 2 , top: 150, left: 332}
        ],
        skylights: [],
        droneTunnels: [
          { floor: 1, top: 212, left: -60, rotate: 0, size: DRONE_MED },
          { floor: 1, top: 212, left: 103, rotate: 0, size: DRONE_MED },
          { floor: 1, top: 125, left: -237, rotate: 90, size: DRONE_MED },
          { floor: 1, top: -25, left: -219, rotate: 0, size: 23 },
          { floor: 1, top: -20, left: -251, rotate: 90, size: 74 },
          { floor: 1, top: -271, left: -148, rotate: 0, size: DRONE_MED },
          { floor: 1, top: -257, left: 58, rotate: 0, size: 47 },
          { floor: 1, top: -205, left: 255, rotate: 0, size: DRONE_MED },
          { floor: 1, top: 136, left: 373, rotate: 90, size: 38 },

          { floor: 1, top: 29, left: -74, rotate: 0, size: 10 },
          { floor: 1, top: 2, left: 197, rotate: 90, size: 10 },
          { floor: 1, top: -66, left: 17, rotate: 90, size: 10 },
          { floor: 1, top: -167, left: -26, rotate: 90, size: 10 },

          { floor: 2, top: -135, left: -145, rotate: 0, size: DRONE_MED },

          { floor: 2, top: 209, left: 94, rotate: 90, size: 10 },
          { floor: 2, top: -73, left: 94, rotate: 90, size: 10 },
          { floor: 2, top: -37, left: 28, rotate: 90, size: 10 },
          { floor: 2, top: -122, left: 285, rotate: 0, size: 10 }
        ],
        spawnPoints: [
          { letter: 'A', top: 369, left: -548, description: 'Main Entrance' },
          { letter: 'B', top: -409, left: -548, description: 'Teacups' },
          { letter: 'C', top: 176, left: 827, description: 'Bumper' }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 372, left: -13, description: 'Palms' },
          { outdoor: true, top: 481, left: 330, description: 'Robo' },
          { outdoor: true, top: 370, left: 300, description: 'Castle' },
          { outdoor: true, top: 170, left: 450, description: 'Castle' },
          { outdoor: true, top: 246, left: -300, description: 'Guest' },
          { outdoor: true, top: -41, left: -561, description: 'Village' },
          { outdoor: true, top: -111, left: -350, description: 'Sweet' },
          { outdoor: true, top: -90, left: 680, description: 'Service' },
          { outdoor: true, top: -351, left: 68, description: 'Alley' },
          { outdoor: true, top: -303, left: 380, description: 'Alley' },
          // 1F
          { floor: 1, top: -170, left: 488, description: 'Castle' },
          { floor: 1, top: 129, left: -174, description: 'Arcade' },
          { floor: 1, top: 108, left: -71, description: 'Barrel' },
          { floor: 1, top: 140, left: 104, description: 'Throne', site: true, bomb: true, secure: true },
          { floor: 1, top: 179, left: 290, description: 'Maintenance' },
          { floor: 1, top: 50, left: 347, description: 'Maintenance', rotate: -90 },
          { floor: 1, top: 59, left: 242, description: 'Dragon' },
          { floor: 1, top: 111, left: 265, description: 'Dragon Stairs' },
          { floor: 1, top: 23, left: 49, description: 'Blue', rotate: -90 },
          { floor: 1, top: 12, left: -106, description: 'Lab Corridor' },
          { floor: 1, top: -87, left: 4, description: 'Toilet Corridor', rotate: -90 },
          { floor: 1, top: -8, left: 124, description: 'Armory', site: true, hostage: true, bomb: true },
          { floor: 1, top: -98, left: 62, description: 'Oven' },
          { floor: 1, top: -50, left: -164, description: 'Lab', site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: -67, left: 225, description: 'Red Corridor', rotate: -90 },
          { floor: 1, top: -76, left: 290, description: 'Gong' },
          { floor: 1, top: -157, left: 100, description: 'Locker Corridor'  },
          { floor: 1, top: -154, left: 302, description: 'Tellers' },
          { floor: 1, top: -198, left: -191, description: 'Drug', site: true, bomb: true },
          { floor: 1, top: -224, left: -39, description: 'Toilet' },
          { floor: 1, top: -226, left: 179, description: 'Locker' },
          { floor: 1, top: 24, left: -237, description: 'Arcade Stairs' },
          { floor: 1, top: -242, left: 64, description: 'Yellow Stairs' },
          // 2F
          { floor: 2, top: -80, left: 445, description: 'Cash Balcony', rotate: -90 },
          { floor: 2, top: 97, left: -98, description: 'Arcade Balcony', rotate: -90 },
          { floor: 2, top: -56, left: -131, description: 'Top Arcade' },
          { floor: 2, top: 197, left: 2, description: 'Kitchen' },
          { floor: 2, top: 191, left: 153, description: 'Initiation', site: true, hostage: true, bomb: true },
          { floor: 2, top: 65, left: 152, description: 'Initiation', site: true, bomb: true },
          { floor: 2, top: 188, left: 303, description: 'Control' },
          { floor: 2, top: 123, left: -30, description: 'Bunk', site: true, hostage: true, bomb: true },
          { floor: 2, top: 4, left: -57, description: 'Day Care', site: true, bomb: true, secure: true },
          { floor: 2, top: -66, left: 70, description: 'Yellow', rotate: -90 },
          { floor: 2, top: -8, left: 154, description: 'Waiting' },
          { floor: 2, top: -205, left: -205, description: 'Terrace' },
          { floor: 2, top: -28, left: 293, description: 'Cash Corridor' },
          { floor: 2, top: -82, left: 127, description: 'Bar' },
          { floor: 2, top: -147, left: 173, description: 'Office', site: true, bomb: true, secure: true },
          { floor: 2, top: -118, left: 340, description: 'Cash' },
          { floor: 2, top: -100, left: -18, description: 'Cafe Corridor' },
          { floor: 2, top: -186, left: -56, description: 'Cafe' },
          { floor: 2, top: -157, left: 263, description: 'Showers' },
          { floor: 2, top: -223, left: 157, description: 'Vault' },
          { floor: 2, top: 59, left: 384, description: 'Dragon Top', rotate: -90 },
          { floor: 2, top: 107, left: 274, description: 'Dragon Stairs' },
          { floor: 2, top: -240, left: 74, description: 'Yellow Stairs' },
          { floor: 2, top: -4, left: -223, description: 'Arcade Stairs' },
          // 3F
          { floor: 3, top: -56, left: 342, description: 'Roof' },
          { floor: 3, top: -6, left: -54, description: 'Roof' },
          { floor: 3, top: 131, left: 343, description: 'Control Hatch' },
          { floor: 3, top: -75, left: 29, description: 'Yellow Hatch' }
        ]
      },
      tower: {
        name: 'Tower',
        imgUrlPrefix: 'tower',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -725, right: -1285, height: 217, width: 462
        },
        floors: [
          { index: 1, top: -715, left: -1275, name: floorTerms.firstFloor, background: true },
          { index: 2, top: -715, left: -715, name: floorTerms.secondFloor, default: true },
          { index: 3, top: -715, left: -1115, name: floorTerms.thirdFloor },
          { index: 4, top: -715, left: -1115, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: 331, left: -257, set: 1 },
          { floor: 2, top: -186, left: 253, set: 2 },
          { floor: 1, top: -72, left: -171, set: 3 },
          { floor: 1, top: -177, left: 376, set: 4 }
        ],
        bombObjectives: [
          { floor: 2, top: 8, left: -344, set: 1, letter: 'A' },
          { floor: 2, top: -210, left: -344, set: 1, letter: 'B' },
          { floor: 2, top: -130, left: 253, set: 2, letter: 'A' },
          { floor: 2, top: 18, left: 146, set: 2, letter: 'B' },
          { floor: 1, top: -221, left: 193, set: 3, letter: 'A' },
          { floor: 1, top: 21, left: 193, set: 3, letter: 'B' },
          { floor: 1, top: -143, left: -132, set: 4, letter: 'A' },
          { floor: 1, top: -72, left: -352, set: 4, letter: 'B' }
        ],
        secureObjectives: [
          { floor: 2, top: -152, left: 208, set: 1 },
          { floor: 2, top: 502, left: 64, set: 2 },
          { floor: 1, top: -143, left: 223, set: 3 },
          { floor: 1, top: -143, left: -210, set: 4 }
        ],
        zoomPoints: {
          topLeft: { top: -665, left: -694 },
          bottomRight: { top: 662, left: 584 }
        },
        compassPoints: {
          top: 380, left: 1191
        },
        ladders: [
          { floor: 3, top: 245, left: -139, otherFloor: 'up' },
          { floor: 4, top: 245, left: -139, otherFloor: 'down' },
          { floor: 3, top: 65, left: 116, otherFloor: 'up' },
          { floor: 4, top: 65, left: 116, otherFloor: 'down' }
        ],
        cameras: [
          { floor: 2, top: -349, left: 43, id: 1 },
          { floor: 2, top: 47, left: 463, id: 2 },
          { floor: 2, top: 220, left: -67, id: 3 },
          { floor: 1, top: 335, left: -133, id: 4 },
          { floor: 1, top: 154, left: -459, id: 5 },
          { floor: 2, top: -627, left: -13, id: 6 },
          { floor: 1, top: 592, left: -21, id: 7 }
        ],
        ceilingHatches: [
          { floor: 2, top: -233, left: -67 },
          { floor: 2, top: -27, left: 44 },
          { floor: 1, top: -274, left: -328 },
          { floor: 1, top: 307, left: -315 },
          { floor: 1, top: 158, left: -54 },
          { floor: 1, top: -66, left: 87 },
          { floor: 1, top: 450, left: 342 },
          { floor: 1, top: 505, left: -162 },
          { floor: 1, top: -128, left: -170 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 1, top: -331, left: 92, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: -331, left: -131, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: -303, left: 376, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 100, left: -416, rotate: 0, size: 44 },
          { floor: 1, top: 377, left: -21, rotate: 0, size: 70 },
          { floor: 2, top: -369, left: -120, rotate: 0, size: DRONE_SMALL },
          { floor: 2, top: 342, left: -155, rotate: 0, size: 20 },
          { floor: 2, top: 349, left: -161, rotate: 90, size: 24 },
          { floor: 2, top: 324, left: 249, rotate: 90, size: 192 },
          { floor: 2, top: -46, left: 417, rotate: 90, size: DRONE_SMALL },
          //North Air Duct
          { floor: 3, top: -208, left: -167, rotate: 0, size: 330 },
          { floor: 3, top: -64, left: -167, rotate: 0, size: 40, otherFloor: 'up' },
          { floor: 4, top: -49, left: -133, rotate: 90, size: 80 },
          { floor: 4, top: -64, left: -167, rotate: 0, size: 40, otherFloor: 'down' },
          //East Air Duct
          { floor: 4, top: -49, left: 270, rotate: 0, size: 12, otherFloor: 'down' },
          { floor: 4, top: -49, left: 176, rotate: 90, size: 204 },
          { floor: 2, top: 62, left: 370, rotate: 0, size: DRONE_MED, otherFloor: 'up' },
          { floor: 3, top: -4, left: 370, rotate: 0, size: 128 },
          { floor: 3, top: 54, left: 370, rotate: 0, size: DRONE_SMALL, otherFloor: 'down' },
          { floor: 2, top: -64, left: 390, rotate: 0, size: 12, otherFloor: 'up' },
          { floor: 2, top: -64, left: 404, rotate: 90, size: 40 },
          { floor: 3, top: -64, left: 387, rotate: 0, size: 12, otherFloor: 'down' },
          { floor: 3, top: -64, left: 261, rotate: 0, size: 12, otherFloor: 'up' },
          { floor: 3, top: -64, left: 323, rotate: 90, size: 140 },
          //West Air Duct
          { floor: 2, top: 195, left: -369, rotate: 0, size: DRONE_MED, otherFloor: 'up' },
          { floor: 2, top: 121, left: -404, rotate: 0, size: 12, otherFloor: 'up' },
          { floor: 2, top: 121, left: -407, rotate: 90, size: 20 },
          { floor: 3, top: 153, left: -369, rotate: 0, size: 74 },
          { floor: 3, top: 186, left: -369, rotate: 0, size: 12, otherFloor: 'down' },
          { floor: 3, top: 121, left: -406, rotate: 0, size: 12, otherFloor: 'down' },
          { floor: 3, top: 121, left: -275, rotate: 0, size: 12, otherFloor: 'up' },
          { floor: 3, top: 121, left: -340, rotate: 90, size: 144 },
          { floor: 4, top: 121, left: -288, rotate: 0, size: 12, otherFloor: 'down' },
          { floor: 4, top: 121, left: -230, rotate: 90, size: 128 }
        ],
        spawnPoints: [
          { letter: 'A', top: -627, left: -317, description: 'North Roof', floor: 4 },
          { letter: 'B', top: 575, left: 527, description: 'South Roof', floor: 4 }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: -606, left: -481, description: 'North Rappel' },
          { outdoor: true, top: -606, left: 453, description: 'North Rappel' },
          { outdoor: true, top: 572, left: 453, description: 'South Rappel' },
          { outdoor: true, top: 572, left: -481, description: 'South Rappel' },
          // 1F
          { floor: 1, top: -459, left: -384, description: 'West Atrium', rotate: -30 },
          { floor: 1, top: -458, left: 334, description: 'East Atrium', rotate: 30 },
          { floor: 1, top: -473, left: -167, description: 'Center Atrium' },
          { floor: 1, top: -473, left: 114, description: 'Center Atrium' },
          { floor: 1, top: -342, left: -26, description: 'Main Reception' },
          { floor: 1, top: -259, left: -244, description: 'Kitchen' },
          { floor: 1, top: 59, left: -443, description: 'West Balcony', rotate: -90 },
          { floor: 1, top: -211, left: -443, description: 'West Balcony', rotate: -90 },
          { floor: 1, top: -91, left: -173, description: 'Restaurant', site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: -102, left: -353, description: 'Bird', site: true, bomb: true },
          { floor: 1, top: 48, left: -185, description: 'Restaurant Reception' },
          { floor: 1, top: -164, left: 135, description: 'Tea', site: true, bomb: true, secure: true },
          { floor: 1, top: -120, left: 347, description: 'Lounge', site: true, hostage: true },
          { floor: 1, top: -256, left: 475, description: 'East Balcony', rotate: -90 },
          { floor: 1, top: -24, left: 475, description: 'East Balcony', rotate: -90 },
          { floor: 1, top: 30, left: 248, description: 'Bar', site: true, bomb: true },
          { floor: 1, top: 144, left: -17, description: 'Elevator' },
          { floor: 1, top: 156, left: 197, description: 'Bar Hallway' },
          { floor: 1, top: 156, left: -260, description: 'Restaurant Hallway' },
          { floor: 1, top: 265, left: -23, description: 'Traditional' },
          { floor: 1, top: 252, left: -217, description: 'Bonsai' },
          { floor: 1, top: 252, left: 180, description: 'Gaming' },
          { floor: 1, top: 508, left: -24, description: 'Fountain' },
          { floor: 1, top: 442, left: -308, description: 'West Observatory' },
          { floor: 1, top: 442, left: 250, description: 'East Observatory' },
          { floor: 1, top: -518, left: -23, description: 'North Stairs' },
          { floor: 1, top: 40, left: -524, description: 'West Stairs' },
          { floor: 1, top: 119, left: 409, description: 'East Stairs' },
          { floor: 1, top: -100, left: -12, description: 'Yellow', rotate: -90 },
          // 2F
          { floor: 2, top: -528, left: -23, description: 'North Stairs' },
          { floor: 2, top: -22, left: -542, description: 'West Stairs' },
          { floor: 2, top: 119, left: 409, description: 'East Stairs' },
          { floor: 2, top: 165, left: 11, description: 'Elevator' },
          { floor: 2, top: 87, left: -9, description: 'Elevator' },
          { floor: 2, top: -499, left: -384, description: 'West Atrium', rotate: -30 },
          { floor: 2, top: -498, left: 334, description: 'East Atrium', rotate: 30 },
          { floor: 2, top: -473, left: -167, description: 'Center Atrium' },
          { floor: 2, top: -473, left: 114, description: 'Center Atrium' },
          { floor: 2, top: -469, left: -23, description: 'Info' },
          { floor: 2, top: -396, left: -17, description: 'Blue' },
          { floor: 2, top: -121, left: -17, description: 'Blue' },
          { floor: 2, top: -150, left: -105, description: 'Gallery', rotate: -90 },
          { floor: 2, top: 9, left: -282, description: 'Lantern', site: true, bomb: true },
          { floor: 2, top: -254, left: 276, description: 'Media', site: true, hostage: true, bomb: true, secure: true },
          { floor: 2, top: 23, left: 378, description: 'Exhibit Hallway' },
          { floor: 2, top: 10, left: 200, description: 'Exhibit', site: true, bomb: true },
          { floor: 2, top: -278, left: 456, description: 'East Balcony' },
          { floor: 2, top: 129, left: 490, description: 'East Balcony', rotate: -90 },
          { floor: 2, top: -211, left: -282, description: 'Gift Shop', site: true, bomb: true },
          { floor: 2, top: -277, left: -479, description: 'West Balcony' },
          { floor: 2, top: 73, left: -460, description: 'West Balcony' },
          { floor: 2, top: 163, left: -210, description: 'Offices Hallway' },
          { floor: 2, top: 269, left: -283, description: 'Offices', site: true, hostage: true },
          { floor: 2, top: 373, left: -500, description: 'Supply' },
          { floor: 2, top: 475, left: -345, description: 'Meeting' },
          { floor: 2, top: 524, left: -21, description: 'CEO', site: true, secure: true },
          { floor: 2, top: 488, left: 274, description: 'Bathroom' },
          { floor: 2, top: 312, left: 453, description: 'Server' },
          { floor: 2, top: 257, left: 26, description: 'CEO Reception' },
          // 3F
          { floor: 3, top: -210, left: -211, description: 'North Vent' },
          { floor: 3, top: -93, left: 324, description: 'East Vent' },
          { floor: 3, top: 92, left: -338, description: 'West Vent' },
          { floor: 3, top: 90, left: -14, description: 'Ventilation' },
          { floor: 3, top: -219, left: -14, description: 'Ventilation' },
          { floor: 3, top: -614, left: -14, description: 'Catwalk' },
          { floor: 3, top: -366, left: -315, description: 'Catwalk' },
          { floor: 3, top: -366, left: 295, description: 'Catwalk' },
          { floor: 3, top: 165, left: 11, description: 'Elevator' },
          // 4F
          { floor: 4, top: 356, left: -10, description: 'Roof Access' },
          { floor: 4, top: -214, left: -10, description: 'Roof Access' },
          { floor: 4, top: 165, left: 11, description: 'Elevator' },
          { floor: 4, top: -43, left: -200, description: 'North Vent' },
          { floor: 4, top: -78, left: 177, description: 'East Vent' },
          { floor: 4, top: 92, left: -231, description: 'West Vent' }
        ]
      },
      villa: {
        name: 'Villa',
        imgUrlPrefix: 'villa',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -495, right: -902, height: 217, width: 462
        },
        floors: [
          { index: 0, top: -491, left: -188, width: 1090, name: floorTerms.basement, background: true },
          { index: 1, top: -495, left: 16, width: 624, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -495, left: 16, width: 624, name: floorTerms.secondFloor },
          { index: 3, top: -495, left: 16, width: 624, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: 62, left: 284, set: 1 },
          { floor: 2, top: -315, left: 347, set: 2 },
          { floor: 1, top: 100, left: 295, set: 3 },
          { floor: 0, top: -197, left: 487, set: 4 }
        ],
        bombObjectives: [
          { floor: 2, top: 103, left: 191, set: 1, letter: 'A' },
          { floor: 2, top: 62, left: 324, set: 1, letter: 'B' },

          { floor: 2, top: -204, left: 417, set: 2, letter: 'A' },
          { floor: 2, top: -204, left: 306, set: 2, letter: 'B' },

          { floor: 1, top: -105, left: 220, set: 3, letter: 'A' },
          { floor: 1, top: 75, left: 145, set: 3, letter: 'B' },

          { floor: 1, top: -333, left: 417, set: 4, letter: 'A' },
          { floor: 1, top: -225, left: 428, set: 4, letter: 'B' }
        ],
        secureObjectives: [
          { floor: 2, top: 170, left: 309, set: 1 },
          { floor: 2, top: -205, left: 529, set: 2 },
          { floor: 1, top: -105, left: 260, set: 3 },
          { floor: 0, top: -161, left: 370, set: 4 }
        ],
        zoomPoints: {
          topLeft: { left: 0, top: -420 },
          bottomRight: { left: 270, top: 640 }
        },
        compassPoints: {
          top: 148, left: 800
        },
        ladders: [],
        cameras: [
          {floor: 2, top: -353, left: 381, id: 1 },
          {floor: 2, top: -65, left: 140, id: 2 },
          {floor: 1, top: -207, left: 254, id: 3 },
          {floor: 1, top: 206, left: 157, id: 4 },
          {floor: 0, top: -128, left: 288, id: 5 },
          {outdoor: true, top: -82, left: 53, id: 6 },
          {outdoor: true, top: 360, left: 366, id: 7 },
          {outdoor: true, top: -73, left: 685, id: 8 }
        ],
        ceilingHatches: [
          // scale is off b/w map and hatch, so rescaling to fit.
          { floor: 1, top: -59, left: 109, width: 25, height: 25 },
          { floor: 1, top: -304, left: 300, width: 25, height: 25 },
          { floor: 1, top: 213, left: 360, width: 25, height: 25 },
          { floor: 1, top: -169, left: 556, width: 25, height: 25 },

          { floor: 0, top: -111, left: 296, width: 25, height: 25 },
          { floor: 0, top: -325, left: 498, width: 25, height: 25 }
        ],
        skylights: [
          {floor: 1, otherFloor: 'up', top: -176, left: 345 },
          {floor: 2, top: -193, left: 368 }
        ],
        droneTunnels: [
          { floor: 0, top: -197, left: 296, rotate: 90, size: 12 },
          { floor: 0, top: -315, left: 521, rotate: 90, size: 57 },
          { floor: 1, top: 274, left: 169, rotate: 0, size: 44 },
          { floor: 1, top: 224, left: 359, rotate: 0, size: DRONE_SMALL },
          { floor: 1, top: 89, left: 90, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: 64, left: 372, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: -123, left: 491, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: -155, left: 177, rotate: 90, size: DRONE_SMALL },
          { floor: 1, top: -295, left: 235, rotate: 90, size: DRONE_SMALL },
          { floor: 2, top: -32, left: 200, rotate: 90, size: 10 },
          { floor: 2, top: -85, left: 227, rotate: 0, size: DRONE_SMALL },
          { floor: 2, top: -279, left: 580, rotate: 0, size: DRONE_SMALL },
          { floor: 2, top: -360, left: 409, rotate: 0, size: DRONE_SMALL }
        ],
        spawnPoints: [
          { letter: 'A', top: -371, left: -110, description: 'Main Road' },
          { letter: 'B', top: 420, left: 371, description: 'Ruins' },
          { letter: 'C', top: -290, left: 834, description: 'Fountain' }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 471, left: 234, description: 'Ruins' },
          { outdoor: true, top: 180, left: -74, description: 'Roundabout' },
          { outdoor: true, top: 189, left: 460, description: 'Terrace' },
          { outdoor: true, top: 30, left: 460, description: 'Terrace' },
          { outdoor: true, top: 110, left: 600, description: 'Crypt Entrance' },
          { outdoor: true, top: 119, left: 700, description: 'Garden' },
          { outdoor: true, top: -20, left: 610, description: 'Driveway' },
          { outdoor: true, top: -180, left: 653, description: 'Driveway' },
          { outdoor: true, top: -370, left: 672, description: 'Driveway' },
          { outdoor: true, top: -80, left: -80, description: 'Main Road' },
          { outdoor: true, top: -40, left: 530, description: 'Balcony' },
          { outdoor: true, top: -110, left: 724, description: 'Pergola' },
          { outdoor: true, top: -170, left: 90, description: 'Stable YArd' },
          { outdoor: true, top: -131, left: 820, description: 'Chapel' },
          { outdoor: true, top: -390, left: 740, description: 'Fountain' },
          { outdoor: true, top: -281, left: 80, description: 'Stable' },
          { outdoor: true, top: -390, left: 457, description: 'Side Road' },
          // 0F
          { floor: 0, top: 59, left: 320, description: 'Crypt Tunnel' },
          { floor: 0, top: 120, left: 512, description: 'Crypt' },
          { floor: 0, top: -211, left: 570, description: 'Garage' },
          { floor: 0, top: -380, left: 278, description: 'Cellar Tunnel' },
          { floor: 0, top: -40, left: 288, description: 'Tasting' },
          { floor: 0, top: -196, left: 268, description: 'Arch' },
          { floor: 0, top: -190, left: 371, description: 'Art', site: true, secure: true },
          { floor: 0, top: -219, left: 466, description: 'Office', site: true, hostage: true },
          { floor: 0, top: -291, left: 357, description: 'Wine' },
          { floor: 0, top: -45, left: 370, description: 'Red Stairs' },
          { floor: 0, top: -334, left: 260, description: 'Back Stairs' },
          { floor: 0, top: -337, left: 492, description: 'Pantry Stairs' },
          // 1F
          { floor: 1, top: 284, left: 170, description: 'Main Stairs' },
          { floor: 1, top: -47, left: 400, description: 'Red Stairs' },
          { floor: 1, top: -354, left: 278, description: 'Astro Stairs' },
          { floor: 1, top: -314, left: 302, description: 'Back Stairs', rotate: -90 },
          { floor: 1, top: -296, left: 510, description: 'Pantry Stairs' },
          { floor: 1, top: 270, left: 290, description: 'Greenhouse' },
          { floor: 1, top: 160, left: 60, description: 'Front<br/>Entrance' },
          { floor: 1, top: 197, left: 200, description: 'Main' },
          { floor: 1, top: 191, left: 347, description: 'Studio' },
          { floor: 1, top: 127, left: 165, description: 'Library', site: true, bomb: true },
          { floor: 1, top: 44, left: 135, description: 'Library', site: true, bomb: true },
          { floor: 1, top: 66, left: 256, description: 'Piano Hallway', rotate: -90 },
          { floor: 1, top: 26, left: 315, description: 'Piano Hallway' },
          { floor: 1, top: 72, left: 319, description: 'Piano', site: true, hostage: true },
          { floor: 1, top: 50, left: 204, description: 'Gallery' },
          { floor: 1, top: -26, left: 113, description: 'Toilet' },
          { floor: 1, top: -34, left: 229, description: 'Living', site: true, bomb: true, secure: true },
          { floor: 1, top: -139, left: 279, description: 'Living', site: true, bomb: true, secure: true },
          { floor: 1, top: -31, left: 463, description: 'Bicycle' },
          { floor: 1, top: -117, left: 430, description: 'Memorial' },
          { floor: 1, top: -180, left: 212, description: 'Mudroom', rotate: -90 },
          { floor: 1, top: -116, left: 353, description: 'Living Hallway', rotate: -90 },
          { floor: 1, top: -189, left: 519, description: 'Laundry' },
          { floor: 1, top: -235, left: 274, description: 'Back Hallway' },
          { floor: 1, top: -247, left: 480, description: 'Dining', site: true, bomb: true },
          { floor: 1, top: -250, left: 337, description: 'China' },
          { floor: 1, top: -312, left: 371, description: 'Kitchen', site: true, bomb: true },
          { floor: 1, top: -338, left: 503, description: 'Pantry' },
          // 2F
          { floor: 2, top: -95, left: 530, description: 'Bedroom Roof' },
          { floor: 2, top: 286, left: 176, description: 'Main Stairs' },
          { floor: 2, top: -16, left: 403, description: 'Red Stairs' },
          { floor: 2, top: -356, left: 303, description: 'Astro Stairs' },
          { floor: 2, top: 282, left: 310, description: 'Veranda' },
          { floor: 2, top: 119, left: 129, description: 'Ninety', rotate: -90 },
          { floor: 2, top: -4, left: 164, description: 'Ninety<br/>Corner' },
          { floor: 2, top: -51, left: 190, description: 'Ninety' },
          { floor: 2, top: 184, left: 350, description: 'Study', site: true, secure: true },
          { floor: 2, top: 70, left: 165, description: 'Gaming', site: true, bomb: true },
          { floor: 2, top: 160, left: 191, description: 'Bar' },
          { floor: 2, top: 108, left: 320, description: 'Aviator', site: true, hostage: true, bomb: true },
          { floor: 2, top: 6, left: 255, description: 'Vault' },
          { floor: 2, top: -38, left: 346, description: 'Landing' },
          { floor: 2, top: -109, left: 286, description: 'Trophy<br/>Entrance' },
          { floor: 2, top: -159, left: 447, description: 'Statue', site: true, bomb: true },
          { floor: 2, top: -227, left: 291, description: 'Trophy', site: true, bomb: true },
          { floor: 2, top: -228, left: 539, description: 'Master', site: true, secure: true },
          { floor: 2, top: -317, left: 296, description: 'Astro', site: true, hostage: true },
          { floor: 2, top: -304, left: 440, description: 'Bathroom' },
          { floor: 2, top: -303, left: 533, description: 'Closet' },
          // 3F
          { floor: 3, top: 86, left: 263, description: 'Roof' },
          { floor: 3, top: -248, left: 481, description: 'Skyligh Roof' }
        ]
      },
      yacht: {
        name: 'Yacht',
        imgUrlPrefix: 'yacht',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -568, right: -902, height: 217, width: 462
        },
        floors: [
          { index: 1, top: -577, left: -776, width: 1679, name: floorTerms.firstFloor, background: true },
          { index: 2, top: -175, left: -697, width: 1567, name: floorTerms.secondFloor, default: true },
          { index: 3, top: -175, left: -697, width: 1567, name: floorTerms.thirdFloor },
          { index: 4, top: -175, left: -697, width: 1567, name: floorTerms.fourthFloor },
          { index: 5, top: -175, left: -697, width: 1567, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 4, top: 13, left: 16, set: 1 },
          { floor: 3, top: -55, left: 129, set: 2 },
          { floor: 2, top: 93, left: 81, set: 3 },
          { floor: 1, top: -24, left: -415, set: 4 }
        ],
        bombObjectives: [
          { floor: 4, top: 14, left: 141, set: 1, letter: 'A' },
          { floor: 4, top: -32, left: -6, set: 1, letter: 'B' },
          { floor: 2, top: 11, left: -297, set: 2, letter: 'A' },
          { floor: 2, top: 9, left: -101, set: 2, letter: 'B' },
          { floor: 2, top: 93, left: 45, set: 3, letter: 'A' },
          { floor: 2, top: -86, left: 52, set: 3, letter: 'B' },
          { floor: 1, top: -95, left: -275, set: 4, letter: 'A' },
          { floor: 1, top: 116, left: -259, set: 4, letter: 'B' }
        ],
        secureObjectives: [
          { floor: 3, top: -6, left: 31, set: 1 },
          { floor: 2, top: 33, left: -150, set: 2 },
          { floor: 2, top: 61, left: 343, set: 3 },
          { floor: 4, top: 14, left: 180, set: 4 }
        ],
        zoomPoints: {
          topLeft: { top: -139, left: -610 },
          bottomRight: { top: 160, left: 590 }
        },
        compassPoints: {
          top: 231, left: 803
        },
        ladders: [
          { floor: 3, top: -11, left: 232, otherFloor: 'up' },
          { floor: 4, top: -11, left: 232, otherFloor: 'down' },
          { floor: 1, top: -109, left: -239, otherFloor: 'up' },
          { floor: 2, top: -109, left: -239, otherFloor: 'down' },
          { floor: 3, top: 116, left: -206, otherFloor: 'up' },
          { floor: 4, top: 116, left: -206, otherFloor: 'down' },
          { floor: 3, top: 116, left: 331, otherFloor: 'up' },
          { floor: 4, top: 116, left: 331, otherFloor: 'down' },
          { floor: 3, top: -93, left: 331, otherFloor: 'up' },
          { floor: 4, top: -93, left: 331, otherFloor: 'down' },
          { floor: 2, top: -39, left: 610, otherFloor: 'up' },
          { floor: 3, top: -39, left: 610, otherFloor: 'down' }
        ],
        cameras: [
          { floor: 4, top: 87, left: -134, id: 1 },
          { floor: 3, top: 21, left: 264, id: 2 },
          { floor: 3, top: 86, left: -227, id: 3 },
          { floor: 2, top: 13, left: 262, id: 4 },
          { floor: 2, top: 124, left: -266, id: 5 },
          { floor: 1, top: -43, left: 63, id: 6 },
          { floor: 3, top: 10, left: 631, id: 7 },
          { floor: 2, otherFloor: 'up', top: 10, left: 631, id: 7 },
          { floor: 4, otherFloor: 'down', top: 10, left: 631, id: 7 },
          { floor: 5, otherFloor: 'down', top: 10, left: 631, id: 7 },
          { floor: 3, top: 114, left: -477, id: 8 },
          { floor: 2, otherFloor: 'up', top: 114, left: -477, id: 8 },
          { floor: 4, otherFloor: 'down', top: 114, left: -477, id: 8 },
          { floor: 5, otherFloor: 'down', top: 114, left: -477, id: 8 }
        ],
        ceilingHatches: [
          { floor: 3, top: -63, left: 81 },
          { floor: 3, top: -45, left: 189 },
          { floor: 3, top: 0, left: 235 },
          { floor: 2, top: -45, left: -210 },
          { floor: 2, top: 46, left: -74 },
          { floor: 2, top: 56, left: 25 },
          { floor: 2, top: 71, left: 310 },
          { floor: 2, top: -34, left: 310 },
          { floor: 1, top: 15, left: -550 },
          { floor: 1, top: 14, left: -328  },
          { floor: 1, top: -53, left: 155 }
        ],
        skylights: [],
        droneTunnels: [
          { floor: 1, top: 63, left: -550, rotate: 90, size: 108 },
          { floor: 1, top: -36, left: -550, rotate: 90, size: 108 },
          { floor: 2, top: 103, left: -155, rotate: 0, size: DRONE_SMALL },
          { floor: 2, top: 129, left: -289, rotate: 90, size: DRONE_MED },
          { floor: 3, top: -83, left: -190, rotate: 0, size: DRONE_MED },
          { floor: 3, top: -83, left: 175, rotate: 0, size: DRONE_MED },
          { floor: 3, top: 106, left: -52, rotate: 0, size: DRONE_MED },
          { floor: 3, top: 62, left: 177, rotate: 90, size: DRONE_MED },
          { floor: 3, top: 106, left: 147, rotate: 0, size: DRONE_MED },
          { floor: 3, top: 106, left: 289, rotate: 0, size: DRONE_MED },
          { floor: 3, top: 0, left: 217, rotate: 90, size: DRONE_MED }
        ],
        spawnPoints: [
          { letter: 'A', top: -532, left: -187, description: 'Submarine' },
          { letter: 'B', top: 413, left: -657, description: 'Zodiac' },
          { letter: 'C', top: 264, left: 596, description: 'Snow Mobile' }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: -262, left: -43, description: 'Submarine' },
          { outdoor: true, top: -206, left: -306, description: 'West Glacier' },
          { outdoor: true, top: 232, left: 617, description: 'East Breach' },
          { outdoor: true, top: 388, left: 100, description: 'East Glacier' },
          { outdoor: true, top: 388, left: -304, description: 'Frozen River' },
          { outdoor: true, top: 245, left: -569, description: 'Zodiac' },
          { outdoor: true, top: -145, left: 261, description: 'West Breach' },
          // 1F
          { floor: 1, top: -15, left: -361, description: 'Engine', site: true, hostage: true },
          { floor: 1, top: 18, left: -516, description: 'Back Entrance' },
          { floor: 1, top: 18, left: -634, description: 'Rear Deck' },
          { floor: 1, top: -33, left: -275, description: 'Server', site: true, bomb: true },
          { floor: 1, top: 74, left: -274, description: 'Storage', site: true, bomb: true },
          { floor: 1, top: 76, left: -205, description: 'Back Stairs' },
          { floor: 1, top: -91, left: -192, description: 'ladder' },
          { floor: 1, top: -26, left: -7, description: 'Engine Hallway' },
          { floor: 1, top: -39, left: 264, description: 'Front Stairs', rotate: -90 },
          // 2F
          { floor: 2, top: 103, left: 127, description: 'Cafeteria', site: true, hostage: true, bomb: true },
          { floor: 2, top: -18, left: -302, description: 'Control', site: true, bomb: true },
          { floor: 2, top: 25, left: -493, description: 'Rear Deck' },
          { floor: 2, top: -12, left: -157, description: 'Kitchen', site: true, bomb: true, secure: true },
          { floor: 2, top: -26, left: 47, description: 'Dorms', site: true, bomb: true },
          { floor: 2, top: 137, left: -143, description: 'Kitchen Hallway' },
          { floor: 2, top: 70, left: -205, description: 'Back Stairs' },
          { floor: 2, top: -53, left: -91, description: 'Kitchen Stairs' },
          { floor: 2, top: -19, left: -44, description: 'Pantry' },
          { floor: 2, top: -77, left: 141, description: 'Infirmary' },
          { floor: 2, top: 15, left: 352, description: 'Boreal', site: true, secure: true },
          { floor: 2, top: 24, left: 60, description: 'Cafeteria Hallway' },
          { floor: 2, top: -43, left: 240, description: 'Front Stairs' },
          { floor: 2, top: -62, left: -256, description: 'Utility' },
          { floor: 2, top: -15, left: 553, description: 'Anchor' },
          { floor: 2, top: 85, left: 463, description: 'Boreal Entrance' },
          // 3F
          { floor: 3, top: 14, left: -359, description: 'Spa Deck' },
          { floor: 3, top: 138, left: -89, description: 'East Deck' },
          { floor: 3, top: -96, left: -89, description: 'West Deck' },
          { floor: 3, top: 138, left: 226, description: 'East Deck' },
          { floor: 3, top: -96, left: 226, description: 'West Deck' },
          { floor: 3, top: 17, left: 407, description: 'Front Deck', rotate: -90 },
          { floor: 3, top: 17, left: 723, description: 'Front Deck' },
          { floor: 3, top: 20, left: 801, description: 'King' },
          { floor: 3, top: 17, left: 332, description: 'Master' },
          { floor: 3, top: 4, left: 77, description: 'Casino', site: true, secure: true },
          { floor: 3, top: -9, left: 170, description: 'Poker', site: true, hostage: true },
          { floor: 3, top: 85, left: 222, description: 'Bathroom' },
          { floor: 3, top: 36, left: 200, description: 'Master Hallway' },
          { floor: 3, top: 101, left: 65, description: 'Casino Hallway' },
          { floor: 3, top: 1, left: -26, description: 'Globe Hallway', rotate: -90 },
          { floor: 3, top: 49, left: -179, description: 'Lounge' },
          { floor: 3, top: 22, left: -87, description: 'Top Stairs'  },
          { floor: 3, top: -40, left: 274, description: 'Front Stairs', rotate: -90 },
          { floor: 3, top: -55, left: -28, description: 'Kitchen Stairs' },
          { floor: 3, top: 102, left: -183, description: 'Back Stairs' },
          // 4F
          { floor: 4, top: 59, left: 17, description: 'Maps', site: true, hostage: true, bomb: true },
          { floor: 4, top: 62, left: 186, description: 'Cockpit', site: true, bomb: true, secure: true },
          { floor: 4, top: 100, left: 21, description: 'Cockpit Hallway' },
          { floor: 4, top: -32, left: 64, description: 'Office' },
          { floor: 4, top: 14, left: 349, description: 'Cockpit Balcony', rotate: -90 },
          { floor: 4, top: 27, left: -73, description: 'Top Stairs', rotate: -90 },
          { floor: 4, top: 9, left: -57, description: 'Helipad Entrance', rotate: -90 },
          { floor: 4, top: 17, left: -285, description: 'Helipad' },
          { floor: 4, top: -100, left: -18, description: 'West Balcony' },
          { floor: 4, top: 143, left: -18, description: 'East Balcony' },
          // 5F
          { floor: 5, top: 17, left: 108, description: 'Roof' }
        ]
      }
    };
  };

  return  {
    getMapData: getMapData
  };
})(R6MLangTerms);
