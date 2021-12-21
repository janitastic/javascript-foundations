var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    }
  }

  gatherMaterials(material, quantity) {
    this.materials[material] += quantity;
  // console.log('17 -', this.materials);
  }

  buildASnowman() {
    return new Snowman(this.materials);
  }

  placeMagicHat() {
    var snowman = this.buildASnowman();
// console.log(snowman.canWearMagicHat());
    if (snowman.canWearMagicHat()) {
      return `Woah, this snowman is coming to life!`;
    } else {
      return `I guess I didn\'t build it correctly.`;
    }
  }
}

module.exports = Human;
