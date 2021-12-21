class Snowman {
  constructor(snowman) {
    this.carrots = snowman.carrots;
    this.coal = snowman.coal;
    this.buttons = snowman.buttons;
    this.snowballs = snowman.snowballs;
    this.magicHat = false;
  }

  canWearMagicHat() {
    this.magicHat = true;

    if (this.coal < 2 || this.buttons < 5 || this.carrots < 1 || this.snowballs < 2) {
      this.magicHat = false;
    }
    return this.magicHat;
  }
}

module.exports = Snowman;
