// STARTS This section is where I am storing my variables. 
var wins = 0;
var currentLet = [];
var numberOfGuesses = 10;
var currentWord = document.getElementById("currentWord");
var numberOfGuesses1 = document.getElementById("numberOfGuesses");
var lettersUsed = document.getElementById("usedLet");
var wins = document.getElementById("wins");
var randArray = ["spiderman", "starlord", "ironman", "hulk", "goku"];
// Ends. ______________________________

// STARTS (My Random Word Varirable and Formula. _________
var randWord = randArray[Math.floor(Math.random() * ((randArray.length - 1) + 1))];
console.log("1", randWord);
// Ends. ______________________________


//STARTS (PART 1) this section is for displaying the letters the user has already pressed. (PART 2) Im adding if statments to make the letters appear if the key pressed is the right letter. (PART 3)Here I reset the game if the user has no more Gueses.____________

// PART 1
addEventListener("keydown", function (e) {

  var transForm = event.key;
  currentLet.push(transForm);
  document.getElementById("usedLet").innerHTML = currentLet;
  numberOfGuesses --;
  document.getElementById("numberOfGuesses").innerHTML = numberOfGuesses;


  //PART 2 (non-DRY) 
  if (transForm === randWord[0]) {
    document.getElementById("currentWord").innerHTML = randWord[0];
  }
  if (transForm === randWord[1]) {
    document.getElementById("currentWord1").innerHTML = randWord[1];
  }
  if (transForm === randWord[2]) {
    document.getElementById("currentWord2").innerHTML = randWord[2];
  }
  if (transForm === randWord[3]) {
    document.getElementById("currentWord3").innerHTML = randWord[3];
  }
  if (transForm === randWord[4]) {
    document.getElementById("currentWord4").innerHTML = randWord[4];
  }
  if (transForm === randWord[5]) {
    document.getElementById("currentWord5").innerHTML = randWord[5];
  }
  if (transForm === randWord[6]) {
    document.getElementById("currentWord6").innerHTML = randWord[6];
  }
  if (transForm === randWord[7]) {
    document.getElementById("currentWord7").innerHTML = randWord[7];
  }
  if (transForm === randWord[8]) {
    document.getElementById("currentWord8").innerHTML = randWord[8];
  }

 //PART 3 
  if (currentLet.length === 10){
    currentLet = [];
    numberOfGuesses = 10;
    document.getElementById("numberOfGuesses").innerHTML =10;
    document.getElementById("usedLet").innerHTML = "";
    randWord = randArray[Math.floor(Math.random() * ((randArray.length - 1) + 1))];
    newLength = randWord.length;
    document.getElementById("line").innerHTML  = "";
    document.getElementById("line1").innerHTML = "";
    document.getElementById("line2").innerHTML = "";
    document.getElementById("line3").innerHTML = "";
    document.getElementById("line4").innerHTML = "";
    document.getElementById("line5").innerHTML = "";
    document.getElementById("line6").innerHTML = "";
    document.getElementById("line7").innerHTML = "";
    document.getElementById("line8").innerHTML = "";
    makeLines();
  }
  
 
});
// Ends. (PART 1, PART 2, & PART 3) ______________________________



//START Im making this section to generate blank spaces the length of the word for user to know how many letters are in the word.________
function makeLines(){

    var newLength = randWord.length;
if (newLength === 4) {
  document.getElementById("line").innerHTML  = "_____";
  document.getElementById("line1").innerHTML = "_____";
  document.getElementById("line2").innerHTML = "_____";
  document.getElementById("line3").innerHTML = "_____";
};
if (newLength === 7) {
  document.getElementById("line").innerHTML  = "_____";
  document.getElementById("line1").innerHTML = "_____";
  document.getElementById("line2").innerHTML = "_____";
  document.getElementById("line3").innerHTML = "_____";
  document.getElementById("line4").innerHTML = "_____";
  document.getElementById("line5").innerHTML = "_____";
  document.getElementById("line6").innerHTML = "_____";
};
if (newLength === 8) {
  document.getElementById("line").innerHTML  = "_____";
  document.getElementById("line1").innerHTML = "_____";
  document.getElementById("line2").innerHTML = "_____";
  document.getElementById("line3").innerHTML = "_____";
  document.getElementById("line4").innerHTML = "_____";
  document.getElementById("line5").innerHTML = "_____";
  document.getElementById("line6").innerHTML = "_____";
  document.getElementById("line7").innerHTML = "_____";
};
if (newLength === 9) {
  document.getElementById("line").innerHTML  = "_____";
  document.getElementById("line1").innerHTML = "_____";
  document.getElementById("line2").innerHTML = "_____";
  document.getElementById("line3").innerHTML = "_____";
  document.getElementById("line4").innerHTML = "_____";
  document.getElementById("line5").innerHTML = "_____";
  document.getElementById("line6").innerHTML = "_____";
  document.getElementById("line7").innerHTML = "_____";
  document.getElementById("line8").innerHTML = "_____";
  
 

}};
// Ends. ______________________________

// START this calls my "makeLines" function for onload of page;
makeLines();
// Ends. ______________________________



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