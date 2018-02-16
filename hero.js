const Hero = function(name, health, favouriteFood){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;

}

Hero.prototype.canTalk = function(){
  console.log("Hi, I'm", this.name);
}
