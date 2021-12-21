class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || 'white';
  }

  isWhite() {
    return false;
  }

  says(statement) {
    return `**;* ${statement} *;**`;
  }
}

module.exports = Unicorn;
