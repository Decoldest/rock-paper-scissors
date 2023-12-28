function getComputerChoice(){
  let choiceNumber = Math.floor(Math.random() * 3);
  console.log(choiceNumber);
  return choiceNumber == 0 ? "Rock" : choiceNumber == 1 ? "Paper" : "Scissors"; 
}


function getUserChoice(){
  let userInput;
  do {
    userInput = prompt("Please enter your choice");
    userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
  } while (typeof(userInput) != "string" || (userInput != "Rock"
    && userInput != "Paper" && userInput != "Scissors"));
  
    return userInput;
}

function chooseWinner(firstSelection, secondSelection){
  let winningHands = {
    "Rock" : "Scissors",
    "Paper" : "Rock",
    "Scissors" : "Paper"
  };

  if (winningHands[firstSelection] == secondSelection) {
    return firstSelection;
  }
  else if (winningHands[secondSelection] == firstSelection){
    return secondSelection;
  }
  else return null;
}

function playRound() {
  let winner;
  let playerSelection;
  let computerSelection;
  let ties = 0;

  while (!winner){
    if (ties++ > 0) {
      console.log("Tie. Choose again");
    }
    playerSelection = getUserChoice();
    computerSelection = getComputerChoice();
    console.log("you chose " + playerSelection);
    console.log("computer chose " + computerSelection);
    winner = chooseWinner(playerSelection, computerSelection);
  }
  if (winner == playerSelection) {
    console.log("You win! " + playerSelection + " beats " + computerSelection);
  }
  else {
    console.log("You Lose! " + computerSelection + " beats " + playerSelection);
  }
  return winner;
}

console.log(playRound());
