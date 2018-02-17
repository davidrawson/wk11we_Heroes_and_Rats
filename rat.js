const Rat = function(){

}

Rat.prototype.touchFood = function(food){
  food.replenishmentValue *= -1;
}


module.exports = Rat;
