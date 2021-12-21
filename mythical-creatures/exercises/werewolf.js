class Werewolf {
  constructor(name) {
    this.name = name;
    this.form = 'human';
    this.hungry = false;
  }

  completeTransformation() {
    if (this.form === 'human') {
      this.form = 'wolf';
      this.hungry = true;
      return 'Aaa-Woooo!'
    } else if (this.form === 'wolf') {
      this.form = 'human';
      this.hungry = false;
      return 'Where are I?';
    }
  }

  eatVictim(victim) {
    // console.log(victim);
    if (this.hungry === true && this.form === 'wolf') {
      victim.alive = false;
      this.form = 'human';
      return `Yum, ${victim.name} was delicious.`;
    } return `No way am I eating ${victim.name}, I'd like a burger!`;
  }
}

module.exports = Werewolf;
