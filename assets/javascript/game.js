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
  for (var i = 0; i < compWord.length; i++) {
    letterSpace += "_";
  }

  document.getElementById("answerSpace").innerHTML = `<p>${letterSpace}</p>`;
  document.addEventListener("keypress", function(event) {
    var ltr = String.fromCharCode(event.keyCode);
    if (compWord.indexOf(ltr) > -1) {
      letterSpace[compWord.indexOf(ltr)] = ltr;
      //display correct letter in place of underscore with corresponding index
    } else {
      //display incorrectly guessed letter in used letter section and reduce chances by one
    }
  });

 
};

var score = 0;

// give user limited number of chances
var chances = 3;
// have user guess letters of the word

// show correct letters in spaces
// show incorrect letters in separate section
// if user guesses all the letters in the compWord, give user a point
// if user cannot guess all the letters in the compWord before chances run out, end game
