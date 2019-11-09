



window.onload = () => {

    var words =  ["extraterrestrial", "stellar", "galaxy", "planet", "asteroid"];
    function chooseWord() {
        return words[Math.floor(Math.random() * words.length)];
    }
    
    
    var compWord = chooseWord();
    
    var letterSpaces = "";
    for (var i = 0; i < compWord.length; i++) { 
        letterSpaces += "_";
    }

    document.getElementById("answerSpace").innerHTML = `<h4>${letterSpaces}</h4>`;
    document.addEventListener('keypress', function(event){
        console.log(event);
    });
    

    // console.log("Hello")
    // document.getElementById("answerSpace").innerHTML = "HELLO";
};


// create scoreboard to keep track of user correctly guessed words
var score = 0;

// give user limited number of chances
var chances = 3;
// have user guess letters of the word 

// show correct letters in spaces 
// show incorrect letters in separate section
// if user guesses all the letters in the compWord, give user a point
// if user cannot guess all the letters in the compWord before chances run out, end game




