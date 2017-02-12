//Code should be exectuted in strict mode
"use strict";

//List Array of Song Artists from Guardians of the Galaxy that we will select from
var artists = ["Blue Swede", "Raspberries", "Greenbaum", "David Bowie",
            "Elvin Bishop", "10cc", "Jackson 5", "Redbone", "The Runaways",
            "Rupert Holmes", "Stairsteps", "Marvine Gaye and Tammi Terrell"];
//List array of valid letters
var validLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
                    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
                    "x", "y", "z"];
var guesses = [];
var lives;


//Variable to generate random artists
function randomArtists() {
    return artists[Math.floor(Math.random() * artists.length)];
}



//Track user input as well as error catch
document.onkeyup = function(event) {
    var userInput = String.fromCharCode(event.keyCode).toLowerCase();
}

