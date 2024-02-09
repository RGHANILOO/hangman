# Hangman Game

### Introduction

Hangman is a classic word-guessing game where players try to workout a hidden word by guessing individual letters. This repository contains an implementation of the Hangman game using HTML, CSS, and JavaScript.

### Features
- Randomly select a word from a predefined list for the player to guess.
- Tracks and displays the number of guesses per game and in a session.
- Displays correctly guessed letters by updating the word state during play.
- Limits the number of incorrect guesses allowed per game .
- Supports keyboard input for letter guesses.

### How to Play

- Play on an internet browser by visiting -> [Hangman](https://rghaniloo.github.io/hangman/)

    Alternativley: 
    - `git clone git@github.com:RGHANILOO/hangman.git`
    - Open the index.html file in your web browser.
    - Guess letters by typing them on your keyboard.
    - Correctly guessed letters will be revealed in the hidden word.
    - Incorrect guesses will be revelaed and tracked, you'll lose the game if you reach the max incorrect guesses.
    - Keep guessing until you either win by correctly guessing the word or lose by exceeding the maximum allowed incorrect guesses.
    - game resets at each win or loss and the number of your wins and losses tracked


### Ongoing Development:

Next steps for developing this in future and ongoing development of this game include will be building some or all of the following features:

- Mobile responsive and fully accesible
- Hangman animation to replace the incorrectly guessed letters
- Implementation of scoreboard/ highscores as local storage



### Future Development:
Features under consideration for future development: 

- Category selection: currently its only a selection of pre-defined words relating to software and web developement 
- Hints option: to give a user the option to have 1-3 hints depending on the word length
- Timed mode where the user plays against a coundown time
- Word generation using APIs 






