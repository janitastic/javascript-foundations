var Skier = require('./Skier');

class Lift {
  constructor(seatingCapacity) {
    this.inService = true;
    this.limit = seatingCapacity;
    this.skiers = [];
    this.safetyBar = 'up';
  }

  admitSkier(name, hasTicket) {
    var skierToAdmit = new Skier(name, hasTicket);
    //had to declare a new variable of a new Skier
    // console.log(skierToAdmit);
    // console.log('15 -', this.skiers.length);
    if (this.skiers.length >= this.limit) {
      return `Sorry, ${skierToAdmit.name}. Please wait for the next lift!`
    } else if (skierToAdmit.hasLiftTicket) {
      this.skiers.push(skierToAdmit);
    } return `Sorry, ${skierToAdmit.name}. You need a lift ticket!`
  }

  startLift() {
    var seatsLeft = this.limit - this.skiers.length;
  // console.log(this.skiers);
  // console.log('limit -', this.limit);
  // console.log('seats left -', this.limit - this.skiers.length);
    if (seatsLeft === 0) {
      this.safetyBar = 'down';
    } else if (seatsLeft === 1) {
      this.safetyBar = 'up';
      return `We still need ${seatsLeft} more skier!`
    } else if (seatsLeft > 1) {
      this.safetyBar = 'up';
      return `We still need ${seatsLeft} more skiers!`
    }
  }
}

module.exports = Lift;
