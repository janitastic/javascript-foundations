class Runner {
  constructor (name, age) {
    this.name = name;
    this.age = age;
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = [];
  }

  runSomeMiles(miles) {
    this.milesRun += miles;
    this.fitness += miles;
  }

  stretch() {
    this.fitness += .5;
  }

  runRace(raceName, miles) {
    this.completedRaces.push(raceName);
    this.runSomeMiles(miles);
      //OR we can do
      //this.milesRun += miles;
      //this.fitness += miles;
  }
}

module.exports = Runner;
