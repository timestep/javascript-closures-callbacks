outsideUniverse = "I'm Outside the Known Universe";
(function(){
  'use strict'

  var personInUniverse = "I'm somewhere in the universe";

  var earth = function (personOutSideEarth,cb){
    var _personOutSideEarth = personOutSideEarth;
    var personE = "I'm on Earth";
    return cb(personE);
  }

  var findEarthMan = function (person) {
    console.log(personInSolarSystem);
    console.log(personInUniverse);
    console.log(person);
    debugger;
  }

  var personInSolarSystem = "I'm in the Solar System";
  earth(personInSolarSystem,findEarthMan);
})()
