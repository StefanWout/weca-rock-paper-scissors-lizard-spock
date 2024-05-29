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
const scoreElement = document.getElementsByClassName("score-count")

function getComputerHand() {
    const randomIndex = Math.floor(Math.random() * hands.length);
    return hands[randomIndex];
  }

function playRound(playerHand) {
    computerChoice = getComputerChoice();
    outcome = determineWinner(playerChoice, computerChoice);
    
    if (outcome === "win") {
      playerScore++;
    } else if (outcome === "lose") {
      playerScore--;
    }
  }

  
