$(document).ready(function () {
  // Your code goes here
$("<div>")
  .css("height", 15)
  .css("width", 15)
  .css("background-color", "black")
  .css("position", "absolute")
  .css("top", 50)
  .css("left", 50)
  .appendTo("#die");
});

function makeDot(top, left, elementID) {
  $('<div>')
  .addClass('dot')
  .css('top', top)
  .css('left', left)
  .appendTo(elementID);
}


function rollDie(dieId) {  
$(dieId).empty();

  var randomNum = Math.ceil(Math.random() * 6);
console.log(randomNum);

if (randomNum === 1) {
  makeDot(50, 50, dieId); // middle middle
} else if (randomNum === 2) {
  makeDot(25, 25, dieId); // top left
  makeDot(75, 75, dieId); // bottom right
} else if (randomNum === 3) {
  makeDot(25, 25, dieId); // top left
  makeDot(75, 75, dieId); // bottom right
  makeDot(50, 50, dieId); // middle middle
} else if (randomNum === 4) {
  makeDot(75, 75, dieId); // bottom right
  makeDot(25, 25, dieId); // top left
  makeDot(25, 75, dieId); // bottom left
  makeDot(75, 25, dieId); // top right
} else if (randomNum === 5) {
  makeDot(50, 50, dieId); // middle middle
  makeDot(75, 75, dieId); // bottom right
  makeDot(25, 25, dieId); // top left
  makeDot(25, 75, dieId); // bottom left
  makeDot(75, 25, dieId); // top right
} else if (randomNum === 6) {
  makeDot(25, 25, dieId); 
  makeDot(25, 50, dieId); 
  makeDot(25, 75, dieId); 
  makeDot(75, 25, dieId); 
  makeDot(75, 50, dieId);
  makeDot(75, 75, dieId); 
  
}
};


function handleClick() {
  rollDie("#die");
}


$("#die").on("click", handleClick);

