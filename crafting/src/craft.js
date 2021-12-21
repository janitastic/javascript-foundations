class Craft {
  constructor(craft, type, materials) {
    this.name = craft.type;
    this.materials = craft.materials;
    this.completed = false;
    this.totalCost = 0;
  }

  completeCraft() {
    this.completed = true;
    return `All done! It looks great!`;
  }

  calculateProjectTotal() {
    for (var i = 0; i < this.materials.length; i++) {
      var costPerCraft = this.materials[i].calculateMaterialCost();
      // console.log(costPerCraft);
      // console.log(this.totalCost);
      this.totalCost += costPerCraft;
    }
    return this.totalCost;
  }
}

module.exports = Craft;
