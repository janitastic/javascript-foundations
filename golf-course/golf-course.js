class GolfCourse {
  constructor(courseName, difficulty, openings, features) {
    this.name = courseName;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }

  checkInGroup(group) {
    if (this.openings < group.length) {
      return 'Sorry, we are currently booked! Please come back later.';
    }
      this.openings -= group.length;
      for (var i = 0; i < group.length; i++) {
      this.currentlyPlaying.unshift(group[i].name);
    }
    return 'You\'re checked in. Have fun!';
  }
}



















//   constructor (name, difficulty, openings, features) {
//     this.name = name;
//     this.difficulty = difficulty;
//     this.openings = openings;
//     this.features = features;
//   }
// }

module.exports = GolfCourse;
