const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const choices = ["rock", "paper", "scissors"];

function playGame() {
  rl.question("Choose rock, paper, or scissors: ", function(playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    
    if (!choices.includes(playerChoice)) {
      console.log("Invalid choice. Please choose rock, paper, or scissors.");
      playGame();
      return;
    }
    
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    console.log(`You chose ${playerChoice}.`);
    console.log(`The computer chose ${computerChoice}.`);
    
    if (playerChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("You win!");
    } else {
      console.log("The computer wins!");
    }
    
    rl.question("Play again? (y/n) ", function(answer) {
      if (answer.toLowerCase() === "y") {
        playGame();
      } else {
        rl.close();
      }
    });
  });
}

playGame();
