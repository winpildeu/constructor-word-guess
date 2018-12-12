console.log(`Word.js loaded...\n`);

// import the Letter module
const Letter = require('./Letter');

function Word() {
    // array of the Letter objects
    this.wordArray = [],
    // method that makes the word to display in the terminal
    this.displayWord = function() {
        let status = "";
        this.wordArray.forEach(elem => {
            status = status + elem.display() + " ";
        });
        console.log(status);
    },
    // method that checks each letter in the word array
    this.checkWord = function(charGuess) {
        let bool = false;
        this.wordArray.forEach(elem => {
            if (elem.letter === charGuess) {
                elem.guessed = true;
                bool = true;
            }
        });
        if (bool) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Word;
