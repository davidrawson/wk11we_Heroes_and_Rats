const assert = require('assert');
const Hero = require('../hero.js');

describe('Hero', function(){

  let hero;

  beforeEach(function(){
    hero = new Hero("Westley", "Mostly Dead", "Buttermilk");
  });

  it('Should have a name', function(){
    const actual = hero.name;
    assert.strictEqual(actual, "Westley");
  });

  it('Should have health', function(){
    const actual = hero.health;
    assert.strictEqual(actual, "Mostly Dead");
  })

  it('Should have a favourite food', function(){
    const actual = hero.favouriteFood;
    assert.strictEqual(actual, "Buttermilk");
  })

  it('Should talk', function(){
    const actual = hero.talk();
    assert.strictEqual(actual, "Hi, my name is Westley")
  })
});
