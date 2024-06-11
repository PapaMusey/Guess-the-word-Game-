//The unordered list where the player’s guessed letters will appear.
const guessedLettersElement = document.querySelector(".guessed-letters");
//The Guess Button
const guessLetterButton = document.querySelector(".guess");
//Text Input area
const textInput = document.querySelector(".letter");
//The empty paragraph where the word in progress will appear
const wordInProgress = document.querySelector(".word-in-progress");
//The paragraph where the remaining guesses will display
const remainingGuesses = document.querySelector(".remaining");
// The span inside the paragraph where the remaining guesses will display.
const remainingGuessesSpan = document.querySelector(".remaining span");
//The empty paragraph where messages will appear when the player guesses a letter
const message = document.querySelector(".message");
//The hidden button that will appear prompting the player to play again.
const playAgain = document.querySelector(".play-again hide");

const word ="mangolia";

const placeholder = function () {
    const placeholderArray = Array(word.length).fill("●");
    wordInProgress.innerText=placeholderArray.join("");
}
placeholder(word);

guessLetterButton.addEventListener("click", function(e){
    e.preventDefault();
    const wordInput = textInput.value;
    console.log(wordInput);  
    clearInput();  
})
