var assert = require('chai').assert;
var Magician = require('../exercises/magician');

describe('Magician', function() {

  it('should be a function that instantiates a class', function() {
    assert.isFunction(Magician);
    assert.instanceOf(new Magician({}), Magician);
  });

  it('should have a stage name', function() {
    var magician1 = new Magician({ name: 'Scott' });
    var magician2 = new Magician({ name: 'Casey' });
    // console.log(magician1);
    assert.equal(magician1.name, 'The Great Scott');
    assert.equal(magician2.name, 'The Great Casey');
  });

  it('should be able to have an assistant', function () {
    var magician1 = new Magician({ name: 'Scott', assistant: true });
    var magician2 = new Magician({ name: 'Casey', assistant: false });
    // console.log(magician1);
    assert.equal(magician1.name, 'The Great Scott');
    assert.equal(magician1.assistant, true);

    assert.equal(magician2.name, 'The Great Casey');
    assert.equal(magician2.assistant, false);
  });

  it('should prefer wearing a top hat', function() {
    var magician = new Magician({ name: 'Scott' });
    // console.log(magician.favoriteAccessory);
    assert.equal(magician.favoriteAccessory, 'top hat');
  });

  it('should be able to have a different favorite accessory', function() {
    var magician = new Magician({ name: 'Casey', clothing: 'cape' });

    assert.equal(magician.favoriteAccessory, 'cape')
  });

  it('should be able to perform an incantation', function() {
    var magician = new Magician({ name: 'Scott' });
//new method
    var spell = magician.performIncantation('abracadabra');
    var charm = magician.performIncantation('allakazaam')
  // console.log(magician.spell);
    assert.equal(spell, 'ABRACADABRA!');
    assert.equal(charm, 'ALLAKAZAAM!');
  });

  it('should be able to pull a rabbit from the hat, if the magician has a top hat', function() {
    var magician1 = new Magician({ name: 'Hannah' });
    var magician2 = new Magician({ name: 'Kayla', clothing: 'top hat' });
    //new method
      //if clothing = top hat
      //spell 'Pull rabbit...'
    var spell1 = magician1.performTrick();
    var spell2 = magician2.performTrick();

    assert.equal(spell1, 'PULL RABBIT FROM TOP HAT');
    assert.equal(spell2, 'PULL RABBIT FROM TOP HAT');
  });

  it('should be able to pull a dove from the sleeve, if the magician does not have a top hat', function() {
    var magician = new Magician({ name: 'Leta', clothing: 'cape' });

    var spell = magician.performTrick();

    assert.equal(spell, 'PULL DOVE FROM SLEEVE');
  });

  it('should start not very confident', function() {
    var magician = new Magician({ name: 'Leta' });

    assert.equal(magician.confidencePercentage, 10);
  });

  it('should gain confidence after performing spells', function() {
    var magician = new Magician({ name: 'Leta' });

    magician.performTrick();
    magician.performTrick();
    magician.performTrick();
//gains 10 confidence points with every performTrick
    assert.equal(magician.confidencePercentage, 40);

    magician.performTrick();

    assert.equal(magician.confidencePercentage, 50);
  });

  it('should not be able to saw someone in half unless they\'re 100% confident', function() {
    var magician = new Magician({ name: 'Scott', assistant: true });
  //new method
    assert.equal(magician.performShowStopper(), 'Oh no, this trick is not ready!');
  //if performTrick happens less than 10 times - do not performShowStopper
    for (var i = 0; i < 10; i++) {
      magician.performTrick();
    }
    // console.log(magician.confidencePercentage);
    assert.equal(magician.performShowStopper(), 'WOW! The magician totally just sawed that person in half!');
  });

  it('should not be able to saw someone in half unless they have an assistant', function () {
    var magician1 = new Magician({ name: 'Scott', assistant: false });
    var magician2 = new Magician({ name: 'Hannah', assistant: true });

    assert.equal(magician1.performShowStopper(), 'Oh no, this trick is not ready!');
    assert.equal(magician2.performShowStopper(), 'Oh no, this trick is not ready!');

    for (var i = 0; i < 10; i++) {
      magician1.performTrick();
      magician2.performTrick();
    }

    assert.equal(magician1.performShowStopper(), 'Oh no, this trick is not ready!');
    assert.equal(magician2.performShowStopper(), 'WOW! The magician totally just sawed that person in half!');
  });
});
