//Javascript Document
const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector (".remainingspan");
const message = document.querySelector (".message");
const playAgainButton = document.querySelector (".play-again");
const word = "magnolia";
const guessedLetters = [];
//Display a symbol for the target word's letters
const placeholder = function (word) {
    const placeholderLetters = []
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push ("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function(e) {
    e.preventDefault(); // Em.......!
    //empty message paragraph
    message.innerText = "";
    //Let's grab what was entered in the input
    const guess = letterInput.value;
    //Let's make sure that it was a single letter
    const goodGuess = validateInput(guess);

    if (goodGuess) { //we've got a letter! Let's guess!
        makeGuess(guess);
    }
    letterInput.value = "";
});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    
    if(input.length === 0) {
//if the input is empty
        message.innerText = "Please enter a letter.";
    }   else if (input.length > 1) {
// Did you enter more than 1 letter?
        message.innerText = "Please enter a single letter.";
    }   else if (!input.match(acceptedLetter)) {
// Did you type a symbol, number or some strange character?
    message.innerText = "Please enter a letter from A to Z.";
    } else {
// Finally there is a single letter omg yay!
       return input;
    }
};

    const makeGuess = function(guess) {
        guess = guess.toUpperCase(); 
        if (guessedLetters.includes(guess)) {
            message.innerText = "You already guessed that letter, silly. Try again.";
        } else {
            guessedLetters.push(guess);
            console.log(guessedLetters);
            showGuessedLetters(); 
            updateWordInProgress (guessedLetters);
        }   
    };


const showGuessedLetters = function () {
    updateWordInProgress (guessedLetters);
    //Clear the list first    
   guessedLettersElement.innerHTML = "";
   for (const letter of guessedLetters) {
       const li = document.createElement("li");
       li.innerText = letter;
       guessedLettersElement.append(li);
   }
};
 const updateWordInProgress = function (guessedLetters) {
        const wordUpper = word.toUpperCase();
        const wordArray = wordUpper.split("");
        const revealWord = [];
        for (const letter of wordArray) {
            if (guessedLetters.includes(letter)) {
                revealWord.push(letter.toUpperCase());
             } else {
                revealWord.push("●");
             }
        }
//console.log(revealWord);
wordInProgress.innerText = revealWord.join("");
checkIfWin();
};

const checkIfWin = function () {
if (word.toUpperCase() === wordInProgress.innerText) {
  message.classList.add("win");
  message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
}
};






   





 


