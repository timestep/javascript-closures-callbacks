outsideUniverse = "I'm Outside the Known Universe";
(function(){
  'use strict'

  var personInUniverse = "I'm somewhere in the universe";

  var virgoSuperCluster = function (person2,cb) {
    var pLSC = person2;
    var personIVSC = "I'm in the Virgo Super Cluster";
    cb(personIVSC);
  }

  var localGalacticGroup = function (person3,cb) {
    var pIVSC = person3;
    var personLGG = "I'm in the Local Galactic Group";
    cb(personLGG);
  }



  var enterMilkyWay = function(personInLocalGalacticGroup){
    var _personInLocalGalacticGroup = personInLocalGalacticGroup;

    var milkyWayGalaxy = function(person4, cb){
      var pILGG = person4;
      var personIMWG = "I'm in the Milky Way Galaxy";
      cb(personIMWG);
    }

    milkyWayGalaxy(personInLocalGalacticGroup, function(personInMilkyWayGalaxy){
      var _personInMilkyWayGalaxy = personInMilkyWayGalaxy;

      var solarInterstellarNeighbourHood = function (person5,cb) {
        var pIMWG = person5;
        var personISIN = "I'm in the Solar InterStellar Neighbourhood";
        cb(personISIN);
      }

      var solarSystem = function(person6,cb){
        var pISIN = person6;
        var personSS = "I'm in the Solar System";
        cb(personSS);
      }

      solarInterstellarNeighbourHood(personInMilkyWayGalaxy, function(personInSolarInterstellarNeighbourHood){
        var _personInSolarInterstellarNeighbourHood = personInSolarInterstellarNeighbourHood;
        solarSystem(personInSolarInterstellarNeighbourHood, function(personInSolarSystem){
          var _personInSolarSystem = personInSolarSystem;


          earth(personInSolarSystem);

          function earth(person7){
            var pSS = person7;
            var personE = "I'm on Earth";
            var personOnEarth = personE;
              var _personOnEarth = personOnEarth;

        debugger;

              //nothing is accessable here.
              // only personOnEarth;
          }


        });
      });
    });
  }

  var localSuperCluster = function (person1,cb) {
    var pIU = person1;
    var personILSC = "I'm somewhere in the Local Super Cluster";
    cb(personILSC);
  }

  localSuperCluster(personInUniverse,function(personInLocalSuperCluster){
    var _personInLocalSuperCluster = personInLocalSuperCluster;
    virgoSuperCluster(personInLocalSuperCluster, function (personInVirgoSuperCluster) {
      var _personInVirgoSuperCluster = personInVirgoSuperCluster;
      localGalacticGroup(personInVirgoSuperCluster, enterMilkyWay)
    });
  });

})()
