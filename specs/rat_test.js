const assert = require('assert');
const Rat = require('../rat');
const Food = require('../food');

describe('Rat', function(){

  let rat;
  let food;

  beforeEach(function(){
    rat = new Rat();
    food1 = new Food("ice-cream", 5);
    food2 = new Food("bigos", 10);
  })

  it('Should be able to touch food which turns poisonous', function(){
    rat.touchFood(food1);
    const actual = food1.replenishmentValue;
    assert.strictEqual(actual, -5);
  })
})
