var assert = require('chai').assert;
var Vampire = require('../exercises/vampire');

describe('Vampire', function() {

  it('should be a function', function() {
    assert.isFunction(Vampire);
  });

  it('should instantiate our good friend, Vampire', function() {
    var dracula = new Vampire();
//declaring a new instance
    assert.instanceOf(dracula, Vampire);
  });

  it('should have a name', function() {
    var vampire = new Vampire('Jhun');
  //new param of name
    assert.equal(vampire.name, 'Jhun');
  });

  it('should have a pet bat as a default', function() {
    var vampire = new Vampire('Brittany');
    //new param of pet
    assert.equal(vampire.pet, 'bat');
  });

  it('should take an argument for pet', function() {
    var vampire = new Vampire('Jeff', 'fox');
    var vampire = new Vampire('David', 'armadillo');
    //pet argument, or default to 'bat'
    assert.equal(vampire.pet, 'fox');
    assert.equal(vampire.pet, 'armadillo');
  });

  it('should be thirsty', function() {
    var vampire = new Vampire('Andy');
  //new key of thirsty, with a value of true
    assert.equal(vampire.thirsty, true);
  });

  it('should not be thirsty if vampire has drank', function() {
    var vampire = new Vampire('Meeka');
    //invoking a method of drink
    vampire.drink();
    //this.thirsty = false;
    assert.equal(vampire.thirsty, false);
  });

  it('should be start with no ounces of blood drank', function() {
    var vampire = new Vampire('Bobby');
    //new key with value of 0
        // console.log(vampire.ouncesDrank);
    assert.equal(vampire.ouncesDrank, 0);
  });

  it('should drink 10 ounces of blood at a time', function() {
    var vampire = new Vampire('Margot');
    //calling the drink method 3 times, each time is 10
    vampire.drink();
    vampire.drink();
    vampire.drink();
    // console.log(vampire.ouncesDrank);
    assert.equal(vampire.ouncesDrank, 30);
  });

  it('should be full after drinking 50 ounces', function() {
    var vampire = new Vampire('Javi');

    vampire.drink();

    assert.equal(vampire.ouncesDrank, 10);

    vampire.drink();

    assert.equal(vampire.ouncesDrank, 20);

    vampire.drink();

    assert.equal(vampire.ouncesDrank, 30);

    vampire.drink();

    assert.equal(vampire.ouncesDrank, 40);

    vampire.drink();

    assert.equal(vampire.ouncesDrank, 50);

    vampire.drink();

    assert.equal(vampire.ouncesDrank, 50);
  //calling for an if conditional
    assert.equal(vampire.drink(), 'I\'m too full to drink anymore!');
  });
});
