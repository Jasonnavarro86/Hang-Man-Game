// STARTS: This section is where I am storing my variables. 
var wins = 0;
var currentLet = [];
var numberOfGuesses = 10;
var currentWord = document.getElementById("currentWord");
var numberOfGuesses1 = document.getElementById("numberOfGuesses");
var lettersUsed = document.getElementById("usedLet");
var wins1 = document.getElementById("wins");
var randArray = ["spiderman", "starlord", "ironman", "hulk", "goku"];
var gokuArray = [];
var spiderArray = [];
var starlordArray = [];
var hulkArray = [];
var ironArray = [];
// Ends. ______________________________

// STARTS: (My Random Word Varirable and Formula. _________
var randWord = randArray[Math.floor(Math.random() * ((randArray.length - 1) + 1))];

// Ends. ______________________________


//STARTS: Here I have a on keyevent with new varibles locally that i could create diffrent functions for but I ended up keeping all the code in here just to get the program functioing and make sure I turned in both assignments. 

// PART 1 This section is for displaying the letters the user has already pressed and also for taking away their # of guesses left. I push the keys into an empty array and display it in the html.
addEventListener("keydown", function (e) {

  var transForm = event.key;
  currentLet.push(transForm);
  document.getElementById("usedLet").innerHTML = currentLet;
  numberOfGuesses--;
  document.getElementById("numberOfGuesses").innerHTML = numberOfGuesses;

  //PART 2 (non-DRY)  Im adding if statments to make the letters appear if the key that is pressed is the correct letter in a diffrent section of the html.
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


 //PART 3 this is where I reset my code if the number of guesses is equal to 10.
 if (currentLet.length === 10) {
  currentLet = [];
  numberOfGuesses = 10;
  document.getElementById("numberOfGuesses").innerHTML = 10;
  document.getElementById("usedLet").innerHTML = "";
  randWord = randArray[Math.floor(Math.random() * ((randArray.length - 1) + 1))];
  newLength = randWord.length;
  document.getElementById("line").innerHTML = "";
  document.getElementById("line1").innerHTML = "";
  document.getElementById("line2").innerHTML = "";
  document.getElementById("line3").innerHTML = "";
  document.getElementById("line4").innerHTML = "";
  document.getElementById("line5").innerHTML = "";
  document.getElementById("line6").innerHTML = "";
  document.getElementById("line7").innerHTML = "";
  document.getElementById("line8").innerHTML = "";
  document.getElementById("currentWord").innerHTML = "";
  document.getElementById("currentWord1").innerHTML = "";
  document.getElementById("currentWord2").innerHTML = "";
  document.getElementById("currentWord3").innerHTML = "";
  document.getElementById("currentWord4").innerHTML = "";
  document.getElementById("currentWord5").innerHTML = "";
  document.getElementById("currentWord6").innerHTML = "";
  document.getElementById("currentWord7").innerHTML = "";
  document.getElementById("currentWord8").innerHTML = "";
  makeLines();
}




  // PART 4: HERE I HAVE MY RESETS FOR SOLVING ANY OF MY 5 WORDS (non DRY). _____

  // RESET 1 SPIDER MAN SOLVED RESET
  // here if the right key is pressed it is pushed into an empty array and disables it from counting again. 
  if (transForm === "s" && randWord === randArray[0]) {
    spiderArray.push(transForm);
    
    
  }
  if (transForm === "p" && randWord === randArray[0]) {
    spiderArray.push(transForm);
    
  }
  if (transForm === "i" && randWord === randArray[0]) {
    spiderArray.push(transForm);
    
  }
  if (transForm === "d" && randWord === randArray[0]) {
    spiderArray.push(transForm);
    
  }
  if (transForm === "e" && randWord === randArray[0]) {
    spiderArray.push(transForm);
    
  }
  if (transForm === "r" && randWord === randArray[0]) {
    spiderArray.push(transForm);
   
  }
  if (transForm === "m" && randWord === randArray[0]) {
    spiderArray.push(transForm);
    
  }
  if (transForm === "a" && randWord === randArray[0]) {
    spiderArray.push(transForm);
    
  }
  if (transForm === "n" && randWord === randArray[0]) {
    spiderArray.push(transForm);
    
  }
  // here if the empty array equals the length of the word then player gets a win and resets game for a new word.
  if (spiderArray.length === 9 && randWord === randArray[0]) {
    currentLet = [];
    numberOfGuesses = 10;
    document.getElementById("numberOfGuesses").innerHTML = 10;
    wins++;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("usedLet").innerHTML = "";
    randWord = randArray[Math.floor(Math.random() * ((randArray.length - 1) + 1))];
    document.getElementById("line").innerHTML = "";
    document.getElementById("line1").innerHTML = "";
    document.getElementById("line2").innerHTML = "";
    document.getElementById("line3").innerHTML = "";
    document.getElementById("line4").innerHTML = "";
    document.getElementById("line5").innerHTML = "";
    document.getElementById("line6").innerHTML = "";
    document.getElementById("line7").innerHTML = "";
    document.getElementById("line8").innerHTML = "";
    makeLines();
    document.getElementById("currentWord").innerHTML = "";
    document.getElementById("currentWord1").innerHTML = "";
    document.getElementById("currentWord2").innerHTML = "";
    document.getElementById("currentWord3").innerHTML = "";
    document.getElementById("currentWord4").innerHTML = "";
    document.getElementById("currentWord5").innerHTML = "";
    document.getElementById("currentWord6").innerHTML = "";
    document.getElementById("currentWord7").innerHTML = "";
    document.getElementById("currentWord8").innerHTML = "";
    spiderArray = [];
  }
  

  // RESET 2 STAR LORD SOLVED RESET
  // here if the right key is pressed it is pushed into an empty array and disables it from counting again. 
  if (transForm === "s" && randWord === randArray[1]) {
    starlordArray.push(transForm);
   
  }
  if (transForm === "t" && randWord === randArray[1]) {
    starlordArray.push(transForm);
    
  }
  if (transForm === "a" && randWord === randArray[1]) {
    starlordArray.push(transForm);
    
  }
  if (transForm === "r" && randWord === randArray[1]) {
    starlordArray.push(transForm);
    starlordArray.push(transForm);
    
  }
  if (transForm === "l" && randWord === randArray[1]) {
    starlordArray.push(transForm);
   
  }
  if (transForm === "o" && randWord === randArray[1]) {
    starlordArray.push(transForm);
    
  }
  
  if (transForm === "d" && randWord === randArray[1]) {
    starlordArray.push(transForm);
   
  }
// here if the empty array equals the length of the word then player gets a win and resets game for a new word.
  if (starlordArray.length === 8 && randWord === randArray[1]) {
    currentLet = [];
    numberOfGuesses = 10;
    document.getElementById("numberOfGuesses").innerHTML = 10;
    wins++;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("usedLet").innerHTML = "";
    randWord = randArray[Math.floor(Math.random() * ((randArray.length - 1) + 1))];
    document.getElementById("line").innerHTML = "";
    document.getElementById("line1").innerHTML = "";
    document.getElementById("line2").innerHTML = "";
    document.getElementById("line3").innerHTML = "";
    document.getElementById("line4").innerHTML = "";
    document.getElementById("line5").innerHTML = "";
    document.getElementById("line6").innerHTML = "";
    document.getElementById("line7").innerHTML = "";
    document.getElementById("line8").innerHTML = "";
    makeLines();
    document.getElementById("currentWord").innerHTML = "";
    document.getElementById("currentWord1").innerHTML = "";
    document.getElementById("currentWord2").innerHTML = "";
    document.getElementById("currentWord3").innerHTML = "";
    document.getElementById("currentWord4").innerHTML = "";
    document.getElementById("currentWord5").innerHTML = "";
    document.getElementById("currentWord6").innerHTML = "";
    document.getElementById("currentWord7").innerHTML = "";
    document.getElementById("currentWord8").innerHTML = "";
    starlordArray = [];
   
  }
 

   // RESET 3 IRON MAN SOLVED RESET
    // here if the right key is pressed it is pushed into an empty array and disables it from counting again. 
   if (transForm === "i" && randWord === randArray[2]) {
    ironArray.push(transForm);
    
  }
  if (transForm === "r" && randWord === randArray[2]) {
    ironArray.push(transForm);
    
  }
  if (transForm === "o" && randWord === randArray[2]) {
    ironArray.push(transForm);
 
  }
  if (transForm === "n" && randWord === randArray[2]) {
    ironArray.push(transForm);
    ironArray.push(transForm);
   
  }
  if (transForm === "m" && randWord === randArray[2]) {
    ironArray.push(transForm);
   
  }
  if (transForm === "a" && randWord === randArray[2]) {
    ironArray.push(transForm);
   
  }
  
 // here if the empty array equals the length of the word then player gets a win and resets game for a new word.

  if (ironArray.length === 7 && randWord === randArray[2]) {
    currentLet = [];
    numberOfGuesses = 10;
    document.getElementById("numberOfGuesses").innerHTML = 10;
    wins++;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("usedLet").innerHTML = "";
    randWord = randArray[Math.floor(Math.random() * ((randArray.length - 1) + 1))];
    document.getElementById("line").innerHTML = "";
    document.getElementById("line1").innerHTML = "";
    document.getElementById("line2").innerHTML = "";
    document.getElementById("line3").innerHTML = "";
    document.getElementById("line4").innerHTML = "";
    document.getElementById("line5").innerHTML = "";
    document.getElementById("line6").innerHTML = "";
    document.getElementById("line7").innerHTML = "";
    document.getElementById("line8").innerHTML = "";
    makeLines();
    document.getElementById("currentWord").innerHTML = "";
    document.getElementById("currentWord1").innerHTML = "";
    document.getElementById("currentWord2").innerHTML = "";
    document.getElementById("currentWord3").innerHTML = "";
    document.getElementById("currentWord4").innerHTML = "";
    document.getElementById("currentWord5").innerHTML = "";
    document.getElementById("currentWord6").innerHTML = "";
    document.getElementById("currentWord7").innerHTML = "";
    document.getElementById("currentWord8").innerHTML = "";
    ironArray = [];
  }
  

  
  // RESET 4 HULK SOLVED RESET
   // here if the right key is pressed it is pushed into an empty array and disables it from counting again. 
  if (transForm === "h" && randWord === randArray[3]) {
    hulkArray.push(transForm);
    
  }
  if (transForm === "u" && randWord === randArray[3]) {
    hulkArray.push(transForm);
    
  }
  if (transForm === "l" && randWord === randArray[3]) {
    hulkArray.push(transForm);
    
  }
  if (transForm === "k" && randWord === randArray[3]) {
    hulkArray.push(transForm);
    
  }
  // here if the empty array equals the length of the word then player gets a win and resets game for a new word.
  if (hulkArray.length === 4 && randWord === randArray[3]) {
    currentLet = [];
    numberOfGuesses = 10;
    document.getElementById("numberOfGuesses").innerHTML = 10;
    document.getElementById("usedLet").innerHTML = "";
    randWord = randArray[Math.floor(Math.random() * ((randArray.length - 1) + 1))];
    wins++;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("line").innerHTML = "";
    document.getElementById("line1").innerHTML = "";
    document.getElementById("line2").innerHTML = "";
    document.getElementById("line3").innerHTML = "";
    document.getElementById("line4").innerHTML = "";
    document.getElementById("line5").innerHTML = "";
    document.getElementById("line6").innerHTML = "";
    document.getElementById("line7").innerHTML = "";
    document.getElementById("line8").innerHTML = "";
    makeLines();
    document.getElementById("currentWord").innerHTML = "";
    document.getElementById("currentWord1").innerHTML = "";
    document.getElementById("currentWord2").innerHTML = "";
    document.getElementById("currentWord3").innerHTML = "";
    document.getElementById("currentWord4").innerHTML = "";
    document.getElementById("currentWord5").innerHTML = "";
    document.getElementById("currentWord6").innerHTML = "";
    document.getElementById("currentWord7").innerHTML = "";
    document.getElementById("currentWord8").innerHTML = "";
    hulkArray = [];
   
  }
 

  // RESET 5 GOKU SOLVED RESET
   // here if the right key is pressed it is pushed into an empty array and disables it from counting again. 
  if (transForm === "g" && randWord === randArray[4]) {
    gokuArray.push(transForm);
   
  }
  if (transForm === "o" && randWord === randArray[4]) {
    gokuArray.push(transForm);
    
  }
  if (transForm === "k" && randWord === randArray[4]) {
    gokuArray.push(transForm);
    
  }
  if (transForm === "u" && randWord === randArray[4]) {
    gokuArray.push(transForm);
    
  }
  // here if the empty array equals the length of the word then player gets a win and resets game for a new word.

  if (gokuArray.length === 4 && randWord === randArray[4]) {
    currentLet = [];
    numberOfGuesses = 10;
    document.getElementById("numberOfGuesses").innerHTML = 10;
    document.getElementById("usedLet").innerHTML = "";
    randWord = randArray[Math.floor(Math.random() * ((randArray.length - 1) + 1))];
    wins++;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("line").innerHTML = "";
    document.getElementById("line1").innerHTML = "";
    document.getElementById("line2").innerHTML = "";
    document.getElementById("line3").innerHTML = "";
    document.getElementById("line4").innerHTML = "";
    document.getElementById("line5").innerHTML = "";
    document.getElementById("line6").innerHTML = "";
    document.getElementById("line7").innerHTML = "";
    document.getElementById("line8").innerHTML = "";
    makeLines();
    document.getElementById("currentWord").innerHTML = "";
    document.getElementById("currentWord1").innerHTML = "";
    document.getElementById("currentWord2").innerHTML = "";
    document.getElementById("currentWord3").innerHTML = "";
    document.getElementById("currentWord4").innerHTML = "";
    document.getElementById("currentWord5").innerHTML = "";
    document.getElementById("currentWord6").innerHTML = "";
    document.getElementById("currentWord7").innerHTML = "";
    document.getElementById("currentWord8").innerHTML = "";
    gokuArray = [];
  }
 
  // ENDS PART 4 (RESETS)_______________________

});
// Ends EVENT LISTENER KEYUP (PART 1, PART 2, PART 3, PART 4) ______________________________

