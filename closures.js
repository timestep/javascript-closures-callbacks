var outsideUniverse = "I'm Outside the Known Universe";
(function(){
  'use strict'

  var personInUniverse = "I'm somewhere in the universe";

  var localSuperCluster = function (person1,cb) {
    var pIU = person1;
    var personILSC = "I'm somewhere in the Local Super Cluster";
    return cb(personILSC);
  }

  var virgoSuperCluster = function (person2,cb) {
    var pLSC = person2;
    var personIVSC = "I'm in the Virgo Super Cluster";
    return cb(personIVSC);
  }

  var localGalacticGroup = function (person3,cb) {
    var pIVSC = person3;
    var personLGG = "I'm in the Local Galactic Group";
    return cb(personLGG);
  }

  var earth = function(person7, cb){
    var pSS = person7;
    var personE = "I'm on Earth";
    return cb(personE);
  }

  var enterMilkyWay = function(personInLocalGalacticGroup){
    var _personInLocalGalacticGroup = personInLocalGalacticGroup;

    var milkyWayGalaxy = function(person4, cb){
      var pILGG = person4;
      var personIMWG = "I'm in the Milky Way Galaxy";
      return cb(personIMWG);
    }
    
    milkyWayGalaxy(personInLocalGalacticGroup, function(personInMilkyWayGalaxy){
      var _personInMilkyWayGalaxy = personInMilkyWayGalaxy;

      var solarInterstellarNeighbourHood = function (person5,cb) {
        var pIMWG = person5;
        var personISIN = "I'm in the Solar InterStellar Neighbourhood";
        return cb(personISIN);
      }

      var solarSystem = function(person6,cb){
        var pISIN = person1;
        var personSS = "I'm in the Solar System";
        return cb(personSS);
      }

      solarInterstellarNeighbourHood(personInMilkyWayGalaxy, function(personInSolarInterstellarNeighbourHood){
        var _personInSolarInterstellarNeighbourHood = personInSolarInterstellarNeighbourHood;
        solarSystem(personInSolarInterstellarNeighbourHood, function(personInSolarSystem){
          var _personInSolarSystem = personInSolarSystem;
          earth(personInSolarSystem,function(personOnEarth){
            var _personOnEarth = personOnEarth;

            debugger;

          });
        });
      });
    });
  }


  localSuperCluster(personInUniverse,function(personInLocalSuperCluster){
    var _personInLocalSuperCluster = personInLocalSuperCluster;
    virgoSuperCluster(personInLocalSuperCluster, function (personInVirgoSuperCluster) {
      var _personInVirgoSuperCluster = personInVirgoSuperCluster;
      localGalacticGroup(personInVirgoSuperCluster, enterMilkyWay)
    });
  });
})()
