class Snack {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.itemsInStock = 0;
  }

  stockItems(quantity) {
    this.itemsInStock += quantity;
  }

  removeItem() {
    if (this.itemsInStock === 0) {
      return `Sorry, no ${this.name} left in stock!`
    } else {
      this.itemsInStock -= 1;
      return `Item taken! There are now ${this.itemsInStock} items left.`
    }
  }
}

module.exports = Snack;
