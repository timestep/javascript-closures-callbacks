outsideUniverse = "I'm Outside the Known Universe";
(function(){
  'use strict'

  var personInUniverse = "I'm somewhere in the universe";

  var solarSystem = function (personOutsideSolarSytem,cb){
    var _personOutSideSolarSystem = personOutsideSolarSytem;
    var personInSolarSystem = "I'm in the Solar System";
    return cb(personInSolarSystem);
  }

  var earth = function (personOutSideEarth,cb){
    var _personOutSideEarth = personOutSideEarth;
    var personE = "I'm on Earth";
    return cb(personE);
  }

  var findSolarSystem = function (personInSolarSystem){
    var _personInSolarSystem = personInSolarSystem;
    earth(personInSolarSystem,findEarthMan);
    debugger;
  }

  var findEarthMan = function (person) {
    // console.log(personInSolarSystem);
    // console.log(_personInSolarSystem);
    console.log(personInUniverse);
    console.log(person);
    debugger;
  }

  solarSystem(personInUniverse,findSolarSystem)

})()
