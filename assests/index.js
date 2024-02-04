let wins = 0;

let losses = 0;

const maxErrors = 9;

const wordDisplayLettersElement = document.querySelector(
  "#word-display-letters"
);
const guessedLettersElement = document.querySelector("#guessed-letters");
const errorCountElement = document.querySelector("#error-count");
const winCountElement = document.querySelector("#win-count");
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
    this.wordList = ['Algorithm', 'Svelte','React','Component','Debugging', 'Javascript', 'Framework', 'Database', 'Cybersecurity', 'Virtualization', 'Encryption', 'Automation', 'Prototype', 'Pythonic', 'Bootstrap', 'Responsive', 'Middleware', 'Blockchain', 'Gamification'];
    this.word = this.wordList[Math.floor(Math.random() * this.wordList.length)].toLocaleLowerCase();
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
    //   console.log(this.errors);
    }
    // if the max number of erors reached
    if (this.errors >= maxErrors) {
      losses++;
      this.gameOver = true;
      console.log("You lose!", losses);
    }
    // iff all the letter found
    if (this.visibleLetters.every((letter) => letter)) {
      wins++; // Update the wins property of the HangmanGame instance
      this.gameOver = true;
      console.log("You win!", wins);
    }
    // if the game is over
    if (this.gameOver) {
      this.updatePageData(); // Update page data to reflect game status
      game = new HangmanGame(); // Create a new game instance with a new word
      game.updatePageData(); // Update page data for the new game
    } else {
      this.updatePageData(); // Update page data if the game is not over
    }
  }

  updatePageData() {
    const tempString = this.visibleLetters
      .map((visible, index) =>
        visible || this.gameOver ? this.word[index].toUpperCase() : "_"
      )
      .join(" ");

    wordDisplayLettersElement.textContent = tempString;

    const guessedString = [...this.guessedLetters]
      .map((letter) => letter.toUpperCase())
      .join(" ");

    guessedLettersElement.textContent = guessedString.padEnd(51, " ");

    errorCountElement.textContent = `${this.errors} / ${maxErrors}`.padEnd(
      32,
      " "
    );

    winCountElement.textContent = `${this.wins}`;

    lossCountElement.textContent = `${this.losses}`;
    this.updateScores();
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
}
let game = new HangmanGame();

document.onkeyup = (event) => {
  const userGuess = event.key.toLowerCase();

  if (
    !game.gameOver &&
    validGuesses.has(userGuess) &&
    !game.guessedLetters.has(userGuess)
  ) {
    game.checkGuess(userGuess);
  } else {
    game.updatePageData();
  }
  game.updateScores();
};
