# Hangman Game

### Introduction

Hangman is a classic word-guessing game where players try to guess a hidden word by guessing individual letters. This repository contains a simple implementation of the Hangman game using HTML, CSS, and JavaScript.

### Features
-  Randomly select a word from a predefined list for the player to guess.
- Tracks and displays the number of wins and losses and guessed letters.
- Displays the current state of the word, including correctly guessed letters.
- Limits the number of incorrect guesses allowed.
- Supports keyboard input for letter guesses.

### How to Play

- you can play on your browser by going to [Hangman](https://rghaniloo.github.io/hangman/)

    alternativley: 
    - clone the repository 
    - Open the index.html file in your web browser.
    - The game will start automatically.
    - Guess letters by typing them on your keyboard.
    - Correctly guessed letters will be revealed in the hidden word.
    - Incorrect guesses will be counted, and you'll lose the game if you reach the maximum allowed incorrect guesses.
    - Keep guessing until you either win by correctly guessing the word or lose by exceeding the maximum allowed incorrect guesses.

### Future Development:
in future and ongoing devlopment of this game i will be building some or all of the following features:
- category selection: currently its only a selection of predifned words relating to software and web developement 
- hints option : to give user the option to have 1-3 hints dpending on word length
- timed mode where the user plays against a coundown timer
- most importantly i will be implenting the hangman animation as an alternative to the currently set up incorrect letters in the upcoming itteration of the build
- refactoring and making the logic more DRY i feel there a room to improve on and make logic handle functions more elegantly
- with building of category list i will be implementing an open ai/ other form of api where it generates new words within predefined categories 
- Implementation of scoreboard/ highscores as local storage





