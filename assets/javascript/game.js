var myGame = {
  
    heros: {
      spiderman: {
        img: "https://news.marvel.com/wp-content/uploads/sites/28/2017/05/Spiderman_post_master-7-960x540.jpg"
      },
  
      ironman: {
        img: "http://pad2.whstatic.com/images/thumb/8/87/Draw-Iron-Man-Step-12.jpg/aid1656821-v4-728px-Draw-Iron-Man-Step-12.jpg"
      },
  
      captainamerica: {
        
        img: "https://deadseriousness.com/wp-content/uploads/2016/05/captain-america-.jpg"
      },
  
      antman: {
        img: "https://lumiere-a.akamaihd.net/v1/images/image_f8386c12.jpeg?height=354&region=0%2C0%2C1920%2C1080&width=630"
      },
  
      flash: {
        img: "http://2.bp.blogspot.com/-pJRSh9tfMZA/Uzg7z2i_guI/AAAAAAAAY2M/XPFoSpPRs8w/s1600/Flash+(Barry+Allen)+-+Novos+52.jpg"
      },
  
      blackpanther: {
        img: "http://www.strangekidsclub.com/wp-content/uploads/2012/07/black-panther-vs-captain-america.png"
      },
  
      thor: {
        img: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-k2hfnf_00f19de9.jpeg"
      },
      scarletspider: {
        img: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-k2hfnf_00f19de9.jpeg"
      },
      rocket: {
        img: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-k2hfnf_00f19de9.jpeg"
      },
      babygroot: {
        img: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-k2hfnf_00f19de9.jpeg"
      },
      starlord: {
        img: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-k2hfnf_00f19de9.jpeg"
      },
      hulk: {
        img: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-k2hfnf_00f19de9.jpeg"
      },
      deadpool: {
        img: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-k2hfnf_00f19de9.jpeg"
      },
      wolverine: {
        img: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-k2hfnf_00f19de9.jpeg"
      },
      blackwidow: {
        img: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-k2hfnf_00f19de9.jpeg"
      },
      nickfury: {
        img: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-k2hfnf_00f19de9.jpeg"
      },
     
      
    },
  
    chosenWord: "",
    wordBlanks: [],
    lettersGuessed: [],
    lettersInWord: [],
    guesses: 10,
    wins: 0,
    loses:0,
    blanksNum: 0,
  
  
    startGame: function () {
      this.lettersGuessed = [];
      this.lettersInWord = [];
      
      var theWord = Object.keys(this.heros);
  
      var theWord = Object.keys(this.heros);
    
      this.chosenWord = theWord[Math.floor(Math.random() * theWord.length)]
  
      console.log(this.chosenWord);
  
      this.lettersInWord = this.chosenWord.split("");
  
      this.blanksNum = this.lettersInWord.length;
  
      this.wordBlanks = [];
  
      this.lettersGuessed = [],
  
      document.getElementById("wordBank").innerHTML = this.lettersGuessed;
  
      this.guesses = this.lettersInWord.length + 1;
      
      document.getElementById("numberOfGuesses"),innerHTML = this.guesses;
  
      for (var i = 0; i < this.blanksNum; i++) {
  
        this.wordBlanks.push("_");
  
        var stringBlanks = this.wordBlanks.join(" ");
  
        document.getElementById("line").innerHTML = stringBlanks;
  
        document.getElementById("numberOfGuesses").innerHTML = this.guesses;
      }
      
    },
  
    checkLetters: function (letter) {
  
      var letterCheck = false;
      var dontRepeat = true;
  
      for (var p = 0; p < this.blanksNum; p++) {
  
        if (this.chosenWord[p] === letter) {
  
          letterCheck = true;
        }
      }
  
      if (letterCheck) {
  
        dontRepeat = false;
  
        for (var i = 0; i < this.blanksNum; i++) {
  
          if (letter === this.lettersInWord[i]) {
  
            this.wordBlanks[i] = letter;
  
            document.getElementById("line").innerHTML = this.wordBlanks.join(" ");
            this.scoreKeeper();
          }
        }
      }
  
      for (var d = 0; d < this.blanksNum; d++) {
  
        if (this.lettersGuessed[d] === letter) {
  
          dontRepeat = false;
        }
      }
  
      if (dontRepeat) {
  
        this.lettersGuessed.push(letter);
        
        this.guesses--;
    
        document.getElementById("wordBank").innerHTML = this.lettersGuessed.join(" ");
  
        document.getElementById("numberOfGuesses").innerHTML = this.guesses;
  
        this.scoreKeeper();
      }
    },
  
    scoreKeeper: function () {
  
      var wordWin = this.wordBlanks.join("");
  
      
  if (this.guesses == 0) {
  
      this.loses++;
  
      document.getElementById("loses").innerHTML = this.loses;
  
      this.startGame();
      alert('HYDRA DEFEATED YOUR HERO! HIT A KEY TO FIGHT AGAIN!')
    }
    
      
      if (this.chosenWord === wordWin){
        this.wins++;
        this.startGame();
        document.getElementById("wins").innerHTML = this.wins;
        alert('WE BEAT A BAG GUY! GOOD JOB! HIT A KEY TO FIGHT AGAIN!')
      }
    
  
  
    }
  }
  
  myGame.startGame();
  document.onkeyup = function (event) {
  
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    myGame.checkLetters(letterGuessed);
  };
// This is the end of my program "SUPER HERO HANG MAN". MADE FOR MY 2 BOYS AIDEN AND JACOB.
