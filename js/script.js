const guessedLetterList = document.querySelector(".guessedLetters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessDisplay = document.querySelector(".remaining");
const remainingGuessSpan = document.querySelector (".remainingspan");
const message = document.querySelector (".message");
const playAgainButton = document.querySelector (".play-again");

const word = "magnolia"
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
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = ("");
});