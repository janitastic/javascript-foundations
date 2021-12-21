var assert = require('chai').assert;
var Snack = require('./snack');

describe('Snack', function() {

  it('should be extra delicious', function() {
    var pistachio = new Snack("Pistachio");
  //not passing in a param of 'extra'
    assert.equal(pistachio.deliciousLevel, "extra");
  });

  it('should have a type', function() {
    var pistachio = new Snack("Pistachio");
    var fruitSnack = new Snack("Fruit Snack");

    assert.equal(pistachio.type, "Pistachio");
    assert.equal(fruitSnack.type, "Fruit Snack");
  });

  it('should start fully stocked', function() {
    var pistachio = new Snack("Pistachio");

    assert.equal(pistachio.amount, 100);
  });

  it('should start NOT inside of a lunch box', function() {
    var pistachio = new Snack("Pistachio");

    assert.equal(pistachio.isInLunchBox, false);
  });

  it('should see stock decrease after eaten', function() {
    var pistachio = new Snack("Pistachio");

    pistachio.getEaten();//new method
    pistachio.getEaten();
    pistachio.getEaten();
    assert.equal(pistachio.amount, 70);
  });

  it('should be cutting it close if 20% or less remaining', function() {
    var pistachio = new Snack("Pistachio");

    pistachio.getEaten();//90
    pistachio.getEaten();//80
    pistachio.getEaten();//70
    pistachio.getEaten();//60
    pistachio.getEaten();//50
    pistachio.getEaten();//40
    pistachio.getEaten();//30
    assert.equal(pistachio.cuttingItClose, false);
    pistachio.getEaten();//20
    assert.equal(pistachio.cuttingItClose, true);
  });

  it('should be considered healthy if the word "fruit" is in it', function() {
    var pistachio = new Snack("Pistachio");
    var mixedFruit = new Snack("Mixed fruit");
    var fruit = new Snack("Fruit");
    var apple = new Snack("Apple");

// console.log('pistachio', pistachio.checkForHealthy());
    assert.equal(pistachio.checkForHealthy(), false);
// console.log('mixedFruit', mixedFruit.checkForHealthy());
    assert.equal(mixedFruit.checkForHealthy(), true);
// console.log('fruit', mixedFruit.checkForHealthy());
    assert.equal(fruit.checkForHealthy(), true);
// console.log('apple', apple.checkForHealthy());
    assert.equal(apple.checkForHealthy(), false);
    // this is obviously a silly way to find healthy food IRL.
  });

});
