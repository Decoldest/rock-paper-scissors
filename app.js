function getComputerChoice(){
  let choiceNumber = Math.floor(Math.random() * 3);
  console.log(choiceNumber);
  return choiceNumber == 0 ? "Rock" : choiceNumber == 1 ? "Paper" : "Scissors"; 
}

let playerSelection;
do{
  playerSelection = prompt("Please enter your choice");
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
}while(typeof(playerSelection) != "string" || (playerSelection != "Rock"
  && playerSelection != "Paper" && playerSelection != "Scissors"));


console.log("you chose " + playerSelection);