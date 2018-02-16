const Hero = function(name, health, favouriteFood){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}

Hero.prototype.talk = function(){
  return ("Hi, my name is " + this.name);
}

Hero.prototype.eat = function(food){
  if (this.favouriteFood === food.name){
    this.health += (food.replenishmentValue*1.5);
  } else {
    this.health += food.replenishmentValue;
  }
}

Hero.prototype.numberOfTasks = function(){
  return this.tasks.length;
}

Hero.prototype.addTask = function(task){
  this.tasks.push(task);
}

Hero.prototype.sortTaskByDifficulty = function(){
  this.tasks.sort(function(elementA, elementB){
    return elementB.difficulty -  elementA.difficulty;
  })
  return this.tasks[0].difficulty;
}

Hero.prototype.sortTaskByUrgency = function(){
  this.tasks.sort(function(elementA, elementB){
    return elementB.urgency -  elementA.urgency;
  })
  return this.tasks[0].urgency;
}

Hero.prototype.sortTaskByReward = function(){
  this.tasks.sort(function(elementA, elementB){
    return elementB.reward -  elementA.reward;
  })
  return this.tasks[0].reward;
}

Hero.prototype.completedTasks = function(){
  const newArray = this.tasks.filter(function(element){
    return (element.completed === true);
  })
  return newArray;
}

Hero.prototype.incompleteTasks = function(){
  const newArray = this.tasks.filter(function(element){
    return (element.completed === false);
  })
  return newArray;
}

// You must remeber to tell it WHAT to export.
// Don't keep making that mistake.
module.exports = Hero;
