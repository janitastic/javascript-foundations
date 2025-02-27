class Roadrace {
  constructor (race) {
    this.name = race.title;
    this.location = race.city;
    this.distance = 0;
    this.participants = [];

  }

  setDistance(miles) {
// console.log(this)
  this.distance += miles;
    return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`
  }

  registerParticipants(runner) {
    this.participants.push(runner);
  }

  completeRace() {
    //need to access this.participants array
    //add the race to each registered participants completedRaces
    for (var i = 0; i < this.participants.length; i++) {
      this.participants[i].runRace(this.name, this.distance);
    }
  }
}

module.exports = Roadrace;
