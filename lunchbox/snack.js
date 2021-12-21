class Snack {
  constructor(snackVariety) {
    this.deliciousLevel = 'extra';
    this.type = snackVariety;
    this.amount = 100;
    this.isInLunchBox = false;
  }

  getEaten() {
    this.amount -= 10;
    this.cuttingItClose = false;
    if (this.amount <= 20) {
      this.cuttingItClose = true;
    }
  }

  checkForHealthy() {
    var lowerCaseSnack = this.type.toLowerCase();

    if (lowerCaseSnack.includes('fruit')) {
      return true
    } return false
  }
}

module.exports = Snack;
