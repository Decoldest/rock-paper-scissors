function getComputerChoice(){
  let choiceNumber = Math.floor(Math.random() * 3);
  console.log(choiceNumber);
  return choiceNumber == 0 ? "Rock" : choiceNumber == 1 ? "Paper" : "Scissors"; 
}

let playerSelection = prompt("Please enter your choice");
console.log("you chose " + playerSelection);