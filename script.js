const hands = ["rock", "paper", "scissors", "lizard", "spock"];
const rules = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissors"]
};
let computerHand = "";
let playerHand = "";
let result = "";
let playerScore = 0;
let computerScore = 0;



