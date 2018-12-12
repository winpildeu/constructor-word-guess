console.log(`Letter.js loaded...\n`);

function Letter (char) {
    // the letter that needs to be guessed
    this.letter = char,
    // T/F value if the letter has been correctly guessed or not
    this.guessed = false;
    // func. that displays the real letter if guessed = true, shows '_' otherwise
    this.display = function() {
        if (this.guessed === true) {
            return this.letter;
         } else {
            return '_';
         }
    },
    // takes in the user's guess and checks if it and the hidden letter match
    this.check = function(charGuess) {
        if (charGuess === this.letter) {
            this.guessed = true;
            console.log(`TRUE`);
        } else {
            console.log(`FALSE`)
        }
    }
}

// object test
// let char = new Letter("v");
// console.log(char);
// console.log(char.display());
// char.check("w");

// Create the Letter module
module.exports = Letter;