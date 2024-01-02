function getComputerChoice(){
  let choiceNumber = Math.floor(Math.random() * 3);
  return choiceNumber === 0 ? "Fire" : choiceNumber === 1 ? "Water" : "Grass"; 
}

let winningHands = {
  "Fire" : "Grass",
  "Water" : "Fire",
  "Grass" : "Water"
};

function chooseWinner(firstSelection, secondSelection){
  if (winningHands[firstSelection] === secondSelection) {
    return firstSelection;
  }
  else if (winningHands[secondSelection] === firstSelection){
    return secondSelection;
  }
  else return null;
}

function playRound(playerSelection) {
  let winner;
  let computerSelection;

  computerSelection = getComputerChoice();
  userOutput.textContent = `You chose ${playerSelection}`;
  computerOutput.textContent = `Computer chose ${computerSelection}`;
  winner = chooseWinner(playerSelection, computerSelection);

  if (winner == playerSelection) {
    roundOutput.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    updateScore("Player");
  }
  else if (winner == computerSelection){
    roundOutput.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    updateScore("Computer");
  }
  else {
    roundOutput.textContent = "Tie. Choose again";
  }
  return winner;
}

let scores = {
  "Player": 0,
  "Computer" : 0
};

const options = Array.from(document.querySelectorAll('button'));

function updateScore(winner){
  scores[winner]++;
  scoreOutput.textContent = `${scores["Player"]} - ${scores["Computer"]}`;
  if(scores[winner] === 5){
    endGame(winner);
  }
}

function endGame(gameWinner){
  if (gameWinner === 'Player'){
    scoreOutput.textContent = "Congratulations, You Win!";
  }
  else if (gameWinner === 'Computer'){
    scoreOutput.textContent = "Sorry, You Lose!"
  }
}

for(butn of options){
  let ele = butn.id;
  butn.addEventListener('click', () => {
    playRound(ele);
  });
}

const userOutput = document.querySelector('#userOutput');
const computerOutput = document.querySelector('#computerOutput');
const roundOutput = document.querySelector('#roundOutput');
const scoreOutput = document.querySelector('#score');

updateScore();

