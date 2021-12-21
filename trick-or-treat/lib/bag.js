class Bag {
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  }

  fill(candy) {
    this.candies.push(candy);
    this.count++;
  }

  contains(candy) {
    // console.log(this.candies);
    for (var i = 0; i < this.candies.length; i++) {
      if (this.candies[i].type === candy) {
        return true
      } return false
    }
  }
}





















//   constructor () {
//     this.empty = true;
//     this.count = 0;
//     this.candies = [];
//   }
//
//   fill(candy) {
//     this.candies.push(candy)
//     this.count++
//     this.empty = false;
//   }
//
//   contains(candy) {
//   // console.log(this.candies);
//   for (var i = 0; i < this.candies.length; i++) {
//     if (this.candies[i].type === candy) {
//       return true
//     } return false
//     }
//   }
// }

module.exports = Bag;
