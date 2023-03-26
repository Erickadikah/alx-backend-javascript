// Description: This is a simple program to check if a person is eligible to vote or not
// let age = parseInt(prompt("Enter your age: "));

// if (age >= 18) {
//   console.log("You are eligible to vote!");
// } else {
//   console.log("You are not eligible to vote yet.");
// }

const readline = require('readline'); // readline module is used to read input from the user

const rl = readline.createInterface({ // createInterface() method creates an interface to read data from a Readable stream (such as process.stdin) one line at a time
  input: process.stdin, // input: process.stdin
  output: process.stdout // output: process.stdout
});

rl.question("Enter your age: ", function(age) {
  if (age >= 18) {
    console.log("You are eligible to vote!");
  } else {
    console.log("You are not eligible to vote yet.");
  }
  
  rl.close();
});
