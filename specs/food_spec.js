const assert = require('assert');
const Food = require('../food');

describe('Food', function(){

  let food;

  beforeEach(function(){
    food = new Food("bigos", 10);
  })

  it('Should have a name', function(){
    actual = food.name;
    assert.strictEqual(actual, "bigos");
  })

  it('Should have a replenishmentValue', function(){
    actual = food.replenishmentValue;
    assert.strictEqual(actual, 10);
  })
})
