class Golfer {
  constructor (golfer, name, handicap) {
    this.name = golfer.name,
    this.handicap = golfer.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }

  calculateAvg(par) {
    var averageScore = this.handicap + par;
  console.log(averageScore);
    return `I usually shoot a ${averageScore} on average.`
  }

  playRound(golfCourse) {
    if (golfCourse.difficulty === 'hard') {
      this.frustration = 500;
    } else if (golfCourse.difficulty === 'moderate') {
      this.frustration = 100;
    }
  }

  hitTheRange() {
    this.confidence += 10;
  }

  marvel(golfCourse) {
    return `I love the ${golfCourse.features[0]} and ${golfCourse.features[1]} on this course!`
  }

  whatYaShoot(score) {
    if (score < 0) {
      this.frustration = 0;
      return 'I AM THE GREATEST GOLFER ALIVE!'
    } else if (score === 0) {
      this.frustration -= 10;
      return 'Booyah!'
    } else if (score > 0) {
      this.frustration += 20;
      return 'Doh!'
    }
  }
}













//   constructor (golfer, handicap) {
//     this.name = golfer.name;
//     this.handicap = golfer.handicap;
//     this.frustration = 0;
//     this.confidence = 0;
//   }
//
//   calculateAvg(par) {
//     if ((par + this.handicap) === 76) {
//       return 'I usually shoot a 76 on average.';
//     } else {
//       return 'I usually shoot a 85 on average.';
//     }
//   }
//
//   playRound(golfCourse) {
//     if (golfCourse.difficulty === 'hard') {
//       this.frustration = 500;
//     } else if (golfCourse.difficulty === 'moderate') {
//       this.frustration = 100;
//     }
//   }
//
//   hitTheRange() {
//     this.confidence += 10;
//   }
//
//   marvel(golfCourse) {
//     return `I love the ${golfCourse.features[0]} and ${golfCourse.features[1]} on this course!`
//   }
//
//   whatYaShoot(score) {
//     if (score < 0) {
//       this.frustration = 0;
//       return 'I AM THE GREATEST GOLFER ALIVE!'
//     } else if (score > 3) {
//       this.frustration += 20;
//       return 'Doh!'
//     } else if (score > 0 && score < 3) {
//       this.frustration += 30;
//       return 'Doh!'
//     } else {
//       this.frustration += 10;
//       return 'Booyah!'
//     }
//   }
// }

module.exports = Golfer;
