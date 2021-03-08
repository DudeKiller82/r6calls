'use strict';

var R6MLangTermsFrench = (function(R6MLangTerms, undefined) {
  var name = 'fr',
    terms = {
      general: {
        pageTitleSelectMap: 'R6Maps.com - Choisir une carte',
        cameraViewCaption: 'Caméra {floorName}',
        shortcutTip: 'Raccourci: 1 {shortcut}',
        menu: 'Menu',
        about: 'Information',
        languageHeader: 'Langue',
        labelLosOpacity: 'Opacité des lignes de mire des caméras',
        labelPercent: '{int} %',// according to: (0.12).toLocaleString('fr', { style: 'percent' });
        labelLosDefault: '( Défaut )',
        labelLos105: '( Hein? )',
        labelLos110: '( Folie! )',
        labelRoomLabelStyle: 'Style des étiquettes',
        labelNumberFloorsToDisplay: 'Nombre d\'étages à afficher',
        lockPanning: 'Verrou panoramique',
        lockZooming: 'Verrou zoom',
        fullScreen: 'Plein écran',
        enableScreenshots: 'Autoriser les captures d\'écran',
        contributions: 'Contributions',
        supportSiteNote: 'Montrez votre soutien grâce à un petit don.',
        donateImg: 'https://www.paypalobjects.com/fr_FR/i/btn/btn_donate_LG.gif',
        latestUpdate: 'Mise à jour avril 2020',
        linkLatestUpdate: 'https://github.com/purechaose/r6maps/releases'
      },
      sessions: {
        button: 'FR-Sessions (BETA)'
      },
      roomLabelStyles: {
        Dark: 'Foncé',
        Light: 'Clair ( Défaut )',
        DarkAndLarge: 'Grand et Sombre',
        LightAndLarge: 'Grand et Clair',
        DarkAndSmall: 'Petit et Sombre',
        LightAndSmall: 'Petit et clair',
        DisplayNone: 'Ne pas afficher',
        Learning: 'Apprentissage'
      },
      floorDisplayOptions: {
        one: '1 - Plein',
        two: '2 - Divisé',
        four: '4 - Grille'
      },
      selectMaps: {
        selectAMap: 'Sélectionnez une carte',
        homeLink: 'Sélectionnez une carte'
      },
      compass: {
        letterN: 'N',
        letterE: 'E',
        letterS: 'S',
        letterW: 'O'
      },
      floorNames: {
        basement: { full: 'Sous-sol', short: 'S' },
        firstFloor: { full: 'Rez-de-chaussée', short: 'R' },
        secondFloor: { full: '2ème', short: '2' },
        thirdFloor: { full: '3ème', short: '3' },
        fourthFloor: { full: '4ème', short: '4' },
        roof: { full: 'Toit', short: 'T' }
      },
      objectives: {
        bombShortA: 'A',
        bombShortB: 'B',
        bomb: 'Bombe',
        hostageShort: 'O',
        hostage: 'Otage',
        secureShort: 'S',
        secure: 'Sécurisation',
        showAll: 'Tout Afficher'
      },
      legend: {
        breakableWalls: 'Murs destructibles',
        breakableFloorTraps: 'Trappes de plancher destructibles',
        ceilingHatches: 'Trappes de plafond',
        lineOfSightWalls: 'Ligne de vue au dessus du mur',
        lineOfSightFloors: 'Sol destructible',
        droneTunnels: 'Tunnels drone',
        objectives: 'Objectifs',
        insertionPoints: 'Points d\'insertion',
        securityCameras: 'Caméras de sécurité',
        skylights: 'Verrières',
        onFloorAboveOrBelow: 'A l\'étage au-dessus ou au-dessous',
        cameraLineOfSight: 'Ligne de mire de la caméra',
        ladders: 'Échelles'
      },
      mapNames: {
        bank: 'Banque',
        bartlett: 'U. Bartlett',
        border: 'Frontière',
        chalet: 'Chalet',
        club: 'Club House',
        coastline: 'Littoral',
        consulate: 'Consulat',
        favela: 'Favelas',
        hereford: 'Hereford',
        house: 'Maison',
        kanal: 'Canal',
        kafe: 'Café Dostoyevsky',
        oregon: 'Oregon',
        plane: 'Avion Présidentiel',
        skyscraper: 'Gratte-ciel',
        themepark: 'Parc D\'Attractions',
        tower: 'Tour',
        yacht: 'Yacht'
      },
      mapRooms: {
        bank: {
          spawnBoulevard: 'Devant le parking',
          spawnBackAlley: 'Accès à la ruelle',
          parkingLot: 'Devant le parking',
          boulevard: 'Boulevard',
          jewelryFront: 'Devant la bijouterie',
          plaza: 'Place',
          mainEntrance: 'Entrée principale',
          garageRamp: 'Rampe<br/>du garage',
          exteriorParking: 'Parking Extérieur',
          garageRoof: 'Toit du<br/>garage',
          alleyAccess: 'Accès à la ruelle',
          backAlleyRooftop: 'Toit de<br/>la ruelle',
          backAlley: 'Ruelle',
          highRoof: 'Toit supérieur',
          lowRoof: 'Toit inférieur',
          vault: 'Salle des<br/>coffres',
          goldVault: 'Salle<br/>des<br/>lingots',
          serverRoomStairs: 'Escalier salle des serveurs',
          serverRoom: 'Salle des serveurs',
          CCTVRoom: 'Salle de<br/>survei-<br/>llance',
          loadingDock: 'Quais de<br/>chargement',
          secureHallway: 'Couloir<br/>sécuriseé',
          sewer: 'Tunnel',
          lockers: 'Vestiaires',
          vaultLobby: 'Hall salle<br/>des coffres',
          vaultEntrance: 'Extrée<br/>salle des<br/>coffres',
          mainStairway: 'Escalier<br/>principal',
          bankGarage: 'Garage de la banque',
          elevators: 'Ascen-<br/>seurs',
          tellersOffice: 'Guichets',
          archives: 'Archives',
          tellers: 'Guichets',
          loanOffice: 'Bureau<br/>des prêts',
          printerRoom: 'Imprimerie',
          openArea: 'Open space',
          officeHallway: 'Couloir du bureau',
          skylightStairwell: 'Cage d\'escalier<br/>éclairée',
          lobby: 'Entrée',
          staffRoom: 'Salle du<br/>personnel',
          electricalRoom: 'Local<br/>électrique',
          adminOffice: 'Administration',
          ATMs: 'Distributeurs de billets',
          executiveHallway: 'Couloir<br/>exécutif',
          frontDesk: 'Accueil<br/>',
          executiveLounge: 'Salon<br/>exécutif',
          CEOOffice: 'Bureau<br/>du PDG',
          janitorCloset: 'Local du concierge',
          hallway: 'Couloir',
          terrace: 'Terrasse',
          stockTradingRoom: 'Salle des<br/>transactions',
          conferenceRoom: 'Salle de<br/>conférences',
          balcony: '',
          squareStairs: '',
          lobbyStairs: '',
          redTruck: ''
        },
        bartlett: {
          archwayHall: 'Passage vouté',
          backAlley: 'Ruelle',
          bathroom: 'WC',
          campusField: 'Campus',
          classroom: 'Salle de classe',
          coatRoom: 'Vest-<br/>iaire',
          compassHallway: 'Couloir de la boussole',
          courtyard: 'Cour',
          centralHallway: 'Couloir<br/>central',
          diningRoom: 'Salle à manger',
          eastBalcony: 'Balcon est<br/>( pas montré )',
          eastCorridor: 'Couloir<br/>est',
          eastStairs: 'Escalier<br/>est',
          festival: 'Festival',
          frontEntrance: 'Entrée de devant',
          frontOffice: 'Accueil',
          frontPatio: 'Patio de devant',
          gardenPass: 'Allée de<br/>jardin',
          kitchen: 'Cuisine',
          lobby: 'Entrée',
          lounge: 'Lounge',
          lowerLibrary: 'Bibliothèque<br/>niv. inférieur',
          mainGate: 'Porte<br/>principale',
          mainOffice: 'Bureau principal',
          modelHall: 'Salle de la<br/>maquette',
          pantry: 'Garde-manger',
          parking: 'Parking',
          pianoRoom: 'Salle de piano',
          readingRoom: 'Salle de lecture',
          roof: 'Toit',
          rowingMuseum: 'Musée<br/>d\'aviron',
          serviceRoom: 'Salle de<br/>service',
          terrace: 'Terrasse',
          trophyRoom: 'Salle des<br/>trophées',
          upperLibrary: 'Bibliothèque<br/>niv. supérieur',
          vistaHallway: 'Couloir<br/>dégagé',
          westBalcony: 'Balcon ouest<br/>( pas montré )',
          westCorridor: 'Couloir<br/>ouest'
        },
        border: {
          tellers: 'Guichets',
          ventilationRoom: 'Salle<br/>de<br/>ventilation',
          exitHallway: 'Couloir de<br/>la sortie',
          supplyCorridor: 'Couloir de<br/>la réserve',
          detention: 'Salle de détention',
          customsInspection: 'Inspections de la douane',
          customsDesk: 'Bureau de<br/>la douane',
          centralStairs: 'Escalier central',
          serverRoom: 'Salle des serveurs',
          supplyRoom: 'Réserve',
          workshop: 'Atelier',
          mainLobby: 'Entrée',
          bathroom: 'WC',
          waitingRoom: 'Salle<br/>d\'attente',
          eastStairs: 'Escalier<br/>est',
          passportCheck: 'Contrôle des<br/>passeports',
          archives: 'Archives',
          offices: 'Bureaux',
          officesHallway: 'Couloir du bureaux',
          fountain: 'Fontaine',
          mainHallway: 'Couloir<br/>principal',
          armoryDesk: 'Accueil de<br/>l\'armurerie',
          armoryLockers: 'Casiers de<br/>l\'armurerie',
          securityRoom: 'Salle de<br/>sécurité',
          breakRoom: 'Salle de repos',
          spawnEastVehicleEntrance: 'Entrée des véhicules est',
          spawnValley: 'Vallée',
          spawnWestVehicleExit: 'Sortie des véhicules ouest',
          westTower: 'Tour<br/>ouest',
          pedestrianExit: 'Sortie des piétons',
          valley: 'Vallée',
          parkingLotEntrance: 'Entrée du<br/>parking',
          parkingLot: 'Parking',
          westRoad: 'Route ouest ',
          vehicleCustoms: 'Douane des véhicules',
          crashScene: 'Lieu de l\'accident',
          eastRoad: 'Route est',
          pedestrianEntrance: 'Entrée des<br/>piétons',
          pedestrianCustoms: 'Douane des<br/>piétons',
          watchTower: 'Tour de<br/>guet',
          eastAlley: 'Allée est',
          parkingLotAlley: 'Allée<br/>du<br/>parking',
          northBalcony: 'Balcon nord',
          eastBalcony: 'Balcon<br/>est',
          westBalcony: 'Balcon<br/>ouest',
          southBalcony: 'Balcon sud',
          roof: 'Toit'
        },
        chalet: {
          spawnFrontYard: 'Jardin devant la maison	',
          spawnCampfire: 'Feu de camp',
          spawnCliffside: 'Falaise',
          spawnLakeside: 'Bord de lac',
          libraryStairs: 'Escalier de<br/>la bibliothèque',
          snowmobileGarageCorridor: 'Couloir garage à motoneiges',
          snowmobileGarage: 'Garage à<br/>motoneiges',
          greatRoomStairs: 'Escalier<br/>de la<br/>grande<br/>salle',
          storageRoom: 'Salle de<br/>stockage',
          wineCellar: 'Cave<br/>à vin',
          wineStock: 'Réserve<br/>de vin',
          basementHallway: 'Couloir<br/>du sous-sol',
          backyardStairs: 'Escalier<br/>du jardin',
          mainStairs: 'Escalier<br/>principal',
          mainGarage: 'Garage principal',
          garageEntrance: 'Entrée du<br/>garage<br/>principal',
          westEntrance: 'Entrée<br/>ouest',
          gamingRoomHallway: 'Couloir de la<br/>salle de jeux',
          gamingRoom: 'Salle<br/>de jeux',
          bar: 'Bar',
          greatRoom: 'Grande salle',
          diningRoom: 'Salle à manger',
          mainEntrance: 'Entrée<br/>principale',
          trophyRoom: 'Salle des trophées',
          kitchenHallway: 'Couloir<br/>de la cuisine',
          kitchen: 'Cuisine',
          libraryHallway: 'Couloir de la bibliothèque',
          libraryEntrance: 'Entrée<br/>de la<br/>bibliothèque',
          library: 'Biblio-<br/>thèque',
          bedroomTerrace: 'Terrasse de<br/>la chambre',
          fireplaceHallway: 'Couloir avec<br/>cheminée',
          bedroomHallway: 'Couloir de la<br/>chambre',
          masterBathroom: 'Salle de bain<br/>principale',
          masterBedroom: 'Chambre principale',
          office: 'Bureau',
          woodenTrail: 'Sentier dans<br/>le bois',
          campfireWood: 'Bois pout le feu de camp',
          backyard: 'Jardin de derrière',
          gazeebo: 'Belvédère',
          cliffsideStairs: 'Escalier de la<br/>falaise',
          cliffsideWoods: 'Ebois de la falaise',
          backyardPatio: 'Patio de derrière',
          officeBalcony: 'Balcon<br/>du bureau',
          helipadTrail: 'Bord<br/>de lac',
          helipad: 'Hélistation',
          frontYardPatio: 'Patio<br/>de devant',
          frontYard: 'Jardin devant<br/>la maison',
          bathroomBalcony: 'Balcon de la<br/>salle de bain',
          libraryBalcony: 'Balcon de la<br/>bibliothèque',
          bedroomBalcony: 'Balcon de la<br/>chambre',
          snowmobiles: 'Montoneiges'
        },
        coastline: {
          aquarium: 'Aquarium',
          backAlley: 'Ruelle',
          balcony: 'Balcon<br/>( pas montré )',
          bathroom: 'Salle d\'eau',
          billiardsRoom: 'Salle de billard',
          blueBar: 'Bar bleu',
          cantina: 'Cantine',
          courtyard: 'Cour',
          djBooth: 'Cabin DJ<br/>( pas montré )',
          garageRoof: 'Toit du garage',
          hallOfFame: 'Hall of Fame',
          hallway: 'Couloir',
          hookahDeck: 'Terrasse narguilé<br/>( pas montré )',
          hookahLounge: 'Salon narguilé',
          kitchen: 'Cuisine',
          mainEntrance: 'Entrée<br/>principale',
          mainLobby: 'Hall<br/>principal',
          northStairs: 'Escalier<br/>nord',
          office: 'Bureau',
          penthouse: 'Penthouse',
          pool: 'Piscine',
          poolEntrance: 'Entrée de la piscine',
          poolSide: 'Bord de la piscine',
          rooftop: 'Toit',
          ruins: 'Ruines',
          securityRoom: 'Salle de<br/>sécurité',
          serviceEntrance: 'Entrée de<br/>service',
          southHallway: 'Couloir sud',
          southPromenade: 'Promenade sud',
          southStairs: 'Escalier<br/>sud',
          sunriseBar: 'Bar "Sunrise"',
          sunRoom: 'Solarium',
          theater: 'Home cinema',
          terrace: 'Terrasse',
          toilets: 'Toilettes',
          vipLounge: 'Salon VIP',
          walkway: 'Chemin'
        },
        favela: {
          packagingRoom: 'Salle de<br/>conditionement',
          footballApartment: 'Apartement de<br/>footballeur',
          armoryRoom: 'Armurerie',
          auntsApartment: 'Apartement<br/>de la<br/>tante',
          auntsBedroom: 'Chambre<br/>de la<br/>tante',
          growRoom: 'Salle de<br/>plantation',
          bikersApartment: 'Apartement<br/>de biker',
          methLab: 'Labo de meth',
          footballBedroom: 'Chambre de<br/>footballeur',
          footballOffice: 'Bureau de<br/>footballeur',
          bikersBedroom: 'Chambre<br/>de biker',
          backStairs: 'Escalier<br/>de service',
          auntsHall: 'Chambre de<br/>la tante',
          kidsRoom: 'Chambre des<br/>enfants',
          mainStairs: 'Escalier<br/>principal',
          stairHall: 'Cage<br/>d\'escalier',
          roof: 'Toit',
          laundryRoom: 'Buanderie',
          vaultRoom: 'Coffre',
          bikersGarage: 'Garage<br/>de biker',
          backAlley: 'Ruelle',
          schoolAlley: 'Allé de l\'école',
          footballPitch: 'Terrain de foot',
          market: 'Marché',
          marketAlley: 'Allée du<br/>marché',
          schoolRooftops: 'Toits de<br/>l\'école',
          street: 'Rue',
          rooftops: 'Toits',
          courtyard: 'Cour',
          accessAlley: 'Voie d\'accès',
          shop: 'Magasin<br/>( pas montré )',
          marketRooftops: 'Toits du marché'
        },
        kanal: {
          floatingDock: 'Quai flottant',
          sailboats: 'Voiliers',
          constructionSite: 'Chantier',
          pipes: 'Tuyaux percés',
          lockerRoom: 'Vestiares',
          archives: 'Archives',
          lounge: 'Lounge',
          modelRoom: 'Salle de la maquette',
          securityRoom: 'Salle de<br/>sécurité',
          projectorRoom: 'Salle de<br/>projection',
          kitchen: 'Cuisine',
          controlRoom: 'Salle de<br/>contrôle',
          controlRoomHallway: 'Couloir salle de contrôle',
          serverRoom: 'Salle des<br/>serveurs',
          lockGate: 'Écluse',
          quayContainers: 'Conteneurs à quai',
          lockGateTunnel: 'Tunnel<br/>à écluse',
          constructionEntrance: 'Entrée<br/>du chantier',
          parkingEntrance: 'Entrée<br/>du parking',
          middleRoad: 'Route<br/>du milieu',
          forkliftAlley: 'Allée char.<br/>Élévateurs',
          frontLawn: 'Pelouse de devant',
          coastGuardRoof: 'Toit<br/>de la<br/>garde-côte',
          balcony: 'Balcon',
          parking: 'Parking'
        },
        club: {
          shippingDock: 'Quai de chargement',
          warehouse: 'Entrepôt',
          constructionSite: 'Chantier',
          easternSubroof: 'Toit est à<br/>mi-hauteur',
          container: 'Conteneur',
          graffitiArea: 'Zone de graffitis',
          recreationArea: 'Zone<br/>de loisirs',
          junkyard: 'Décharge',
          vipParking: 'Parking VIP',
          mainGate: 'Porte principale',
          parking: 'Parking',
          kennels: 'Chenils',
          trash: 'Local à<br/>pubelles',
          centralSubroof: 'Toit<br/>central<br/>à mi-hauteur',
          easternRoof: 'Toit est',
          centralRoof: 'Toit<br/>central',
          westernRoof: 'Toit ouest',
          balcony: 'Balcon',
          escapeTunnel: 'Tunnel<br/>d\'évacuation',
          arsenalRoom: 'Armurerie<br/>',
          basementHallway: 'Couloir du sous-sol',
          memorialRoom: 'Mémorial',
          utilityRoom: 'Buanderie',
          oilPit: 'Réserve<br/>d\'essence',
          centralStairs: 'Escalier<br/>central',
          church: 'Église',
          frontPorch: 'Porche',
          garage: 'Garage',
          lobby: 'Entrée',
          stockRoom: 'Réserve',
          garageStorage: 'Remise<br/>du garage',
          lounge: 'Lounge',
          bar: 'Bar',
          centralHallway: 'Couloir central',
          kitchen: 'Cuisine',
          kitchenEntrance: 'Entrée de<br/>la cuisine',
          westernHallway: 'Couloir<br/>ouest',
          stripClub: 'Club de<br/>strip-tease',
          junkyardEntrance: 'Entrée de<br/>la décharge',
          sideEntrance: 'Entrée latérale',
          changingRoom: 'Vestiaire<br/>',
          bedroom: 'Chambre',
          bathroom: 'Salle<br/>de bain',
          bedroomHallway: 'Couloir de la chambre',
          logisticOffice: 'Bureau<br/>logistique',
          gym: 'Salle<br/>de sport',
          secretStash: 'Pièce<br/>secrète',
          cctvRoom: 'Salle de<br/>surveillance',
          cashRoom: 'Salle des<br/>recettes',
          easternStairs: 'Escalier<br/>est',
          catwalk: ''
        },
        consulate: {
          spawnRiotBarricade: 'Barricades',
          spawnPoliceLine: 'Barrage policier',
          spawnGasStation: 'Station-service',
          spawnSideEntrance: 'Entrée',
          exitStairs: 'Escalier<br/>de sortie',
          garage: 'Garage',
          basementCorridor: 'Couloir du sous-sol',
          securityRoom: 'Salle de<br/>sécurité',
          cafeteria: 'Cafétéeria',
          mainStairs: 'Escalier principal',
          lockerHallway: 'Couloir<br/>du vestiaire',
          serviceStairs: 'Escalier de<br/>service',
          electricRoom: 'Local<br/>elec-<br/>trique',
          storageRoom: 'Salle de stockage',
          archives: 'Archives',
          archivesCorridor: 'Couloir des<br/>archives',
          pressRoom: 'Salle de presse',
          westCorridor: 'Couloir ouest',
          publicBathroom: 'WC public',
          antechamber: 'Antichambre',
          lobby: 'Entrée',
          eastCorridor: 'Couloir<br/>est',
          tellers: 'Guichets',
          visaOffice: 'Bureaue des<br/>visas',
          visaEntrance: 'Entrée<br/>du bureau<br/>des visas',
          frontDoor: 'Porte<br/>d\'entrée',
          balcony: 'Balcon',
          copyRoom: 'Salle de repro.',
          cabinet: 'Cabinet',
          administrationOffice: 'Administration',
          breakRoom: 'Salle de<br/>repos',
          frontOffice: 'Accueil',
          meetingRoom: 'Salle de<br/>réunion',
          hallway: 'Couloir',
          consulFrontDesk: 'Accueil du<br/>consul',
          privateBathroom: 'WC privé',
          waitingRoom: 'Salle<br/>d\'attente',
          consulateOffice: 'Bureau<br/>du consul',
          garageWay: 'Allée du garage',
          courtyard: 'Cour',
          backCourtyard: 'Cour arrière',
          sideEntrance: 'Entrée',
          dumpster: 'Benne',
          parking: 'Parking',
          gardens: 'Jardins',
          fountain: 'Fontaine',
          emergencyExit: 'Sortie<br/>de secours',
          garageRoof: 'Toit du<br/>garage',
          memorialGarden: 'Jardin du souvenir',
          policeLine: 'Barrage policier',
          riotBarracade: 'Barricades',
          eastFrontYard: 'Jardin de devant Ouest',
          westFrontYard: 'Jardin de devant Est',
          frontAlley: 'Allée de devant',
          buildingRoof: 'Toit de<br/>l\'immeuble'
        },
        hereford: {
          shootingRange: 'Stand de tir',
          mainStairs: 'Escalier<br/>principal',
          garage: 'Garage',
          kitchen: 'Cuisine',
          diningRoom: 'Salle à<br/>manger',
          masterBedroom: 'Chambre principale',
          laundryRoom: 'Buan-<br/>derie',
          bathroom: 'Salle de bain',
          workshop: 'Atelier',
          rooftop: 'Toit'
        },
        house: {
          spawnConstructionSite: 'Chantier',
          spawnRiverDocks: 'Pontons',
          spawnAPCArea: 'Zone du VTT',
          spawnSideStreet: 'Rue latérale',
          depot: 'Entrpôt',
          trainingRoom: 'Salle de sport',
          kitchenStairs: 'Escalier de<br/>la cuisine',
          sideStairs: 'Escalier<br/>latéral',
          laundryRoom: 'Buanderie<br/>',
          garage: 'Garage',
          livingRoom: 'Salon',
          backEntrance: 'Entrée de derrière',
          lobby: 'Entrée',
          kitchen: 'Cuisine',
          office: 'Bureau',
          diningRoom: 'Salle à<br/>manger',
          workshop: 'Atelier',
          kidsBedroom: 'Chambre<br/>d\'enfant',
          upperHallway: 'Couloir<br/>du haut',
          lobbyStairs: 'Escalier<br/>de l\'entrée',
          walkIn: 'Dressing',
          masterBedroom: 'Chambre principale',
          bathroom: 'Salle de bain',
          sideStreet: 'Rue<br/>latérale',
          garageEntrance: 'Entrée<br/>du garage',
          garden: 'Jardin',
          backAlley: 'Ruelle',
          patio: 'Patio',
          jacuzzi: 'Bain à remous',
          basementStairs: 'Escalier du<br/>sous-sol',
          treehouseAlley: 'Allée de la<br/>cabane',
          frontYard: 'Jardin devant<br/>la maison',
          frontStreet: 'Rue devant la maison',
          frontPorch: 'Porche',
          backPorch: 'Terrasse de derrière',
          backPorchTop: 'Sur la terrasse de derrière',
          frontPorchTop: 'Sur le porche',
          rooftop: 'Toit'
        },
        kafe: {
          // EXT/Spawn
          backAlley: 'Ruelle',
          park: 'Allée du parc',
          christmasMarket: 'Marché de Noël',
          garage: 'Garage',
          bakeryParking: 'Parking de la<br/>boulangerie',
          bakeryRoof: 'Toit de la<br/>boulangerie',
          terrace: 'Terrasse',
          westMainStreet: 'Rue principale - Ouest',
          mainStreet: 'Rue principale',
          eastMainStreet: 'Rue principale - Est',
          riverDocks: 'Pontons',
          // Stairs
          whiteStairs: 'Escalier<br/>blanc',
          redStairs: 'Escalier<br/>rouge',
          // 4F/Roof
          cafeRoofTop: 'Toit du café',
          // 3F
          cigarLounge: 'Salon-fumoir',
          whiteCorridor: 'Couloir blanc',
          washrooms: 'WC',
          barFreezer: 'Chambre Froide<br/>du bar',
          cocktailLoungeEntrance: 'Entrée<br/>du bar à<br/>cocktails',
          cocktailLounge: 'Bar à<br/>cocktails',
          barBackstore: 'Remise<br/>du bar',
          cigarShop: 'Boutiques<br/>à cigares',
          bar: 'Bar',
          cigarBalcony: 'Balcon<br/>Cigars',
          cocktailBalcony: 'Balcon<br/>Cocktail',
          // 2F
          trainMuseum: 'Musée du train',
          fireplaceHall: 'Hall avec<br/>cheminée',
          readingRoomCorridor: 'Couloir de la salle de lecture',
          laundryRoom: 'Buanderie',
          readingRoom: 'Salle de lecture',
          miningRoom: 'Salle de la mine',
          mainCorridor: 'Couloir<br/>principal',
          pillarRoom: 'Salle<br/>du pilier',
          museumEntrance: 'Entreée<br/>du musée',
          // 1F
          vipCorridor: 'Couloir<br/>VIP',
          bakery: 'Boulangerie',
          prepRoom: 'Salle<br/>de préparation',
          kitchenCooking: 'Cuisine',
          kitchenService: 'Service<br/>de cuisine',
          freezer: 'Chambre froide',
          vipSection: 'Secteur<br/>VIP',
          //mainCorridor: 'Main Corridor',
          diningRoom: 'Salle<br/>à manger',
          smallBakery: 'Petite<br/>Boulangerie',
          coatCheck: 'Vestiaire',
          reception: 'Réception'
        },
        oregon: {
          // EXT
          street: 'Rue',
          junkyard: 'Décharge',
          busYard: 'Cour du bus',
          mainEntrance: 'Entrée Principale',
          parking: 'Parking',
          constructionSite: 'Construction',
          farmlands: 'Terres Cultivées',
          shootingRange: 'Stand<br/>De Tir',

          // Stairs
          freezerStairs: 'Escalier<br/>Frigo',
          whiteStairs: 'Escalier<br/>Blanc',
          laundryStairs: 'Escalier<br/>Buanderie',
          mainStairs: 'Escalier<br/>Principal',
          backStairs: 'Escalier<br/>Tour Rouge',
          towerStairs: 'Escalier<br/>Tour Rouge',

          // Basement
          laundryStorage: 'Local<br/>Buanderie',
          freezer: 'Frigo',
          laundryRoom: 'Buanderie',
          basementCorridor: 'Couloir<br/>Sous-Sol',
          supplyCloset: 'Placard',
          supplyRoom: 'Réserve',
          blueBunker: 'Bunker<br/>Bleu',
          bunker: 'Bunker',
          boilerRoom: 'Chaufferie',
          electricRoom: 'Local<br/>Electrique',

          // 1F
          classroom: 'Ecole',
          lobby: 'Entrée',
          showerCorridor: 'Couloir Douches',
          securityCorridor: 'Couloir Sécurité',
          garage: 'Garage',
          smallTower: 'Petite<br/>Tour',
          showers: 'Douches',
          security: 'Salle de Sécurité',
          diningHall: 'Cantine',
          kitchen: 'Cuisine',
          meetingHall: 'Salle de<br/>Réunion (Meeting)',
          split: 'Double Portes <br/> Meeting',
          kitchenCorridor: 'Couloir<br/>Cuisine',
          rearStage: 'Arrière Scène',
          stage: '',
          smallStairs: '',

          // 2F
          balcony: 'Balcon',
          diningHallRoof: 'Toit<br/>Cantine',
          walkIn: 'Dressing',
          masterBedroom: 'Chambre<br/>Américaine',
          smallTowerRoof: 'Toit<br/>Petite Tour',
          dormMainHall: 'Dortoir<br/>Principal',
          gameRoom: 'Salle<br/>de Jeux',
          armory: 'Armurerie',
          armoryCorridor: 'Couloir<br/>Armurerie',
          smallTowerOffice: 'Bureau<br/>Petite Tour',
          trophyRoom: 'Salle<br/>des Trophés',
          kidsDorms: 'Dortoir des Enfants',
          attic: 'Grenier',
          meetingHallRoof: 'Toit<br/>Meeting',
          bigTower: 'Tour Rouge<br/>(Grande Tour)',
          middle: '',

          // 3F
          dormsRoof: 'Toit du Dortoir',
          garageRoof: 'Toit du Garage',
          towerRoof: 'Toit<br/>Tour Rouge'
        },
        plane: {
          spawnOfficialEntrance: 'Entrée principale',
          spawnReporterEntrance: 'Entrée de la presse',
          spawnServiceEntrance: 'Entrée de service',
          pressBathroom: 'WC.Pr',
          meetingRoom: 'Salle de réunion',
          frontHallway: 'Couloir<br/>avant',
          executiveOffice: 'Bureau<br/>classe<br/>affaires',
          mainEntrance: 'Entrée principale',
          frontStairs: 'Entrée de<br/>service avant',
          pantry: 'Garde-manger',
          kitchen: 'Cuisine',
          executiveHallway: 'Couloir classe affaires',
          executiveBedroom: 'Chambre<br/>classe<br/>affaires',
          changeRoom: 'Vestiaire<br/>',
          laund: 'Buand.',
          frontServiceEntrance: 'Entrée de<br/>service avant',
          rightWing: 'Aile droite',
          backServiceEntrance: 'Entrée de<br/>service arrière',
          reporterEntrance: 'Entrée de la presse',
          leftWing: 'Aile gauche',
          staffSection: 'Section<br/>équipage',
          securityRoom: 'Salle de<br/>sécurité',
          pressSectionA: 'Section<br/>presse A',
          pressSectionB: 'Section<br/>presse B',
          backStairs: 'Escalier arrière',
          cargoHold: 'Soute',
          serviceCorridor: 'Couloir de service',
          storage: 'Stockage',
          luggageHold: 'Soute à<br/>bagages',
          firstAidStation: 'Poste de secours',
          cargoFrontEntrance: 'Entrée avant<br/>de l\'avion',
          cockpitStairs: 'Escalier<br/>du cockpit',
          cabinStaff: 'Équipage<br/>cabine',
          radioCabin: 'Cabine radio',
          cabin: 'Cockpit',
          caterer: 'Cafétéria',
          serverRoomA: 'Salle des serveurs A',
          serverRoomB: 'Salle des serveurs B',
          technicalSeating: 'Centre technique',
          ladderRoom: 'Salle avec<br/>une échelle'
        },
        skyscraper: {
          helipad: 'Héliport',
          tower: 'Tour',
          ventilationUnits: 'Unités de ventilation',
          kitchen: 'Cuisine',
          pantry: 'Réserve',
          deliveryRoom: 'Salle de<br/>livraison',
          houseLobby: 'Hall de la maison',
          houseEntrance: 'Entrée de<br/>la maison',
          mainEntrance: 'Entrée<br/>principale',
          reception: 'Réception',
          bedroom: 'Chambre',
          closet: 'Dressing',
          bathroom: 'Salle de bain',
          houseStairs: 'Escalier de<br/>la maison',
          restaurant: 'Restaurant',
          toilet: 'Toilettes',
          bbq: 'Barbecues',
          backHallway: 'Couloir arrière',
          mainStairs: 'Escalier<br/>principal',
          geishaRoom: 'Chambre<br/>de geisha',
          hallway: 'Couloir',
          karaoke: 'Karaoké',
          teaRoom: 'Salon de thé',
          terrace: 'Terrasse',
          backStairs: 'Escalier<br/>arrière',
          houseBalcony: 'Balcon<br/>maison',
          exhibition: 'Exposition',
          lounge: 'Salon',
          workOffice: 'Bureau',
          clearance: 'Accès VIP',
          peacefullTree: 'Arbre<br/>paisible',
          contemplationGarden: 'Jardin<br/>contemplatif',
          westGarden: 'Jardin<br/>ouest',
          bridge: 'Pont',
          gazeebo: 'Belvédère',
          restBalcony: 'Balcon<br/>du<br/>restaurant',
          northGarden: 'Jardin<br/>nord',
          eastGarden: 'Jardin<br/>est',
          sandGarden: 'Jardin<br/>zen',
          sidePath: 'Chemin<br/>latéral',
          sideStairs: 'Escalier<br/>latéral',
          dragonStatue: 'Statue de<br/>dragon',
          coveredWalkway: 'Chemin<br/>couvert'
        },
        themepark: {
          // EXT
          mainEntrance: 'Entrée Principale',
          palms: 'Palmiers',
          roboCircuit: 'Circuit Robots',
          castleEntrance: 'Entrée du<br/>Chateau',
          bumperCars: 'Auto<br/>Tamponneuses',
          guestInfo: 'Centre<br/>d\'Informations',
          village: 'Village',
          sweetShop: 'Magasin<br/>de bonbons',
          serviceEntrance: 'Entrée de Service',
          teacups: 'Tasses à thé',
          backAlley: 'Allée de<br/>Derrière',

          // 1F
          arcadeEntrance: 'Entrée<br/>Arcades',
          barrelRoom: 'Salle<br/>des Tonneaux',
          throneRoom: 'Salle<br/>du Trône',
          maintenance: 'Maintenance',
          dragonStairs: 'Escalier<br/>Dragon',
          blueRoom: 'Salle<br/>Bleue',
          jointCorridor: 'Couloir<br/>Commun',
          armory: 'Armurerie',
          lab: 'Laboratoire',
          redCorridor: 'Couloir<br/>Rouge',
          gongRoom: 'Salle<br/>du Gong',
          yellowCorridor: 'Couloir<br/>Jaune',
          tellers: 'Guichets',
          storage: 'Stockage',
          arcadeToilet: 'Toilettes<br/>des Arcades',
          lockerRoom: 'Vestiaires',

          // 2F
          upperArcade: 'Arcade<br/>Supérieure',
          breakRoom: 'Salle de repos',
          initiationRoom: 'Salle<br/>d\'Initiation',
          controlRoom: 'Salle<br/>de Contrôle',
          bunk: 'Dortoir',
          dayCare: 'Garderie',
          // yellow corridor, but 2F /shrug
          waitingRoom: 'Salle<br/>d\'Attente',
          cafeTerrace: 'Terrasse<br/>du Café',
          cashCorridor: 'Couloir Cash',
          office: 'Bureau',
          cashStash: 'Réserve<br/>d\'Argent',
          cafeCorridor: 'Couloir du Café',
          cafe: 'Café',
          officeShower: 'Douches',
          officeVault: 'Coffre-Fort',

          // Roof
          roof: 'Toit',

          // Stairs
          arcadeStairs: 'Escalier<br/>Arcades',
          yellowStairs: 'Escalier<br/>Jaune'
        },
        tower: {
          northRoof: 'Toit nord',
          northRoofNotShown: 'Toit nord<br/>(pas montré)',
          southRoof: 'Toit sud',
          southRoofNotShown: 'South Roof<br/>(pas montré)',
          roofAccess: 'Accès<br/>au toit',
          northRappel: 'Rappel<br/>sud',
          southRappel: 'Rappel<br/>nord',
          mezzanine: 'Mezzanine',
          ventilation: 'Ventilation',
          centerAtrium: 'Atrium centre',
          infoBooth: 'Stand d\'information',
          eastAtrium: 'Atrium<br/>ouest',
          westAtrium: 'Atrium<br/>est',
          eastBalcony: 'Balcon<br/>est',
          westBalcony: 'Balcon<br/>ouest',
          galleryMain: 'Galerie<br/>principale',
          mediaCenter: 'Salle<br/>multimédia',
          galleryAnnex: 'Galerie<br/>annexe',
          giftShop: 'Boutique',
          exhibitRoom: 'Salle<br/>d\'exposition',
          lanternRoom: 'Salle des lanternes',
          elevator: 'Ascenseur',
          officesHallway: 'Couloir bureaux',
          exhibitHallway: 'Couloir exposition',
          offices: 'Bureaux',
          companyReception: 'Réception<br/>société',
          supplyRoom: 'Salle de<br/>stockage',
          meetingRoom: 'Salle de<br/>réunion',
          ceoOffice: 'Bureau du<br/>directeur',
          bathroom: 'Toilettes',
          serverRoom: 'Salle du<br/>serveur',
          northStairs: 'Escalier nord',
          westStairs: 'Escalier<br/>ouest',
          eastStairs: 'Escalier<br/>est',
          mainReception: 'Réception',
          centerHallway: 'Couloir<br/>central',
          teaRoom: 'Salle du thé',
          lounge: 'Lounge',
          bar: 'Bar',
          kitchen: 'Cuisine',
          restaurant: 'Restaurant',
          birdRoom: 'Salle de<br/>l\'oiseau',
          restaurantReception: 'Réception<br/>du restaurant',
          restaurantHallway: 'Entrée du restaurant',
          barHallway: 'Entrée du bar',
          westObservatory: 'Observatoire<br/>ouest',
          bonsaiRoom: 'Salle des<br/>bonsaîs',
          traditionalHall: 'Salle traditionnelle',
          gameRoom: 'Salle<br/>de jeu',
          eastObservatory: 'Observatoire<br/>est',
          fountain: 'Fontaine',
          northAirDuct: 'Conduit<br/>d\'aération nord',
          eastAirDuct: 'Conduit<br/>d\'aération est',
          westAirDuct: 'Conduit<br/>d\'aération ouest'
        },
        yacht: {
          spawnSubmarine: 'Sous-marin',
          spawnZodiak: 'Bateau pneumatique',
          spawnSnowMobile: 'Motoneige',
          mapsRoom: 'Salle des cartes',
          cockpit: 'Cockpit',
          cockpitHallway: 'Couloir du cockpit',
          captainsOffice: 'Bureau du<br/>captaine',
          cockpitBalcony: 'Balcon du<br/>cockpit',
          topDeckStairs: 'Escalier<br/>due pont<br/>supérieur',
          helipadEntrance: 'Entrée de<br/>l\'hélistation',
          helipad: 'Hélistation',
          spaDeck: 'Pont<br/>du spa',
          eastDeck: 'Pont est',
          westDeck: 'Pont ouest',
          frontDeck: 'Pont<br/>avant',
          masterBedroom: 'Chambre<br/>principale',
          casino: 'Casino',
          pokerRoom: 'Slle de<br/>poker',
          bathroom: 'Salle<br/>de bain',
          bedroomHallway: 'Couloir de la chambre',
          casinoHallway: 'Couloir du casino',
          globeHallway: 'Couloir<br/>du globe',
          lounge: 'Salon',
          cafeteria: 'Cafétéria',
          engine: 'Moteur',
          backEntrance: 'Entrée arrière<br/>des moteurs',
          rearDeck: 'Pont<br/>arrière',
          serverRoom: 'Salle des<br/>serveurs',
          engineStorage: 'Stockage<br/>des moteurs',
          engineControl: 'Commandes<br/>des moteurs',
          backStairs: 'Escalier<br/>arrière',
          emergencyExit: 'Sortie d\'urgence',
          engineHallway: 'Couloir du moteur',
          frontStairs: 'Escalier<br/>avant',
          kitchen: 'Cuisine',
          staffDormitory: 'Dortoir du<br/>personnel',
          westBalcony: 'Balcon ouest',
          eastBalcony: 'Balcon est',
          kitchenHallway: 'Couloir de la cuisine',
          kitchenStairs: 'Escalier de la cuisine',
          kitchenPantry: 'Garge-<br/>manger',
          infirmary: 'Infirmerie',
          borealSubRoom: 'Salle du<br/>Boreal',
          cafeteriaHallway: 'Couloir de la cafétéria',
          engineUtility: 'Main-<br/>tenance<br/>moteur',
          submarine: 'Sous-marin',
          westGlacier: 'Glacier ouest',
          eastHullBreach: 'Brèche de la<br/>coque est',
          eastGlacier: 'Glacier est',
          frozenRiver: 'Rivière gelée',
          zodiac: 'Bateau pneumatique',
          westHullBreach: 'Brèche de la coque ouest',
          kingOfTheWorld: 'Roi du<br/>monde',
          roof: 'Toit',
          anchorName: 'Ancre',
          aklarkSubEntrance: 'Entrée de la<br/>salle de<br/>l\'Aklark'
        }
      }
    };

  R6MLangTerms.registerLanguage(name, terms);

  // À  à  Â  â  Ç   ç  È  è  É  é  Ê  ê  Î  î  Ô  ô  Ù  ù  Û  û

  return  {
    name: name,
    terms: terms
  };
})(R6MLangTerms);
