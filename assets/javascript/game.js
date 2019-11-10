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
    "moon",
    "comet",
    "cosmic",
    "meteorite",
    "jupiter",-

  ];
  function chooseWord() {
    return words[Math.floor(Math.random() * words.length)];
  }


  var compWord = chooseWord();
//   console.log(compWord);

  var letterSpace = [];
  var usedLetters = [];
  var score = 0;
  var chances = 10;

  
  for (var i = 0; i < compWord.length; i++) {
    letterSpace.push('_');
  }
    
  document.getElementById("answerSpace").innerHTML = `<h2>${letterSpace.join(" ")}</h2>`;
  document.addEventListener("keypress", function(event) {
    var ltr = String.fromCharCode(event.keyCode);
    usedLetters.push(ltr);
    document.getElementById('used').innerHTML = `<h3>${usedLetters}</h3>`;

    if (compWord.indexOf(ltr) > -1) {
    
   
        
        for(var i = 0; i < compWord.length; i++) {

            if (compWord[i] === ltr) {
                letterSpace[i] = ltr;
                console.log(letterSpace);
                document.getElementById("answerSpace").innerHTML = `<h2> ${letterSpace.join(" ")}</h2>`;
                if (letterSpace.join == compWord) {
                    score++;
                    document.getElementById("score").innerHTML = `<h3>${score}</h3>`;
                }

            }
        }

    


    // non-working code
        
      
      
    
    }
    
    else {
        
        chances--;
        
        console.log(chances);
        if (chances = 0) {
            alert("Game Over");
        }
      
    }

    
    
    
   
    
  });

 
};


