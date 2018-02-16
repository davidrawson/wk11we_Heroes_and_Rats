const Task = function(description, difficulty, urgency, reward){
  this.description = description;
  this.difficulty = difficulty;  // 1 to 10
  this.urgency = urgency;       // 1 to 10
  this.reward = reward;         // 1 to 100
  this.completed = false;
}


// You must remeber to tell it WHAT to export.
module.exports = Task;
