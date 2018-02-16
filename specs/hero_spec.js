const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');
const Task = require('../task.js');

describe('Hero', function(){

  let hero;
  let food;

  beforeEach(function(){
    hero = new Hero("Westley", 50, "bigos");
    food = new Food("Custard Creams", 8);
    garlicFood = new Food("bigos", 10);
    hardTask = new Task("Rescue Buttercup", 10, 7, 100000);
    easyTask = new Task("Go to shops for milk", 1, 10, 2);
    mediumTask = new Task("Rescue cat from tree", 5, 6, 5000);

    // hero = new Hero("Westley", "Mostly Dead", "bigos");
  });

  it('Should have a name', function(){
    const actual = hero.name;
    assert.strictEqual(actual, "Westley");
  });

  it('Should have health', function(){
    const actual = hero.health;
    assert.strictEqual(actual, 50);
    // assert.strictEqual(actual, "Mostly Dead");
  })

  it('Should have a favourite food', function(){
    const actual = hero.favouriteFood;
    assert.strictEqual(actual, "bigos");
  })

  it('Should talk', function(){
    const actual = hero.talk();
    assert.strictEqual(actual, "Hi, my name is Westley")
  })

  it('Should be able to eat food, and health should go up by the replenishment value', function(){
    hero.eat(food);
    const actual = hero.health;
    assert.strictEqual(actual, 58);
  })

  it('Should have their health should go up by 1.5 * value when eating favouriteFood.', function(){
    hero.eat(garlicFood);
    const actual = hero.health;
    assert.strictEqual(actual, 65);
  })

  it('Should add a task', function(){
    hero.addTask(hardTask);
    const actual = hero.numberOfTasks();
    assert.strictEqual(actual, 1)
  })

  it('Should sort tasks by difficulty', function(){
    hero.addTask(mediumTask);
    hero.addTask(easyTask);
    hero.addTask(hardTask);
    hero.addTask(easyTask);
    hero.addTask(mediumTask);
    // console.log(hero.tasks);
    const actual = hero.sortTaskByDifficulty();
    // console.log(hero.tasks);
    assert.strictEqual(actual, 10);
  })

  it('Should sort tasks by urgency', function(){
    hero.addTask(hardTask);
    hero.addTask(easyTask);
    hero.addTask(mediumTask);
    const actual = hero.sortTaskByUrgency();
    // console.log(hero.tasks);
    assert.strictEqual(actual, 10);
  })

  it('Should sort tasks by reward', function(){
    hero.addTask(easyTask);
    hero.addTask(easyTask);
    hero.addTask(hardTask);
    hero.addTask(easyTask);
    hero.addTask(mediumTask);
    const actual = hero.sortTaskByReward();
    assert.strictEqual(actual, 100000);
  })

  it('Should be able to view complete tasks', function(){
    hero.addTask(hardTask);
    easyTask.completed = true;
    hero.addTask(easyTask);
    hero.addTask(mediumTask);
    const actual = hero.completedTasks();
    assert.deepStrictEqual(actual, [easyTask]);
  })
});
