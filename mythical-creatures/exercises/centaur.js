class Centaur {
  constructor (centaur) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.crankyCount = 0;
    this.layingDown = false;
  }

  shootBow() {
    this.crankyCount++;
    if (this.crankyCount >= 3 || this.layingDown === true) {
      this.cranky = true;
      return 'NO!';
    } return 'Twang!!!';
  }

  run() {
      if (this.cranky === true) {
        return `NO!`;
      } else {
        this.cranky = true;
        return `Clop clop clop clop!!!`;
      }
    }

  sleep() {
    if (this.standing === true) {
      return 'NO!';
    } this.cranky = false;
      return 'ZZZZ';
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (!this.layingDown) {
      this.cranky = false;
    } return 'Not while I\'m laying down!';
  }
}

module.exports = Centaur;
