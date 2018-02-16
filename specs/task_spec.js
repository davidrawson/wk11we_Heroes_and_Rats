const assert = require('assert');
const Task = require('../task');

describe('Task', function(){

    let task;

    beforeEach(function(){
      task = new Task("Rescue Buttercup", "Mostly impossible", "Yesterday", "True love");
    })

    it('Should have a description', function(){
      const actual = task.description;
      assert.strictEqual(actual, "Rescue Buttercup");
    })

    it('Should have a difficulty level', function(){
      const actual = task.difficulty;
      assert.strictEqual(actual, "Mostly impossible")
    })

    it('Should have an urgency', function(){
      const actual = task.urgency;
      assert.strictEqual(actual, "Yesterday")
    })

    it('Should have a completed status', function(){
      const actual = task.completed;
      assert.strictEqual(actual, false);
    })
})
