let wins = 0;

let losses = 0;

const maxErrors = 9;

const wordDisplayLettersElement = document.querySelector(
  "#word-display-letters"
);
const guessedLettersElement = document.querySelector("#guessed-letters");
const errorCountElement = document.querySelector("#error-count");
const winCountElement = document.querySelector("#win-count");
console.log(winCountElement.value);
const lossCountElement = document.querySelector("#loss-count");

const validGuesses = new Set([
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]);

class HangmanGame {
  constructor() {
    this.wordList = [
      "javascript",
      "python",
      "html",
      "css",
      "csharp",
      "java",
      "php",
      "ruby",
      "swift",
    ];
    this.word = this.wordList[Math.floor(Math.random() * this.wordList.length)];
    this.guessedLetters = new Set();
    this.errors = 0;
    this.wins = wins;
    this.losses = losses;
    this.visibleLetters = Array(this.word.length).fill(false);
    this.gameOver = false;
  }

  //   mehod to check the letters against workd
  checkGuess(char) {
    // Add the guessed letter to the guessedLetters
    this.guessedLetters.add(char);

    let found = false; // Flag to track if the guessed letter is found in the word

    // loop throug heach char in the wor
    for (let i = 0; i < this.word.length; i++) {
      // if the char is found in the word
      if (this.word[i] === char) {
        // mark the visible letter as true
        this.visibleLetters[i] = true;
        found = true; // Set found to true if the guessed letter is found
      }
    }
    // if the guessed lette isnt foiund in the word
    if (!found) {
      // increment the error counter
      this.errors++;
    }
    // if the max number of erors reached
    if (this.errors >= maxErrors) {
      // increment the losses counter
      this.losses++;
      // set the game over flag to true
      this.gameOver = true;
      //   reset game with new word???
    }
    // iff all the letter found
    if (this.visibleLetters.every((letter) => letter)) {
      this.wins++; // Update the wins property of the HangmanGame instance
      // flag to gameover
      this.gameOver = true;
      //   reset game with new word???
    }
    // if the game is over
    if (this.gameOver) {
      this.updatePageData(); // Update page data to reflect game status
      // Start a new game
      game = new HangmanGame(); // Create a new game instance with a new word
      game.updatePageData(); // Update page data for the new game
    } else {
      this.updatePageData(); // Update page data if the game is not over
    }
  }

  updatePageData() {
   
    // Create a string representation of the word with visible letters and underscores for hidden letters
    // If gameOver is true, display all letters; otherwise, display only visible letters or underscores
    const tempString = this.visibleLetters
      .map((visible, index) =>
        visible || this.gameOver ? this.word[index].toUpperCase() : "_"
      )
      .join(" ");
    // Update the text content of the wordDisplayLettersElement with the generated string

    wordDisplayLettersElement.textContent = tempString;
    

    // Create a string representation of guessed letters by converting the guessedLetters set to an array,
    // converting each letter to uppercase, and joining them with spaces
    const guessedString = [...this.guessedLetters]
      .map((letter) => letter.toUpperCase())
      .join(" ");
    // Update the text content of guessedLettersElement with the generated string,
    // padded with spaces to ensure a length of 51 characters
    guessedLettersElement.textContent = guessedString.padEnd(51, " ");
    // Update the text content of errorCountElement with the current error count and maximum errors,
    // padded with spaces to ensure a length of 32 characters
    errorCountElement.textContent = `${this.errors} / ${maxErrors}`.padEnd(
      32,
      " "
    );
    // Update the text content of winCountElement with the current wins count,
    // padded with spaces to ensure a length of 45 characters
    winCountElement.textContent = `${this.wins}`;
    // Update the text content of lossCountElement with the current losses count,
    // padded with spaces to ensure a length of 43 characters
    lossCountElement.textContent = `${this.losses}`;
  }
  updateScores() {
    if (this.gameOver) {
      if (this.visibleLetters.every((letter) => letter)) {
        this.wins++;
      } else if (this.errors >= maxErrors) {
        this.losses++;
      }
    }
  }

  resetScores() {
    this.wins = 0;
    this.losses = 0;
  }
}
// Create a new instance of the HangmanGame class and assign it to the game variable
let game = new HangmanGame();
// Event listener for keyup events on the document

document.onkeyup = (event) => {
  // Convert the pressed key to lowercase and assign it to the userGuess variable
  const userGuess = event.key.toLowerCase();

  // Check if the game is not over, the user's guess is valid, and the guess has not been previously made

  if (
    !game.gameOver &&
    validGuesses.has(userGuess) &&
    !game.guessedLetters.has(userGuess)
  ) {
    // If conditions are met, call the checkGuess method of the game object with the user's guess
    game.checkGuess(userGuess);
  } else {
    // If conditions are not met, create a new instance of the HangmanGame class and assign it to the game variable
    // Then, call the updatePageData method of the new game object to update the page data
    // game = new HangmanGame();
    game.updatePageData();
  }
  game.updateScores();
};
