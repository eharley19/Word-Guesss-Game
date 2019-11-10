window.onload = () => {
  var words = [
    "extraterrestrial",
    "stellar",
    "galaxy",
    "planet",
    "asteroid",
    "alien",
    "spaceship",
    "nebula",
    "moon"
  ];
  function chooseWord() {
    return words[Math.floor(Math.random() * words.length)];
  }


  var compWord = chooseWord();
  console.log(compWord);

  var letterSpace = "";
  var correctGuesses = [];
  var incorrectGuesses = [];
  var score = 0;
  var chances = 3;

  for (var i = 0; i < compWord.length; i++) {
    letterSpace += " _";
  }
    
  document.getElementById("answerSpace").innerHTML = `<p>${letterSpace}</p>`;
  document.addEventListener("keypress", function(event) {
    var ltr = String.fromCharCode(event.keyCode);

    if (compWord.indexOf(ltr) > -1) {
      letterSpace[compWord.indexOf(ltr)] = ltr;
      correctGuesses.push(ltr);

      // stuck on how to get the letter in place of the underscore with corresponding index
      document.getElementById("answerSpace").innerHTML = `<p> ${correctGuesses}</p>`;
       
      
      
      if (letterSpace.join == compWord) {
            alert('You win!');
            document.getElementById("score").innerHTML = `<p>${score + 1}</p>`;

        }
    }
    
    else {
        incorrectGuesses.push(ltr);
        chances--;
        console.log(incorrectGuesses);
        console.log(chances);
    }

    if (chances = 0) { 
        alert("Game Over");
    }
    
    
    //display incorrectly guessed letter in used letter section and reduce chances by one
    
  });

 
};



// give user limited number of chances

// have user guess letters of the word

// show correct letters in spaces
// show incorrect letters in separate section
// if user guesses all the letters in the compWord, give user a point
// if user cannot guess all the letters in the compWord before chances run out, end game