//STARTS: This section generates blank spaces the length of the word right under where the word will appear to clue player how many letters are in the winning word.________
function makeLines() {

  var newLength = randWord.length;
  if (newLength === 4) {
    document.getElementById("line").innerHTML = "_____";
    document.getElementById("line1").innerHTML = "_____";
    document.getElementById("line2").innerHTML = "_____";
    document.getElementById("line3").innerHTML = "_____";
  };
  if (newLength === 7) {
    document.getElementById("line").innerHTML = "_____";
    document.getElementById("line1").innerHTML = "_____";
    document.getElementById("line2").innerHTML = "_____";
    document.getElementById("line3").innerHTML = "_____";
    document.getElementById("line4").innerHTML = "_____";
    document.getElementById("line5").innerHTML = "_____";
    document.getElementById("line6").innerHTML = "_____";
  };
  if (newLength === 8) {
    document.getElementById("line").innerHTML = "_____";
    document.getElementById("line1").innerHTML = "_____";
    document.getElementById("line2").innerHTML = "_____";
    document.getElementById("line3").innerHTML = "_____";
    document.getElementById("line4").innerHTML = "_____";
    document.getElementById("line5").innerHTML = "_____";
    document.getElementById("line6").innerHTML = "_____";
    document.getElementById("line7").innerHTML = "_____";
  };
  if (newLength === 9) {
    document.getElementById("line").innerHTML = "_____";
    document.getElementById("line1").innerHTML = "_____";
    document.getElementById("line2").innerHTML = "_____";
    document.getElementById("line3").innerHTML = "_____";
    document.getElementById("line4").innerHTML = "_____";
    document.getElementById("line5").innerHTML = "_____";
    document.getElementById("line6").innerHTML = "_____";
    document.getElementById("line7").innerHTML = "_____";
    document.getElementById("line8").innerHTML = "_____";
  }
};
// Ends. ______________________________

// STARTS: This calls my "makeLines" function for onload of page;
makeLines();
// Ends. ______________________________


// This is the end of my program "SUPER HERO HANG MAN". MADE FOR MY 2 BOYS AIDEN AND JACOB.




















