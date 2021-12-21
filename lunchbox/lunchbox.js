class LunchBox {
  constructor(lunchbox, material) {
    this.owner = lunchbox.owner;
    this.material = lunchbox.madeOf;
    this.shape = lunchbox.shape;
    this.color = lunchbox.color;
    this.snacks = [];
  }

  acquireSnack(snackVariety) {
    this.snacks.push(snackVariety);
    snackVariety.isInLunchBox = true;
  }

  findHealthySnacks() {
    var healthySnacks = [];

    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].checkForHealthy()) {
        healthySnacks.push(this.snacks[i].type);
      }
    } return healthySnacks;
  }
}






















//   constructor(lunchbox, madeOf) {
//     this.owner = lunchbox.owner;
//     this.material = lunchbox.madeOf;
//     this.shape = lunchbox.shape;
//     this.color = lunchbox.color;
//     this.snacks = [];
//   }
//
//   acquireSnack(snackVariety) {
//     this.snacks.push(snackVariety);
//     snackVariety.isInLunchBox = true;
//   }
//
//   findHealthySnacks() {
//     var healthySnackies = [];
//
//     for (var i = 0; i < this.snacks.length; i++) {
//       if (this.snacks[i].checkForHealthy()) {
//         healthySnackies.push(this.snacks[i].type);
//       }
//     } return healthySnackies;
//   }
// }

module.exports = LunchBox;
