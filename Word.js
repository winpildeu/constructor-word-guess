console.log(`Word.js loaded...\n`);

// import the Letter module
const Letter = require('./Letter');

function Word() {
    // array of the Letter objects
    this.wordArray = [],
    // method that makes the word to display in the terminal
    this.displayWord = function() {},
    // method that checks each letter in the word array
    this.checkWord = function(charGuess) {}
}

module.exports = Word;
