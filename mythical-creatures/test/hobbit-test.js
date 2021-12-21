var assert = require('chai').assert;
var Hobbit = require('../exercises/hobbit');

describe('Hobbit', function() {

  it('should be a function', function() {
    assert.isFunction(Hobbit);
  });

  it('should have a name', function() {
    var bilbo = new Hobbit({ name: 'Bilbo' });
    var mark = new Hobbit({ name: 'Mark' });
//not a new instance, just equals.
    assert.equal(bilbo.name, 'Bilbo');
    assert.equal(mark.name, 'Mark');
  });

  it('should start out 0 years old', function() {
    var bilbo = new Hobbit({ name: 'Bilbo' });

    assert.equal(bilbo.age, 0);
  });

  it('should gain 1 year after every birthday', function() {
    var hobbit = new Hobbit({ name: 'Meriadoc' });
//call a method of celebrateBirthday
    hobbit.celebrateBirthday();
    hobbit.celebrateBirthday();
    hobbit.celebrateBirthday();

    assert.equal(hobbit.age, 3);
  });

  function timeTravel(num, hobbit) {
    //two params in this function
    for (var i = 0; i < num; i++) {
      hobbit.celebrateBirthday();
    };
  };

  it('should be considered a child at the age of 32', function() {
    var hobbit = new Hobbit({ name: 'Taylor' });

    timeTravel(32, hobbit);
//why is this method here if it doesn't do anything?
    assert.equal(hobbit.age, 32);
    assert.equal(hobbit.adult, false);
  });

  it('should be considered an adult at 33', function() {
    var hobbit = new Hobbit({ name: 'Taylor' });

    timeTravel(33, hobbit);
    //add to constructor
    assert.equal(hobbit.age, 33);
    assert.equal(hobbit.adult, true);
  });

  it('should be considered old at the age of 101', function() {
    var hobbit = new Hobbit({ name: 'Samwise' });

    assert.equal(hobbit.old, false)

    timeTravel(100, hobbit);

    assert.equal(hobbit.old, false)

    hobbit.celebrateBirthday();
    //new var for celebrateBirthday method
    assert.equal(hobbit.age, 101);
    assert.equal(hobbit.old, true)
  });

  it('should be able to get the ring if its name is Frodo', function() {
    var hobbit1 = new Hobbit({ name: 'Frodo' });
    var hobbit2 = new Hobbit({ name: 'Samwise' });
    //new method of getRing()
    //console.log(this.name)
    assert.equal(hobbit1.getRing(), 'Here is the ring!');
    assert.equal(hobbit1.hasRing, true);

    assert.equal(hobbit2.getRing(), 'You can\'t have it!');
    assert.equal(hobbit2.hasRing, false);
  });
});
