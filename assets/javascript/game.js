// STARTS My Varirable Storage 
var wins = 0;
var currentLet = [];
var numberOfGuesses = 10;
var currentWord = document.getElementById("currentWord");
var numberOfGuesses = document.getElementById("numberOfGuesses");
var lettersUsed = document.getElementById("usedLet");
var wins = document.getElementById("wins");
// Ends ______________________________

// STARTS My Random Word Varirable and Formula _________
var randArray = ["spiderman", "starlord", "ironman", "hulk", "goku"];

var randWord = randArray[Math.floor(Math.random() * ((randArray.length - 1) + 1))];
console.log("1", randWord);
// Ends ______________________________


//START this section is for displaying the letters the user has already pressed(part 1)  &&  Im adding if statments to make the letters appear on the document if the key pressed matches any leters of the random word (part 2)____________

// PART 1
addEventListener("keydown", function (e) {
  
    var transForm = event.key;
    currentLet.push(transForm);
    document.getElementById("usedLet").innerHTML = currentLet;
  console.log("transForm",transForm);
  console.log("randWord",randWord[0]);

  // START this is where my (non-DRY) formula for letters to appear on the document when the correct ket is pressed.
  
  if(transForm === randWord[0]){
    alert("boom");
    document.getElementById("currentWord").innerHTML = randWord[0];
  }
  });
  // Ends ______________________________




// document.getElementById("currentWord1").innerHTML = randWord[1];
// if (event.key = randWord[1]) {
//   document.getElementById("currentWord1").style.display = 'block';
// };

// document.getElementById("currentWord2").innerHTML = randWord[2];
// if (event.key = randWord[2]) {
//   document.getElementById("currentWord2").style.display = 'block';
// };
// document.getElementById("currentWord3").innerHTML = randWord[3];
// if (event.key = randWord[3]) {
//   document.getElementById("currentWord3").style.display = 'block';
// };
// document.getElementById("currentWord4").innerHTML = randWord[4];
// if (event.key = randWord[4]) {
//   document.getElementById("currentWord4").style.display = 'block';
// };
// document.getElementById("currentWord5").innerHTML = randWord[5];
// if (event.key = randWord[5]) {
//   document.getElementById("currentWord5").style.display = 'block';
// };
// document.getElementById("currentWord6").innerHTML = randWord[6];
// if (event.key = randWord[6]) {
//   document.getElementById("currentWord6").style.display = 'block';
// };
// document.getElementById("currentWord7").innerHTML = randWord[7];
// if (event.key = randWord[7]) {
//   document.getElementById("currentWord7").style.display = 'block';
// };
// document.getElementById("currentWord8").innerHTML = randWord[8];
// if (event.key = randWord[8]) {
//   document.getElementById("currentWord8").style.display = 'block';
// };
// document.getElementById("currentWord9").innerHTML = randWord[9];
// if (event.key = randWord[9]) {
//   document.getElementById("currentWord9").style.display = 'block';
// };

// Ends ______________________________











// Im making this section for The Current Word________
















// This is my Trash Section of broken code________________________________

//  var boxCreate = document.createElement("div"); 
//  document.body.appendChild(boxCreate); 

// for(i = 0; i > 10; i++){
//     var randViewPort = document.getElementById("currentWord").innerHTML = randWord;
// };




// -----------
// function myBoxCreator() {
//   for (var i = 0; i < randWord.length; i++) {
//     var wordProd = randWord[i];
//     console.log("2yoyo", wordProd);
// }
// };
// // Ends ______________________________

// myBoxCreator();












// this doesnt work___________________________________________1
// wins.addEventListener("keydown", userGuess);

// function userGuess(){
//  alert("yo");
// }