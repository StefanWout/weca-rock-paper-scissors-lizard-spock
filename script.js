const hands = ["rock", "paper", "scissors", "lizard", "spock"];
const rules = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissors"]
};
let computerHand = "";
let playerHand = ""
const playerChoice = document.getElementsByClassName('game-card')

let result = "";
// resultElement = document.get -- need new div with id of result?

let playerScore = 0;

// Function to get the computer's choice
function getComputerHand() {
    const randomIndex = Math.floor(Math.random() * hands.length);
    return hands[randomIndex];
  }

// Funtion to update scoreboard
function updateScoreBoard() {
    document.getElementById('score-count').innerText = playerScore;
}

function playRound(playerHand) {
    computerChoice = getComputerHand();
    outcome = determineWinner(playerHand, computerHand);
    
    if (outcome === "win") {
      playerScore++;
    } else if (outcome === "lose") {
      playerScore--;
    } 
    updateScoreBoard();
    
    return `Player chose ${playerChoice}, Computer chose ${computerChoice}. Result: ${outcome}`;
}

// Function to determine the winner
function determineWinner(playerHand, computerChoice) {
    if (playerChoice === computerChoice) {
      return "tie";
    } else if (rules[playerChoice].includes(computerChoice)) {
      return "win";
    } else {
      return "lose";
    }
  }


  

  
