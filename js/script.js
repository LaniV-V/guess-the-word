const guessedLetterList = document.querySelector(".guessedLetters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessDisplay = document.querySelector(".remaining");
const remainingGuessSpan = document.querySelector (".remainingspan");
const message = document.querySelector (".message");
const playAgainButton = document.querySelector (".play-again");
const word = "magnolia";
const guessedLetters = [];
//Display a symbol for the target word's letters
const placeholder = function(word) {
    const placeholderLetters = []
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push ("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};
placeholder(word);

guessLetterButton.addEventListener("click", function(e) {
    e.preventDefault();
    message.innerText = "";
    const guess = letterInput.value;
    const goodGuess = validateInput(guess);

    if (goodGuess) {
        makeGuess(guess);
    }
    letterInput.value = "";
});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    
    if(input.length === 0) {
//if the input is empty
        message.innerText = "Please enter a letter.";
    }   else if (input.length >1) {
// Did you enter more than 1 letter?
        message.innerText = "Please enter a single letter.";
    }   else if (!input.match(acceptedLetter)) {
// Did you type a symbol, number or some strange character?
    message.innerText = "Please enter a letter from A to Z.";
    } else {
// Finally there is a single letter
       return input;
    }

    };

    const makeGuess = function(guess) {
        guess = guess.toUpperCase(); 
        if (guessedLetters.includes(guess)) {
            message.innerText = "You already guessed that letter, silly. Try another.";

        } else {
            guessedLetters.push(guess);
            console.log(guessedLetters);
    
    };
}


 


