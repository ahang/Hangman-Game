//Code should be exectuted in strict mode
"use strict";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//               VARIABLES            ~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var characters = ["GENJI", "MCCREE", "PHARAH", "REAPER",
                    "SOLIDERSEVENTYSIX", "SOMBRA", "TRACER",
                "BASTION", "HANZO","JUNKRAT", "MEI",
                "TORBJORN", "WIDOWMAKER", "DVA",
                "REINHARDT", "ROADHOG", "WINSTON",
                "ZARYA", "ANA", "LUCIO", "MERCY",
                "SYMMETRA", "ZENYATTA"];
var randomCharacters = "";
var hiddenCharacters = [];
var numBlanks = 0;
var blanks = [];
var wrongGuesses = [];
var userInput = "";

var lives = 10;
var wins = 0;
var loseSound = new Audio("assets/audio/ohno.mp3");
var winSound = new Audio("assets/audio/yay.mp3");



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//               FUNCTIONS            ~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/* Starts the game by setting everything to the default values
Generates a random word and replaces them with underscores
*/

function startGame() {
    wrongGuesses = [];
    console.log("This is the # of wrong guesses in startGame", wrongGuesses);
    lives = 10;
    blanks = [];

    randomCharacters = characters[Math.floor(Math.random() * characters.length)];
    hiddenCharacters = randomCharacters.split("");
    numBlanks = hiddenCharacters.length;
    console.log(randomCharacters);
    console.log(numBlanks);

    for (var i = 0; i < numBlanks; i++) {
        blanks.push("_");
    }
}
//console.log(blanks);
document.getElementById("word-blank").innerHTML = blanks.join(" ");
document.getElementById("guesses-left").innerHTML = lives;
/* Compares the letter user picked with letters of the selected word. Also,
decreases the user lives by one if they guessed incorrectly and display it on
the appropriate line in HTML
TO DO - Prevent user from typing same letter twice*/


function comparesLetters(letter) {
    var letterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if(randomCharacters[i] === letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for(i = 0; i < numBlanks; i++) {
            if(randomCharacters[i] === letter) {
                blanks[i] = letter;
            }
        }
    } else {
        if (userInput === letter)
        lives --;
        wrongGuesses.push(letter)
    }

}
/*Updates the HTML with letters that are in the word, guess that are left,
and show the wrong guesses. Also, determine whether the user is victorious*/
function roundComplete() {
    document.getElementById("word-blank").innerHTML = blanks.join(" ");
    document.getElementById("guesses-left").innerHTML = lives;
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

    //console.log(hiddenCharacters);
    //console.log(blanks);
    if(hiddenCharacters.join(" ") === blanks.join(" ")){
        wins++;
        document.getElementById("win-counter").innerHTML = wins;
        winSound.play();
        alert("Press any button to get the next word");
        startGame();
    } else if(lives === 0) {
        document.getElementById("wrong-guesses").innerHTML = "";
        loseSound.play();
        alert("Game Over - Press any button to try again!");
        startGame();
    }
}
//Starts the game!
startGame();

/*Take in the letter the user type in and pass it through the compareLetters
function. Also checks to make sure user is typing the appropriate keys and not using backspace or arrow keys
*/
document.onkeyup = function(event) {
    if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) {
        userInput = String.fromCharCode(event.keyCode).toUpperCase();
        //console.log("This is the letter we are typing", userInput);
        comparesLetters(userInput);
        roundComplete();
    } else {
        alert("Invalid Button Please use letters A-Z");
    }
}



