
//The unordered list where the player’s guessed letters will appear.
const guessedLettersElement = document.querySelector(".guessed-letters");
//The Guess Button
const guessLetterButton = document.querySelector(".guess");
//Text Input area
const textInput = document.querySelector(".letter");
//The empty paragraph where the word in progress will appear
const wordInProgress = document.querySelector(".word-in-progress");
//The paragraph where the remaining guesses will display
const remainingGuessesElement = document.querySelector(".remaining");
// The span inside the paragraph where the remaining guesses will display.
const remainingGuessesSpan = document.querySelector(".remaining span");
//The empty paragraph where messages will appear when the player guesses a letter
const message = document.querySelector(".message");
//The hidden button that will appear prompting the player to play again.
const playAgain = document.querySelector(".play-again ");

let word = "mangolia";
//This array will contain all the letters the player guesses
const guessedLetters = []
let remainingGuesses = 8;

const getWord = async function () {
    const res = await fetch(
        "https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt"
    )
    const words = await res.text();
    // console.log(words)
    const wordArray = words.split("\n");
    // console.log(wordArray)
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    word = wordArray[randomIndex].trim();
    placeholder(word);
}
getWord();



const placeholder = function (word) {
    const placeholderArray = Array(word.length).fill("●");
    wordInProgress.innerText = placeholderArray.join("");
};





guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = "";
    /*
    We are trying to get something that looks like this
     validateInput(Inputvalue) 
    and we know that input or input value is textInput.value so using a variable to contain it we have, */
    const guess = textInput.value;
    textInput.value = "";
    // console.log(guess);

    //saving the result of this function to a variable we have, 
    const goodGuess = validateInput(guess)
    // console.log(goodGuess)



    if (goodGuess) {
        // We've got a letter! Let's guess!
        makeGuess(guess);
    }
    textInput.value = "";




});


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


const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guess that."
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        showGuessedLetters();
        guessCount(guess);
        updateWordinProgress(guessedLetters);

    }

}


const showGuessedLetters = function () {
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters) {
        const listItem = document.createElement("li");
        listItem.innerText = letter;
        guessedLettersElement.append(listItem);
    }

}

const updateWordinProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    //  console.log(wordArray);
    const revealWord = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("●");
        }
    }
    wordInProgress.innerText = revealWord.join("");
    // console.log(revealWord);
    gameWin();

};

const guessCount = function (guess) {
    const upperWord = word.toUpperCase();
    if (!upperWord.includes(guess)) {
        message.innerText = `The word does not contain ${guess}`;
        remainingGuesses -= 1;
    } else {
        message.innerText = `You're correct! The word contains ${guess}`;
    }

    if (remainingGuesses === 0) {
        message.innerHTML = `Game over! The word was <span class="highlight">${word}</span>.`;
        remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
        guessLetterButton.disabled = true;
        startOver();
    } else if (remainingGuesses === 1) {
        remainingGuessesSpan.innerText = `${remainingGuesses} guess`;
    } else {
        remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
    }
};


const gameWin = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        message.classList.add("win");
        message.innerText = "You guessed correct the word! Congrats!";
        startOver();
    }

};

// updateWordinProgress(guessedLetters);

const startOver = function (){
    guessLetterButton.classList.add("hide")
    remainingGuessesElement.classList.add("hide")
    guessedLettersElement.classList.add("hide");
    playAgain.classList.remove("hide");

}   

playAgain.addEventListener("click", function() {
    message.classList.remove("win");
    guessedLetters.length = 0;
    remainingGuesses = 8;
    remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
    guessedLettersElement.innerHTML = "";
    message.innerText = "";

    // now showing the UI ELEMENTS 
    guessLetterButton.classList.remove("hide");
    guessLetterButton.disabled = false; 
    remainingGuessesElement.classList.remove("hide");
    guessedLettersElement.classList.remove("hide");
    playAgain.classList.add("hide");
    getWord();
  });
