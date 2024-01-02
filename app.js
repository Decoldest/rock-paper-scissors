function getComputerChoice(){
  let choiceNumber = Math.floor(Math.random() * 3);
  return choiceNumber === 0 ? "Rock" : choiceNumber === 1 ? "Paper" : "Scissors"; 
}

//Asks user for input of rock, paper, scissors. Continues until valid option provided
function getUserChoice(){
  let userInput;
  do {
    userInput = prompt("Please enter your choice");
  
    if (userInput !== null) {
      userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
    }
  } while (typeof(userInput) !== "string" || (userInput !== "Rock"
    && userInput !== "Paper" && userInput !== "Scissors"));
  
  return userInput;
}

function chooseWinner(firstSelection, secondSelection){
  let winningHands = {
    "Rock" : "Scissors",
    "Paper" : "Rock",
    "Scissors" : "Paper"
  };

  if (winningHands[firstSelection] === secondSelection) {
    return firstSelection;
  }
  else if (winningHands[secondSelection] === firstSelection){
    return secondSelection;
  }
  else return null;
}

//Simulates one round between user and computer, continues until ties are broken
function playRound(playerSelection) {
  let winner;
  let computerSelection;

  computerSelection = getComputerChoice();
  userOutput.textContent = `You chose ${playerSelection}`;
  computerOutput.textContent = `Computer chose ${computerSelection}`;
  winner = chooseWinner(playerSelection, computerSelection);

  if (winner == playerSelection) {
    roundOutput.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
  }
  else if (winner == computerSelection){
    roundOutput.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
  else {
    roundOutput.textContent = "Tie. Choose again";
  }
  return winner;
}

const container = document.querySelector('div#container');
const buttonContainer = document.createElement('div');
const options = ['Rock', 'Paper', 'Scissors'];

function createButton(choice, container) {
  let choiceButton = document.createElement('button');
  choiceButton.textContent = choice;
  choiceButton.addEventListener('click', () => {
    playRound(choice);
  });
  container.appendChild(choiceButton);
}

for(choice of options){
  createButton(choice, buttonContainer);
}

const userOutput = document.createElement('h3');
const computerOutput = document.createElement('h3');
const roundOutput = document.createElement('h2');

container.appendChild(buttonContainer);
container.appendChild(userOutput);
container.appendChild(computerOutput);
container.appendChild(roundOutput);
