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

const word = "mangolia";

//This array will contain all the letters the player guesses
const guessedLetters = []

const placeholder = function () {
    const placeholderArray = Array(word.length).fill("●");
    wordInProgress.innerText = placeholderArray.join("");
}
placeholder(word);



guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    const wordInput = textInput.value;
    console.log(wordInput);
    textInput.value = "";
    // clearInput();  In the case of using clearInputas a function

    // emptying the text of the "message paragraph" element we have,
    message.innerText = "";

/*
   // Let's grab what was entered in the input
  const guess = textInput.value;
  // Let's make sure that it is a single letter
  const goodGuess = validateInput(guess);

  if (goodGuess) {
    // We've got a letter! Let's guess!
    makeGuess(guess);
  }
  textInput.value = "";
                                     */
});


// The clearInput function must be defined
// const clearInput = function () {
//     textInput.value = "";
// };

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input == "") {
            //checking if the input is empty
            message.innerText = "Enter a letter";
        }
        else if (input.length > 1) {
            //check if you typed more than one letter
            message.innerText = "You can input one letter only";
        }
        else if (!input.match(acceptedLetter)) {
            // Did you type a number, a special character or some other non letter thing?
            message.innerText = "Enter letters from a-z OR A-Z only";
        }
        else {
            //This means a valid letter was returned
            return input;
        }
    };





/*
    // const makeGuess = function (guess) {
    //     guess = guess.toUpperCase();
    //     if (guessedLetters.includes(guess)) {
    //       message.innerText = "You already guessed that letter, silly. Try again.";
    //     } else {
    //       guessedLetters.push(guess);
    //       console.log(guessedLetters);
    //     }
    //   };
                                    */

  
