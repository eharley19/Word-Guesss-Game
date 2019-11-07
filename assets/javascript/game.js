var words =  ["extraterrestrial", "stellar", "galaxy", "planet", "asteroid"];
function chooseWord() {
    compWord = words[Math.floor(Math.random() * words.length)];
    console.log(compWord);
    
}

chooseWord();
var letterSpaces = [];
for (var i = 0; i < compWord.length; i++) { 
    letterSpaces[i] = "_";
   
}

document.getElementById("answerSpace").




