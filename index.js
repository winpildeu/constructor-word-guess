const inquirer = require('inquirer');
const Word = require('./Word');
const Letter = require('./Letter');
const fs = require('fs');
let remainingGuess = 5;

// import the word bank file
const wordBank = fs.readFileSync("wordBank.txt", "utf8").split(',');

// choose a random index in the word bank and set it to the hidden word
let hiddenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
// console.log(`Hidden word is: ${hiddenWord}`);

// splits the hidden word and makes a word object
let hiddenWordSplit = hiddenWord.split('');

// create the actual word object
let word = new Word();
hiddenWordSplit.forEach(element => {
    word.wordArray.push(new Letter(element));
});

// FUNCTIONS ================================================================
function game() {
    // only runs the game if there are remaining guesses
    if (remainingGuess > 0) {
        // show the word to guess with blanks
        word.displayWord();
        console.log(`Remaining guesses : ${remainingGuess}\n`);
        // get the input from the user
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'userGuess',
                    message: "Guess a letter (A-Z only)",
                    validate: function(value) {
                        // if the value is a letter, it passes the test
                        var pass = value.match(/[A-z]| /);
                        if (pass) {
                          return true;
                        }
                        
                        return 'Please enter a valid letter';
                    }
                }
            ])
            .then(answer => {

                // use up the guess and check the letter
                remainingGuess--;
                let bool = word.checkWord(answer.userGuess);
                // if the guess was correct, give back the guess
                (bool) ? remainingGuess++ : null

                // checks if every letter has been guessed correctly
                let winCond = word.wordArray.every(elem => elem.guessed == true);
                
                // if all letters have been guessed or no remaining guesses, end game. else continue the game
                (winCond) ? console.log(`YOU WIN!`) : (remainingGuess > 0) ? game() : console.log(`YOU LOSE...`)
                
            });
    }
}

// MAIN CODE ======================================================
game();