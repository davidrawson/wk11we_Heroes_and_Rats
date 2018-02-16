const Hero = function(name, health, favouriteFood){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.talk = function(){
    return ("Hi, my name is " + this.name);
  }
  this.tasks = [];
}

// Hero.prototype.talk = function(){
//   // console.log("Hi, my name is", this.name);
//   return ("Hi, my name is " + this.name);
// }

// You must remeber to tell it WHAT to export.
// Don't keep making that mistake.
module.exports = Hero;
