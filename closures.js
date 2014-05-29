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
    var pIVSC = person2;
    var personIVSC = "I'm in the Virgo Super Cluster";
    return cb(personIVSC);
  }

  var 


  localSuperCluster(personInUniverse,function(personInLocalSuperCluster){
    var _personInLocalSuperCluster = personInLocalSuperCluster;
    virgoSuperCluster(personInLocalSuperCluster, function (personInVirgoSuperCluster) {
      var _personInVirgoSuperCluster = personInVirgoSuperCluster;
      localGalacticGroup(personInVirgoSuperCluster, function(personInLocalGalacticGroup){
        var _personInLocalGalacticGroup = personInLocalGalacticGroup;
        milkyWayGalaxy(personInLocalGalacticGroup, function(personInMilkyWayGalaxy){
          var _personInMilkyWayGalaxy = personInMilkyWayGalaxy;
          solarInterstellarNeighbourHood(personInMilkyWayGalaxy, function(personInSolarInterstellarNeighbourHood){
            var _personInSolarInterstellarNeighbourHood = personInSolarInterstellarNeighbourHood;
            solarSystem(personInSolarInterstellarNeighbourHood, function(personInSolarSystem){
              var _personInSolarSystem = personInSolarSystem;
              earth(personInSolarSystem,function(personOnEarth){
                var _personOnEarth = personOnEarth;

                debugger;



              })
            })
          })
        })
      })
    })
  })










})()
