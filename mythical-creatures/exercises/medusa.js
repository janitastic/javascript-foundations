var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim) {
  // console.log(victim);
    //when medusa stares at a victim it turns into a statue
    //need to push a statue instance to the statues array
    //so we need to create a new instance of a statue
    var victimStatue = new Statue(victim.name);
  // console.log(victimStatue);
  // console.log(this.statues.length);
    if (this.statues.length < 3) {
      this.statues.push(victimStatue);//gaining a person, not a statue
    } else if (this.statues.length >= 3) {
      var releasedVictim = new Person(this.statues[0].name);//added here because it's declared at line 112
      this.statues.push(victimStatue);
      this.statues.shift();//removes the first i, doesn't need a param (this leaves us with 2 statues, we need to add Bob still)
  // console.log(this.statues);
      releasedVictim.mood = 'relieved';
      return releasedVictim
    }
  }
}

module.exports = Medusa;
