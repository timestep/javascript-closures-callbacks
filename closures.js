outsideUniverse = "I'm Outside the Known Universe";
(function(){
  'use strict'

  var personInUniverse = "I'm somewhere in the universe";

  var earth = function (personOutSideEarth,cb){
    var _personOutSideEarth = personOutSideEarth;
    var personE = "I'm on Earth";
    var personOnEarth = personE;
    return cb(personOnEarth);
  }

  var personInSolarSystem = "I'm in the Solar System";
  earth(personInSolarSystem,function(earthMan){
      var _earthMan = earthMan;
  });
})()
