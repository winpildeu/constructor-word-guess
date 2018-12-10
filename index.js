const inquirer = require('inquirer');
const Word = require('./Word');
const fs = require('fs');
let hiddenWord;

// import the word bank file
fs.readFile("wordBank.txt", "utf8", (err, data) => {
  (err) ? console.log(err): null
  const wordBank = data.split(',');
  console.log(wordBank);

  // choose a random index in the word bank and set it to the hidden word
  hiddenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(`\nHidden word is: ${hiddenWord}`);
});


// const x = "guess";
// console.log(`Word: ${x}`);

// let array = x.split('');
// console.log(`Array: ${array}`);

// let word = new Word();
// array.forEach(element => {
//     word.wordArray.push(new Letter(element));
// });
// console.log(`wordArray: ${word.wordArray}`);

// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then(answers => {
//     // Use user feedback for... whatever!!
//   });