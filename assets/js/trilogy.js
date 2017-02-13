var wordList = [
 "jermone",
 "neena",
 "darion",
 "lou",
 "greg"
]

var chosenWord = "";
var letterInchosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 1;
var lives = 9;
function startGame(){
/*
1. select a word at random x
2. want to break up that random word into letters and replace them with
underscores x
3. we want to add those underscores to the HTML
4. lives always equals 9, and blankandsuccess is an empty array,
and wronggueses is empty as well x
*/
wrongGuesses = [];
console.log("this is wrong guesses in  startGame", wrongGuesses);
lives = 9;
blanksAndSuccesses = [];


chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
hiddenCharacters = ChosenWord.split("");
numBlanks = hiddenCharacters.length;
console.
log(ChosenWord);
console.log(numBlanks)

for(var i = 0; i < numBlanks; i++){
    blanksAndSuccesses.push("_");
}
console.log(blanksAndSuccesses);
document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
document.getElementById('guesses-left').innerHTML = lives;



}

function checkLetters(letter){
    /*
    1. Compare the letter the user picks matches any of the letters in the word
    2. I want a conditional statement to determine if the letter the user picked
    is in the word. If so, do something, if not, do something else
    3. If the user is wrong we want to decrease the lives variables by one
    */

    var letterInWord = false;

    for(var i = 0; i < numBlanks; i++){
        if(chosenWord[i] === letter){
            letterInWord = true;

        }
    }

    if(letterInWord){
        for(i = 0; i < numBlanks; i++){
            if(ChosenWord[i] === letter){
            blanksAndSuccesses[i] = letter;

        }

        }
    }else{
        lives --;
        wrongGuesses.push(letter)
    }

    /*
    to check if a letter is already in the wrong guesses array. What we want to do
    is set up an if/else conditional that will run a for loop that will iterate over
    all the letters and then use the if/else to check if it it already exists.

    */


}

function roundComplete(){
    /*
    1. Its going to update the HTML with letters that are in the word
    2. Its going to update the HTML with guesses we have left
    3. Its going to update the HTML to show the wrong guesses
    4. Its going to determine whether the use won the game or not
    */

    document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById('guesses-left').innerHTML = lives;
    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");


    // if(blanksAndSuccesses.indexOf(letter >= 1)){
    //     console.log(letter)
    // }
    console.log(hiddenCharacters);
    console.log(blanksAndSuccesses);
    if(hiddenCharacters.join(" ") === blanksAndSuccesses.join(" ")){
        winCounter++;
        alert("You win!!");
        document.getElementById('win-counter').innerHTML = winCounter;
        startGame();
    }else if(lives === 0){
        document.getElementById('loss-counter').innerHTML  = lossCounter ++;
        document.getElementById('wrong-guesses').innerHTML = "";
        alert("you don't have any more guesses");
        startGame();
    }






}
startGame();
document.onkeyup = function(event){
    /*
    1. it going to take in the letter that we type in
    2. its going to pass it through the CheckLetter function
    */
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("this is the letter we typed", letterGuessed)
    checkLetters(letterGuessed)
    roundComplete();


}