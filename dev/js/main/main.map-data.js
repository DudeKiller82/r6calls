'use strict';

var R6MMainData = (function(R6MLangTerms, undefined){
  var DRONE_MED = 18,
    DRONE_SMALL = 14,
    mapRoomTerms = R6MLangTerms.terms.mapRooms,
    mapNameTerms = R6MLangTerms.terms.mapNames,
    objectiveTerms = R6MLangTerms.terms.objectives,
    floorTerms = R6MLangTerms.terms.floorNames,
    spawnTerms = R6MLangTerms.terms.spawnPoints,
    bankTerms = mapRoomTerms.bank,
    borderTerms = mapRoomTerms.border,
    chaletTerms = mapRoomTerms.chalet,
    clubTerms = mapRoomTerms.club,
    consulateTerms = mapRoomTerms.consulate,
    favelaTerms = mapRoomTerms.favela,
    fortressTerms = mapRoomTerms.fortress,
    herefordTerms = mapRoomTerms.hereford,
    houseTerms = mapRoomTerms.house,
    kanalTerms = mapRoomTerms.kanal,
    kafeTerms = mapRoomTerms.kafe,
    oregonTerms = mapRoomTerms.oregon,
    outbackTerms = mapRoomTerms.outback,
    planeTerms = mapRoomTerms.plane,
    skyscraperTerms = mapRoomTerms.skyscraper,
    bartlettTerms = mapRoomTerms.bartlett,
    coastlineTerms = mapRoomTerms.coastline,
    themeparkTerms = mapRoomTerms.themepark,
    towerTerms = mapRoomTerms.tower,
    yachtTerms = mapRoomTerms.yacht,
    villaTerms = mapRoomTerms.villa;

  var getMapData = function getMapData() {
    return {
      bank: {
        name: mapNameTerms.bank,
        imgUrlPrefix: 'bank',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -806, right: -1329, height: 217, width: 657
        },
        floors: [
          { index: 0, top: -1212, left: -2292, width: 3680, name: floorTerms.basement },
          { index: 1, top: -1212, left: -2292, width: 3680, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -1212, left: -2292, width: 3680, name: floorTerms.secondFloor },
          { index: 3, top: -1212, left: -2292, width: 3680, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 0, top: -160, left: -69 },
          { floor: 1, top: -26, left: -15 },
          { floor: 1, top: 65, left: 281 },
          { floor: 2, top: -102, left: 138 }
        ],
        bombObjectives: [
          { floor: 0, top: 8, left: 193, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 0, top: 34, left: -31, set: 4, letter: objectiveTerms.bombShortB },
          { floor: 1, top: -26, left: 26, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: -100, left: 169, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 1, top: 160, left: 97, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 100, left: 345, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 2, top: -52, left: -13, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 2, top: -151, left: 138, set: 1, letter: objectiveTerms.bombShortA }
        ],
        secureObjectives: [
          { floor: 0, top: 10, left: -67 },
          { floor: 1, top: 209, left: 113 },
          { floor: 1, top: -100, left: 125 },
          { floor: 2, top: -52, left: 138 }
        ],
        zoomPoints: {
          topLeft: { top: -368, left: -483 },
          bottomRight: { top: 310, left: 397 }
        },
        compassPoints: {
          top: 316, left: 741
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
          {
            floor: 2, top: -157, left: -392, id: 1,
            los: [[{top: -278, left: -414}, {top: -163, left: -434}, {top: 61, left: -413}]]
          },
          {
            floor: 1, top: 100, left: 42, id: 2,
            los: [[{top: 85, left: -211},{top: 85, left: 61},{top: 136, left: 61}]]
          },
          {
            floor: 2, top: -171, left: 244, id: 3,
            los: [[{top: 91, left: 227},{top: -185, left: 227},{top: -185, left: 420}]]
          },
          {
            floor: 0, top: 119, left: -203, id: 4,
            los: [[{top: 51, left: -220}, {top: 135, left: -220}, {top: 135, left: -12}]]
          },
          {
            outdoor: true, top: -431, left: 5, id: 5,
            los: [[{top: -490, left: -977},{top: -503, left: 36},{top: -302, left: 457}]]
          },
          {
            floor: 0, top: 148, left: -518, id: 6,
            los: [[{top: -363, left: -515},{top: 82, left: -538},{top: 212, left: -538},{top: 241, left: -530},{top: 269, left: -516},{top: 292, left: -494},{top: 312, left: -461},{top: 322, left: -427},{top: 324, left: -303}]]
          },
          { floor: 1, otherFloor: 'down', top: 148, left: -518, id: 6 },
          {
            outdoor: true, top: 115, left: 562, id: 7,
            los: [[{top: 49, left: 577}, {top: 115, left: 584}, {top: 288, left: 571}]]
          }
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
          { letter: spawnTerms.a, top: -590, left: -888, description: bankTerms.spawnBoulevard },
          { letter: spawnTerms.b, top: -446, left: 641, description: bankTerms.jewelryFront },
          { letter: spawnTerms.c, top: 497, left: 652, description: bankTerms.spawnBackAlley }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: -575, left: -661, description: bankTerms.parkingLot },
          { outdoor: true, top: -575, left: -156, description: bankTerms.boulevard },
          { outdoor: true, top: -575, left: 538, description: bankTerms.jewelryFront },
          { outdoor: true, top: -295, left: 239, description: bankTerms.plaza },
          { outdoor: true, top: -448, left: -225, description: bankTerms.mainEntrance },
          { outdoor: true, top: -143, left: -473, description: bankTerms.garageRamp },
          { outdoor: true, top: -216, left: -720, description: bankTerms.exteriorParking },
          { outdoor: true, top: 648, left: 657, description: bankTerms.alleyAccess, rotate: -90 },
          { outdoor: true, top: 495, left: 360, description: bankTerms.backAlleyRooftop },
          { outdoor: true, top: 336, left: 647, description: bankTerms.backAlley },
          // OF
          { floor: 0, top: -150, left: -151, description: bankTerms.vault, site: true, hostage: true },
          { floor: 0, top: -114, left: 37, description: bankTerms.cash },
          { floor: 0, top: -114, left: 146, description: bankTerms.goldVault },
          { floor: 0, top: -161, left: 278, description: bankTerms.serverRoomStairs },
          { floor: 0, top: -64, left: 321, description: bankTerms.serverRoom },
          { floor: 0, top: 53, left: 201, description: bankTerms.CCTVRoom, site: true, bomb: true },
          { floor: 0, top: 167, left: 65 , description: bankTerms.loadingDock},
          { floor: 0, top: 21, left: 103, description: bankTerms.secureHallway, rotate: -90},
          { floor: 0, top: 115, left: 35, description: bankTerms.lockersHallway  },
          { floor: 0, top: -255, left: 455, description: bankTerms.sewer },
          { floor: 0, top: 4, left: 2, description: bankTerms.lockers, site: true, bomb: true, secure: true },
          { floor: 0, top: 94, left: -152, description: bankTerms.vaultLobby },
          { floor: 0, top: -5, left: -166, description: bankTerms.vaultEntrance },
          { floor: 0, top: 237, left: -38, description: bankTerms.mainStairway },
          { floor: 0, top: 315, left: -137, description: bankTerms.bankGarage },
          { floor: 0, top: 170, left: -183, description: bankTerms.elevators },
          { floor: 0, top: 359, left: -15, description: bankTerms.redTruck, call: true },
          // 1F
          { floor: 1, top: 236, left: -274, description: bankTerms.garageRoof },
          { floor: 1, top: 255, left: 265, description: bankTerms.printerRoom },
          { floor: 1, top: -92, left: 27, description: bankTerms.tellersOffice, site: true, hostage: true, bomb: true },
          { floor: 1, top: -56, left: 153, description: bankTerms.archives, site: true, bomb: true, secure: true },
          { floor: 1, top: -70, left: -90, description: bankTerms.tellers },
          { floor: 1, top: 132, left: -328, description: bankTerms.loanOffice },
          { floor: 1, top: 123, left: -81, description: bankTerms.officeHallway },
          { floor: 1, top: 245, left: -34, description: bankTerms.mainStairway },
          { floor: 1, top: -61, left: 318, description: bankTerms.skylightStairwell },
          { floor: 1, top: -141, left: -234, description: bankTerms.lobby },
          { floor: 1, top: 183, left: 162, description: bankTerms.openArea, site: true, bomb: true, secure: true },
          { floor: 1, top: 145, left: 283, description: bankTerms.staffRoom, site: true, hostage: true, bomb: true },
          { floor: 1, top: 18, left: 441, description: bankTerms.electricalRoom },
          { floor: 1, top: 34, left: 143, description: bankTerms.adminOffice },
          { floor: 1, top: -318, left: -223, description: bankTerms.ATMs },
          { floor: 1, top: 170, left: -183, description: bankTerms.elevators },
          { floor: 1, top: 170, left: -114, description: bankTerms.elevators },
          { floor: 1, top: -155, left: 322, description: bankTerms.squareStairs },
          { floor: 1, top: -10, left: -274, description: bankTerms.lobbyStairs, rotate: 45 },
          // 2F
          { floor: 2, top: 236, left: -274, description: bankTerms.garageRoof },
          { floor: 2, top: -141, left: -234, description: bankTerms.lobby },
          { floor: 2, top: -159, left: 33, description: bankTerms.executiveHallway },
          { floor: 2, top: -32, left: -105, description: bankTerms.frontDesk },
          { floor: 2, top: -75, left: 39, description: bankTerms.executiveLounge, site: true, bomb: true },
          { floor: 2, top: -77, left: 184, description: bankTerms.CEOOffice, site: true, hostage: true, bomb: true, secure: true },
          { floor: 2, top: -8, left: 319, description: bankTerms.topSquare },
          { floor: 2, top: 47, left: 185, description: bankTerms.janitorCloset },
          { floor: 2, top: 127, left: -20, description: bankTerms.hallway },
          { floor: 2, top: 240, left: -25, description: bankTerms.mainStairway },
          { floor: 2, top: 147, left: 320, description: bankTerms.terrace },
          { floor: 2, top: 279, left: 117, description: bankTerms.stockTradingRoom },
          { floor: 2, top: 50, left: -2, description: bankTerms.conferenceRoom },
          { floor: 2, top: 173, left: -110, description: bankTerms.elevators },
          { floor: 2, top: -318, left: -223, description: bankTerms.ATMs },
          { floor: 2, top: 132, left: -328, description: bankTerms.loanOffice },
          { floor: 2, top: -128, left: -148, description: bankTerms.balcony, rotate: -45 },
          { floor: 2, top: -158, left: 330, description: bankTerms.squareStairs },
          { floor: 2, top: -10, left: -274, description: bankTerms.lobbyStairs, rotate: 45 },
          { floor: 2, top: 127, left: 145, description: bankTerms.stockHallway },
          // 3F
          { floor: 3, top: 236, left: -274, description: bankTerms.garageRoof },
          { floor: 3, top: -13, left: -136, description: bankTerms.highRoof },
          { floor: 3, top: 56, left: 129, description: bankTerms.lowRoof }
        ]
      },
      bartlett: {
        name: mapNameTerms.bartlett,
        imgUrlPrefix: 'bartlett',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -725, right: -1255, width: 475
        },
        floors: [
          { index: 1, top: -715, left: -1275, name: floorTerms.firstFloor, background: true, default: true },
          { index: 2, top: -465, left: -451, name: floorTerms.secondFloor },
          { index: 3, top: -465, left: -451, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 1, top: -96, left: -296 },
          { floor: 1, top: -199, left: 643 },
          { floor: 2, top: 265, left: 336 },
          { floor: 2, top: -171, left: 577 }
        ],
        bombObjectives: [
          { floor: 2, top: -116, left: 577, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 92, left: 596, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 1, top: 102, left: 524, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 1, top: -199, left: 573, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 1, top: -63, left: -255, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 293, left: -255, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 148, left: -265, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 2, top: -18, left: -298, set: 4, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 1, top: -172, left: -353, otherFloor: 'up' },
          { floor: 2, top: -172, left: -353, otherFloor: 'down' },
          { floor: 1, top: 125, left: 312 },
          { floor: 2, top: 193, left: -265 },
          { floor: 2, top: -17, left: 388 }
        ],
        zoomPoints: {
          topLeft: { top: -426, left: -389 },
          bottomRight: { top: 330, left: 731 }
        },
        compassPoints: {
          top: 392, left: 699
        },
        cameras: [
          {
            floor: 2, top: 175, left: 67, id: 1,
            los: [[{top: 14, left: 86}, {top: -58, left: 79}], [{top: 16, left: 27}, {top: -38, left: 9}], [{top: 124, left: 2}, {top: 29, left: -115}], [{top: 154, left: -147}, {top: 114, left: -324}], [{top: 178, left: -147}, {top: 172, left: -324}]]
          },
          {
            floor: 2, top: -185, left: 176, id: 2,
            los: [[{top: 15, left: 143}, {top: -52, left: 159}, {top: -199, left: 159}, {top: -199, left: 207}, {top: -193, left: 207}, {top: -151, left: 432}], [{top: -101, left: 290}, {top: -87, left: 254}]]
          },
          {
            floor: 1, top: -188, left: -106, id: 3,
            los: [[{top: -144, left: -154}, {top: -110, left: -218}], [{top: -96, left: -154}, {top: -41, left: -190}], [{top: -43, left: -11}, {top: 81, left: 72}], [{top: 18, left: 21}, {top: 111, left: 72}], [{top: -43, left: 69}, {top: 13, left: 138}]]
          },
          {
            floor: 1, top: 177, left: -124, id: 4,
            los: [[{top: 111, left: 22},{top: 55, left: 71}],[{top: 26, left: -141},{top: 192, left: -141},{top: 192, left: 71}]]
          },
          {
            floor: 1, top: -400, left: 356, id: 5,
            los: [[{top: -196, left: 223},{top: -119, left: 145}], [{top: -197, left: 271},{top: -147, left: 247}], [{top: -142, left: 194},{top: -81, left: 145}]]
          },
          {
            outdoor: true, top: 666, left: 457, id: 6,
            los: [[{top: 518, left: 633}, {top: 724, left: 431}]]
          },
          {
            outdoor: true, top: -525, left: 551, id: 7,
            los: [[{top: -309, left: 710},{top: -163, left: 798}],[{top: -428, left: 130},{top: -390, left: 63}]]
          }
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
          { letter: spawnTerms.a, top: 595, left: -793, description: bartlettTerms.festival },
          { letter: spawnTerms.b, top: 646, left: 320, description: bartlettTerms.mainGate  },
          { letter: spawnTerms.c, top: -650, left: -329, description: bartlettTerms.courtyard }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 377, left: -200, description: bartlettTerms.frontPatio },
          { outdoor: true, top: 377, left: 289, description: bartlettTerms.frontPatio },
          { outdoor: true, top: 619, left: 36, description: bartlettTerms.frontEntrance },
          { outdoor: true, top: 619, left: -448, description: bartlettTerms.festival },
          { outdoor: true, top: -70, left: -797, description: bartlettTerms.campusField },
          { outdoor: true, top: -250, left: -251, description: bartlettTerms.terrace },
          { outdoor: true, top: -310, left: 69, description: bartlettTerms.terrace },
          { outdoor: true, top: -486, left: -127, description: bartlettTerms.backAlley },
          { outdoor: true, top: -431, left: 587, description: bartlettTerms.parking },
          { outdoor: true, top: 298, left: 655, description: bartlettTerms.mainGate },
          { outdoor: true, top: 615, left: 655, description: bartlettTerms.mainGate },
          { outdoor: true, top: 704, left: 573, description: bartlettTerms.eastBalcony },
          { outdoor: true, top: 704, left: -349, description: bartlettTerms.westBalcony },
          // 1F
          { floor: 1, top: 202, left: -261, description: bartlettTerms.readingRoom, site: true, bomb: true },
          { floor: 1, top: 9, left: -253, description: bartlettTerms.lowerLibrary, site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: 143, left: -29, description: bartlettTerms.lobby },
          { floor: 1, top: 118, left: 109, description: bartlettTerms.coatRoom },
          { floor: 1, top: -101, left: -1, description: bartlettTerms.fireplace },
          { floor: 1, top: -9, left: 26, description: bartlettTerms.archwayHall },
          { floor: 1, top: -94, left: 182, description: bartlettTerms.centralHallway, rotate: -90 },
          { floor: 1, top: -160, left: 287, description: bartlettTerms.centralHallway  },
          { floor: 1, top: -39, left: 249, description: bartlettTerms.eastStairs },
          { floor: 1, top: -90, left: 401, description: bartlettTerms.bathroom },
          { floor: 1, top: -273, left: 263, description: bartlettTerms.diningRoom },
          { floor: 1, top: -153, left: 566, description: bartlettTerms.kitchen, site: true, hostage: true, bomb: true },
          { floor: 1, top: -238, left: 427, description: bartlettTerms.serviceRoom },
          { floor: 1, top: -34, left: 667, description: bartlettTerms.eastCorridor, rotate: -90 },
          { floor: 1, top: -40, left: 530, description: bartlettTerms.pantry },
          { floor: 1, top: 76, left: 565, description: bartlettTerms.pianoRoom, site: true, bomb: true },
          { floor: 1, top: 178, left: 313, description: bartlettTerms.lounge, site: true, secure: true },
          { floor: 1, top: -204, left: 764, description: bartlettTerms.gardenPass, rotate: -90 },
          { floor: 1, top: 73, left: 764, description: bartlettTerms.gardenPass, rotate: -90 },
          { floor: 1, top: -166, left: -279, description: bartlettTerms.libraryStairs },
          { floor: 1, top: 163, left: 561, description: bartlettTerms.pianoStairs },
          // 2F
          { floor: 2, top: 40, left: -254, description: bartlettTerms.upperLibrary, site: true, bomb: true, secure: true },
          { floor: 2, top: -39, left: 256, description: bartlettTerms.eastStairs },
          { floor: 2, top: -250, left: 532, description: bartlettTerms.roof },
          { floor: 2, top: 108, left: -342, description: bartlettTerms.westCorridor, rotate: -90 },
          { floor: 2, top: 199, left: -207, description: bartlettTerms.classroom, site: true, bomb: true, secure: true },
          { floor: 2, top: 166, left: -28, description: bartlettTerms.compassHallway },
          { floor: 2, top: 112, left: 159, description: bartlettTerms.frontOffice },
          { floor: 2, top: 208, left: 339, description: bartlettTerms.mainOffice, site: true, hostage: true },
          { floor: 2, top: 71, left: 576, description: bartlettTerms.rowingMuseum, site: true, bomb: true },
          { floor: 2, top: 37, left: 389, description: bartlettTerms.modelHall, site: true, secure: true },
          { floor: 2, top: -69, left: 578, description: bartlettTerms.trophyRoom, site: true, hostage: true, bomb: true },
          { floor: 2, top: -204, left: 774, description: bartlettTerms.gardenPass, rotate: -90 },
          { floor: 2, top: 73, left: 774, description: bartlettTerms.gardenPass, rotate: -90 },
          { floor: 2, top: -158, left: -275, description: bartlettTerms.libraryStairs },
          { floor: 2, top: 167, left: 561, description: bartlettTerms.pianoStairs },
          { floor: 2, top: -78, left: -95, description: bartlettTerms.mezzanine, rotate: -90 },
          { floor: 2, top: -5, left: 57, description: bartlettTerms.mezzanine  },
          { floor: 2, top: -158, left: 339, description: bartlettTerms.modelHallway },
          // 3F
          { floor: 3, top: -250, left: 532, description: bartlettTerms.roof },
          { floor: 3, top: 30, left: -70, description: bartlettTerms.roof },
          { floor: 3, top: 30, left: 465, description: bartlettTerms.roof },
          { floor: 3, top: -129, left: 436, description: bartlettTerms.roofHatch }
        ]
      },
      border: {
        name: mapNameTerms.border,
        imgUrlPrefix: 'border',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -262, right: -951, height: 210, width: 463
        },
        floors: [
          { index: 1, top: -560, left: -744, width: 1517, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -560, left: -744, width: 1517, name: floorTerms.secondFloor },
          { index: 3, top: -560, left: -744, width: 1517, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 1, top: -292, left: 23 },
          { floor: 1, top: -108, left: -125 },
          { floor: 2, top: -272, left: 193 },
          { floor: 2, top: 34, left: -118 }
        ],
        bombObjectives: [
          { floor: 1, top: -123, left: -249, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 1, top: -22, left: -123, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 1, top: -337, left: 23, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 1, top: -337, left: -213, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 1, top: -318, left: 156, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: -186, left: 213, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 2, top: -325, left: -67, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 2, top: -288, left: 46, set: 4, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 1, top: -186, left: 249 },
          { floor: 1, top: -282, left: -12 },
          { floor: 2, top: -212, left: 193 },
          { floor: 2, top: -325, left: -103 }
        ],
        zoomPoints: {
          topLeft: { top: -443, left: -305 },
          bottomRight: { top: 125, left: 350 }
        },
        compassPoints: {
          top: 252, left: 387
        },
        ladders: [
          { floor: 1, top: -128, left: -767, otherFloor: 'up' },
          { floor: 2, top: -128, left: -767, otherFloor: 'down' },
          { floor: 1, top: -505, left: -52, otherFloor: 'up' },
          { floor: 2, top: -505, left: -52, otherFloor: 'down' }
        ],
        cameras: [
          {
            floor: 2, top: -92, left: 326, id: 1,
            los: [[{top: -85, left: 134}, {top: -94, left: 272}, {top: -106, left: 272}, {top: -106, left: 343}, {top: 77, left: 343}]]
          },
          {
            floor: 2, top: -81, left: -33 , id: 2,
            los: [[{top: -206, left: -50}, {top: -66, left: -50}, {top: -66, left: 261}]]
          },
          {
            floor: 1, top: -99, left: 122, id: 3,
            los: [[{top: -63, left: -68}, {top: -63, left: 152}, {top: -245, left: 152}]]
          },
          {
            floor: 1, top: -245, left: -172, id: 4,
            los: [[{top: -257, left: -256}, {top: -257, left: -155}, {top: -143, left: -155}]]
          },
          {
            outdoor: true, top: 268, left: -462, id: 5,
            los: [[{top: 299, left: 254}, {top: 299, left: -497}, {top: 64, left: -779}]]
          },
          {
            outdoor: true, top: -568, left: 425, id: 6,
            los: [[{top: -703, left: 134}, {top: -428, left: 917}]]
          },
          {
            outdoor: true, top: -425, left: -347, id: 7,
            los: [[{top: -683, left: -275}, {top: -242, left: -803}]]
          }
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
          { letter: spawnTerms.a, top: -194, left: 810, description: borderTerms.spawnEastVehicleEntrance },
          { letter: spawnTerms.b, top: 567, left: -128, description: borderTerms.spawnValley },
          { letter: spawnTerms.c, top: -140, left: -872, description: borderTerms.spawnWestVehicleExit }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: -155, left: -656, description: borderTerms.westTower },
          { outdoor: true, top: 89, left: -681, description: borderTerms.pedestrianExit },
          { outdoor: true, top: 404, left: -307, description: borderTerms.valley },
          { outdoor: true, top: 442, left: 74, description: borderTerms.valley },
          { outdoor: true, top: 180, left: -429, description: borderTerms.parkingLotEntrance },
          { outdoor: true, top: -158, left: -448, description: borderTerms.parkingLot },
          { outdoor: true, top: -399, left: -622, description: borderTerms.westRoad },
          { outdoor: true, top: -530, left: -169, description: borderTerms.vehicleCustoms },
          { outdoor: true, top: -512, left: 308, description: borderTerms.crashScene },
          { outdoor: true, top: -390, left: 509, description: borderTerms.eastRoad },
          { outdoor: true, top: 15, left: 556, description: borderTerms.pedestrianEntrance },
          { outdoor: true, top: 188, left: 264, description: borderTerms.pedestrianCustoms },
          { outdoor: true, top: 257, left: -73, description: borderTerms.pedestrianCustoms },
          { outdoor: true, top: 296, left: 293, description: borderTerms.watchTower },
          { outdoor: true, top: -156, left: 366, description: borderTerms.eastAlley },
          { outdoor: true, top: -12, left: -304, description: borderTerms.parkingLotAlley, rotate: -90 },
          { outdoor: true, top: -311, left: -304, description: borderTerms.parkingLotAlley, rotate: -90 },
          { outdoor: true, top: -461, left: 54, description: borderTerms.archivesBalcony },
          { outdoor: true, top: -474, left: -105, description: borderTerms.busRoof },
          // 1F
          { floor: 1, top: -1, left: 341, description: borderTerms.eastStairs, rotate: -90 },
          { floor: 1, top: -222, left: -220, description: borderTerms.exitHallway },
          { floor: 1, top: -292, left: -198, description: borderTerms.ventilationRoom, site: true, bomb: true },
          { floor: 1, top: -79, left: -241, description: borderTerms.supplyRoom, site: true, bomb: true },
          { floor: 1, top: -1, left: -246, description: borderTerms.supplyCorridor },
          { floor: 1, top: 59, left: -247, description: borderTerms.detention },
          { floor: 1, top: -105, left: 65, description: borderTerms.mainLobby },
          { floor: 1, top: -22, left: 65, description: borderTerms.passportCheck },
          { floor: 1, top: 47, left: -93, description: borderTerms.customsInspection, site: true, bomb: true },
          { floor: 1, top: -69, left: -105, description: borderTerms.customsDesk, site: true, hostage: true },
          { floor: 1, top: 27, left: 211, description: borderTerms.waitingRoom },
          { floor: 1, top: -210, left: 231, description: borderTerms.tellers, site: true, bomb: true, secure: true },
          { floor: 1, top: -181, left: -107, description: borderTerms.centralStairs },
          { floor: 1, top: -279, left: -82, description: borderTerms.serverRoom },
          { floor: 1, top: -218, left: 42, description: borderTerms.workshop, site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: -276, left: 156, description: borderTerms.bathroom, site: true, bomb: true },
          { floor: 1, top: -189, left: 147, description: borderTerms.bathroomHallway, rotate: -90 },
          // 2F
          { floor: 2, top: -364, left: 63, description: borderTerms.archives, site: true, bomb: true },
          { floor: 2, top: -312, left: -164, description: borderTerms.armoryLockers, site: true, bomb: true, secure: true },
          { floor: 2, top: -249, left: -98, description: borderTerms.armoryDesk },
          { floor: 2, top: 0, left: -142, description: borderTerms.securityRoom, site: true, hostage: true },
          { floor: 2, top: 25, left: 36, description: borderTerms.breakRoom },
          { floor: 2, top: -152, left: -5, description: borderTerms.mainHallway, rotate: -90 },
          { floor: 2, top: -72, left: 115, description: borderTerms.mainHallway },
          { floor: 2, top: -150, left: 64, description: borderTerms.fountain },
          { floor: 2, top: -225, left: 64, description: borderTerms.officesHallway },
          { floor: 2, top: -165, left: 214, description: borderTerms.offices, site: true, hostage: true, secure: true },
          { floor: 2, top: -1, left: 341, description: borderTerms.eastStairs, rotate: -90 },
          { floor: 2, top: -176, left: -95, description: borderTerms.centralStairs },
          { floor: 2, top: -363, left: 208, description: borderTerms.northBalcony },
          { floor: 2, top: -289, left: 313, description: borderTerms.eastBalcony, rotate: -90 },
          { floor: 2, top: -163, left: -219, description: borderTerms.westBalcony },
          { floor: 2, top: -45, left: -261, description: borderTerms.westBalcony, rotate: -90 },
          { floor: 2, top: 123, left: -157, description: borderTerms.southBalcony },
          { floor: 2, top: 123, left: 169, description: borderTerms.southBalcony },
          { floor: 2, top: -61, left: 308, description: borderTerms.generator },
          { floor: 2, top: 73, left: 200, description: borderTerms.waitingBalcony },
          { floor: 2, top: -357, left: -111, description: borderTerms.sandwich, call: true, rotate: -90 },
          // 3F
          { floor: 3, top: 17, left: -9, description: borderTerms.roof },
          { floor: 3, top: -138, left: -215, description: borderTerms.roof },
          { floor: 3, top: -318, left: 152, description: borderTerms.roof }
        ]
      },
      chalet: {
        name: mapNameTerms.chalet,
        imgUrlPrefix: 'chalet',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -718, right: -1319, height: 215, width: 465
        },
        floors: [
          { index: 0, top: -131, left: -273, width: 1386, name: floorTerms.basement },
          { index: 1, top: -131, left: -273, width: 1386, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -131, left: -273, width: 1386, name: floorTerms.secondFloor },
          { index: 3, top: -131, left: -273, width: 1386, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 0, top: 500, left: 440 },
          { floor: 1, top: 476, left: 528 },
          { floor: 2, top: 135, left: 650 },
          { floor: 2, top: 530, left: 240 }
        ],
        bombObjectives: [
          { floor: 0, top: 542, left: 423, set: 4, letter: objectiveTerms.bombShortB },
          { floor: 0, top: 391, left: 514, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 92, left: 637, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 1, top: 265, left: 541, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 490, left: 428, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 1, top: 524, left: 217, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 115, left: 640, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 215, left: 566, set: 1, letter: objectiveTerms.bombShortA }
        ],
        secureObjectives: [
          { floor: 0, top: 305, left: 583 },
          { floor: 1, top: 438, left: 478 },
          { floor: 2, top: 220, left: 430 },
          { floor: 2, top: 535, left: 215 }
        ],
        zoomPoints: {
          topLeft: { top: -130, left: 80 },
          bottomRight: { top: 680, left: 890 }
        },
        compassPoints: {
          top: 372, left: 1155
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
          {
            floor: 2, top: -83, left: 650, id: 1,
            los: [[{top: -71, left: 500}, {top: -67, left: 465},{top: -100, left: 464}, {top: -100, left: 662},{top: 194, left: 643}]]
          },
          {
            floor: 1, otherFloor: 'up', top: 363, left: 206, id: 2,
            los: [[{top: 378, left: 370}, {top: 360, left: 290}, {top: 360, left: 200}, {top: 395, left: 200}, {top: 390, left: 280}, {top: 410, left: 320}]]
          },
          {
            floor: 2, top: 363, left: 206, id: 2,
            los: [[{top: 335, left: 511}, {top: 335, left: 200}, {top: 390, left: 200}, {top: 390, left: 511}]]
          },
          {
            floor: 1, otherFloor: 'up', top: 570, left: 580, id: 3,
            los: [[{top: 545, left: 440}, {top: 545, left: 460}, {top: 570, left: 580}, {top: 370, left: 580}, {top: 360, left: 480}]]
          },
          {
            floor: 2, top: 570, left: 580, id: 3,
            los: [[{top: 500, left: 385}, {top: 530, left: 385}, {top: 490, left: 200}, {top: 520, left: 200}, {top: 560, left: 380}, {top: 615, left: 385}, {top: 615, left: 580}, {top: 400, left: 580}, {top: 405, left: 460}]]
          },
          {
            floor: 1, top: 143, left: 424, id: 4,
            los: [[, {top: 35, left: 420}, {top: 143, left: 424}, {top: 205, left: 470}]]
          },
          {
            floor: 0, top: 415, left: 421, id: 5,
            los: [[{top: 410, left: 490}, {top: 410, left: 380}, {top: 600, left: 380}, {top: 600, left: 410}]]
          },
          {
            outdoor: true, top: -83, left: 37, id: 6,
            los: [[{top: -140, left: 870},{top: -83, left: 37},{top: 40, left: -310}]]
          },
          {
            outdoor: true, top: 160, left: 1060, id: 7,
            los: [[{top: -10, left: 830},{top: 160, left: 1060},{top: 390, left: 945}]]
          }
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
          { letter: spawnTerms.a, top: -175, left: 865, description: chaletTerms.spawnCampfire },
          { letter: spawnTerms.b, top: 400, left: 1080, description: chaletTerms.spawnCliffside },
          { letter: spawnTerms.c, top: 445, left: -195, description: chaletTerms.spawnLakeside }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: -73, left: 350, description: chaletTerms.woodenTrail },
          { outdoor: true, top: -263, left: 850, description: chaletTerms.campfireWood },
          { outdoor: true, top: -150, left: 940, description: chaletTerms.campfire },
          { outdoor: true, top: 447, left: 910, description: chaletTerms.backyard },
          { outdoor: true, top: 65, left: 1063, description: chaletTerms.gazeebo },
          { outdoor: true, top: 490, left: 1085, description: chaletTerms.cliffsideStairs },
          { outdoor: true, top: 649, left: 789, description: chaletTerms.cliffsideWoods },
          { outdoor: true, top: 720, left: 1090, description: chaletTerms.cliffside },
          { outdoor: true, top: 115, left: 915, description: chaletTerms.backyard },
          { outdoor: true, top: 452, left: 706, description: chaletTerms.backyardPatio },
          { outdoor: true, top: 265, left: -239, description: chaletTerms.helipadTrail },
          { outdoor: true, top: 500, left: -29, description: chaletTerms.helipad },
          { outdoor: true, top: 450, left: 135, description: chaletTerms.frontYardPatio, rotate: -90 },
          { outdoor: true, top: 127, left: 279, description: chaletTerms.frontYard },
          { outdoor: true, top: 700, left: 400, description: chaletTerms.snowmobiles },
          // OF
          { floor: 0, top: 385, left: 248, description: chaletTerms.blueStairs },
          { floor: 0, top: 393, left: 379, description: chaletTerms.blueHallway },
          { floor: 0, top: 340, left: 464, description: chaletTerms.blueHallway, rotate: -90 },
          { floor: 0, top: 466, left: 434, description: chaletTerms.snowmobileGarage, site: true, hostage: true, bomb: true },
          { floor: 0, top: 597, left: 409, description: chaletTerms.garageStairs },
          { floor: 0, top: 506, left: 543, description: chaletTerms.storageRoom },
          { floor: 0, top: 335, left: 535, description: chaletTerms.wineCellar, site: true, bomb: true, secure: true },
          { floor: 0, top: 256, left: 596, description: chaletTerms.basementHallway },
          { floor: 0, top: 204, left: 727, description: chaletTerms.backyardStairs, rotate: -90 },
          { floor: 0, top: 205, left: 487, description: chaletTerms.westMainStairs, rotate: -90 },
          { floor: 0, top: 41, left: 540, description: chaletTerms.carGarage },
          { floor: 0, top: -35, left: 625, description: chaletTerms.mainGarageEntrance },
          // 1F
          { floor: 1, top: 358, left: 254, description: chaletTerms.libraryStairs },
          { floor: 1, top: 403, left: 314, description: chaletTerms.gamingRoomHallway, rotate: -90 },
          { floor: 1, top: 363, left: 400, description: chaletTerms.barHallway },
          { floor: 1, top: 505, left: 275, description: chaletTerms.gamingRoom, site: true, bomb: true },
          { floor: 1, top: 599, left: 283, description: chaletTerms.barStock },
          { floor: 1, top: 455, left: 390, description: chaletTerms.bar, site: true, bomb: true },
          { floor: 1, top: 603, left: 534, description: chaletTerms.fireplaceStairs },
          { floor: 1, top: 430, left: 525, description: chaletTerms.fireplace, site: true, hostage: true, secure: true },
          { floor: 1, top: 315, left: 270, description: chaletTerms.mudroom },
          { floor: 1, top: 290, left: 496, description: chaletTerms.diningHallway, rotate: -90 },
          { floor: 1, top: 240, left: 580, description: chaletTerms.diningRoom, site: true, bomb: true },
          { floor: 1, top: -65, left: 505, description: chaletTerms.trophyStairs },
          { floor: 1, top: 120, left: 470, description: chaletTerms.westMainEntrance },
          { floor: 1, top: -30, left: 555, description: chaletTerms.trophyRoom },
          { floor: 1, top: 60, left: 570, description: chaletTerms.kitchenHallway, rotate: -90 },
          { floor: 1, top: 70, left: 640, description: chaletTerms.kitchen, site: true, bomb: true },
          { floor: 1, top: 204, left: 727, description: chaletTerms.backyardStairs, rotate: -90 },
          // 2F
          { floor: 2, top: 560, left: 525, description: chaletTerms.fireplace },
          { floor: 2, top: 358, left: 254, description: chaletTerms.libraryStairs },
          { floor: 2, top: 375, left: 400, description: chaletTerms.libraryHallway },
          { floor: 2, top: 441, left: 320, description: chaletTerms.libraryEntrance },
          { floor: 2, top: 492, left: 300, description: chaletTerms.library, site: true, hostage: true, secure: true },
          { floor: 2, top: -65, left: 510, description: chaletTerms.trophyStairs },
          { floor: 2, top: 112, left: 494, description: chaletTerms.masterBathroom },
          { floor: 2, top: 75, left: 635, description: chaletTerms.masterBedroom, site: true, hostage: true, bomb: true },
          { floor: 2, top: -20, left: 575, description: chaletTerms.solarium },
          { floor: 2, top: 190, left: 485, description: chaletTerms.pianoRoom, site: true, secure: true },
          { floor: 2, top: 442, left: 516, description: chaletTerms.mezzanine },
          { floor: 2, top: 510, left: 430, description: chaletTerms.mezzanine, rotate: -90 },
          { floor: 2, top: 310, left: 580, description: chaletTerms.office, site: true, bomb: true },
          { floor: 2, top: 455, left: 186, description: chaletTerms.libraryBalcony, rotate: -90 },
          { floor: 2, top: 475, left: 636, description: chaletTerms.officeBalcony, rotate: -90 },
          { floor: 2, top: 165, left: 403, description: chaletTerms.bathroomBalcony, rotate: -90 }
        ]
      },
      club: {
        name: mapNameTerms.club,
        imgUrlPrefix: 'club-house',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -914, right: -1214, width: 661
        },
        floors: [
          //
          { index: 0, top: -1098, left: -2409, width: 3682, name: floorTerms.basement },
          { index: 1, top: -1098, left: -2409, width: 3682, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -1098, left: -2409, width: 3682, name: floorTerms.secondFloor },
          { index: 3, top: -1098, left: -2409, width: 3682, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: -13, left: -17  },
          { floor: 2, top: -34, left: 173  },
          { floor: 1, top: 94, left: -281  },
          { floor: 0, top: -33, left: 9  }
        ],
        bombObjectives: [
          { floor: 2, top: -1, left: 17, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 2, top: -12, left: -136, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 6, left: 176, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 106, left: 187, set: 2, letter: objectiveTerms.bombShortB },

          { floor: 1, top: -3, left: -102, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: -35, left: 144, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 0, top: -61, left: 31, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 0, top: -159, left: 47, set: 4, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 1, top: 201, left: 227  },
          { floor: 1, top: 41, left: -82  },
          { floor: 2, top: -1, left: 14  },
          { floor: 0, top: -174, left: 32  }
        ],
        zoomPoints: {
          topLeft: { top: -336, left: -416 },
          bottomRight: { top: 275, left: 397 }
        },
        compassPoints: {
          top: -297, left: 403
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
          {
            floor: 2, top: -121, left: -13, id: 1,
            los: [[{top: -111, left: -114},{top: -111, left: -2},{top: -140, left: -2}]]
          },
          {
            floor: 1, top: -73, left: -70, id: 2,
            los: [[{top: -83, left: -144}, {top: -83, left: -4}]]
          },
          { floor: 1, otherFloor: 'up', top: 295, left: 240, id: 3 },
          {
            floor: 2, top: 306, left: 256, id: 3,
            los: [[{top: 317, left: 135},{top: 317, left: 270},{top: 137, left: 270}]]
          },
          {
            floor: 0, top: -114, left: -73, id: 4,
            los: [[{top: -17, left: -87},{top: -125, left: -87},{top: -125, left: 91}]]
          },
          {
            outdoor: true, top: 281, left: -170, id: 5,
            los: [[{top: 400, left: -282},{top: 280, left: -171},{top: 299, left: 105}]]
          },
          {
            outdoor: true, top: -158, left: -305, id: 6,
            los: [[{top: 5, left: -364},{top: -160, left: -305},{top: -332, left: -275}]]
          },
          {
            outdoor: true, top: 329, left: 409, id: 7,
            los: [[{top: 442, left: 226},{top: 351, left: 430},{top: 193, left: 511}]]
          }
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
          { letter: spawnTerms.a, top: 504, left: 74, description: clubTerms.mainGate },
          { letter: spawnTerms.b, top: 88, left: -776, description: clubTerms.shippingDock },
          { letter: spawnTerms.c, top: 187, left: 648, description: clubTerms.warehouse },
          { letter: spawnTerms.d, top: -500, left: 346, description: clubTerms.constructionSite }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 435, left: -157, description: clubTerms.mainGate },
          { outdoor: true, top: 284, left: -483, description: clubTerms.junkyard },
          { outdoor: true, top: 94, left: -483, description: clubTerms.junkyard },
          { outdoor: true, top: 329, left: -249, description: clubTerms.vipParking },
          { outdoor: true, top: 260, left: -44, description: clubTerms.parking },
          { outdoor: true, top: 265, left: 342, description: clubTerms.kennels },
          { outdoor: true, top: -31, left: 375, description: clubTerms.kennels },
          { outdoor: true, top: -72, left: -407, description: clubTerms.recreationArea },
          { floor: 1, top: -152, left: 185, description: clubTerms.trash },
          { floor: 2, top: -152, left: 185, description: clubTerms.trash },
          { floor: 3, top: -152, left: 185, description: clubTerms.trash },
          { outdoor: true, top: -186, left: -189, description: clubTerms.graffitiArea },
          { outdoor: true, top: -348, left: 33, description: clubTerms.constructionSite },
          // OF
          { floor: 0, top: 227, left: 158, description: clubTerms.oilPit },
          { floor: 0, top: 15, left: 144, description: clubTerms.utilityRoom },
          { floor: 0, top: 47, left: -67, description: clubTerms.memorialRoom },
          { floor: 0, top: -13, left: 51, description: clubTerms.church, site: true, hostage: true, bomb: true },
          { floor: 0, top: 13, left: 251, description: clubTerms.blueStairs },
          { floor: 0, top: -101, left: 3, description: clubTerms.basementHallway },
          { floor: 0, top: -114, left: 150, description: clubTerms.arsenalRoom, site: true, bomb: true, secure: true },
          { floor: 0, top: -170, left: -11, description: clubTerms.arsenalRoom, site: true, bomb: true, secure: true },
          { floor: 0, top: -190, left: -92, description: clubTerms.centralStairs },
          { floor: 0, top: -328, left: 134, description: clubTerms.escapeTunnel },
          { floor: 0, top: -423, left: -7, description: clubTerms.container },
          { floor: 0, top: -53, left: -60, description: clubTerms.bikeHallway, rotate: -90 },
          // 1F
          { floor: 1, top: 225, left: 188, description: clubTerms.garage, site: true, secure: true },
          { floor: 1, top: 218, left: -345, description: clubTerms.sideEntrance },
          { floor: 1, top: 202, left: -238, description: clubTerms.changingRoom },
          { floor: 1, top: 121, left: -275, description: clubTerms.stripClub, site: true, hostage: true },
          { floor: 1, top: 98, left: 86, description: clubTerms.lobby },
          { floor: 1, top: 101, left: -29, description: clubTerms.frontPorch },
          { floor: 1, top: 85, left: 173, description: clubTerms.lounge },
          { floor: 1, top: 70, left: 256, description: clubTerms.lounge },
          { floor: 1, top: 63, left: -390, description: clubTerms.junkyardEntrance },
          { floor: 1, top: 50, left: 338, description: clubTerms.garageStorage },
          { floor: 1, top: 38, left: -163, description: clubTerms.poolTable },
          { floor: 1, top: -4, left: -61, description: clubTerms.bar, site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: -4, left: 49, description: clubTerms.stage },
          { floor: 1, top: 30, left: 314, description: clubTerms.blueStairs, rotate: -90 },
          { floor: 1, top: -32, left: 188, description: clubTerms.stockRoom, site: true, bomb: true },
          { floor: 1, top: 0, left: 286, description: clubTerms.easternStairs, rotate: -90 },
          { floor: 1, top: -62, left: -216, description: clubTerms.westernHallway },
          { floor: 1, top: -102, left: -167, description: clubTerms.toilets },
          { floor: 1, top: -97, left: -13, description: clubTerms.centralHallway },
          { floor: 1, top: -167, left: 22, description: clubTerms.kitchen },
          { floor: 1, top: -190, left: -76, description: clubTerms.centralStairs },
          { floor: 1, top: -247, left: -10, description: clubTerms.kitchenEntrance },
          // 2F
          { floor: 2, top: 225, left: 188, description: clubTerms.garage },
          { floor: 2, top: 123, left: -296, description: clubTerms.westernRoof },
          { floor: 2, top: 122, left: -1, description: clubTerms.centralSubroof },
          { floor: 2, top: 80, left: 202, description: clubTerms.cctvRoom, site: true, bomb: true },
          { floor: 2, top: 55, left: 330, description: clubTerms.easternSubroof },
          { floor: 2, top: 26, left: -109, description: clubTerms.gym, site: true, bomb: true },
          { floor: 2, top: 39, left: -21, description: clubTerms.bedroom, site: true, hostage: true, bomb: true, secure: true },
          { floor: 2, top: 1, left: 81, description: clubTerms.construction },
          { floor: 2, top: -55, left: 179, description: clubTerms.cashRoom, site: true, hostage: true, bomb: true },
          { floor: 2, top: -32, left: 303, description: clubTerms.easternStairs, rotate: -90 },
          { floor: 2, top: -79, left: -207, description: clubTerms.balcony },
          { floor: 2, top: -69, left: -72, description: clubTerms.bathroom },
          { floor: 2, top: -117, left: -74, description: clubTerms.bedroomHallway },
          { floor: 2, top: -115, left: 27, description: clubTerms.secretStash },
          { floor: 2, top: -196, left: -66, description: clubTerms.centralStairs },
          { floor: 2, top: -180, left: 49, description: clubTerms.logisticOffice },
          { floor: 2, top: 215, left: 151, description: clubTerms.catwalk, rotate: -90},
          { floor: 2, top: 156, left: 203, description: clubTerms.catwalk},
          // 3F
          { floor: 3, top: 44, left: 210, description: clubTerms.easternRoof },
          { floor: 3, top: 234, left: 210, description: clubTerms.easternRoof },
          { floor: 3, top: 123, left: -296, description: clubTerms.westernRoof },
          { floor: 3, top: 122, left: -1, description: clubTerms.centralSubroof },
          { floor: 3, top: 55, left: 330, description: clubTerms.easternSubroof },
          { floor: 3, top: -85, left: -60, description: clubTerms.centralRoof },
          { floor: 3, top: -79, left: -207, description: clubTerms.balcony }
        ]
      },
      coastline: {
        name: mapNameTerms.coastline,
        imgUrlPrefix: 'coastline',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -725, right: -1255, height: 217, width: 475
        },
        floors: [
          { index: 1, top: -1009, left: -2136, width: 3441, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -1009, left: -2136, width: 3441, name: floorTerms.secondFloor },
          { index: 3, top: -1009, left: -2136, width: 3441, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: -46, left: 53 },
          { floor: 2, top: 148, left: 229 },
          { floor: 1, top: -72, left: 80 },
          { floor: 1, top: 150, left: -95 }
        ],
        bombObjectives: [
          { floor: 2, top: 45, left: -137, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 203, left: -139, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 14, left: 279, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 148, left: 264, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 1, top: -63, left: 165, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 1, top: -18, left: 63, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 181, left: -153, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 1, top: -24, left: -248, set: 4, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 1, top: 181, left: -189 },
          { floor: 1, top: -18, left: 15 },
          { floor: 2, top: 72, left: 229 },
          { floor: 2, top: 203, left: -194 }
        ],
        zoomPoints: {
          topLeft: { top: -134, left: -317 },
          bottomRight: { top: 375, left: 332 }
        },
        compassPoints: {
          top: 522, left: 610
        },
        cameras: [
          {
            floor: 1, top: 95, left: -84, id: 1,
            los: [
              [{top: 40, left: -30}, {top: -55, left: 41}],
              [{top: 25, left: -30}, {top: -73, left: 31}],
              [{top: -92, left: -64}, {top: -33, left: -74}, {top: -33, left: -101}, {top: 108, left: -101}, {top: 108, left: -64}, {top: 98, left: -64}, {top: 67, left: 16}]
            ]
          },
          {
            floor: 1, top: 292, left: 198, id: 2,
            los: [
              [{top: 149, left: 133}, {top: 288, left: 178}],
              [{top: 66, left: 154}, {top: 248, left: 177}],
              [{top: 248, left: 246}, {top: 200, left: 287}],
              [{top: 306, left: 186}, {top: 306, left: 287}]
            ]
          },
          {
            floor: 2, top: 316, left: -194, id: 3,
            los: [
              [{top: 261, left: -210}, {top: 330, left: -210}, {top: 330, left: -46}, {top: 288, left: -46}, {top: 288, left: -37}, {top: 262, left: 86}],
              [{top: 275, left: -37}, {top: 262, left: -22}]
            ]
          },
          {
            floor: 2, top: 77, left: 156, id: 4,
            los: [
              [{top: 105, left: -46}, {top: 105, left: 110}, {top: 97, left: 120}],
              [{top: 64, left: -27}, {top: 64, left: 119}],
              [{top: 347, left: 172}, {top: 64, left: 172}, {top: 64, left: 127}]
            ]
          },
          {
            outdoor: true, top: -195, left: 415, id: 5,
            los: [
              [{top: -114, left: 436}, {top: -211, left: 436}, {top: -211, left: -342}]
            ]
          },
          {
            outdoor: true, top: 436, left: -300, id: 6,
            los: [
              [{top: 485, left: 743}, {top: 454, left: -355}, {top: 276, left: -355}, {top: -115, left: -525}]
            ]
          },
          {
            outdoor: true, top: -109, left: -551, id: 7,
            los: [
              [{top: -279, left: -250}, {top: -164, left: -538}, {top: -124, left: -589}, {top: -18, left: -565}],
              [{top: 485, left: -219}, {top: -43, left: -510}]
            ]
          }
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
          { letter: spawnTerms.a, top: 186, left: 814, description: coastlineTerms.mainEntrance  },
          { letter: spawnTerms.b, top: -522, left: -280, description: coastlineTerms.poolSide },
          { letter: spawnTerms.c, top: 497, left: -525, description: coastlineTerms.ruins }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 167, left: -332, description: coastlineTerms.ruins },
          { outdoor: true, top: -310, left: 189, description: coastlineTerms.pool },
          { outdoor: true, top: -296, left: -145, description: coastlineTerms.pool },
          { outdoor: true, top: -15, left: 412, description: coastlineTerms.mainEntrance },
          { outdoor: true, top: 305, left: 412, description: coastlineTerms.mainEntrance },
          { outdoor: true, top: 201, left: 44, description: coastlineTerms.courtyard },
          { outdoor: true, top: 421, left: -121, description: coastlineTerms.terrace },
          { outdoor: true, top: -346, left: 485, description: coastlineTerms.backAlley },
          { outdoor: true, top: -575, left: 211, description: coastlineTerms.poolSide },
          { outdoor: true, top: -166, left: -465, description: coastlineTerms.walkway },
          { outdoor: true, top: -239, left: 445, description: coastlineTerms.garageRoof },
          { outdoor: true, top: 573, left: -211, description: coastlineTerms.southPromenade },
          { outdoor: true, top: 397, left: 43, description: coastlineTerms.southPromenade },
          // 1F
          { floor: 1, top: -43, left: 265, description: coastlineTerms.serviceEntrance, site: true, bomb: true },
          { floor: 1, top: -14, left: 166, description: coastlineTerms.serviceEntrance, site: true, bomb: true },
          { floor: 1, top: 27, left: 265, description: coastlineTerms.toilets },
          { floor: 1, top: 151, left: 222, description: coastlineTerms.mainLobby },
          { floor: 1, top: 337, left: 229, description: coastlineTerms.southStairs },
          { floor: 1, top: 47, left: 44, description: coastlineTerms.kitchen, site: true, bomb: true, secure: true },
          { floor: 1, top: -51, left: 12, description: coastlineTerms.kitchen, site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: 94, left: 54, description: coastlineTerms.hallway },
          { floor: 1, top: 329, left: 112, description: coastlineTerms.securityRoom },
          { floor: 1, top: 295, left: 4, description: coastlineTerms.sunRoom },
          { floor: 1, top: 286, left: -122, description: coastlineTerms.office },
          { floor: 1, top: 147, left: -151, description: coastlineTerms.blueBar, site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: 32, left: -215, description: coastlineTerms.sunriseBar, site: true, bomb: true },
          { floor: 1, top: -76, left: -249, description: coastlineTerms.poolEntrance },
          { floor: 1, top: -34, left: -43, description: coastlineTerms.northStairs, rotate: -90 },
          { floor: 1, top: -122, left: -17, description: coastlineTerms.cantina },
          { floor: 1, top: 207, left: 210, description: coastlineTerms.reception, rotate: -90 },
          { floor: 1, top: 27, left: -67, description: coastlineTerms.sunriseHallway, rotate: -90 },
          // 2F
          { floor: 2, top: 351, left: 229, description: coastlineTerms.southStairs  },
          { floor: 2, top: -38, left: -79, description: coastlineTerms.northStairs, rotate: -90 },
          { floor: 2, top: 97, left: 39, description: coastlineTerms.vipHallway },
          { floor: 2, top: 3, left: -161, description: coastlineTerms.hookahLounge, site: true, bomb: true },
          { floor: 2, top: 160, left: -164, description: coastlineTerms.billiardsRoom, site: true, bomb: true, secure: true },
          { floor: 2, top: 189, left: 170, description: coastlineTerms.theaterHallway, rotate: -90 },
          { floor: 2, top: 299, left: 44, description: coastlineTerms.southHallway },
          { floor: 2, top: 301, left: -121, description: coastlineTerms.aquarium },
          { floor: 2, top: -57, left: 170, description: coastlineTerms.hallOfFame },
          { floor: 2, top: -36, left: 285, description: coastlineTerms.bathroom },
          { floor: 2, top: 27, left: 212, description: coastlineTerms.penthouse, site: true, bomb: true, secure: true },
          { floor: 2, top: 212, left: 237, description: coastlineTerms.theater, site: true, hostage: true, bomb: true },
          { floor: 2, top: -20, left: -241, description: coastlineTerms.hookahDeck, rotate: -90 },
          { floor: 2, top: 36, left: 44, description: coastlineTerms.vipLounge, site: true, hostage: true },
          { floor: 2, top: -124, left: 123, description: coastlineTerms.djBooth },
          { floor: 2, top: 384, left: -121, description: coastlineTerms.balcony },
          { floor: 2, top: 267, left: 26, description: coastlineTerms.roofDrop },
          { floor: 2, top: 32, left: -60, description: coastlineTerms.hookahHallway, rotate: -90 },
          // 3F
          { floor: 3 , top: 111, left: -121, description: coastlineTerms.rooftop },
          { floor: 3 , top: 78, left: 221, description: coastlineTerms.rooftop },
          { floor: 3, top: 266, left: 26, description: coastlineTerms.roofDrop }
        ]
      },
      consulate: {
        name: mapNameTerms.consulate,
        imgUrlPrefix: 'consulate',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -771, right: -1328, height: 217, width: 611
        },
        floors: [
          { index: 0, top: -1104, left: -2044, width: 3427, name: floorTerms.basement },
          { index: 1, top: -1104, left: -2044, width: 3427, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -1104, left: -2044, width: 3427, name: floorTerms.secondFloor },
          { index: 3, top: -1104, left: -2044, width: 3427, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 1, top: 41, left: 203 },
          { floor: 2, top: 121, left: -294 },
          { floor: 2, top: 45, left: 328 },
          { floor: 0, top: -34, left: 328 }
        ],
        bombObjectives: [
          { floor: 0, top: -34, left: 292, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 75, left: 115, set: 4, letter: objectiveTerms.bombShortB },
          { floor: 0, top: 56, left: -239, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 0, top: 130, left: -29, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 153, left: -255, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 153, left: 11, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 167, left: 11, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 121, left: -256, set: 1, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 0, top: -26, left: -183 },
          { floor: 0, top: -34, left: 364 },
          { floor: 1, top: -6, left: 326 },
          { floor: 2, top: 0, left: 305 }
        ],
        zoomPoints: {
          topLeft: { top: -196, left: -354 },
          bottomRight: { top: 299, left: 455 }
        },
        compassPoints: {
          top: 314, left: 422
        },
        cameras: [
          {
            floor: 2, top: 26, left: -220, id: 1,
            los: [
              [{top: 85, left: -99}, {top: 85, left: -236}, {top: 2, left: -236}, {top: -31, left: -203}, {top: -31, left: -99}],
              [{top: 11, left: -93}, {top: -5, left: -17}],
              [{top: 44, left: -93}, {top: 60, left: -17}]
            ]
          },
          { floor: 2, top: -168, left: 11, id: 2,
            los: [[
              {top: -108, left: -63}, {top: -137, left: -58}, {top: -168, left: -37}, {top: -185, left: -6},
              {top: -185, left: 28}, {top: -168, left: 59}, {top: -137, left: 80}, {top: -106, left: 85}
            ]]
          },
          { floor: 1, otherFloor: 'up', top: -168, left: 11, id: 2 },
          {
            floor: 1, top: -78, left: 374, id: 3,
            los: [[{top: -52, left: 92}, {top: -61, left: 234}, {top: -97, left: 234}, {top: -97, left: 355}], [{top: -20, left: 391}, {top: 113, left: 418}]]
          },
          {
            floor: 1, top: 243, left: 11, id: 4,
            los: [[{top: 165, left: 122}, {top: 217, left: 48}, {top: 258, left: 48}, {top: 258, left: 28}, {top: 279, left: 23}, {top: 279, left: -1}, {top: 258, left: -8}, {top: 258, left: -27}, {top: 215, left: -27}, {top: 215, left: -61}, {top: 168, left: -61}, {top: 96, left: -135}]]
          },
          {
            floor: 0, top: -79, left: 40, id: 5,
            los: [[{top: -54, left: -22}, {top: -92, left: 25}, {top: -92, left: 49}, {top: -117, left: 83}], [{top: -43, left: 87}, {top: 1, left: 133}]]
          },
          {
            floor: 0, top: -35, left: -150, id: 6,
            los: [[{top: -93, left: -135}, {top: -41, left: -135}, {top: -41, left: -100}, {top: 40, left: -100}]]
          },
          {
            outdoor: true, top: 498, left: -50, id: 7,
            los: [[{top: 503, left: -435}, {top: 549, left: -52}, {top: 506, left: 464}]]
          },
          {
            outdoor: true, top: -32, left: -537, id: 8,
            los: [[{top: -48, left: -803}, {top: -94, left: -560}, {top: -32, left: -350}]]
          }
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
          { letter: spawnTerms.a, top: 412, left: 622, description: consulateTerms.spawnRiotBarricade },
          { letter: spawnTerms.b, top: 634, left: -329, description: consulateTerms.spawnPoliceLine },
          { letter: spawnTerms.c, top: -509, left: -664, description: consulateTerms.spawnGasStation },
          { letter: spawnTerms.d, top: -322, left: 745, description: consulateTerms.spawnSideEntrance }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 60, left: -602, description: consulateTerms.garageWay },
          { outdoor: true, top: -323, left: -267, description: consulateTerms.courtyard },
          { outdoor: true, top: -323, left: 204, description: consulateTerms.courtyard },
          { outdoor: true, top: -314, left: -119, description: consulateTerms.backCourtyard },
          { outdoor: true, top: -284, left: 577, description: consulateTerms.sideEntrance },
          { outdoor: true, top: -118, left: 476, description: consulateTerms.dumpster },
          { outdoor: true, top: 23, left: 592, description: consulateTerms.parking },
          { outdoor: true, top: 272, left: 592, description: consulateTerms.parking },
          { outdoor: true, top: -137, left: 227, description: consulateTerms.gardens },
          { outdoor: true, top: -137, left: -201, description: consulateTerms.gardens },
          { outdoor: true, top: 358, left: -522, description: consulateTerms.fountain },
          { outdoor: true, top: -97, left: -368, description: consulateTerms.emergencyExit, rotate: -90 },
          { outdoor: true, top: 66, left: -399, description: consulateTerms.garageRoof },
          { outdoor: true, top: -127, left: -660, description: consulateTerms.memorialGarden },
          { outdoor: true, top: 622, left: -85, description: consulateTerms.policeLine },
          { outdoor: true, top: 622, left: 358, description: consulateTerms.riotBarracade },
          { outdoor: true, top: 438, left: -219, description: consulateTerms.westFrontYard },
          { outdoor: true, top: 438, left: 224, description: consulateTerms.eastFrontYard },
          { outdoor: true, top: 438, left: 9, description: consulateTerms.frontAlley },
          // OF
          { floor: 0, top: -73, left: -307, description: consulateTerms.exitStairs },
          { floor: 0, top: 29, left: -222, description: consulateTerms.garage, site: true, bomb: true, secure: true },
          { floor: 0, top: -62, left: -67, description: consulateTerms.basementCorridor },
          { floor: 0, top: 7, left: -47, description: consulateTerms.securityRoom },
          { floor: 0, top: 121, left: -67, description: consulateTerms.cafeteria, site: true, bomb: true },
          { floor: 0, top: -150, left: 11, description: consulateTerms.mainStairs },
          { floor: 0, top: 31, left: 46, description: consulateTerms.lockerHallway },
          { floor: 0, top: 144, left: 122, description: consulateTerms.serviceStairs },
          { floor: 0, top: -62, left: 113, description: consulateTerms.electricRoom },
          { floor: 0, top: 77, left: 127, description: consulateTerms.storageRoom },
          { floor: 0, top: -24, left: 245, description: consulateTerms.archives, site: true, hostage: true, bomb: true, secure: true },
          { floor: 0, top: 185, left: 245, description: consulateTerms.archivesCorridor },
          { floor: 0, top: 64, left: -182, description: consulateTerms.pillar },
          { floor: 0, top: 126, left: -252, description: consulateTerms.whiteTruck },
          { floor: 0, top: -61, left: -203, description: consulateTerms.pipes },
          // 1F
          { floor: 1, top: -73, left: -305, description: consulateTerms.exitStairs },
          { floor: 1, top: 105, left: -276, description: consulateTerms.pressRoom, site: true, bomb: true },
          { floor: 1, top: -61, left: -133, description: consulateTerms.westCorridor },
          { floor: 1, top: -13, left: -133, description: consulateTerms.westCorridor },
          { floor: 1, top: 49, left: -105, description: consulateTerms.publicBathroom },
          { floor: 1, top: 167, left: -139, description: consulateTerms.antechamber },
          { floor: 1, top: 44, left: 9, description: consulateTerms.lobby, site: true, bomb: true },
          { floor: 1, top: -40, left: 166, description: consulateTerms.eastCorridor },
          { floor: 1, top: 52, left: 138, description: consulateTerms.tellers, site: true, hostage: true, bomb: true },
          { floor: 1, top: 149, left: 139, description: consulateTerms.serviceStairs },
          { floor: 1, top: 189, left: 184, description: consulateTerms.serviceStairs },
          { floor: 1, top: -7, left: 260, description: consulateTerms.visaOffice, site: true, secure: true },
          { floor: 1, top: 64, left: 352, description: consulateTerms.visaOffice, site: true, secure: true },
          { floor: 1, top: -36, left: 10, description: consulateTerms.mainStairs },
          { floor: 1, top: 168, left: 442, description: consulateTerms.visaEntrance },
          { floor: 1, top: 298, left: 10, description: consulateTerms.frontDoor },
          // 2F
          { floor: 2, top: 300, left: 10, description: consulateTerms.balcony },
          { floor: 2, top: 195, left: 184, description: consulateTerms.serviceStairs },
          { floor: 2, top: -48, left: 161, description: consulateTerms.copyRoom },
          { floor: 2, top: 39, left: -275, description: consulateTerms.cabinet },
          { floor: 2, top: 100, left: 323, description: consulateTerms.administrationOffice, site: true, hostage: true, secure: true },
          { floor: 2, top: -32, left: 10, description: consulateTerms.mainStairs },
          { floor: 2, top: 29, left: 186, description: consulateTerms.breakRoom },
          { floor: 2, top: 132, left: 156, description: consulateTerms.frontOffice },
          { floor: 2, top: 142, left: 19, description: consulateTerms.meetingRoom, site: true, bomb: true },
          { floor: 2, top: 28, left: 11, description: consulateTerms.hallway },
          { floor: 2, top: 38, left: -146, description: consulateTerms.consulFrontDesk },
          { floor: 2, top: -48, left: -137, description: consulateTerms.privateBathroom },
          { floor: 2, top: -71, left: -300, description: consulateTerms.exitStairs },
          { floor: 2, top: 156, left: -109, description: consulateTerms.waitingRoom },
          { floor: 2, top: 164, left: -265, description: consulateTerms.consulateOffice, site: true, hostage: true, bomb: true },
          // 3F
          { floor: 3, top: 300, left: 10, description: consulateTerms.balcony },
          { floor: 3, top: 42, left: -166, description: consulateTerms.buildingRoof },
          { floor: 3, top: 42, left: 177, description: consulateTerms.buildingRoof }
        ]
      },
      favela: {
        name: mapNameTerms.favela,
        imgUrlPrefix: 'favela',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -870, right: -1247, height: 217, width: 580
        },
        floors: [
          { index: 0, top: -920, left: -1971, width: 3272, name: floorTerms.basement },
          { index: 1, top: -920, left: -1971, width: 3272, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -920, left: -1971, width: 3272, name: floorTerms.secondFloor },
          { index: 3, top: -920, left: -1971, width: 3272, name: floorTerms.thirdFloor },
          { index: 4, top: -920, left: -1971, width: 3272, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 3, top: -159, left: 114 },
          { floor: 2, top: -207, left: -141 },
          { floor: 2, top: 204, left: -116 },
          { floor: 1, top: -12, left: -144 }
        ],
        bombObjectives: [
          { floor: 3, top: -160, left: 151, otherFloor: 'down', set: 1, letter: objectiveTerms.bombShortB },
          { floor: 2, top: -217, left: 45, otherFloor: 'up', set: 1, letter: objectiveTerms.bombShortA },
          { floor: 2, top: -27, left: -262, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 78, left: -263, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 155, left: -96, otherFloor: 'down', set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 270, left: -151, otherFloor: 'up', set: 3, letter: objectiveTerms.bombShortB },
          { floor: 1, top: -62, left: -190, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 83, left: -344, set: 4, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 3, top: -159, left: 75 },
          { floor: 2, top: 56, left: -149 },
          { floor: 1, top: -153, left: -125 },
          { floor: 1, top: 269, left: -109 }
        ],
        zoomPoints: {
          topLeft: { top: -310, left: -584 },
          bottomRight: { top: 354, left: 183 }
        },
        compassPoints: {
          top: 280, left: 330
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
          {
            floor: 3, top: -295, left: -45, id: 1,
            los: [[{top: -187, left: -62 }, {top: -310, left: -62}, {top: -310, left: 31}]]
          },
          {
            floor: 2, top: 299, left: -210, id: 2,
            los: [[{top: 153, left: -256}, {top: 312, left: -256}, {top: 312, left: -124}]]
          },
          {
            floor: 1, top: -126, left: -69, id: 3,
            los: [[{top: -200, left: -86}, {top: -111, left: -86}, {top: -111, left: 50}], [{top: -201, left: 11}, {top: -285, left: 46}]]
          },
          {
            floor: 1, top: 156, left: -246, id: 4,
            los: [[{top: 224, left: -256}, {top: -60, left: -266}], [{top: 167, left: -209}, {top: 181, left: -102}]]
          },
          {
            outdoor: true, top: -384, left: -498, id: 5,
            los: [[{top: 74, left: -600}, {top: -416, left: -521}, {top: -446, left: -453}]]
          },
          {
            outdoor: true, top: 346, left: 18, id: 6,
            los: [[{top: 434, left: -615}, {top: 408, left: 484}]]
          },
          {
            outdoor: true, top: -525, left: 230, id: 7,
            los: [[{top: -562, left: -89}, {top: -562, left: 248}, {top: -320, left: 401}]]
          }
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
          { letter: spawnTerms.a, top: -162, left: 562, description: favelaTerms.rooftops },
          { letter: spawnTerms.b, top: 464, left: -668, description: favelaTerms.market },
          { letter: spawnTerms.c, top: -617, left: -469, description: favelaTerms.schoolAlley }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: -333, left: 524, description: favelaTerms.backAlley },
          { outdoor: true, top: -444, left: 213, description: favelaTerms.backAlley },
          { outdoor: true, top: -614, left: -157, description: favelaTerms.schoolAlley },
          { outdoor: true, top: -59, left: -478, description: favelaTerms.footballPitch },
          { outdoor: true, top: 232, left: 580, description: favelaTerms.street },
          { outdoor: true, top: 394, left: 122, description: favelaTerms.street },
          { outdoor: true, top: 103, left: 365, description: favelaTerms.rooftops },
          { outdoor: true, top: 130, left: 79, description: favelaTerms.courtyard },
          { outdoor: true, top: 242, left: -284, description: favelaTerms.marketAlley, rotate: -90 },
          { outdoor: true, top: -504, left: -227, description: favelaTerms.schoolRooftops },
          { outdoor: true, top: -403, left: 95, description: favelaTerms.schoolRooftops },
          // 0F
          { floor: 0, top: 282, left: -150, description: favelaTerms.shop },
          { floor: 0, top: 223, left: -226, description: favelaTerms.mainStairs, rotate: -90 },
          // 1F
          { floor: 1, top: -300, left: -34, description: favelaTerms.accessAlley },
          { floor: 1, top: -161, left: -213, description: favelaTerms.armoryRoom, site: true, secure: true },
          { floor: 1, top: 219, left: -159, description: favelaTerms.auntsApartment, site: true, bomb: true, secure: true },
          { floor: 1, top: 185, left: -61, description: favelaTerms.auntsKitchen },
          { floor: 1, top: -49, left: -140, description: favelaTerms.bikersApartment, site: true, hostage: true , bomb: true},
          { floor: 1, top: 46, left: -341, description: favelaTerms.bikersBedroom, site: true, bomb: true },
          { floor: 1, top: -250, left: -37, description: favelaTerms.backStairs },
          { floor: 1, top: 220, left: -223, description: favelaTerms.mainStairs, rotate: -90 },
          { floor: 1, top: 86, left: -233, description: favelaTerms.stairHall, rotate: -90 },
          { floor: 1, top: -155, left: -17, description: favelaTerms.laundryRoom },
          { floor: 1, top: -235, left: -157, description: favelaTerms.vaultRoom },
          { floor: 1, top: -54, left: -306, description: favelaTerms.bikersGarage },
          { floor: 1, top: 355, left: -454, description: favelaTerms.market },
          { floor: 1, top: -143, left: 213, description: favelaTerms.courtyard },
          { floor: 1, top: 94, left: -156, description: favelaTerms.bikersKitchen},
          // 2F
          { floor: 2, top: 35, left: -130, description: favelaTerms.footballApartment, site: true, secure: true },
          { floor: 2, top: 217, left: -57, description: favelaTerms.auntsBedroom, site: true, hostage: true, bomb: true },
          { floor: 2, top: -186, left: -199, description: favelaTerms.growRoom, site: true, hostage: true },
          { floor: 2, top: -253, left: 91, description: favelaTerms.methLab, site: true, bomb: true },
          { floor: 2, top: -37, left: -321, description: favelaTerms.footballBedroom, site: true, bomb: true },
          { floor: 2, top: 85, left: -321, description: favelaTerms.footballOffice, site: true, bomb: true },
          { floor: 2, top: -261, left: -29, description: favelaTerms.backStairs },
          { floor: 2, top: 152, left: -175, description: favelaTerms.auntsHall, rotate: -90 },
          { floor: 2, top: 299, left: -63, description: favelaTerms.kidsRoom },
          { floor: 2, top: 223, left: -223, description: favelaTerms.mainStairs, rotate: -90 },
          { floor: 2, top: -167, left: -299, description: favelaTerms.roof },
          { floor: 2, top: 355, left: -454, description: favelaTerms.market },
          { floor: 2, top: -143, left: 213, description: favelaTerms.courtyard },
          { floor: 2, top: -45, left: -149, description: favelaTerms.footballKitchen },
          // 3F
          { floor: 3, top: -266, left: 109, description: favelaTerms.packagingRoom, site: true, hostage: true, bomb: true, secure: true },
          { floor: 3, top: -261, left: -22, description: favelaTerms.backStairs },
          { floor: 3, top: 223, left: -218, description: favelaTerms.mainStairs, rotate: -90 },
          { floor: 3, top: 33, left: -188, description: favelaTerms.roof },
          { floor: 3, top: 237, left: -412, description: favelaTerms.marketRooftops },
          { floor: 3, top: 420, left: -412, description: favelaTerms.marketRooftops }
        ]
      },
      fortress: {
        name: mapNameTerms.fortress,
        imgUrlPrefix: 'fortress',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -725, right: -1255, height: 217, width: 475
        },
        floors: [
          { index: 1, top: -1673, left: -3235, width: 5544, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -1673, left: -3235, width: 5544, name: floorTerms.secondFloor },
          { index: 3, top: -1673, left: -3235, width: 5544, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: -36, left: -25 },
          { floor: 2, top: 204, left: 215 },
          { floor: 1, top: 37, left: 63 },
          { floor: 1, top: 141, left: -202 }
        ],
        bombObjectives: [
          { floor: 2, top: -161, left: -178, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 2, top: -178, left: 1, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 2, top: -4, left: 144, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 258, left: 13, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 108, left: 196, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 1, top: 37, left: 93, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: -64, left: -268, set: 4, letter: objectiveTerms.bombShortB },
          { floor: 1, top: 141, left: -232, set: 4, letter: objectiveTerms.bombShortA }
        ],
        secureObjectives: [
          { floor: 2, top: -151, left: -148 },
          { floor: 2, top: 142, left: 54 },
          { floor: 1, top: 108, left: 166 },
          { floor: 1, top: -157, left: -10 }
        ],
        zoomPoints: {
          topLeft: { top: -344, left: -388 },
          bottomRight: { top: 436, left: 522 }
        },
        compassPoints: {},
        ladders: [
          { floor: 1, top: -238, left: 279, otherFloor: 'up' },
          { floor: 2, top: -238, left: 279, otherFloor: 'down' }
        ],
        cameras: [
          {
            floor: 2, top: -278, left: -267, id: 1,
            los: [
              [{ top: -273, left: -194 }, { top: -260, left: -54 }],
              [{ top: -238, left: -249 }, { top: -165, left: -203 }]// 511, 584
            ]
          },
          {
            floor: 2, top: 46, left: -57, id: 2,
            los: [
              [{ top: 34, left: -201 }, { top: 36, left: -154 }],
              [{ top: 38, left: 63 }, { top: 35, left: 96 }],
              [{ top: 142, left: -41 }, { top: 167, left: -33 }],
              [{ top: 177, left: -41 }, { top: 277, left: -29 }]
            ]
          },
          {
            floor: 2, top: 313, left: 330, id: 3,
            los: [
              [{ top: 287, left: 153 }, { top: 293, left: 153 }, { top: 309, left: 285 }, { top: 320, left: 285 }],
              [{ top: 322, left: 342 }, { top: 221, left: 402 }]
            ]
          },
          {
            floor: 1, top: -234, left: -176, id: 4,
            los: [
              [{ top: -291, left: -194}, { top: -287, left: -220 }, { top: -239, left: -220}],
              [{ top: -191, left: -154 }, { top: -120, left: -112 }],
              [{ top: -196, left: -95 }, { top: -190, left: -64 }],
              [{ top: -227, left: -62 }, { top: -215, left: 81 }]
            ]
          },
          {
            floor: 1, top: 224, left: -40, id: 5,
            los: [
              [{ top: -4, left: -81 }, { top: -26, left: -84 }],
              [{ top: 244, left: -78 }, { top: 255, left: -76 }, { top: 255, left: -57 }, { top: 241, left: -53 }],
              [{ top: 233, left: 108 }, { top: 251, left: 262 }],
              [{ top: 203, left: 228 }, { top: 200, left: 293 }]
            ]
          },
          {
            outdoor: true, top: -234, left: -375, id: 6,
            los: [[{ top: 0, left: -470 }, { top: -600, left: -320 }]]
          },
          {
            outdoor: true, top: 202, left: 415, id: 7,
            los: []
          },
          {
            floor: 3, top: 315, left: 123, id: 8,
            los: [[
              { top: 328, left: -450 }, { top: 328, left: 0 }, { top: 350, left: 10 }, { top: 350, left: 120 },
              { top: 328, left: 130 }, { top: 500, left: 525 }
            ]]
          }
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
          { letter: spawnTerms.a, top: -690, left: -370, description: fortressTerms.mainGate },
          { letter: spawnTerms.b, top: -690, left: 170, description: fortressTerms.parking },
          { letter: spawnTerms.c, top: 670, left: 15, description: fortressTerms.garden },
          { letter: spawnTerms.d, top: 580, left: 415, description: fortressTerms.stable }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 372, left: -260, description: fortressTerms.gardenPath },
          { floor: 1, top: 345, left: 0, description: fortressTerms.gardenPath },
          { outdoor: true, top: 380, left: 180, description: fortressTerms.gardenPath },
          { outdoor: true, top: 400, left: 370, description: fortressTerms.stablePath },
          { outdoor: true, top: 201, left: 509, description: fortressTerms.cliffside },
          { outdoor: true, top: -9, left: 499, description: fortressTerms.cliffside },
          { outdoor: true, top: -239, left: 419, description: fortressTerms.cliffside },
          { outdoor: true, top: -499, left: 380, description: fortressTerms.cliffside },
          { outdoor: true, top: 108, left: 384, description: fortressTerms.courtyardPath },
          { outdoor: true, top: -120, left: 363, description: fortressTerms.courtyardPath, rotate: -90 },
          { outdoor: true, top: 219, left: -401, description: fortressTerms.cannonOverlook },
          { outdoor: true, top: -19, left: -401, description: fortressTerms.cannonOverlook },
          { outdoor: true, top: -290, left: -341, description: fortressTerms.cannonOverlook },
          { outdoor: true, top: -287, left: 225, description: fortressTerms.unloadingZone },
          { outdoor: true, top: -367, left: -120, description: fortressTerms.frontEntrance },
          // 1F
          { floor: 1, top: 277, left: 329, description: fortressTerms.laundryRoom },
          { floor: 1, top: 156, left: -153, description: fortressTerms.hammam, site: true, hostage: true, bomb: true },
          { floor: 1, top: 255, left: -242, description: fortressTerms.hammam, site: true, bomb: true },
          { floor: 1, top: 280, left: -107, description: fortressTerms.showers },
          { floor: 1, top: 250, left: 191, description: fortressTerms.cafeteriaHallway },
          { floor: 1, top: 212, left: -30, description: fortressTerms.hammamHallway },
          { floor: 1, top: 184, left: 294, description: fortressTerms.oldTowerStairs },
          { floor: 1, top: 156, left: 143, description: fortressTerms.cafeteria, site: true, bomb: true, secure: true },
          { floor: 1, top: 97, left: -15, description: fortressTerms.centralStairs },
          { floor: 1, top: 70, left: 275, description: fortressTerms.infirmary },
          { floor: 1, top: 32, left: 16, description: fortressTerms.kitchen, site: true, hostage: true, bomb: true },
          { floor: 1, top: 44, left: -197, description: fortressTerms.changingRoom },
          { floor: 1, top: -83, left: -115, description: fortressTerms.mainHallway, rotate: -90 },
          { floor: 1, top: 69, left: -49, description: fortressTerms.changingHallway, rotate: -90 },
          { floor: 1, top: 12, left: 168, description: fortressTerms.waitingRoom },
          { floor: 1, top: -31, left: -207, description: fortressTerms.sittingRoom, site: true, bomb: true },
          { floor: 1, top: -96, left: -4, description: fortressTerms.diningRoom, site: true, secure: true },
          { floor: 1, top: -103, left: 138, description: fortressTerms.courtyard },
          { floor: 1, top: -158, left: -239, description: fortressTerms.musicRoom },
          { floor: 1, top: -223, left: -128, description: fortressTerms.lobby },
          { floor: 1, top: -220, left: 246, description: fortressTerms.courtyardLadder },
          { floor: 1, top: -251, left: -13, description: fortressTerms.office },
          { floor: 1, top: -200, left: 6, description: fortressTerms.officeHallway },
          { floor: 1, top: -299, left: -237, description: fortressTerms.lobbyStairs },
          // 2F
          { floor: 2, top: 190, left: -200, description: fortressTerms.hammamRoof },
          { floor: 2, top: 366, left: 33, description: fortressTerms.shishaLounge },
          { floor: 2, top: 313, left: 190, description: fortressTerms.shishaHallway },
          { floor: 2, top: 220, left: -39, description: fortressTerms.dormitoryHall, rotate: -90 },
          { floor: 2, top: 62, left: 30, description: fortressTerms.bathroomHall },
          { floor: 2, top: 230, left: 52, description: fortressTerms.dormitory, site: true, bomb: true, secure: true },
          { floor: 2, top: 132, left: 104, description: fortressTerms.dormitory, site: true, bomb: true, secure: true },
          { floor: 2, top: 249, left: 191, description: fortressTerms.gamesRoom, site: true, hostage: true },
          { floor: 2, top: 163, left: -7, description: fortressTerms.centralStairs },
          { floor: 2, top: 58, left: 200, description: fortressTerms.briefingRoom, site: true, bomb: true },
          { floor: 2, top: 56, left: 327, description: fortressTerms.courtyardBalcony, rotate: -90 },
          { floor: 2, top: -145, left: -240, description: fortressTerms.portrait },
          { floor: 2, top: 6, left: -141, description: fortressTerms.horse },
          { floor: 2, top: 6, left: -14, description: fortressTerms.bathroom, site: true, hostage: true },
          { floor: 2, top: -103, left: -120, description: fortressTerms.commandersOffice, site: true, bomb: true, secure: true },
          { floor: 2, top: -131, left: 7, description: fortressTerms.bedroom, site: true, bomb: true },
          { floor: 2, top: -101, left: 143, description: fortressTerms.courtyard },
          { floor: 2, top: -43, left: 186, description: fortressTerms.mezzanine },
          { floor: 2, top: -158, left: 186, description: fortressTerms.mezzanine },
          { floor: 2, top: -200, left: 280, description: fortressTerms.courtyardTower },
          { floor: 2, top: -297, left: -236, description: fortressTerms.towerStairs },
          { floor: 2, top: -246, left: -160, description: fortressTerms.towerHallway },
          { floor: 2, top: -279, left: 0, description: fortressTerms.towerRenovation },
          { floor: 2, top: 190, left: 309, description: fortressTerms.oldTowerStairs },
          // 3F
          { floor: 3, top: 190, left: -200, description: fortressTerms.hammamRoof },
          { floor: 3, top: 230, left: 100, description: fortressTerms.oldRoof },
          { floor: 3, top: 282, left: 356, description: fortressTerms.oldTower },
          { floor: 3, top: -108, left: 0, description: fortressTerms.modernRoof },
          { floor: 3, top: 56, left: 327, description: fortressTerms.courtyardBalcony, rotate: -90 },
          { floor: 3, top: -288, left: -226, description: fortressTerms.westTower },
          { floor: 3, top: -288, left: 16, description: fortressTerms.eastTower },
          { floor: 3, top: -228, left: 280, description: fortressTerms.guardTower }
        ]
      },
      hereford: {
        name: mapNameTerms.hereford,
        imgUrlPrefix: 'hereford',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -457, right: -1174, height: 263, width: 830
        },
        floors: [
          { index: 0, top: -1433, left: -2221, width: 3456, name: floorTerms.basement },
          { index: 1, top: -1433, left: -2221, width: 3456, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -1433, left: -2221, width: 3456, name: floorTerms.secondFloor },
          { index: 3, top: -1433, left: -2221, width: 3456, name: floorTerms.thirdFloor },
          { index: 4, top: -1433, left: -2221, width: 3456, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 3, top: 58, left: -30 },
          { floor: 2, top: -59, left: 102 },
          { floor: 1, top: 83, left: -76 },
          { floor: 0, top: 73, left: -117 }
        ],
        bombObjectives: [
          { floor: 0, top: 58, left: -37, set: 4, letter: objectiveTerms.bombShortB },
          { floor: 0, top: -119, left: -100, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 72, left: -35, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 72, left: 73, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 2, top: -37, left: 147, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 2, top: -133, left: -9, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 3, top: 58, left: -60, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 3, top: -198, left: -64, set: 1, letter: objectiveTerms.bombShortA }
        ],
        secureObjectives: [
          { floor: 2, top: 112, left: -47 },
          { floor: 2, top: -93, left: -9 },
          { floor: 1, top: -67, left: 69 },
          { floor: 0, top: -74, left: 79 }
        ],
        zoomPoints: {
          topLeft: { top: -280, left: -340 },
          bottomRight: { top: 234, left: 285 }
        },
        compassPoints: {
          top: -408, left: 330
        },
        ladders: [
          { floor: 0, top: 165, left: 95, otherFloor: 'up' },
          { floor: 1, top: 163, left: 112, otherFloor: 'down' }
        ],
        cameras: [
          { floor: 3, top: -54, left: 66, id: 1,
            los: [
              [{ top: -5, left: 78 }, { top: -204, left: 74 }],
              [{ top: -123, left: 59 }, { top: -218, left: 43 }]
            ]
          },
          { floor: 2, top: 8, left: 58, id: 2,
            los: [
              [{ top: 4, left: 83 }, { top: 43, left: 96 }],
              [{ top: 49, left: 92 }, { top: 140, left: 161 }],
              [{ top: 46, left: 77 }, { top: 158, left: 134 }],
              [{ top: 45, left: 3 }, { top: 128, left: -122 }],
              [{ top: 33, left: 4 }, { top: 101, left: -103 }],
              [{ top: 3, left: 20}, { top: -14, left: 17 }, { top: -17, left: 54 }, { top: 2, left: 48 }]
            ]
          },
          { floor: 1, top: -16, left: 35, id: 3,
            los: [
              [{ top: -7, left: 7 }, { top: 15, left: 3 }, { top: 16, left: 46 }, { top: -7, left: 34 }],
              [{ top: -20, left: -128 }, { top: -20, left: -241 }],
              [{ top: -34, left: -129 }, { top: -44, left: -194 }],
              [{ top: -138, left: 8 }, { top: -230, left: -18 }]
            ]
          },
          { floor: 0, top: -13, left: 35, id: 4,
            los: [
              [{ top: -17, left: 44 }, { top: -75, left: 12 }]
            ]
          },
          { outside: true, top: -181, left: -326, id: 5,
            los: [
              [{ top: -359, left: -279 }, { top: -187, left: -328 }]
            ]
          },
          { outside: true, top: 218, left: 190, id: 6,
            los: [
              [{ top: 329, left: -219 }, { top: 214, left: 237 }]
            ]
          },
          { outside: true, top: -361, left: 273, id: 7,
            los: [
              [{ top: -471, left: 100 }, { top: -363, left: 291 }]
            ]
          }
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
          { letter: spawnTerms.a, top: 93, left: -639, description: herefordTerms.controlTower },
          { letter: spawnTerms.b, top: 105, left: 753, description: herefordTerms.spitfireCourtyard },
          { letter: spawnTerms.c, top: -820, left: 39, description: herefordTerms.shootingRange }
        ],
        roomLabels: [
          // EXT
          { outside: true, top: 293, left: -274, description: herefordTerms.street },
          { outside: true, top: 290, left: -3, description: herefordTerms.street },
          { outside: true, top: 287, left: 225, description: herefordTerms.street },
          { outside: true, top: 205, left: -154, description: herefordTerms.street },
          { outside: true, top: 141, left: -313, description: herefordTerms.westCourtyard },
          { outside: true, top: -126, left: -300, description: herefordTerms.westCourtyard },
          { outside: true, top: 150, left: 241, description: herefordTerms.eastCourtyard },
          { outside: true, top: -188, left: 240, description: herefordTerms.eastCourtyard },
          { outside: true, top: -309, left: -186, description: herefordTerms.barnyard },
          { outside: true, top: -317, left: 143, description: herefordTerms.barnyard },
          // OF
          { floor: 0, top: -1, left: 168, description: herefordTerms.eastTunnel, rotate: -90 },
          { floor: 0, top: 115, left: -63, description: herefordTerms.fermentationChamber, site: true, hostage: true, bomb: true },
          { floor: 0, top: 96, left: 42, description: herefordTerms.mainStairs, rotate: -90 },
          { floor: 0, top: 64, left: -206, description: herefordTerms.generatorRoom },
          { floor: 0, top: 47, left: 93, description: herefordTerms.workshop },
          { floor: 0, top: -79, left: -204, description: herefordTerms.westTunnel, rotate: -90 },
          { floor: 0, top: -49, left: -75, description: herefordTerms.brewery, site: true, bomb: true },
          { floor: 0, top: -95, left: 83, description: herefordTerms.barrelStorage, site: true, secure: true },
          { floor: 0, top: -112, left: -167, description: herefordTerms.blueStairs },
          { floor: 0, top: -173, left: 88, description: herefordTerms.barn },
          { floor: 0, top: -26, left: -155, description: herefordTerms.breweryHallway, rotate: -90 },
          { floor: 0, top: -5, left: 18, description: herefordTerms.workshopHallway, rotate: -90 },
          // 1F
          { floor: 1, top: 182, left: 16, description: herefordTerms.prepArea },
          { floor: 1, top: 51, left: -68, description: herefordTerms.kitchen, site: true, hostage: true, bomb: true },
          { floor: 1, top: 111, left: 53, description: herefordTerms.mainStairs, rotate: -90 },
          { floor: 1, top: 45, left: 103, description: herefordTerms.diningRoom, site: true, bomb: true },
          { floor: 1, top: 54, left: -187, description: herefordTerms.garage },
          { floor: 1, top: 36, left: 23, description: herefordTerms.kitchenEntrance },
          { floor: 1, top: -104, left: -162, description: herefordTerms.blueStairs },
          { floor: 1, top: -65, left: 111, description: herefordTerms.pianoRoom, site: true, secure: true },
          { floor: 1, top: -74, left: -61, description: herefordTerms.livingRoom },
          { floor: 1, top: -165, left: -7, description: herefordTerms.foyer },
          { floor: 1, top: -171, left: 97, description: herefordTerms.barn },
          { floor: 1, top: -13, left: -60, description: herefordTerms.garageHallway },
          { floor: 1, top: -88, left: 36, description: herefordTerms.livingHallway, rotate: -90 },
          // 2F
          { floor: 2, top: 90, left: -60, description: herefordTerms.loomRoom, site: true, secure: true },
          { floor: 2, top: 122, left: 62, description: herefordTerms.mainStairs, rotate: -90 },
          { floor: 2, top: 110, left: 124, description: herefordTerms.laundryRoom },
          { floor: 2, top: 33, left: -187, description: herefordTerms.garageRoof },
          { floor: 2, top: 40, left: -99, description: herefordTerms.loomCloset },
          { floor: 2, top: -67, left: -82, description: herefordTerms.blueHallway },
          { floor: 2, top: -14, left: 10, description: herefordTerms.blueHallway },
          { floor: 2, top: -81, left: 114, description: herefordTerms.masterBedroom, site: true, hostage: true, bomb: true },
          { floor: 2, top: -98, left: -151, description: herefordTerms.blueStairs },
          { floor: 2, top: -109, left: 27, description: herefordTerms.kidsRoom, site: true, bomb: true, secure: true },
          { floor: 2, top: -154, left: 109, description: herefordTerms.bathroom },
          { floor: 2, top: -171, left: -116, description: herefordTerms.sewingRoom },
          { floor: 2, top: 37, left: 83, description: herefordTerms.masterHallway },
          { floor: 2, top: 190, left: 19, description: herefordTerms.loomBalcony },
          { floor: 2, top: -97, left: 222, description: herefordTerms.outsideStairs, rotate: -90 },
          { floor: 2, top: -173, left: 193, description: herefordTerms.bathroomBalcony, rotate: -90 },
          // 3F
          { floor: 3, top: 120, left: -50, description: herefordTerms.tractorStorage, site: true, hostage: true, bomb: true },
          { floor: 3, top: 127, left: 61, description: herefordTerms.mainStairs, rotate: -90 },
          { floor: 3, top: 96, left: 124, description: herefordTerms.atticSouth },
          { floor: 3, top: -68, left: 66, description: herefordTerms.attic },
          { floor: 3, top: -157, left: 93, description: herefordTerms.atticNorth },
          { floor: 3, top: -93, left: -146, description: herefordTerms.blueStairs },
          { floor: 3, top: -37, left: 201, description: herefordTerms.outsideStairs, rotate: -90 },
          { floor: 3, top: -150, left: -80, description: herefordTerms.ammoStorage, site: true, bomb: true },
          { floor: 3, top: 33, left: -187, description: herefordTerms.garageRoof},
          { floor: 3, top: 206, left: 27, description: herefordTerms.tractorBalcony },
          // 4F
          { floor: 4, top: 135, left: -35, description: herefordTerms.rooftop },
          { floor: 4, top: -34, left: 121, description: herefordTerms.rooftop },
          { floor: 4, top: -161, left: -17, description: herefordTerms.rooftop },
          { floor: 4, top: 33, left: -187, description: herefordTerms.garageRoof}
        ]
      },
      house: {
        name: mapNameTerms.house,
        imgUrlPrefix: 'house',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -397, right: -902, height: 217, width: 475
        },
        floors: [
          { index: 0, top: -383, left: -680, width: 1361, name: floorTerms.basement },
          { index: 1, top: -383, left: -680, width: 1361, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -383, left: -680, width: 1361, name: floorTerms.secondFloor },
          { index: 3, top: -383, left: -680, width: 1361, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 0, top: 56, left: 5 },
          { floor: 1, top: 16, left: 198 },
          { floor: 2, top: -140, left: -55 },
          { floor: 2, top: 28, left: 203 }
        ],
        bombObjectives: [
          { floor: 0, top: -16, left: 123, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 0, top: -115, left: -68, set: 4, letter: objectiveTerms.bombShortB },
          { floor: 1, top: 160, left: 62, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 144, left: -70, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 28, left: 133, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 70, left: -50, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 70, left: -85, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 2, top: -140, left: -90, set: 1, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 0, top: -16, left: 158 },
          { floor: 1, top: -114, left: -71 },
          { floor: 2, top: 70, left: -15 },
          { floor: 2, top: 28, left: 168 }
        ],
        zoomPoints: {
          topLeft: { top: -250, left: -250 },
          bottomRight: { top: 250, left: 250 }
        },
        compassPoints: {
          top: 400, left: 560
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
          {
            floor: 0, top: -65, left: -122, id: 1,
            los: [
              [{top: -89, left: -64}, {top: -140, left: 29}],
              [{top: -182, left: -67}, {top: -237, left: -34}],
              [{top: -182, left: -48}, {top: -218, left: -20}]
            ]
          },
          {
            floor: 0, top: -75, left: 85, id: 2,
            los: [
              [{top: -85, left: 79}, {top: -167, left: 71}],
              [{top: 20, left: 202}, {top: 47, left: 232}],
              [{top: 40, left: 202}, {top: 47, left: 208}],
              [{top: 52, left: 96}, {top: 85, left: 101}],
              [{top: 52, left: 116}, {top: 85, left: 125}]
            ]
          },
          {
            outdoor: true, top: -175, left: -270, id: 6,
            los: [[{top: -235, left: -320}, {top: -45, left: -184}]]
          },
          {
            outdoor: true, top: 394, left: 345, id: 7,
            los: [[{top: 400, left: -130}, {top: 400, left: 618}]]
          }
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
          { letter: spawnTerms.a, top: -439, left: 118, description: houseTerms.spawnFrontStreet },
          { letter: spawnTerms.b, top: 515, left: -140, description: houseTerms.spawnAPCArea },
          { letter: spawnTerms.c, top: 468, left: 390, description: houseTerms.spawnSideStreet }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 308, left: 271, description: houseTerms.apcArea },
          { outdoor: true, top: 308, left: -146, description: houseTerms.apcArea },
          { outdoor: true, top: 20, left: 461, description: houseTerms.sideStreet },
          { outdoor: true, top: -36, left: 315, description: houseTerms.garageFront },
          { outdoor: true, top: 150, left: 275, description: houseTerms.garageSide },
          { outdoor: true, top: 218, left: -265, description: houseTerms.patio },
          { outdoor: true, top: -135, left: -189, description: houseTerms.basementStairs },
          { outdoor: true, top: -70, left: -236, description: houseTerms.treeHouseAlley },
          { outdoor: true, top: -337, left: 160, description: houseTerms.frontYard },
          { outdoor: true, top: -337, left: -95, description: houseTerms.frontYard },
          { outdoor: true, top: 22, left: -284, description: houseTerms.treeHouse },
          // OF
          { floor: 0, top: -60, left: 10, description: houseTerms.kitchenStairs },
          { floor: 0, top: 14, left: -141, description: houseTerms.backStairs },
          { floor: 0, top: -198, left: -80, description: houseTerms.depot },
          { floor: 0, top: -142, left: -55, description: houseTerms.gym, site: true, bomb: true },
          { floor: 0, top: 30, left: 5, description: houseTerms.laundryRoom, site: true, hostage: true },
          { floor: 0, top: -46, left: 147, description: houseTerms.garage, site: true, bomb: true, secure: true },
          { floor: 0, top: 35, left: 197, description: houseTerms.garageEntrance },
          // 1F
          { floor: 1, top: 198, left: 153, description: houseTerms.redStairs },
          { floor: 1, top: -57, left: 33, description: houseTerms.kitchenStairs, veryHardToRead: true },
          { floor: 1, top: -146, left: 99, description: houseTerms.lobbyStairs },
          { floor: 1, top: -19, left: -129, description: houseTerms.backStairs },
          { floor: 1, top: -193, left: 128, description: houseTerms.frontBalcony },
          { floor: 1, top: 238, left: -35, description: houseTerms.backPorch },
          { floor: 1, top: -150, left: -71, description: houseTerms.gameRoom, site: true, secure: true },
          { floor: 1, top: 237, left: 114, description: houseTerms.backEntrance },
          { floor: 1, top: -112, left: 66, description: houseTerms.lobby },
          { floor: 1, top: -2, left: 68, description: houseTerms.kitchen },
          { floor: 1, top: -117, left: 198, description: houseTerms.office },
          { floor: 1, top: -8, left: 198, description: houseTerms.diningRoom, site: true, hostage: true },
          { floor: 1, top: 109, left: 184, description: houseTerms.connector },
          { floor: 1, top: 129, left: 78, description: houseTerms.tvRoom, site: true, bomb: true },
          { floor: 1, top: 106, left: -70, description: houseTerms.musicRoom, site: true, bomb: true },
          // 2F
          { floor: 2, top: -237, left: 117, description: houseTerms.frontBalcony },
          { floor: 2, top: 246, left: 7, description: houseTerms.backPorch },
          { floor: 2, top: -191, left: 236, description: houseTerms.backPorchTop, rotate: 45 },
          { floor: 2, top: 108, left: 201, description: houseTerms.readingRoomBalcony },
          { floor: 2, top: 202, left: 149, description: houseTerms.redStairs },
          { floor: 2, top: -148, left: 99, description: houseTerms.lobbyStairs },
          { floor: 2, top: -19, left: -130, description: houseTerms.backStairs },
          { floor: 2, top: -170, left: -49, description: houseTerms.pinkRoom, site: true, hostage: true, bomb: true },
          { floor: 2, top: -115, left: -1, description: houseTerms.girlsWalkIn },
          { floor: 2, top: 50, left: -50, description: houseTerms.carRoom, site: true, bomb: true, secure: true },
          { floor: 2, top: 163, left: -57, description: houseTerms.playRoom },
          { floor: 2, top: -27, left: 27, description: houseTerms.upperHallway },
          { floor: 2, top: 36, left: 42, description: houseTerms.walkIn },
          { floor: 2, top: 8, left: 168, description: houseTerms.masterBedroom, site: true, hostage: true, bomb: true, secure: true },
          { floor: 2, top: 131, left: 85, description: houseTerms.readingRoom },
          { floor: 2, top: -91, left: 195, description: houseTerms.bathroom },
          { floor: 2, top: -190, left: 112, description: houseTerms.bathroomHallway },
          // 3F/Roof
          { floor: 3, top: -10, left: 50, description: houseTerms.rooftop }
        ]
      },
      kafe: {
        name: mapNameTerms.kafe,
        imgUrlPrefix: 'kafe',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -725, right: -1255, height: 217, width: 475
        },
        floors: [
          { index: 1, top: -1170, left: -2435, width: 3905, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -1170, left: -2435, width: 3905, name: floorTerms.secondFloor },
          { index: 3, top: -1170, left: -2435, width: 3905, name: floorTerms.thirdFloor },
          { index: 4, top: -1170, left: -2435, width: 3905, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 1, top: 174, left: 9 },
          { floor: 2, top: 70, left: 307 },
          { floor: 2, top: 151, left: 34 },
          { floor: 3, top: 178, left: 221 }
        ],
        bombObjectives: [
          { floor: 1, top: 151, left: -32, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 120, left: 129, set: 4, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 207, left: 174, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 25, left: 242, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 59, left: 25, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 180, left: 174, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 3, top: 101, left: 318, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 3, top: -38, left: 192, set: 1, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 1, top: 163, left: -9 },
          { floor: 2, top: 23, left: 270 },
          { floor: 2, top: 151, left: -61 },
          { floor: 3, top: 92, left: -58 }
        ],
        zoomPoints: {
          topLeft: { top: -209, left: -238 },
          bottomRight: { top: 335, left: 479 }
        },
        compassPoints: {
          top: 313, left: 505
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
          {
            floor: 3, top: -126, left: 281, id: 1,
            los: []
          },
          {
            floor: 2, top: 135, left: 96, id: 2,
            los: []
          },
          {
            floor: 1 , top: 62, left: 244 , id: 3,
            los: []
          },
          {
            floor: 1, top: 34, left: -197, id: 4,
            los: []
          },
          {
            outdoor: true, top: -138, left: -328, id: 5,
            los: [[{top: 775 - 749, left: 808 - 1275}, {top: 592 - 749, left: 927 - 1275}, {top: 425 - 749, left: 1133 - 1275}]]
          },
          {
            outdoor: true, top: 445, left: 396, id: 6,
            los: [[{top: 1240 - 749, left: 1600 - 1275}, {top: 1204 - 749, left: 1685 - 1276}, {top: 993 - 749, left: 1710 - 1275}]]
          }
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
          { letter: spawnTerms.a, top: -528, left: 111, description: kafeTerms.riverDocks },
          { letter: spawnTerms.b, top: 112, left: -689, description: kafeTerms.christmasMarket },
          { letter: spawnTerms.c, top: 571, left: 161, description: kafeTerms.park }
        ],
        roomLabels: [
          // EXT
          { outdoor: true,  top: 827, left: 177, description: kafeTerms.backAlley },
          { outdoor: true,  top: 577, left: 387, description: kafeTerms.backAlley },
          { outdoor: true,  top: 344, left: -230, description: kafeTerms.garage },
          { outdoor: true,  top: 379, left: 131, description: kafeTerms.backAlley },
          { outdoor: true,  top: 74, left: -287, description: kafeTerms.bakeryParking },
          { outdoor: true, top: -229, left: -268, description: kafeTerms.westMainStreet },
          { outdoor: true,  top: -227, left: 153, description: kafeTerms.mainStreet },
          { outdoor: true,  top: -228, left: 631, description: kafeTerms.eastMainStreet },
          { outdoor: true,  top: 44, left: 425, description: kafeTerms.terrace },
          // 1F
          { floor: 1, top: 137, left: 248, description: kafeTerms.vipCorridor, rotate: -90 },
          { floor: 1, top: 264, left: 273, description: kafeTerms.garage },
          { floor: 1, top: 97, left: -163, description: kafeTerms.bakery },
          { floor: 1, top: 208, left: -96, description: kafeTerms.prepRoom },
          { floor: 1, top: 102, left: -23, description: kafeTerms.kitchenCooking, site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: 95, left: 126, description: kafeTerms.kitchenService, site: true, bomb: true },
          { floor: 1, top: 197, left: 169, description: kafeTerms.freezer },
          { floor: 1, top: 207, left: 296, description: kafeTerms.whiteStairs },
          { floor: 1, top: 102, left: 295, description: kafeTerms.vipSection },
          { floor: 1, top: -6, left: 171, description: kafeTerms.bottomBar },
          { floor: 1, top: -49, left: 296, description: kafeTerms.diningRoom },
          { floor: 1, top: -27, left: -157, description: kafeTerms.smallBakery },
          { floor: 1, top: -94, left: -59, description: kafeTerms.redStairs },
          { floor: 1, top: -83, left: 10, description: kafeTerms.coatCheck },
          { floor: 1, top: -73, left: 108, description: kafeTerms.reception },
          { floor: 1, top: -101, left: 216, description: kafeTerms.woodStairs },
          { floor: 1, top: -3, left: 0, description: kafeTerms.bakeryCorridor },
          // 2F
          { floor: 2,  top: 174, left: -162, description: kafeTerms.bakeryRoof },
          { floor: 2, top: 164, left: 0, description: kafeTerms.trainMuseum, site: true, hostage: true, secure: true },
          { floor: 2, top: 195, left: 138, description: kafeTerms.fireplaceHall, site: true, bomb: true },
          { floor: 2, top: 139, left: 179, description: kafeTerms.readingRoomCorridor },
          { floor: 2, top: 230, left: 308, description: kafeTerms.whiteStairs },
          { floor: 2, top: 143, left: 315, description: kafeTerms.laundryRoom },
          { floor: 2, top: 62, left: 191, description: kafeTerms.readingRoom, site: true, bomb: true, secure: true },
          { floor: 2, top: 35, left: 304, description: kafeTerms.readingRoom, site: true, hostage: true, bomb: true, secure: true },
          { floor: 2, top: 46, left: -15, description: kafeTerms.miningRoom, site: true, bomb: true },
          { floor: 2, top: 53, left: 106, description: kafeTerms.mainCorridor, rotate: -90 },
          { floor: 2, top: -13, left: 185, description: kafeTerms.pillarRoom },
          { floor: 2, top: -19, left: -3, description: kafeTerms.museumEntrance },
          { floor: 2, top: -97, left: -48, description: kafeTerms.redStairs },
          { floor: 2, top: 195, left: 68, description: kafeTerms.fireplace },
          { floor: 2, top: -108, left: 209, description: kafeTerms.woodStairs },
          { floor: 2, top: -73, left: 180, description: kafeTerms.main },
          { floor: 2, top: -83, left: 330, description: kafeTerms.terraceEntrance },
          // 3F
          { floor: 3,  top: 174, left: -162, description: kafeTerms.bakeryRoof },
          { floor: 3, top: 140, left: 5, description: kafeTerms.cigarLounge, site: true, secure: true },
          { floor: 3, top: 235, left: 208, description: kafeTerms.whiteCorridor },
          { floor: 3, top: 215, left: 320, description: kafeTerms.whiteStairs },
          { floor: 3, top: 175, left: 167, description: kafeTerms.washrooms },
          { floor: 3, top: 172, left: 222, description: kafeTerms.barFreezer, site: true, hostage: true },
          { floor: 3, top: 146, left: 285, description: kafeTerms.cocktailLoungeEntrance, rotate: -90 },
          { floor: 3, top: 55, left: 331, description: kafeTerms.cocktailLounge, site: true, bomb: true },
          { floor: 3, top: 114, left: 196, description: kafeTerms.barBackstore },
          { floor: 3, top: 39, left: 39, description: kafeTerms.cigarShop },
          { floor: 3, top: 50, left: 193, description: kafeTerms.bar, site: true, bomb: true },
          { floor: 3, top: -97, left: -41, description: kafeTerms.redStairs },
          { floor: 3, top: -119, left: 79, description: kafeTerms.cigarBalcony },
          { floor: 3, top: -91, left: 328, description: kafeTerms.cocktailBalcony },
          { floor: 3, top: -104, left: 209, description: kafeTerms.woodStairs },
          // 4F
          { floor: 4,  top: 174, left: -162, description: kafeTerms.bakeryRoof },
          { floor: 4,  top: 62, left: 149, description: kafeTerms.cafeRoofTop },
          { floor: 4,  top: -13, left: 20, description: kafeTerms.redHatch },
          { floor: 4,  top: -82, left: 115, description: kafeTerms.newHatch }
        ]
      },
      kanal: {
        name: mapNameTerms.kanal,
        imgUrlPrefix: 'kanal',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -743, right: -1262, height: 217, width: 634
        },
        floors: [
          { index: -1, top: -1190, left: -2218, width: 3538, name: floorTerms.subBasement },
          { index: 0, top: -1190, left: -2218, width: 3538, name: floorTerms.basement },
          { index: 1, top: -1190, left: -2218, width: 3538, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -1190, left: -2218, width: 3538, name: floorTerms.secondFloor },
          { index: 3, top: -1190, left: -2218, width: 3538, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 0, top: -30, left: -312 },
          { floor: 1, top: -39, left: -305 },
          { floor: 1, top: -168, left: 213 },
          { floor: 2, top: -172, left: 135 }
        ],
        bombObjectives: [
          { floor: 0, top: -30, left: -283, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 0, top: -95, left: -334, set: 4, letter: objectiveTerms.bombShortB },
          { floor: 1, top: -39, left: -295, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: -189, left: -149, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 1, top: -246, left: 196, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 1, top: -114, left: 84, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 2, top: -172, left: 140, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 2, top: -178, left: 265, set: 1, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 0, top: -30, left: -288 },
          { floor: 1, top: -39, left: -300 },
          { floor: 1, top: -168, left: 208 },
          { floor: 2, top: -178, left: 260 }
        ],
        zoomPoints: {
          topLeft: { top: -337, left: -507 },
          bottomRight: { top: 259, left: 547 }
        },
        compassPoints: {
          top: 168, left: 515
        },
        ladders: [
          { floor: -1, top: -36, left: -126, otherFloor: 'up' },
          { floor: 0, top: -36, left: -110, otherFloor: 'down' },
          { floor: -1, top: -240, left: -234, otherFloor: 'up' },
          { floor: 0, top: -235, left: -230, otherFloor: 'down' }
        ],
        cameras: [
          {
            floor: 2, top: -67, left: 216, id: 1,
            los: []
          },
          {
            floor: 1, top: -69, left: 163,  id: 2,
            los: []
          },
          {
            floor: 1, top: 16, left: -180, id: 3,
            los: [
              [{top: -14, left: -164}, {top: -75, left: -146}],
              [{top: 18, left: -77}, {top: 21, left: 178}]
            ]
          },
          {
            floor: 0, top: -55, left: -191, id: 4,
            los: []
          },
          {
            outdoor: true, top: 437, left: -366, id: 5,
            los: []
          },
          {
            outdoor: true, top: -391, left: -465, id: 6,
            los: []
          },
          {
            outdoor: true, top: -374, left: 430, id: 7,
            los: []
          }
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
          { letter: spawnTerms.a, top: -495, left: -1004, description: kanalTerms.floatingDock },
          { letter: spawnTerms.b, top: 465, left: -426, description: kanalTerms.sailboats },
          { letter: spawnTerms.c, top: -432, left: 924, description: kanalTerms.constructionSite }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 314, left: -4, description: kanalTerms.middleRoad },
          { outdoor: true, top: -79, left: -4, description: kanalTerms.middleRoad },
          { outdoor: true, top: 319, left: 178, description: kanalTerms.parking },
          { outdoor: true, top: 266, left: -261, description: kanalTerms.frontLawn },
          { outdoor: true, top: -463, left: -560, description: kanalTerms.lockGateTunnel },
          { outdoor: true, top: 167, left: -527, description: kanalTerms.lockGateTunnel },
          { outdoor: true, top: 69, left: -395, description: kanalTerms.forkliftAlley },
          { outdoor: true, top: -281, left: -395, description: kanalTerms.forkliftAlley },
          { outdoor: true, top: 108, left: 243, description: kanalTerms.parkingEntrance },
          { outdoor: true, top: -313, left: -635, description: kanalTerms.lockGate },
          { outdoor: true, top: 27, left: -453, description: kanalTerms.lockGate },
          { outdoor: true, top: -351, left: 511, description: kanalTerms.constructionSite },
          { outdoor: true, top: -81, left: 511, description: kanalTerms.constructionSite },
          { outdoor: true, top: -71, left: 851, description: kanalTerms.constructionSite },
          { outdoor: true, top: -410, left: -281, description: kanalTerms.quayContainers },
          { outdoor: true, top: -392, left: 169, description: kanalTerms.quayContainers },
          { outdoor: true, top: -448, left: -66, description: kanalTerms.docksBridge },
          { outdoor: true, top: 131, left: -276, description: kanalTerms.lawnStairs },
          // -1F
          { floor: -1, top: -31, left: -206, description: kanalTerms.tunnel01 },
          // OF
          { floor: 0, top: 14, left: 203, description: kanalTerms.redStairs },
          { floor: 0, top: -293, left: -328, description: kanalTerms.yellowStairs, rotate: -90 },
          { floor: 0, top: -24, left: -152, description: kanalTerms.whiteStairs  },
          { floor: 0, top: -159, left: 192, description: kanalTerms.garage },
          { floor: 0, top: -269, left: -147, description: kanalTerms.divingAlcove },
          { floor: 0, top: 81, left: -315, description: kanalTerms.pipes },
          { floor: 0, top: -123, left: -178, description: kanalTerms.supplyRoomCorridor, rotate: -90 },
          { floor: 0, top: 74, left: -129, description: kanalTerms.bathroom },
          { floor: 0, top: 24, left: -272, description: kanalTerms.supplyRoom, site: true, hostage: true, bomb: true, secure: true },
          { floor: 0, top: 7, left: -92, description: kanalTerms.showerCorridor, rotate: -90 },
          { floor: 0, top: -103, left: -279, description: kanalTerms.kayaks, site: true, bomb: true },
          { floor: 0, top: -121, left: -128, description: kanalTerms.lockerRoom },
          { floor: 0, top: -254, left: -266, description: kanalTerms.divingRoom },
          { floor: 0, top: 81, left: -228, description: kanalTerms.lawnEntrance },
          { floor: 0, top: -182, left: -266, description: kanalTerms.divingCorridor },
          // 1F
          { floor: 1, top: -50, left: -123, description: kanalTerms.whiteStairs },
          { floor: 1, top: 13, left: 217, description: kanalTerms.redStairs },
          { floor: 1, top: -182, left: 406, description: kanalTerms.greenStairs, rotate: -90 },
          { floor: 1, top: -308, left: -318, description: kanalTerms.yellowStairs },
          { floor: 1, top: -308, left: -113, description: kanalTerms.blueStairs },
          { floor: 1, top: 80, left: -280, description: kanalTerms.archives },
          { floor: 1, top: 80, left: -139, description: kanalTerms.reception },
          { floor: 1, top: 39, left: 127, description: kanalTerms.modelRoom },
          { floor: 1, top: -1, left: 330, description: kanalTerms.museum },
          { floor: 1, top: 7, left: -278, description: kanalTerms.coastGuardMeetingRoom, site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: -221, left: -213, description: kanalTerms.radioRoomHallway, rotate: -90 },
          { floor: 1, top: 24, left: -2, description: kanalTerms.lowerBridge },
          { floor: 1, top: -54, left: 280, description: kanalTerms.mapRoomCorridor },
          { floor: 1, top: -68, left: 111, description: kanalTerms.securityRoom, site: true, bomb: true },
          { floor: 1, top: -211, left: -136, description: kanalTerms.lounge, site: true, bomb: true },
          { floor: 1, top: -194, left: 221, description: kanalTerms.mapRoom, site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: -168, left: 322, description: kanalTerms.kitchen },
          { floor: 1, top: -102, left: 416, description: kanalTerms.constructionEntrance },
          { floor: 1, top: -191, left: -299, description: kanalTerms.radioRoom },
          { floor: 1, top: -194, left: 106, description: kanalTerms.projectorRoom },
          { floor: 1, top: -188, left: 441, description: kanalTerms.constructionStairs, rotate: -90 },
          { floor: 1, top: -117, left: -133, description: kanalTerms.gym },
          { floor: 1, top: -85, left: -175, description: kanalTerms.meetingRoomHallway, rotate: -90 },
          // 2F
          { floor: 2, top: -44, left: -113, description: kanalTerms.whiteStairs },
          { floor: 2, top: 23, left: 235, description: kanalTerms.redStairs },
          { floor: 2, top: -178, left: 422, description: kanalTerms.greenStairs, rotate: -90 },
          { floor: 2, top: -308, left: -113, description: kanalTerms.blueStairs },
          { floor: 2, top: -32, left: 120, description: kanalTerms.renovations },
          { floor: 2, top: -42, left: 177, description: kanalTerms.roofEntrance, rotate: -90 },
          { floor: 2, top: -49, left: 302, description: kanalTerms.controlRoomHallway },
          { floor: 2, top: -126, left: 142, description: kanalTerms.radarRoom, site: true, hostage: true, bomb: true },
          { floor: 2, top: -208, left: 282, description: kanalTerms.serverRoom, site: true, bomb: true, secure: true },
          { floor: 2, top: -166, left: 385, description: kanalTerms.serverRoomCorridor, rotate: -90 },
          { floor: 2, top: -218, left: -122, description: kanalTerms.printerRoom },
          { floor: 2, top: -208, left: 150, description: kanalTerms.controlRoom },
          { floor: 2, top: -249, left: -6, description: kanalTerms.upperBridge },
          { floor: 2, top: -243, left: -213, description: kanalTerms.coastGuardRoof },
          { floor: 2, top: -6, left: -253, description: kanalTerms.coastGuardRoof },
          { floor: 2, top: 47, left: 134, description: kanalTerms.balconyRenovations },
          { floor: 2, top: 25, left: 3, description: kanalTerms.bridgeRoof },
          { floor: 2, top: 8, left: 344, description: kanalTerms.balcony },
          // 3F
          { floor: 3, top: -243, left: -213, description: kanalTerms.coastGuardRoof },
          { floor: 3, top: -6, left: -253, description: kanalTerms.coastGuardRoof },
          { floor: 3, top: 33, left: 134, description: kanalTerms.balconyRenovations },
          { floor: 3, top: 25, left: 3, description: kanalTerms.bridgeRoof },
          { floor: 3, top: -146, left: 207, description: kanalTerms.controlRoomRoof },
          { floor: 3, top: 8, left: 344, description: kanalTerms.balcony },
          { floor: 3, top: -260, left: -2, description: kanalTerms.upperBridgeRoof }
        ]
      },
      oregon: {
        name: mapNameTerms.oregon,
        imgUrlPrefix: 'oregon',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -478, right: -1051, height: 217, width: 475
        },
        floors: [
          { index: 0, top: -525, left: -815, width: 1782, name: floorTerms.basement },
          { index: 1, top: -525, left: -815, width: 1782, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -525, left: -815, width: 1782, name: floorTerms.secondFloor },
          { index: 3, top: -525, left: -815, width: 1782, name: floorTerms.thirdFloor },
          { index: 4, top: -525, left: -815, width: 1782, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: 118, left: -32 },
          { floor: 1, top: -84, left: 161 },
          { floor: 1, top: 12, left: -11 },
          { floor: 0, top: -37, left: 152 }
        ],
        bombObjectives: [
          // kids
          { floor: 2, top: 161, left: -32, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 27, left: 29, set: 1, letter: objectiveTerms.bombShortB },
          // kitchen dining
          { floor: 1, top: -35, left: -198, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 1, top: -3, left: -14, set: 2, letter: objectiveTerms.bombShortB },
          // meeting kitchen
          { floor: 1, top: -104, left: 122, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 24, left: -14, set: 3, letter: objectiveTerms.bombShortB },
          // OF
          { floor: 0, top: 118, left: 89, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 0, top: -40, left: 163, set: 4, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 2, top: 94, left: 54 },
          { floor: 1, top: -17, left: -195 },
          { floor: 1, top: -56, left: 149 },
          { floor: 0, top: 93, left: 94 }
        ],
        zoomPoints: {
          topLeft: { top: -355, left: -509 },
          bottomRight: { top: 303, left: 463 }
        },
        compassPoints: {
          top: -297, left: -337
        },
        ladders: [
          { floor: 2, top: -255, left: 210, otherFloor: 'up' },
          { floor: 3, top: -264, left: 227, otherFloor: 'down' }
        ],
        cameras: [
          {
            floor: 2, top: 54, left: 242, id: 1,
            los: [
              [{top: 231, left: 253}, {top: 36, left: 254}, {top: 36, left: 227},
                {top: 46, left: 223}, {top: 36, left: 150}],
              [{top: 80, left: 148}, {top: 61, left: 223}]
            ]
          },
          {
            floor: 1, top: 86, left: 168, id: 2,
            los: [
              [{top: 75, left: 331}, {top: 89, left: 239}, {top: 77, left: 239}, {top: 77, left: 43}],
              [{top: 104, left: 241}, {top: 114, left: 331}]
            ]
          },
          {
            floor: 1, top: 203, left: -125, id: 3,
            los: [
              [{top: 75, left: -111}, {top: 213, left: -111}, {top: 213, left: -300}],
              [{top: 72, left: -139}, {top: 4, left: -153}],
              [{top: 72, left: -125}, {top: -50, left: -125}]
            ]
          },
          {
            floor: 1, top: -192, left: 230, id: 4,
            los: [
              [{top: -179, left: 43}, {top: -179, left: 245}, {top: -278, left: 245}],
              [{top: -224, left: 187}, {top: -247, left: 134}]
            ]
          },
          {
            floor: 0, top: 74, left: -53, id: 5,
            los: [
              [{top: 58, left: 16}, {top: 72, left: 16}, {top: 72, left: 24}, {top: 63, left: 65}],
              [{top: 164, left: -68}, {top: 198, left: -63}]
            ]
          },
          {
            outdoor: true, top: 187, left: -502, id: 6,
            los: [[{top: -218, left: -548}, {top: 465, left: -499}]]
          },
          {
            outdoor: true, top: 216, left: 413, id: 7,
            los: [[{top: 444, left: 400}, {top: -29, left: 440}]]
          },
          {
            outdoor: true, top: -420, left: 325, id: 8,
            los: [[{top: -411, left: 82}, {top: -427, left: 327}, {top: -331, left: 547}]]
          }
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
          { letter: spawnTerms.a, top: 318, left: -692, description: oregonTerms.junkyard },
          { letter: spawnTerms.b, top: 487, left: 479, description: oregonTerms.street },
          { letter: spawnTerms.c, top: -353, left: 645, description: oregonTerms.constructionSite }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 468, left: 260, description: oregonTerms.street },
          { outdoor: true, top: 143, left: -594, description: oregonTerms.junkyard },
          { outdoor: true, top: 325, left: -201, description: oregonTerms.busYard },
          { outdoor: true, top: 344, left: 172, description: oregonTerms.mainEntrance },
          { outdoor: true, top: 277, left: 407, description: oregonTerms.parking },
          { outdoor: true, top: -24, left: 407, description: oregonTerms.constructionSite },
          { outdoor: true, top: -370, left: 207, description: oregonTerms.constructionSite },
          { outdoor: true, top: -112, left: -243, description: oregonTerms.farmlands },
          { outdoor: true, top: -226, left: -5, description: oregonTerms.shootingRange },
          // OF
          { floor: 0, top: 187, left: 163, description: oregonTerms.laundryStorage },
          { floor: 0, top: 171, left: 221, description: oregonTerms.laundryStairs, rotate: -90 },
          { floor: 0, top: 192, left: -58, description: oregonTerms.freezerStairs },
          { floor: 0, top: 98, left: -14, description: oregonTerms.freezer },
          { floor: 0, top: 98, left: 131, description: oregonTerms.laundryRoom, site: true, bomb: true, secure: true },
          { floor: 0, top: -9, left: 105, description: oregonTerms.basementCorridor, rotate: -90 },
          { floor: 0, top: 41, left: 149, description: oregonTerms.supplyCloset },
          { floor: 0, top: -29, left: 195, description: oregonTerms.supplyRoom, site: true, hostage: true, bomb: true },
          { floor: 0, top: -87, left: 266, description: oregonTerms.blueBunker },
          { floor: 0, top: -102, left: 358, description: oregonTerms.bunker },
          { floor: 0, top: -149, left: 124, description: oregonTerms.boilerRoom },
          { floor: 0, top: -112, left: 197, description: oregonTerms.electricRoom },
          { floor: 0, top: -241, left: 146, description: oregonTerms.backStairs },
          // 1F
          { floor: 1, top: 190, left: 106, description: oregonTerms.classroom },
          { floor: 1, top: 145, left: 171, description: oregonTerms.lobby },
          { floor: 1, top: 182, left: 237, description: oregonTerms.mainStairs, rotate: -90 },
          { floor: 1, top: 208, left: -216, description: oregonTerms.showerCorridor },
          { floor: 1, top: 161, left: -17, description: oregonTerms.securityCorridor },
          { floor: 1, top: 198, left: -27, description: oregonTerms.whiteStairs },
          { floor: 1, top: 148, left: 292, description: oregonTerms.garage },
          { floor: 1, top: 94, left: -332, description: oregonTerms.smallTower },
          { floor: 1, top: 138, left: -208, description: oregonTerms.showers },
          { floor: 1, top: 111, left: -36, description: oregonTerms.security },
          { floor: 1, top: 15, left: -192, description: oregonTerms.diningHall, site: true, bomb: true, secure: true },
          { floor: 1, top: 27, left: -53, description: oregonTerms.kitchen, site: true, hostage: true, bomb: true },
          { floor: 1, top: -39, left: 148, description: oregonTerms.meetingHall, site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: 59, left: 153, description: oregonTerms.split },
          { floor: 1, top: -107, left: 66, description: oregonTerms.kitchenCorridor, rotate: -90 },
          { floor: 1, top: -186, left: 151, description: oregonTerms.rearStage },
          { floor: 1, top: -250, left: 158, description: oregonTerms.towerStairs },
          { floor: 1, top: -136, left: 183, description: oregonTerms.stage },
          { floor: 1, top: 34, left: -368, description: oregonTerms.smallStairs },
          // 2F
          { floor: 2, top: 251, left: 152, description: oregonTerms.balcony },
          { floor: 2, top: 198, left: 252, description: oregonTerms.mainStairs, rotate: -90 },
          { floor: 2, top: 84, left: -145, description: oregonTerms.diningHallRoof },
          { floor: 2, top: 208, left: -19, description: oregonTerms.whiteStairs },
          { floor: 2, top: 214, left: 115, description: oregonTerms.walkIn },
          { floor: 2, top: 167, left: 183, description: oregonTerms.masterBedroom },
          { floor: 2, top: 171, left: -268, description: oregonTerms.smallTowerRoof },
          { floor: 2, top: -19, left: -253, description: oregonTerms.smallTowerRoof },
          { floor: 2, top: 132, left: -29, description: oregonTerms.dormMainHall, site: true, hostage: true, bomb: true, secure: true },
          { floor: 2, top: 153, left: 94, description: oregonTerms.gameRoom },
          { floor: 2, top: 140, left: 302, description: oregonTerms.armory },
          { floor: 2, top: 108, left: 252, description: oregonTerms.armoryCorridor, rotate: -90 },
          { floor: 2, top: 71, left: -338, description: oregonTerms.smallTower },
          { floor: 2, top: 71, left: -230, description: oregonTerms.smallTowerOffice },
          { floor: 2, top: 75, left: 184, description: oregonTerms.trophyRoom },
          { floor: 2, top: 36, left: -26, description: oregonTerms.kidsDorms, site: true, bomb: true },
          { floor: 2, top: 10, left: 115, description: oregonTerms.attic },
          { floor: 2, top: -82, left: 174, description: oregonTerms.attic },
          { floor: 2, top: -110, left: 80, description: oregonTerms.meetingHallRoof },
          { floor: 2, top: -60, left: 233, description: oregonTerms.meetingHallRoof },
          { floor: 2, top: -189, left: 175, description: oregonTerms.bigTower },
          { floor: 2, top: -251, left: 168, description: oregonTerms.towerStairs },
          { floor: 2, top: 80, left: 104, description: oregonTerms.middle },
          { floor: 2, top: 34, left: -368, description: oregonTerms.smallStairs },
          // 3F
          { floor: 3, top: 171, left: -32, description: oregonTerms.dormsRoof },
          { floor: 3, top: 31, left: -32, description: oregonTerms.dormsRoof },
          { floor: 3, top: 201, left: 177, description: oregonTerms.dormsRoof },
          { floor: 3, top: 84, left: -145, description: oregonTerms.diningHallRoof },
          { floor: 3, top: 73, left: -257, description: oregonTerms.smallTowerRoof },
          { floor: 3, top: 142, left: 321, description: oregonTerms.garageRoof },
          { floor: 3, top: -110, left: 80, description: oregonTerms.meetingHallRoof },
          { floor: 3, top: -60, left: 244, description: oregonTerms.meetingHallRoof, rotate: -90 },
          { floor: 3, top: -60, left: 178, description: oregonTerms.atticRoof, rotate: -90 },
          { floor: 3, top: -198, left: 108, description: oregonTerms.towerRoof },
          { floor: 3, top: -181, left: 225, description: oregonTerms.bigTower },
          // 4F
          { floor: 4, top: 171, left: -32, description: oregonTerms.dormsRoof },
          { floor: 4, top: 31, left: -32, description: oregonTerms.dormsRoof },
          { floor: 4, top: 201, left: 177, description: oregonTerms.dormsRoof },
          { floor: 4, top: 84, left: -145, description: oregonTerms.diningHallRoof },
          { floor: 4, top: 73, left: -257, description: oregonTerms.smallTowerRoof },
          { floor: 4, top: 142, left: 321, description: oregonTerms.garageRoof },
          { floor: 4, top: -110, left: 80, description: oregonTerms.meetingHallRoof },
          { floor: 4, top: -60, left: 233, description: oregonTerms.meetingHallRoof },
          { floor: 4, top: 17, left: 154, description: oregonTerms.meetingHallRoof },
          { floor: 4, top: -198, left: 108, description: oregonTerms.towerRoof },
          { floor: 4, top: -232, left: 238, description: oregonTerms.towerRoof }
        ]
      },
      outback: {
        name: mapNameTerms.outback,
        imgUrlPrefix: 'outback',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -1056, right: -1376, height: 305, width: 958
        },
        floors: [
          { index: 1, top: -1120, left: -2541, width: 3980, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -1120, left: -2541, width: 3980, name: floorTerms.secondFloor },
          { index: 3, top: -1120, left: -2541, width: 3980, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: -43, left: 275 },
          { floor: 2, top: 187, left: 488 },
          { floor: 1, top: -48, left: 331 },
          { floor: 1, top: 267, left: 632 }
        ],
        bombObjectives: [
          { floor: 2, top: -63, left: 275, set: 1, letter: objectiveTerms.bombShortA  },
          { floor: 2, top: 10, left: 388, set: 1, letter: objectiveTerms.bombShortB  },
          { floor: 2, top: 101, left: 566, set: 2, letter: objectiveTerms.bombShortA  },
          { floor: 2, top: 211, left: 493, set: 2, letter: objectiveTerms.bombShortB  },
          { floor: 1, top: -19, left: 221, set: 3, letter: objectiveTerms.bombShortA  },
          { floor: 1, top: -25, left: 309, set: 3, letter: objectiveTerms.bombShortB  },
          { floor: 1, top: 189, left: 609, set: 4, letter: objectiveTerms.bombShortA  },
          { floor: 1, top: 210, left: 465, set: 4, letter: objectiveTerms.bombShortB  }
        ],
        secureObjectives: [
          // dorms office garage kitchen
          { floor: 2, top: 4, left: 144 },
          { floor: 2, top: 192, left: 464 },
          { floor: 1, top: 325, left: 497 },
          { floor: 1, top: 109, left: 468 }
        ],
        zoomPoints: {
          topLeft: { top: -300, left: 0 },
          bottomRight: { top: 500, left: 500}
        },
        compassPoints: { top: 398, left: -110 },
        ladders: [],
        cameras: [
          { outdoor: true, top: 456, left: 815, id: 1,
            los: [
              [{ top: 640, left: 713 }, { top: 456, left: 835 }, { top: -330, left: 745 }]
            ]
          },
          { outdoor: true, top: -211, left: 590, id: 2,
            los: [
              [{ top: -201, left: 150 }, { top: -211, left: 590 }, { top: -270, left: 800 }]
            ]
          },
          { outdoor: true, top: 339, left: 241, id: 3,
            los: [
              [{ top: 250, left: 106 }, { top: 480, left: 358 }],
              [{ top: -9, left: -41 }, { top: 160, left: 104 }],
              [{ top: -150, left: -25 }, { top: 69, left: 85 }]
            ]
          },
          { floor: 2, top: -101, left: 319, id: 4,
            los: [
              [{ top: -40, left: 371 }, { top: -21, left: 385 }],
              [{ top: -11, left: 302 }, { top: 10, left: 300 }]
            ]
          },
          { floor: 2, top: 452, left: 493, id: 5,
            los: [
              [{ top: 310, left: 415 }, { top: 334, left: 441 }],
              [{ top: 243, left: 452 }, { top: 270, left: 460 }],
              [{ top: 235, left: 497 }, { top: 198, left: 498 }, { top: 198, left: 527 }, { top: 235, left: 518 }],
              [{ top: 235, left: 530 }, { top: 170, left: 542 }, { top: 170, left: 562 }, { top: 235, left: 550 }]
            ]
          },
          { floor: 1, otherFloor: 'up', top: 443, left: 497, id: 5,
            los: [
              [{ top: 241, left: 450 }, { top: 453, left: 450 }],
              [{ top: 264, left: 535 }, { top: 453, left: 535 }]
            ]
          },
          { floor: 2, top: -56, left: 568, id: 6,
            los: [
              [{ top: -63, left: 489 }, { top: -63, left: 576 }, { top: 27, left: 576 }],
              [{ top: 24, left: 529 }, { top: 65, left: 509 }],
              [{ top: 67, left: 502 }, { top: 162, left: 460 }],
              [{ top: 38, left: 486 }, { top: 125, left: 430 }]
            ]
          },
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
          { letter: spawnTerms.a, top: -406, left: 634, description: outbackTerms.storageYard },
          { letter: spawnTerms.b, top: 657, left: 464, description: outbackTerms.gasPumps },
          { letter: spawnTerms.c, top: -145, left: -236, description: outbackTerms.camping }
        ],
        roomLabels: [
          // EXT
          { outside: true, top: 549, left: 319, description: outbackTerms.gasPumps },
          { outside: true, top: 444, left: 654, description: outbackTerms.gasPumps },
          { outside: true, top: 394, left: 369, description: outbackTerms.motelParkingLot },
          { outside: true, top: 224, left: 211, description: outbackTerms.motelParkingLot },
          { outside: true, top: -28, left: 744, description: outbackTerms.restaurantParking, rotate: -90 },
          { outside: true, top: 262, left: 744, description: outbackTerms.restaurantParking, rotate: -90 },
          { outside: true, top: -155, left: 468, description: outbackTerms.picnicArea },
          { outside: true, top: -195, left: 184, description: outbackTerms.miniGolf },
          // 1F
          { floor: 1, top: 96, left: 145, description: outbackTerms.motelWalkway },
          { floor: 1, top: 148, left: 258, description: outbackTerms.motelWalkway },
          { floor: 1, top: 26, left: 683, description: outbackTerms.restaurantEntrance, rotate: -90 },
          { floor: 1, top: -47, left: 458, description: outbackTerms.loadingBay },
          { floor: 1, top: 281, left: 438, description: outbackTerms.garageStairs, rotate: -90 },
          { floor: 1, top: -26, left: 83, description: outbackTerms.motelBackStairs, rotate: -90 },
          { floor: 1, top: -73, left: 118, description: outbackTerms.backStairs, rotate: -90 },
          { floor: 1, top: -85, left: 368, description: outbackTerms.pianoStairs },
          { floor: 1, top: -70, left: 563, description: outbackTerms.restaurantStairs },
          { floor: 1, top: -103, left: 486, description: outbackTerms.terraceStairs },
          { floor: 1, top: 400, left: 495, description: outbackTerms.garage, site: true, secure: true },
          { floor: 1, top: 300, left: 495, description: outbackTerms.garage, site: true, secure: true },
          { floor: 1, top: 380, left: 584, description: outbackTerms.waitingRoom, rotate: -90 },
          { floor: 1, top: 310, left: 642, description: outbackTerms.convenienceStore, site: true, hostage: true },
          { floor: 1, top: 281, left: 584, description: outbackTerms.beerFridge, rotate: -90 },
          { floor: 1, top: 218, left: 644, description: outbackTerms.gearStore, site: true, bomb: true },
          { floor: 1, top: 192, left: 506, description: outbackTerms.compressorRoom, site: true, bomb: true },
          { floor: 1, top: 164, left: 375, description: outbackTerms.motelReception },
          { floor: 1, top: 96, left: 260, description: outbackTerms.reptileHallway },
          { floor: 1, top: 20, left: 380, description: outbackTerms.reptileHallway },
          { floor: 1, top: 88, left: 456, description: outbackTerms.kitchen, site: true, secure: true },
          { floor: 1, top: 124, left: 554, description: outbackTerms.restaurant },
          { floor: 1, top: -4, left: 554, description: outbackTerms.restaurant },
          { floor: 1, top: -29, left: 141, description: outbackTerms.backEntrance, rotate: -90 },
          { floor: 1, top: 27, left: 205, description: outbackTerms.bushrangerRoom, site: true, bomb: true },
          { floor: 1, top: 27, left: 310, description: outbackTerms.natureRoom, site: true, hostage: true, bomb: true },
          { floor: 1, top: 60, left: 625, description: outbackTerms.restaurantLobby },
          { floor: 1, top: 11, left: 459, description: outbackTerms.kitchenHallway },
          { floor: 1, top: -81, left: 213, description: outbackTerms.bathroomHall, rotate: -90 },
          { floor: 1, top: -48, left: 237, description: outbackTerms.closet },
          { floor: 1, top: -100, left: 256, description: outbackTerms.bathroom },
          // 2F
          { floor: 2, top: 285, left: 435, description: outbackTerms.garageStairs, rotate: -90 },
          { floor: 2, top: -26, left: 83, description: outbackTerms.motelBackStairs, rotate: -90 },
          { floor: 2, top: -85, left: 121, description: outbackTerms.backStairs },
          { floor: 2, top: -87, left: 371, description: outbackTerms.pianoStairs },
          { floor: 2, top: -70, left: 567, description: outbackTerms.restaurantStairs },
          { floor: 2, top: -103, left: 486, description: outbackTerms.terraceStairs },
          { floor: 2, top: 279, left: 507, description: outbackTerms.garageLounge },
          { floor: 2, top: 307, left: 626, description: outbackTerms.convenienceStoreRoof },
          { floor: 2, top: 140, left: 289, description: outbackTerms.motelBalcony },
          { floor: 2, top: 215, left: 545, description: outbackTerms.office, site: true, hostage: true, bomb: true, secure: true },
          { floor: 2, top: 201, left: 618, description: outbackTerms.officeSupplies, rotate: -90 },
          { floor: 2, top: 110, left: 467, description: outbackTerms.mechanicalBull },
          { floor: 2, top: 127, left: 545, description: outbackTerms.partyRoom, site: true, bomb: true },
          { floor: 2, top: 116, left: 618, description: outbackTerms.electricalRoom, rotate: -90 },
          { floor: 2, top: 62, left: 380, description: outbackTerms.gamesRoom, site: true, bomb: true },
          { floor: 2, top: -23, left: 125, description: outbackTerms.dorms, site: true, secure: true },
          { floor: 2, top: 51, left: 274, description: outbackTerms.showers },
          { floor: 2, top: -7, left: 511, description: outbackTerms.mezzanine },
          { floor: 2, top: -47, left: 229, description: outbackTerms.laundry, site: true, hostage: true, bomb: true },
          { floor: 2, top: 11, left: 250, description: outbackTerms.motelHallway },
          { floor: 2, top: -42, left: 335, description: outbackTerms.pianoRoom },
          { floor: 2, top: -22, left: 445, description: outbackTerms.terrace },
          // 3F
          { floor: 3, top: 307, left: 626, description: outbackTerms.convenienceStoreRoof },
          { floor: 3, top: 0, left: 550, description: outbackTerms.restaurantRoof },
          { floor: 3, top: 280, left: 490, description: outbackTerms.garageRoof },
          { floor: 3, top: 0, left: 220, description: outbackTerms.motelRoof }
        ]
      },
      plane: {
        name: mapNameTerms.plane,
        imgUrlPrefix: 'plane',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -741, right: -1269, height: 217, width: 625
        },
        floors: [
          { index: 1, top: -1173, left: -2174, width: 3500, name: floorTerms.firstFloor },
          { index: 2, top: -1173, left: -2174, width: 3500, name: floorTerms.secondFloor, default: true },
          { index: 3, top: -1173, left: -2174, width: 3500, name: floorTerms.thirdFloor },
          { index: 4, top: -1173, left: -2174, width: 3500, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: 30, left: 358 },
          { floor: 2, top: -12, left: -278 },
          { floor: 1, top: -47, left: 75 },
          { floor: 2, top: 30, left: -15 }
        ],
        bombObjectives: [
          { floor: 1, top: -10, left: 103, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 1, top: -33, left: -203, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 31, left: 293, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 2, top: -28, left: 459, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 30, left: 14, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 2, top: -45, left: -105, set: 2, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 1, top: -10, left: 75 },
          { floor: 2, top: -45, left: -140 },
          { floor: 2, top: 31, left: 325 },
          { floor: 2, top: 30, left: -43 }
        ],
        zoomPoints: {
          topLeft: { top: -218, left: -515 },
          bottomRight: { top: 178, left: 482 }
        },
        compassPoints: {
          top: 97, left: 418
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
          {
            floor: 3, top: -14, left: 248, id: 1,
            los: [
              [{top: -27, left: 142}, {top: -27, left: 265}, {top: 35, left: 265}],
              [{top: 17, left: 148}, {top: 0, left: 216}]
            ]
          },
          {
            floor: 2, top: -60, left: 188, id: 2,
            los: [
              [{top: 51, left: 228}, {top: -1, left: 214}],
              [{top: -27, left: 218}, {top: -5, left: 232}],
              [{top: 51, left: 206}, {top: -32, left: 200}, {top: -32, left: 173}, {top: -73, left: 173}, {top: -73, left: 299}, {top: -49, left: 299}, {top: -39, left: 436}]
            ]
          },
          {
            floor: 2, top: -41, left: -215, id: 3,
            los: [
              [{top: -72, left: -318}, {top: -72, left: -199}, {top: -24, left: -199}, {top: 12, left: -192}],
              [{top: 10, left: -318}, {top: -25, left: -234}]
            ]
          },
          {
            floor: 1, top: 33, left: 21, id: 4,
            los: [
              [{top: -67, left: 6}, {top: 47, left: 6}, {top: 47, left: 116}],
              [{top: -6, left: 119}, {top: -28, left: 170}]
            ]
          },
          {
            floor: 1, top: -49, left: -289, id: 5,
            los: [[{top: 44, left: -304}, {top: -62, left: -304}, {top: -62, left: -100}]]
          }
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
          { letter: spawnTerms.a, top: -428, left: 434, description: planeTerms.spawnOfficialEntrance },
          { letter: spawnTerms.b, top: -489, left: -408, description: planeTerms.spawnReporterEntrance },
          { letter: spawnTerms.c, top: 385, left: 342, description: planeTerms.spawnServiceEntrance }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: -295, left: 389, description: planeTerms.mainEntrance },
          { outdoor: true, top: 162, left: 277, description: planeTerms.frontServiceEntrance },
          { outdoor: true, top: 223, left: -85, description: planeTerms.rightWing },
          { outdoor: true, top: 221, left: -609, description: planeTerms.backServiceEntrance },
          { outdoor: true, top: -295, left: -367, description: planeTerms.reporterEntrance },
          { outdoor: true , top: -295, left: -124, description: planeTerms.leftWing },
          { outdoor: true, top: -189, left: 412, description: planeTerms.frontStairway, rotate: -90 },
          { outdoor: true, top: -184, left: -429, description: planeTerms.backStairway, rotate: -90 },
          // OF
          // 1F
          { floor: 1, top: 1, left: -395, description: planeTerms.backStairs },
          { floor: 1, top: 34, left: -202, description: planeTerms.cargoHold, site: true, bomb: true },
          { floor: 1, top: -16, left: -48, description: planeTerms.serviceCorridor },
          { floor: 1, top: 29, left: -37, description: planeTerms.storage },
          { floor: 1, top: -3, left: 32, description: planeTerms.luggageHold, site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: 25, left: 174, description: planeTerms.firstAidStation },
          { floor: 1, top: -6, left: 253, description: planeTerms.frontStairs },
          { floor: 1, top: -30, left: 222, description: planeTerms.technicalSeating },
          // 2F
          { floor: 2, top: 3, left: 333, description: planeTerms.meetingRoom, site: true, hostage: true, bomb: true, secure: true },
          { floor: 2, top: -5, left: 408, description: planeTerms.officeHallway, rotate: -90 },
          { floor: 2, top: 9, left: 444, description: planeTerms.executiveOffice, site: true, bomb: true },
          { floor: 2, top: -37, left: 310, description: planeTerms.frontHallway },
          { floor: 2, top: -5, left: 240, description: planeTerms.frontStairs },
          { floor: 2, top: 33, left: 244, description: planeTerms.pantry },
          { floor: 2, top: 33, left: 158, description: planeTerms.kitchen },
          { floor: 2, top: -32, left: 114, description: planeTerms.executiveHallway },
          { floor: 2, top: -11, left: -15, description: planeTerms.executiveBedroom, site: true, hostage: true, bomb: true, secure: true },
          { floor: 2, top: 48, left: 74, description: planeTerms.changeRoom },
          { floor: 2, top: -4, left: 84, description: planeTerms.laund },
          { floor: 2, top: 1, left: -114, description: planeTerms.staffSection, site: true, bomb: true, secure: true },
          { floor: 2, top: 6, left: -180, description: planeTerms.securityRoom },
          { floor: 2, top: -39, left: -270, description: planeTerms.pressSectionA, site: true, hostage: true },
          { floor: 2, top: -39, left: -375, description: planeTerms.pressSectionB },
          { floor: 2, top: 2, left: -408, description: planeTerms.backStairs },
          { floor: 2, top: -7, left: -333, description: planeTerms.pressBathroom },
          { floor: 2, top: -5, left: 160, description: planeTerms.cockpitStairs },
          { floor: 2, top: 112, left: -436, description: planeTerms.backCaterer, rotate: -90 },
          { floor: 2, top: -52, left: -154, description: planeTerms.ladderRoom, rotate: -90 },
          // 3F
          { floor: 3, top: -8, left: 197, description: planeTerms.cockpitStairs },
          { floor: 3, top: -2, left: 284, description: planeTerms.cabinStaff, rotate: -90 },
          { floor: 3, top: -2, left: 340, description: planeTerms.radioCabin },
          { floor: 3, top: -2, left: 419, description: planeTerms.cabin },
          { floor: 3, top: 99, left: 408, description: planeTerms.caterer, rotate: -90 },
          { floor: 3, top: 0, left: 8, description: planeTerms.serverRoomA },
          { floor: 3, top: 0, left: -221, description: planeTerms.serverRoomB },
          { floor: 3, top: 0, left: -428, description: planeTerms.serverRoomB }
        ]
      },
      skyscraper: {
        name: mapNameTerms.skyscraper,
        imgUrlPrefix: 'skyscraper',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -771, right: -1219, height: 217, width: 475
        },
        floors: [
          { index: 1, top: -175, left: -630, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -175, left: -630, name: floorTerms.secondFloor },
          { index: 3, top: -175, left: -630, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: 295, left: 200 },
          { floor: 2, top: 390, left: 500 },
          { floor: 1, top: 340, left: 45 },
          { floor: 1, top: 495, left: 455 }
        ],
        bombObjectives: [
          { floor: 2, top: 320, left: 175, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 285, left: 30, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 500, left: 545, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 385, left: 495, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 1, top: 335, left: 40, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 435, left: 50, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 1, top: 450, left: 550, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 490, left: 450, set: 4, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 2, top: 290, left: 35 },
          { floor: 2, top: 525, left: 520 },
          { floor: 1, top: 330, left: 35 },
          { floor: 1, top: 455, left: 555 }
        ],
        zoomPoints: {
          topLeft: { top: -105, left: -75 },
          bottomRight: { top: 600, left: 655 }
        },
        compassPoints: {
          top: 370, left: 875
        },
        cameras: [
          {
            floor: 1, otherFloor: 'up', top: 365, left: 310, id: 1,
            los: [[{top: 315, left: 250}, {top: 365, left: 310}, {top: 245, left: 295}]]
          },
          {
            floor: 2, top: 365, left: 310, id: 1,
            los: [[{top: 230, left: 245}, {top: 365, left: 310}, {top: 520, left: 310}]]
          },
          {
            floor: 1, top: 145, left: 115, id: 2,
            los: [[{top: 385, left: 180}, {top: 265, left: 145}, {top: 265, left: 110}, {top: 145, left: 115}, {top: 145, left: 230}, {top: 265, left: 230}, {top: 265, left: 185}, {top: 380, left: 255}]]
          },
          {
            floor: 1, otherFloor: 'up', top: 280, left: 555, id: 3,
            los: [[{top: 360, left: 495}, {top: 280, left: 555}, {top: 315, left: 475}]]
          },
          {
            floor: 2, top: 280, left: 555, id: 3,
            los: [[{top: 360, left: 560}, {top: 280, left: 555}, {top: 290, left: 315}]]
          },
          {
            floor: 1, top: 335, left: 415, id: 4,
            los: [[{top: 245, left: 415}, {top: 335, left: 415}, {top: 480, left: 495}]]
          },
          {
            outdoor: true, top: -10, left: -30, id: 5,
            los: [[{top: -80, left: 210}, {top: -10, left: -30}, {top: 570, left: -120}]]
          },
          {
            outdoor: true, top: 150, left: 690, id: 6,
            los: [[{top: 620, left: 675}, {top: 150, left: 690}, {top: 135, left: 285}]]
          },
          {
            outdoor: true, top: 670, left: 700, id: 7,
            los: [[{top: 660, left: 295}, {top: 670, left: 700}, {top: 465, left: 755}]]
          }
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
          { letter: spawnTerms.a, top: 120, left: -355, description: skyscraperTerms.helipad },
          { letter: spawnTerms.b, top: -100, left: 665, description: skyscraperTerms.tower },
          { letter: spawnTerms.c, top: 680, left: 380, description: skyscraperTerms.ventilationUnits }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 275, left: -95, description: skyscraperTerms.peacefullTree },
          { outdoor: true, top: -73, left: -79, description: skyscraperTerms.contemplationGarden },
          { outdoor: true, top: 35, left: -5, description: skyscraperTerms.westGarden },
          { outdoor: true, top: 5, left: 260, description: skyscraperTerms.gazeebo },
          { outdoor: true, top: -10, left: 390, description: skyscraperTerms.bridge },
          { outdoor: true, top: 185, left: 530, description: skyscraperTerms.eastGarden },
          { outdoor: true, top: 380, left: 660, description: skyscraperTerms.sandGarden },
          { outdoor: true, top: 360, left: 750, description: skyscraperTerms.sidePath },
          { outdoor: true, top: 483, left: 749, description: skyscraperTerms.sideStairs, rotate: -90 },
          { outdoor: true, top: 658, left: 510, description: skyscraperTerms.ventilationUnits },
          { outdoor: true, top: 70, left: 505, description: skyscraperTerms.tower },
          { outdoor: true, top: 170, left: -218, description: skyscraperTerms.helipad },
          // 1F
          { floor: 1, top: 505, left: 45, description: skyscraperTerms.kitchen, site: true, bomb: true },
          { floor: 1, top: 469, left: 215, description: skyscraperTerms.pantry },
          { floor: 1, top: 485, left: 358, description: skyscraperTerms.delivery },
          { floor: 1, top: 347, left: 464, description: skyscraperTerms.houseLobby },
          { floor: 1, top: 295, left: 268, description: skyscraperTerms.coatCheck },
          { floor: 1, top: 290, left: 355, description: skyscraperTerms.reception },
          { floor: 1, top: 430, left: 545, description: skyscraperTerms.bedroom, site: true, bomb: true, secure: true },
          { floor: 1, top: 390, left: 585, description: skyscraperTerms.bedroomCloset },
          { floor: 1, top: 316, left: 598, description: skyscraperTerms.sideEntrance, rotate: -90 },
          { floor: 1, top: 563, left: 543, description: skyscraperTerms.walkIn },
          { floor: 1, top: 440, left: 453, description: skyscraperTerms.bathroom, site: true, hostage: true, bomb: true },
          { floor: 1, top: 328, left: 525, description: skyscraperTerms.houseStairs },
          { floor: 1, top: 205, left: 170, description: skyscraperTerms.restaurant },
          { floor: 1, top: 200, left: 70, description: skyscraperTerms.toilet },
          { floor: 1, top: 305, left: 55, description: skyscraperTerms.bbq, site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: 375, left: 255, description: skyscraperTerms.bar },
          { floor: 1, top: 355, left: 165, description: skyscraperTerms.sushiBar },
          { floor: 1, top: 265, left: 30, description: skyscraperTerms.backHallway },
          { floor: 1, top: 401, left: 202, description: skyscraperTerms.restaurantStairs, rotate: -90 },
          { floor: 1, top: 166, left: 15, description: skyscraperTerms.backStairs },
          { floor: 1, top: 215, left: 350, description: skyscraperTerms.mainEntrance },
          { floor: 1, top: 262, left: 570, description: skyscraperTerms.houseBalcony },
          { floor: 1, top: 547, left: 75, description: skyscraperTerms.kitchenBalcony },
          // 2F
          { floor: 2, top: 443, left: 173, description: skyscraperTerms.restaurantStairs, rotate: -90 },
          { floor: 2, top: 473, left: 25, description: skyscraperTerms.geisha },
          { floor: 2, top: 511, left: 133, description: skyscraperTerms.makeupRoom },
          { floor: 2, top: 400, left: 146, description: skyscraperTerms.hallway },
          { floor: 2, top: 283, left: 120, description: skyscraperTerms.karaokeHallway, rotate: -90 },
          { floor: 2, top: 275, left: 170, description: skyscraperTerms.teaRoom, site: true, hostage: true, bomb: true },
          { floor: 2, top: 255, left: 30, description: skyscraperTerms.karaoke, site: true, bomb: true, secure: true },
          { floor: 2, top: 170, left: 15, description: skyscraperTerms.backStairs },
          { floor: 2, top: 467, left: 260, description: skyscraperTerms.drums },
          { floor: 2, top: 291, left: 270, description: skyscraperTerms.mezzanine, rotate: -90 },
          { floor: 2, top: 230, left: 310, description: skyscraperTerms.shrine },
          { floor: 2, top: 315, left: 360, description: skyscraperTerms.dragon },
          { floor: 2, top: 430, left: 360, description: skyscraperTerms.terrace },
          { floor: 2, top: 324, left: 459, description: skyscraperTerms.vipClearance },
          { floor: 2, top: 300, left: 509, description: skyscraperTerms.houseStairs },
          { floor: 2, top: 505, left: 450, description: skyscraperTerms.lounge },
          { floor: 2, top: 365, left: 515, description: skyscraperTerms.exhibitionRoom, site: true, hostage: true, bomb: true },
          { floor: 2, top: 400, left: 590, description: skyscraperTerms.display },
          { floor: 2, top: 465, left: 545, description: skyscraperTerms.office, site: true, bomb: true, secure: true },
          { floor: 2, top: 162, left: 219, description: skyscraperTerms.shrineBalcony },
          { floor: 2, top: 579, left: 506, description: skyscraperTerms.officeBalcony },
          { floor: 2, top: 263, left: 582, description: skyscraperTerms.officeBalcony },
          { floor: 2, top: 552, left: 310, description: skyscraperTerms.terraceBalcony },
          { floor: 2, top: 552, left: 75, description: skyscraperTerms.geishaBalcony }
        ]
      },
      themepark: {
        name: mapNameTerms.themepark,
        imgUrlPrefix: 'themepark',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -605, right: -1168, height: 217, width: 467
        },
        floors: [
          { index: 1, top: -600, left: -973, width: 2137, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -600, left: -973, width: 2137, name: floorTerms.secondFloor },
          { index: 3, top: -600, left: -973, width: 2137, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: 123, left: 149 },
          { floor: 2, top: 118, left: 1 },
          { floor: 1, top: -86, left: 102 },
          { floor: 1, top: -97, left: -146 }
        ],
        bombObjectives: [
          { floor: 2, top: -99, left: 166, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 56, left: 111, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 2, top: -8, left: -16, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 111, left: 46, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 1, top: 99, left: 114, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: -70, left: 183, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 1, top: -101, left: -109, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 1, top: -207, left: -135, set: 4, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 2, top: -99, left: 177 },
          { floor: 2, top: -38, left: -24 },
          { floor: 1, top: 84, left: 91 },
          { floor: 1, top: -128, left: -105 }
        ],
        zoomPoints: {
          topLeft: { top: -344, left: -303 },
          bottomRight: { top: 283, left: 533 }
        },
        compassPoints: {
          top: 430, left: 594
        },
        ladders: [
        ],
        cameras: [
          {
            floor: 2, top: -28, left: 381, id: 1,
            los: []
          },
          { floor: 2, top: 48, left: -212, id: 2 },
          { floor: 1, otherFloor: 'up', top: 48, left: -218, id: 2 },
          {
            floor: 1, top: 122, left: 213, id: 3,
            los: []
          },
          {
            floor: 1, top: -175, left: -8, id: 4,
            los: [
              [{top: -207, left: 72}, {top: -189, left: 15}, {top: -189, left: -25}, {top: 24, left: -25}]
            ]
          },
          {
            outdoor: true, top: -384, left: -286, id: 5,
            los: [
              [{top: -159, left: -402}, {top: -399, left: -302}, {top: -572, left: -176}]
            ]
          },
          {
            outdoor: true, top: -246, left: 583, id: 6,
            los: [
              [{top: -330, left: 555}, {top: -49, left: 731}]
            ]
          },
          {
            outdoor: true, top: 296, left: -359, id: 7,
            los: [
              [{top: 159, left: -617}, {top: 460, left: -111}]
            ]
          }
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
          { letter: spawnTerms.a, top: 510, left: -610, description: themeparkTerms.mainEntrance },
          { letter: spawnTerms.b, top: -638, left: -620, description: themeparkTerms.teacups },
          { letter: spawnTerms.c, top: 191, left: 957, description: themeparkTerms.bumperCars }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 372, left: -13, description: themeparkTerms.palms },
          { outdoor: true, top: 514, left: 430, description: themeparkTerms.roboCircuit },
          { outdoor: true, top: 370, left: 300, description: themeparkTerms.castleEntrance },
          { outdoor: true, top: 170, left: 450, description: themeparkTerms.castleEntrance },
          { outdoor: true, top: 246, left: -300, description: themeparkTerms.guestInfo },
          { outdoor: true, top: -41, left: -561, description: themeparkTerms.village },
          { outdoor: true, top: -111, left: -350, description: themeparkTerms.sweetShop },
          { outdoor: true, top: -90, left: 680, description: themeparkTerms.serviceEntrance },
          { outdoor: true, top: -351, left: 68, description: themeparkTerms.backAlley },
          { outdoor: true, top: -303, left: 380, description: themeparkTerms.backAlley },
          // 1F
          { floor: 1, top: -170, left: 488, description: themeparkTerms.castleEntrance },
          { floor: 1, top: 129, left: -174, description: themeparkTerms.arcadeEntrance },
          { floor: 1, top: 108, left: -71, description: themeparkTerms.barrelRoom },
          { floor: 1, top: 140, left: 104, description: themeparkTerms.throneRoom, site: true, bomb: true, secure: true },
          { floor: 1, top: 179, left: 290, description: themeparkTerms.maintenance },
          { floor: 1, top: 50, left: 347, description: themeparkTerms.maintenance, rotate: -90 },
          { floor: 1, top: 59, left: 242, description: themeparkTerms.dragon },
          { floor: 1, top: 111, left: 265, description: themeparkTerms.dragonStairs },
          { floor: 1, top: 23, left: 49, description: themeparkTerms.blueRoom, rotate: -90 },
          { floor: 1, top: 12, left: -106, description: themeparkTerms.jointCorridor },
          { floor: 1, top: -87, left: 4, description: themeparkTerms.toiletCorridor, rotate: -90 },
          { floor: 1, top: -8, left: 124, description: themeparkTerms.armory, site: true, hostage: true, bomb: true },
          { floor: 1, top: -98, left: 62, description: themeparkTerms.oven },
          { floor: 1, top: -50, left: -164, description: themeparkTerms.lab, site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: -67, left: 225, description: themeparkTerms.redCorridor, rotate: -90 },
          { floor: 1, top: -76, left: 290, description: themeparkTerms.gongRoom },
          { floor: 1, top: -157, left: 100, description: themeparkTerms.lockerCorridor  },
          { floor: 1, top: -154, left: 302, description: themeparkTerms.tellers },
          { floor: 1, top: -198, left: -191, description: themeparkTerms.storage, site: true, bomb: true },
          { floor: 1, top: -224, left: -39, description: themeparkTerms.arcadeToilet },
          { floor: 1, top: -226, left: 179, description: themeparkTerms.lockerRoom },
          { floor: 1, top: 24, left: -237, description: themeparkTerms.arcadeStairs },
          { floor: 1, top: -242, left: 64, description: themeparkTerms.yellowStairs },
          // 2F
          { floor: 2, top: -80, left: 445, description: themeparkTerms.cashBalcony, rotate: -90 },
          { floor: 2, top: 97, left: -98, description: themeparkTerms.arcadeBalcony, rotate: -90 },
          { floor: 2, top: -56, left: -131, description: themeparkTerms.upperArcade },
          { floor: 2, top: 197, left: 2, description: themeparkTerms.breakRoom },
          { floor: 2, top: 191, left: 153, description: themeparkTerms.initiationRoom, site: true, hostage: true, bomb: true },
          { floor: 2, top: 65, left: 152, description: themeparkTerms.initiationRoom, site: true, bomb: true },
          { floor: 2, top: 188, left: 303, description: themeparkTerms.controlRoom },
          { floor: 2, top: 123, left: -30, description: themeparkTerms.bunk, site: true, hostage: true, bomb: true },
          { floor: 2, top: 4, left: -57, description: themeparkTerms.dayCare, site: true, bomb: true, secure: true },
          { floor: 2, top: -66, left: 70, description: themeparkTerms.yellowCorridor, rotate: -90 },
          { floor: 2, top: -8, left: 154, description: themeparkTerms.waitingRoom },
          { floor: 2, top: -205, left: -205, description: themeparkTerms.cafeTerrace },
          { floor: 2, top: -28, left: 293, description: themeparkTerms.cashCorridor },
          { floor: 2, top: -82, left: 127, description: themeparkTerms.bar },
          { floor: 2, top: -147, left: 173, description: themeparkTerms.office, site: true, bomb: true, secure: true },
          { floor: 2, top: -118, left: 340, description: themeparkTerms.cashStash },
          { floor: 2, top: -100, left: -18, description: themeparkTerms.cafeCorridor },
          { floor: 2, top: -186, left: -56, description: themeparkTerms.cafe },
          { floor: 2, top: -157, left: 263, description: themeparkTerms.officeShower },
          { floor: 2, top: -223, left: 157, description: themeparkTerms.officeVault },
          { floor: 2, top: 59, left: 384, description: themeparkTerms.dragonTop, rotate: -90 },
          { floor: 2, top: 107, left: 274, description: themeparkTerms.dragonStairs },
          { floor: 2, top: -240, left: 74, description: themeparkTerms.yellowStairs },
          { floor: 2, top: -4, left: -223, description: themeparkTerms.arcadeStairs },
          // 3F
          { floor: 3, top: -56, left: 342, description: themeparkTerms.roof },
          { floor: 3, top: -6, left: -54, description: themeparkTerms.roof },
          { floor: 3, top: 131, left: 343, description: themeparkTerms.controlHatch },
          { floor: 3, top: -75, left: 29, description: themeparkTerms.yellowHatch }
        ]
      },
      tower: {
        name: mapNameTerms.tower,
        imgUrlPrefix: 'tower',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -725, right: -1255, height: 217, width: 475
        },
        floors: [
          { index: 1, top: -715, left: -1275, name: floorTerms.firstFloor, background: true },
          { index: 2, top: -715, left: -715, name: floorTerms.secondFloor, default: true },
          { index: 3, top: -715, left: -1115, name: floorTerms.thirdFloor },
          { index: 4, top: -715, left: -1115, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: 331, left: -257 },
          { floor: 2, top: -186, left: 253 },
          { floor: 1, top: -72, left: -171 },
          { floor: 1, top: -177, left: 376 }
        ],
        bombObjectives: [
          { floor: 2, top: 8, left: -344, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 2, top: -210, left: -344, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 2, top: -130, left: 253, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 18, left: 146, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 1, top: -221, left: 193, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 21, left: 193, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 1, top: -143, left: -132, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 1, top: -72, left: -352, set: 4, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 2, top: -152, left: 208 },
          { floor: 2, top: 502, left: 64 },
          { floor: 1, top: -143, left: 223 },
          { floor: 1, top: -143, left: -210 }
        ],
        zoomPoints: {
          topLeft: { top: -665, left: -694 },
          bottomRight: { top: 662, left: 584 }
        },
        compassPoints: {
          top: 380, left: 932
        },
        ladders: [
          { floor: 3, top: 245, left: -139, otherFloor: 'up' },
          { floor: 4, top: 245, left: -139, otherFloor: 'down' },
          { floor: 3, top: 65, left: 116, otherFloor: 'up' },
          { floor: 4, top: 65, left: 116, otherFloor: 'down' }
        ],
        cameras: [
          {
            floor: 2, top: -349, left: 43, id: 1,
            los: [
              [{top: -363, left: -85}, {top: -363, left: 60}, {top: -190, left: 60}, {top: -190, left: 16}, {top: 110, left: -21}]
            ]
          },
          {
            floor: 2, top: 47, left: 463, id: 2,
            los: [
              [{top: -29, left: 479}, {top: 62, left: 479}, {top: 62, left: 272}, {top: 27, left: 272}, {top: -11, left: 71}],
              [{top: 5, left: 272}, {top: -33, left: 127}]
            ]
          },
          {
            floor: 2, top: 220, left: -67, id: 3,
            los: [
              [{top: 437, left: -50}, {top: 366, left: -54}, {top: 366, left: -84}, {top: 206, left: -84}, {top: 206, left: 330}],
              [{top: 374, left: 11}, {top: 438, left: 43}]
            ]
          },
          {
            floor: 1, top: 335, left: -133, id: 4,
            los: [
              [{top: 2, left: -133}, {top: 121, left: -134}, {top: 121, left: -150}, {top: 346, left: -150}],
              [{top: 302, left: -93}, {top: 261, left: 113}, {top: 202, left: 113}, {top: 178, left: 134}, {top: 121, left: 218}],
              [{top: 217, left: 55}, {top: 121, left: 147}]
            ]
          },
          {
            floor: 1, top: 154, left: -459, id: 5,
            los: [
              [{top: -341, left: -476}, {top: 170, left: -476}, {top: 170, left: -99}]
            ]
          },
          {
            floor: 2, top: -627, left: -13, id: 6,
            los: [
              [{top: -365, left: -576}, {top: -669, left: -13}, {top: -368, left: 543}]
            ]
          },
          {
            floor: 1, top: 592, left: -21, id: 7,
            los: [
              [{top: 375, left: -274}, {top: 441, left: -182}, {top: 530, left: -201}, {top: 536, left: -183}, {top: 591, left: -197}, {top: 597, left: -176}, {top: 607, left: -179}, {top: 607, left: 141}, {top: 596, left: 137}, {top: 590, left: 160}, {top: 534, left: 145}, {top: 528, left: 168}, {top: 440, left: 146}, {top: 374, left: 230}]
            ]
          }
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
          { letter: spawnTerms.a, top: -627, left: -317, description: towerTerms.northRoof, floor: 4 },
          { letter: spawnTerms.b, top: 575, left: 527, description: towerTerms.southRoof, floor: 4 }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: -606, left: -481, description: towerTerms.northRappel },
          { outdoor: true, top: -606, left: 453, description: towerTerms.northRappel },
          { outdoor: true, top: 572, left: 453, description: towerTerms.southRappel },
          { outdoor: true, top: 572, left: -481, description: towerTerms.southRappel },
          // 1F
          { floor: 1, top: -459, left: -384, description: towerTerms.westAtrium, rotate: -30 },
          { floor: 1, top: -458, left: 334, description: towerTerms.eastAtrium, rotate: 30 },
          { floor: 1, top: -473, left: -167, description: towerTerms.centerAtrium },
          { floor: 1, top: -473, left: 114, description: towerTerms.centerAtrium },
          { floor: 1, top: -342, left: -26, description: towerTerms.mainReception },
          { floor: 1, top: -259, left: -244, description: towerTerms.kitchen },
          { floor: 1, top: 59, left: -443, description: towerTerms.westBalcony, rotate: -90 },
          { floor: 1, top: -211, left: -443, description: towerTerms.westBalcony, rotate: -90 },
          { floor: 1, top: -91, left: -173, description: towerTerms.restaurant, site: true, hostage: true, bomb: true, secure: true },
          { floor: 1, top: -102, left: -353, description: towerTerms.birdRoom, site: true, bomb: true },
          { floor: 1, top: 48, left: -185, description: towerTerms.restaurantReception },
          { floor: 1, top: -164, left: 135, description: towerTerms.teaRoom, site: true, bomb: true, secure: true },
          { floor: 1, top: -120, left: 347, description: towerTerms.lounge, site: true, hostage: true },
          { floor: 1, top: -256, left: 475, description: towerTerms.eastBalcony, rotate: -90 },
          { floor: 1, top: -24, left: 475, description: towerTerms.eastBalcony, rotate: -90 },
          { floor: 1, top: 30, left: 248, description: towerTerms.bar, site: true, bomb: true },
          { floor: 1, top: 144, left: -17, description: towerTerms.elevator },
          { floor: 1, top: 156, left: 197, description: towerTerms.barHallway },
          { floor: 1, top: 156, left: -260, description: towerTerms.restaurantHallway },
          { floor: 1, top: 265, left: -23, description: towerTerms.traditionalHall },
          { floor: 1, top: 252, left: -217, description: towerTerms.bonsaiRoom },
          { floor: 1, top: 252, left: 180, description: towerTerms.gameRoom },
          { floor: 1, top: 508, left: -24, description: towerTerms.fountain },
          { floor: 1, top: 442, left: -308, description: towerTerms.westObservatory },
          { floor: 1, top: 442, left: 250, description: towerTerms.eastObservatory },
          { floor: 1, top: -518, left: -23, description: towerTerms.northStairs },
          { floor: 1, top: 40, left: -524, description: towerTerms.westStairs },
          { floor: 1, top: 119, left: 409, description: towerTerms.eastStairs },
          { floor: 1, top: -100, left: -12, description: towerTerms.yellow, rotate: -90 },
          // 2F
          { floor: 2, top: -528, left: -23, description: towerTerms.northStairs },
          { floor: 2, top: -22, left: -542, description: towerTerms.westStairs },
          { floor: 2, top: 119, left: 409, description: towerTerms.eastStairs },
          { floor: 2, top: 165, left: 11, description: towerTerms.elevator },
          { floor: 2, top: 87, left: -9, description: towerTerms.elevator },
          { floor: 2, top: -499, left: -384, description: towerTerms.westAtrium, rotate: -30 },
          { floor: 2, top: -498, left: 334, description: towerTerms.eastAtrium, rotate: 30 },
          { floor: 2, top: -473, left: -167, description: towerTerms.centerAtrium },
          { floor: 2, top: -473, left: 114, description: towerTerms.centerAtrium },
          { floor: 2, top: -469, left: -23, description: towerTerms.infoBooth },
          { floor: 2, top: -396, left: -17, description: towerTerms.galleryMain },
          { floor: 2, top: -121, left: -17, description: towerTerms.galleryMain },
          { floor: 2, top: -150, left: -105, description: towerTerms.galleryAnnex, rotate: -90 },
          { floor: 2, top: 9, left: -282, description: towerTerms.lanternRoom, site: true, bomb: true },
          { floor: 2, top: -254, left: 276, description: towerTerms.mediaCenter, site: true, hostage: true, bomb: true, secure: true },
          { floor: 2, top: 23, left: 378, description: towerTerms.exhibitHallway },
          { floor: 2, top: 10, left: 200, description: towerTerms.exhibitRoom, site: true, bomb: true },
          { floor: 2, top: -278, left: 456, description: towerTerms.eastBalcony },
          { floor: 2, top: 129, left: 490, description: towerTerms.eastBalcony, rotate: -90 },
          { floor: 2, top: -211, left: -282, description: towerTerms.giftShop, site: true, bomb: true },
          { floor: 2, top: -277, left: -479, description: towerTerms.westBalcony },
          { floor: 2, top: 73, left: -460, description: towerTerms.westBalcony },
          { floor: 2, top: 163, left: -210, description: towerTerms.officesHallway },
          { floor: 2, top: 269, left: -283, description: towerTerms.offices, site: true, hostage: true },
          { floor: 2, top: 373, left: -500, description: towerTerms.supplyRoom },
          { floor: 2, top: 475, left: -345, description: towerTerms.meetingRoom },
          { floor: 2, top: 524, left: -21, description: towerTerms.ceoOffice, site: true, secure: true },
          { floor: 2, top: 488, left: 274, description: towerTerms.bathroom },
          { floor: 2, top: 312, left: 453, description: towerTerms.serverRoom },
          { floor: 2, top: 257, left: 26, description: towerTerms.companyReception },
          // 3F
          { floor: 3, top: -210, left: -211, description: towerTerms.northAirDuct },
          { floor: 3, top: -93, left: 324, description: towerTerms.eastAirDuct },
          { floor: 3, top: 92, left: -338, description: towerTerms.westAirDuct },
          { floor: 3, top: 90, left: -14, description: towerTerms.ventilation },
          { floor: 3, top: -219, left: -14, description: towerTerms.ventilation },
          { floor: 3, top: -614, left: -14, description: towerTerms.mezzanine },
          { floor: 3, top: -366, left: -315, description: towerTerms.mezzanine },
          { floor: 3, top: -366, left: 295, description: towerTerms.mezzanine },
          { floor: 3, top: 165, left: 11, description: towerTerms.elevator },
          // 4F
          { floor: 4, top: 356, left: -10, description: towerTerms.roofAccess },
          { floor: 4, top: -214, left: -10, description: towerTerms.roofAccess },
          { floor: 4, top: 165, left: 11, description: towerTerms.elevator },
          { floor: 4, top: -43, left: -200, description: towerTerms.northAirDuct },
          { floor: 4, top: -78, left: 177, description: towerTerms.eastAirDuct },
          { floor: 4, top: 92, left: -231, description: towerTerms.westAirDuct }
        ]
      },
      villa: {
        name: mapNameTerms.villa,
        imgUrlPrefix: 'villa',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -849, right: -1241, height: 217, width: 510
        },
        floors: [
          { index: 0, top: -722, left: -1587, width: 2871, name: floorTerms.basement },
          { index: 1, top: -722, left: -1587, width: 2871, name: floorTerms.firstFloor, default: true },
          { index: 2, top: -722, left: -1587, width: 2871, name: floorTerms.secondFloor },
          { index: 3, top: -722, left: -1587, width: 2871, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 2, top: 62, left: 284 },
          { floor: 2, top: -315, left: 347 },
          { floor: 1, top: 100, left: 295 },
          { floor: 0, top: -197, left: 487 }
        ],
        bombObjectives: [
          { floor: 2, top: 103, left: 191, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 62, left: 324, set: 1, letter: objectiveTerms.bombShortB },

          { floor: 2, top: -204, left: 417, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 2, top: -204, left: 306, set: 2, letter: objectiveTerms.bombShortB },

          { floor: 1, top: -105, left: 220, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 75, left: 145, set: 3, letter: objectiveTerms.bombShortB },

          { floor: 1, top: -333, left: 417, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 1, top: -225, left: 428, set: 4, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 2, top: 170, left: 309 },
          { floor: 2, top: -205, left: 529 },
          { floor: 1, top: -105, left: 260 },
          { floor: 0, top: -161, left: 370 }
        ],
        zoomPoints: {
          topLeft: { left: 0, top: -420 },
          bottomRight: { left: 270, top: 640 }
        },
        compassPoints: {
        },
        ladders: [],
        cameras: [
          {floor: 2, top: -353, left: 381, id: 1,
            los: [[{top: -397, left: 393}, {top: -280, left: 393}, {top: -280, left: 380}, {top: -244, left: 381}, {top: -244, left: 346}, {top: -280, left: 357}, {top: -280, left: 255}, {top: -350, left: 255}, {top: -350, left: 335}, {top: -355, left: 335}, {top: -368, left: 255}, {top: -397, left: 255}, {top: -397, left: 393}]]},
          {floor: 2, top: -65, left: 140, id: 2,
            los: [[{top: -80, left: 125}, {top: -80, left: 248}, {top: -46, left: 248}, {top: -46, left: 176}, {top: -33, left: 198}, {top: 3, left: 198}, {top: -46, left: 155}, {top: -46, left: 137}, {top: 21, left: 161}, {top: 21, left: 132}, {top: 226, left: 132}, {top: 226, left: 110}, {top: 21, left: 110}, {top: 21, left: 103}, {top: -19, left: 103}, {top: -80, left: 125}]]},
          {floor: 1, top: -207, left: 254, id: 3,
            los: [[{top: -207, left: 254}, {top: -193, left: 223}, {top: -218, left: 223}, {top: -212, left: 240}, {top: -228, left: 240}, {top: -228, left: 254}, {top: -253, left: 254}, {top: -278, left: 269}, {top: -268, left: 269}, {top: -268, left: 310}, {top: -258, left: 310}, {top: -290, left: 346}, {top: -290, left: 369}, {top: -284, left: 369}, {top: -240, left: 310}, {top: -232, left: 296}, {top: -228, left: 296}, {top: -228, left: 320}, {top: -220, left: 320}, {top: -229, left: 369}, {top: -182, left: 369}, {top: -192, left: 320}, {top: -188, left: 320}, {top: -188, left: 280}, {top: -207, left: 254}]]},
          {floor: 1, top: 206, left: 157, id: 4,
            los: [[{top: 206, left: 157}, {top: 189, left: 35}, {top: 158, left: 35}, {top: 158, left: 61}, {top: 175, left: 94}],
              [{top: 151, left: 111}, {top: 170, left: 127}],
              [{top: 151, left: 160}, {top: 91, left: 163}, {top: 91, left: 192}, {top: 151, left: 174}],
              [{top: 173, left: 206}, {top: 151, left: 239}, {top: 151, left: 267}, {top: 206, left: 157}]]},
          {floor: 0, top: -128, left: 288, id: 5,
            los: [[{top: -143, left: 327}, {top: -128, left: 288}, {top: -86, left: 252}],
              [{top: -163, left: 246}, {top: -167, left: 241}, {top: -193, left: 241}, {top: -158, left: 267}],
              [{top: -162, left: 274}, {top: -204, left: 258}, {top: -204, left: 273}, {top: -250, left: 265}, {top: -250, left: 274}, {top: -254, left: 274}, {top: -302, left: 269}, {top: -302, left: 290}, {top: -163, left: 290}]]},
          {outdoor: true, top: -82, left: 53, id: 6,
            los: [[{top: -77, left: 95  }, {top: -86, left: 82}, {top: -97, left: 174}], [{top: -404, left: 248}, {top: -720, left: 414}]]},
          {outdoor: true, top: 360, left: 366, id: 7,
            los: [[{top: 480, left: 340}, {top: 390, left: 386}, {top: 40, left: 650}]]},
          {outdoor: true, top: -73, left: 685, id: 8,
            los: [[{top: 290, left: 392}, {top: -73, left: 686}, {top: -130, left: 720}]]}
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
          { letter: spawnTerms.a, top: -371, left: -155, description: villaTerms.spawnMainRoad },
          { letter: spawnTerms.b, top: 428, left: 371, description: villaTerms.spawnRuins },
          { letter: spawnTerms.c, top: -290, left: 845, description: villaTerms.spawnFountain }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: 471, left: 234, description: villaTerms.ruins },
          { outdoor: true, top: 180, left: -74, description: villaTerms.roundabout },
          { outdoor: true, top: 189, left: 460, description: villaTerms.terrace },
          { outdoor: true, top: 30, left: 460, description: villaTerms.terrace },
          { outdoor: true, top: 110, left: 600, description: villaTerms.cryptEntrance },
          { outdoor: true, top: 119, left: 700, description: villaTerms.garden },
          { outdoor: true, top: -20, left: 610, description: villaTerms.driveway },
          { outdoor: true, top: -180, left: 653, description: villaTerms.driveway },
          { outdoor: true, top: -370, left: 672, description: villaTerms.driveway },
          { outdoor: true, top: -80, left: -80, description: villaTerms.mainRoad },
          { outdoor: true, top: -40, left: 530, description: villaTerms.balcony },
          { outdoor: true, top: -110, left: 724, description: villaTerms.pergola },
          { outdoor: true, top: -170, left: 90, description: villaTerms.stableYard },
          { outdoor: true, top: -131, left: 820, description: villaTerms.chapel },
          { outdoor: true, top: -390, left: 740, description: villaTerms.fountain },
          { outdoor: true, top: -281, left: 80, description: villaTerms.stable },
          { outdoor: true, top: -390, left: 457, description: villaTerms.sideRoad },
          // 0F
          { floor: 0, top: 59, left: 320, description: villaTerms.cryptTunnel },
          { floor: 0, top: 120, left: 512, description: villaTerms.crypt },
          { floor: 0, top: -211, left: 570, description: villaTerms.garage },
          { floor: 0, top: -380, left: 278, description: villaTerms.cellarTunnel },
          { floor: 0, top: -40, left: 288, description: villaTerms.tastingRoom },
          { floor: 0, top: -196, left: 268, description: villaTerms.archHallway },
          { floor: 0, top: -190, left: 371, description: villaTerms.artStorage, site: true, secure: true },
          { floor: 0, top: -219, left: 466, description: villaTerms.oldOffice, site: true, hostage: true },
          { floor: 0, top: -291, left: 357, description: villaTerms.wineCellar },
          { floor: 0, top: -45, left: 370, description: villaTerms.redStairs },
          { floor: 0, top: -334, left: 260, description: villaTerms.backStairs },
          { floor: 0, top: -337, left: 492, description: villaTerms.pantryStairs },
          // 1F
          { floor: 1, top: 284, left: 170, description: villaTerms.mainStairs },
          { floor: 1, top: -47, left: 400, description: villaTerms.redStairs },
          { floor: 1, top: -354, left: 278, description: villaTerms.astronomyStairs },
          { floor: 1, top: -314, left: 302, description: villaTerms.backStairs, rotate: -90 },
          { floor: 1, top: -296, left: 510, description: villaTerms.pantryStairs },
          { floor: 1, top: 270, left: 290, description: villaTerms.greenhouse },
          { floor: 1, top: 160, left: 60, description: villaTerms.frontEntrance },
          { floor: 1, top: 197, left: 200, description: villaTerms.mainEntrance },
          { floor: 1, top: 191, left: 347, description: villaTerms.artStudio },
          { floor: 1, top: 127, left: 165, description: villaTerms.library, site: true, bomb: true },
          { floor: 1, top: 44, left: 135, description: villaTerms.library, site: true, bomb: true },
          { floor: 1, top: 66, left: 256, description: villaTerms.mainHallway, rotate: -90 },
          { floor: 1, top: 26, left: 315, description: villaTerms.mainHallway },
          { floor: 1, top: 72, left: 319, description: villaTerms.pianoRoom, site: true, hostage: true },
          { floor: 1, top: 50, left: 204, description: villaTerms.gallery },
          { floor: 1, top: -26, left: 113, description: villaTerms.toilet },
          { floor: 1, top: -34, left: 229, description: villaTerms.livingRoom, site: true, bomb: true, secure: true },
          { floor: 1, top: -139, left: 279, description: villaTerms.livingRoom, site: true, bomb: true, secure: true },
          { floor: 1, top: -31, left: 463, description: villaTerms.bicycleStorage },
          { floor: 1, top: -117, left: 430, description: villaTerms.memorialRoom },
          { floor: 1, top: -180, left: 212, description: villaTerms.mudroom, rotate: -90 },
          { floor: 1, top: -116, left: 353, description: villaTerms.skylightHallway, rotate: -90 },
          { floor: 1, top: -189, left: 519, description: villaTerms.laundry },
          { floor: 1, top: -235, left: 274, description: villaTerms.backHallway },
          { floor: 1, top: -247, left: 480, description: villaTerms.diningRoom, site: true, bomb: true },
          { floor: 1, top: -250, left: 337, description: villaTerms.chinaRoom },
          { floor: 1, top: -312, left: 371, description: villaTerms.kitchen, site: true, bomb: true },
          { floor: 1, top: -338, left: 503, description: villaTerms.pantry },
          // 2F
          { floor: 2, top: -95, left: 530, description: villaTerms.bedroomRoof },
          { floor: 2, top: 286, left: 176, description: villaTerms.mainStairs },
          { floor: 2, top: -16, left: 403, description: villaTerms.redStairs },
          { floor: 2, top: -356, left: 303, description: villaTerms.astronomyStairs },
          { floor: 2, top: 282, left: 310, description: villaTerms.veranda },
          { floor: 2, top: 119, left: 129, description: villaTerms.classicalHall, rotate: -90 },
          { floor: 2, top: -4, left: 164, description: villaTerms.ninetyCorner },
          { floor: 2, top: -51, left: 190, description: villaTerms.classicalHall },
          { floor: 2, top: 184, left: 350, description: villaTerms.study, site: true, secure: true },
          { floor: 2, top: 70, left: 165, description: villaTerms.gamesRoom, site: true, bomb: true },
          { floor: 2, top: 160, left: 191, description: villaTerms.bar },
          { floor: 2, top: 108, left: 320, description: villaTerms.aviatorRoom, site: true, hostage: true, bomb: true },
          { floor: 2, top: 6, left: 255, description: villaTerms.huntingVault },
          { floor: 2, top: -38, left: 346, description: villaTerms.landing },
          { floor: 2, top: -109, left: 286, description: villaTerms.trophyEntrance },
          { floor: 2, top: -159, left: 447, description: villaTerms.statuaryRoom, site: true, bomb: true },
          { floor: 2, top: -227, left: 291, description: villaTerms.trophyRoom, site: true, bomb: true },
          { floor: 2, top: -228, left: 539, description: villaTerms.masterBedroom, site: true, secure: true },
          { floor: 2, top: -317, left: 296, description: villaTerms.astronomyRoom, site: true, hostage: true },
          { floor: 2, top: -304, left: 440, description: villaTerms.masterBathroom },
          { floor: 2, top: -303, left: 533, description: villaTerms.walkInCloset },
          // 3F
          { floor: 3, top: 86, left: 263, description: villaTerms.roof },
          { floor: 3, top: -248, left: 481, description: villaTerms.skylightRoof }
        ]
      },
      yacht: {
        name: mapNameTerms.yacht,
        imgUrlPrefix: 'yacht',
        objectives: [
          'bomb', 'hostage', 'secure'
        ],
        legend: {
          bottom: -754, right: -1261, height: 217, width: 546
        },
        floors: [
          { index: 1, top: -913, left: -1741, width: 3049, name: floorTerms.firstFloor },
          { index: 2, top: -913, left: -1741, width: 3049, name: floorTerms.secondFloor, default: true },
          { index: 3, top: -913, left: -1741, width: 3049, name: floorTerms.thirdFloor },
          { index: 4, top: -913, left: -1741, width: 3049, name: floorTerms.fourthFloor },
          { index: 5, top: -913, left: -1741, width: 3049, name: floorTerms.roof }
        ],
        hostageObjectives: [
          { floor: 4, top: 13, left: 16 },
          { floor: 3, top: -55, left: 129 },
          { floor: 2, top: 93, left: 81 },
          { floor: 1, top: -24, left: -415 }
        ],
        bombObjectives: [
          { floor: 4, top: 14, left: 141, set: 1, letter: objectiveTerms.bombShortA },
          { floor: 4, top: -32, left: -6, set: 1, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 11, left: -297, set: 2, letter: objectiveTerms.bombShortA },
          { floor: 2, top: 9, left: -101, set: 2, letter: objectiveTerms.bombShortB },
          { floor: 2, top: 93, left: 45, set: 3, letter: objectiveTerms.bombShortA },
          { floor: 2, top: -86, left: 52, set: 3, letter: objectiveTerms.bombShortB },
          { floor: 1, top: -95, left: -275, set: 4, letter: objectiveTerms.bombShortA },
          { floor: 1, top: 116, left: -259, set: 4, letter: objectiveTerms.bombShortB }
        ],
        secureObjectives: [
          { floor: 3, top: -6, left: 31 },
          { floor: 2, top: 33, left: -150 },
          { floor: 2, top: 61, left: 343 },
          { floor: 4, top: 14, left: 180 }
        ],
        zoomPoints: {
          topLeft: { top: -139, left: -610 },
          bottomRight: { top: 160, left: 590 }
        },
        compassPoints: {
          top: 331, left: 220
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
          {
            floor: 4, top: 87, left: -134, id: 1,
            los: [
              [{top: -41, left: -112}, {top: -78, left: -92}],
              [{top: 102, left: -31}, {top: 102, left: 103}],
              [{top: 102, left: -42}, {top: 102, left: -145}],
              [{top: 22, left: -61}, {top: 47, left: -86}]
            ]
          },
          {
            floor: 3, top: 21, left: 264, id: 2,
            los: [[{top: 35, left: 152}, {top: 35, left: 280}, {top: -78, left: 280}]]
          },
          {
            floor: 3, top: 86, left: -227, id: 3,
            los: [
              [{top: -5, left: -117}, {top: -32, left: -80}],
              [{top: 37, left: -32}, {top: 64, left: -139}, {top: 102, left: -139}, {top: 102, left: -243}, {top: -77, left: -243}]
            ]
          },
          {
            floor: 2, top: 13, left: 262, id: 4,
            los: [
              [{top: 26, left: -36}, {top: 26, left: 280}, {top: -36, left: 280}],
              [{top: -45, left: 280}, {top: -48, left: 280}],
              [{top: -79, left: 280}, {top: -76, left: 280}],
              [{top: -68, left: 280}, {top: -65, left: 280}],
              [{top: -58, left: 280}, {top: -55, left: 280}],
              [{top: -80, left: 234}, {top: -40, left: 248}]
            ]
          },
          {
            floor: 2, top: 124, left: -266, id: 5,
            los: [
              [{top: -116, left: -258}, {top: 49, left: -271}, {top: 49, left: -281}, {top: 138, left: -281}, {top: 138, left: -15}],
              [{top: 77, left: -194}, {top: 99, left: -233}]
            ]
          },
          {
            floor: 1, top: -43, left: 63, id: 6,
            los: [
              [{top: -21, left: -61}, {top: -21, left: 80}, {top: -88, left: 80}],
              [{top: -88, left: -138}, {top: -56, left: -32}],
              [{top: -73, left: -230}, {top: -60, left: -72}]
            ]
          },
          {
            floor: 3, top: 10, left: 631, id: 7,
            los: [[{top: -105, left: 592}, {top: 12, left: 675}, {top: 127, left: 596}]]
          },
          { floor: 2, otherFloor: 'up', top: 10, left: 631, id: 7 },
          { floor: 4, otherFloor: 'down', top: 10, left: 631, id: 7 },
          { floor: 5, otherFloor: 'down', top: 10, left: 631, id: 7 },
          {
            floor: 3, top: 114, left: -477, id: 8,
            los: [[{top: 119, left: -661}, {top: 152, left: -553}, {top: 152, left: 358}]]
          },
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
          { letter: spawnTerms.a, top: -532, left: -187, description: yachtTerms.spawnSubmarine },
          { letter: spawnTerms.b, top: 413, left: -737, description: yachtTerms.spawnZodiak },
          { letter: spawnTerms.c, top: 354, left: 596, description: yachtTerms.spawnSnowMobile }
        ],
        roomLabels: [
          // EXT
          { outdoor: true, top: -262, left: -43, description: yachtTerms.submarine },
          { outdoor: true, top: -206, left: -306, description: yachtTerms.westGlacier },
          { outdoor: true, top: 232, left: 617, description: yachtTerms.eastHullBreach },
          { outdoor: true, top: 388, left: 100, description: yachtTerms.eastGlacier },
          { outdoor: true, top: 388, left: -304, description: yachtTerms.frozenRiver },
          { outdoor: true, top: 245, left: -569, description: yachtTerms.zodiac },
          { outdoor: true, top: -145, left: 261, description: yachtTerms.westHullBreach },
          // 1F
          { floor: 1, top: -15, left: -361, description: yachtTerms.engine, site: true, hostage: true },
          { floor: 1, top: 18, left: -516, description: yachtTerms.backEntrance },
          { floor: 1, top: 18, left: -634, description: yachtTerms.rearDeck },
          { floor: 1, top: -33, left: -275, description: yachtTerms.serverRoom, site: true, bomb: true },
          { floor: 1, top: 74, left: -274, description: yachtTerms.engineStorage, site: true, bomb: true },
          { floor: 1, top: 76, left: -205, description: yachtTerms.backStairs },
          { floor: 1, top: -91, left: -192, description: yachtTerms.emergencyExit },
          { floor: 1, top: -26, left: -7, description: yachtTerms.engineHallway },
          { floor: 1, top: -39, left: 264, description: yachtTerms.frontStairs, rotate: -90 },
          // 2F
          { floor: 2, top: 103, left: 127, description: yachtTerms.cafeteria, site: true, hostage: true, bomb: true },
          { floor: 2, top: -18, left: -302, description: yachtTerms.engineControl, site: true, bomb: true },
          { floor: 2, top: 25, left: -493, description: yachtTerms.rearDeck },
          { floor: 2, top: -12, left: -157, description: yachtTerms.kitchen, site: true, bomb: true, secure: true },
          { floor: 2, top: -26, left: 47, description: yachtTerms.staffDormitory, site: true, bomb: true },
          { floor: 2, top: 137, left: -143, description: yachtTerms.kitchenHallway },
          { floor: 2, top: 70, left: -205, description: yachtTerms.backStairs },
          { floor: 2, top: -53, left: -91, description: yachtTerms.kitchenStairs },
          { floor: 2, top: -19, left: -44, description: yachtTerms.kitchenPantry },
          { floor: 2, top: -77, left: 141, description: yachtTerms.infirmary },
          { floor: 2, top: 15, left: 352, description: yachtTerms.borealSubRoom, site: true, secure: true },
          { floor: 2, top: 24, left: 60, description: yachtTerms.cafeteriaHallway },
          { floor: 2, top: -43, left: 240, description: yachtTerms.frontStairs },
          { floor: 2, top: -62, left: -256, description: yachtTerms.engineUtility },
          { floor: 2, top: -15, left: 553, description: yachtTerms.anchorName },
          { floor: 2, top: 85, left: 463, description: yachtTerms.aklarkSubEntrance },
          // 3F
          { floor: 3, top: 14, left: -359, description: yachtTerms.spaDeck },
          { floor: 3, top: 138, left: -89, description: yachtTerms.eastDeck },
          { floor: 3, top: -89, left: -89, description: yachtTerms.westDeck },
          { floor: 3, top: 138, left: 226, description: yachtTerms.eastDeck },
          { floor: 3, top: -89, left: 226, description: yachtTerms.westDeck },
          { floor: 3, top: 17, left: 407, description: yachtTerms.frontDeck, rotate: -90 },
          { floor: 3, top: 17, left: 723, description: yachtTerms.frontDeck },
          { floor: 3, top: 20, left: 801, description: yachtTerms.kingOfTheWorld },
          { floor: 3, top: 17, left: 332, description: yachtTerms.masterBedroom },
          { floor: 3, top: 4, left: 77, description: yachtTerms.casino, site: true, secure: true },
          { floor: 3, top: -9, left: 170, description: yachtTerms.pokerRoom, site: true, hostage: true },
          { floor: 3, top: 85, left: 222, description: yachtTerms.bathroom },
          { floor: 3, top: 36, left: 200, description: yachtTerms.bedroomHallway },
          { floor: 3, top: 101, left: 65, description: yachtTerms.casinoHallway },
          { floor: 3, top: 1, left: -26, description: yachtTerms.globeHallway, rotate: -90 },
          { floor: 3, top: 49, left: -179, description: yachtTerms.lounge },
          { floor: 3, top: 22, left: -87, description: yachtTerms.topDeckStairs  },
          { floor: 3, top: -40, left: 274, description: yachtTerms.frontStairs, rotate: -90 },
          { floor: 3, top: -55, left: -28, description: yachtTerms.kitchenStairs },
          { floor: 3, top: 102, left: -183, description: yachtTerms.backStairs },
          // 4F
          { floor: 4, top: 59, left: 17, description: yachtTerms.mapsRoom, site: true, hostage: true, bomb: true },
          { floor: 4, top: 62, left: 186, description: yachtTerms.cockpit, site: true, bomb: true, secure: true },
          { floor: 4, top: 100, left: 21, description: yachtTerms.cockpitHallway },
          { floor: 4, top: -32, left: 64, description: yachtTerms.captainsOffice },
          { floor: 4, top: 14, left: 349, description: yachtTerms.cockpitBalcony, rotate: -90 },
          { floor: 4, top: 27, left: -73, description: yachtTerms.topDeckStairs, rotate: -90 },
          { floor: 4, top: 9, left: -57, description: yachtTerms.helipadEntrance, rotate: -90 },
          { floor: 4, top: 17, left: -285, description: yachtTerms.helipad },
          { floor: 4, top: -100, left: -18, description: yachtTerms.westBalcony },
          { floor: 4, top: 143, left: -18, description: yachtTerms.eastBalcony },
          // 5F
          { floor: 5, top: 17, left: 108, description: yachtTerms.roof }
        ]
      }
    };
  };

  return  {
    getMapData: getMapData
  };
})(R6MLangTerms);
