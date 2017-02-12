//Code should be exectuted in strict mode
"use strict";

//Global Variables
var wins = 0;

var lives = 10;
var userGuess = [];
var correctGuesses = [];
var lives;

//List Array of Song Artists from Guardians of the Galaxy that we will select from
var characters = ["Genji", "Mccree", "Pharah", "Reaper", "Soldier76", "Sombra", "Tracer",
                "Bastion", "Hanzo"," Junkrat", "Mei", "Torbjorn", "Widowmaker", "Dva",
                "Reinhardt", "Roadhog", "Winston", "Zarya", "Ana", "Lucio", "Mercy",
                "Symmetra", "Zenyatta"];
//console.log(characters.length);

//Variable to generate random artists and
var randomCharacters = characters[Math.floor(Math.random() * characters.length)];
var splitCharacters = randomCharacters.split("");
//Replace selected word with an "_"
for (var i = 0; i < splitCharacters; i++) {
    splitCharacters[i] = "_";
}
console.log(splitCharacters);

//Track user input as well as error catch
document.onkeyup = function(event) {
    var userInput = String.fromCharCode(event.keyCode).toLowerCase();
    userGuess.push(userInput);
// Compare user input with characters and either reveal letter or lose one life
    for (var i = 0; i < randomCharacters; i++) {
        if (randomCharacters.charAt(i) === userInput) {
            correctGuesses.push(userInput);
            splitCharacters.splice(i, 1, userInput);
        } else if (randomCharacters.charAt(i) !== userInput) {
            lives--;
        }

    }
}

