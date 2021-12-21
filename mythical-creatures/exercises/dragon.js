class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.eaten = 0;
  }

  greet() {
    return `Hi, ${this.rider}!`;
  }

  eat() {
    this.eaten++
    if (this.eaten >= 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
