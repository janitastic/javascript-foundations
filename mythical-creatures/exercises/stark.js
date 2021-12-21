const Direwolf = require('./direwolf');

class Stark {
  constructor(stark) {
    if (stark) {
      this.name = stark.name;
      this.location = stark.area || 'Winterfell';
      this.safe = false;
    }
  }

  sayHouseWords() {
    if (this.safe === true) {
    return 'The North Remembers'
    } return 'Winter is Coming'
  }

    callDirewolf(name, home) {
      var direwolf = new Direwolf(name, home);
      direwolf.home = this.location;
      direwolf.protect(this)
      return direwolf
    }
}

module.exports = Stark;


// class Stark {
//   constructor(stark, area) {
//     console.log('stark',stark);//undefined
//     if (stark) {
//       this.name = stark.name;
//     }
//     //if nothing is passed as an argument, we get an error because we can't do undefined.name
//     //two cases -
//       //1) Object is passed as the stark param
//       //2) Nothing is passed in as stark, and it's broken
//
//     //what do we do to prevent js from reading stark.name if there is no stark? Need a conditional.
//     if (stark) {
//       this.location = stark.area || 'Winterfell';
//     }
//     this.safe = false;
//   }
//
//   sayHouseWords() {
//     if (this.safe === false) {
//       return `Winter is Coming`
//     } else {
//       return `The North Remembers`
//     }
//   }
//
//   callDirewolf(name, home) {
//     var direwolf = new Direwolf(name, home);
//     direwolf.home = this.location;
//     direwolf.protect(this)
//     return direwolf
//   }
// }
