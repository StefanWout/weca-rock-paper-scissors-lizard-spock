// Choices and rules definition
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const rules = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"]
};

let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;

// DOM elements
const scoreCountElement = document.querySelector('.score-count');
const resultElement = document.querySelector('.result');
const resultTitleElement = document.querySelector('.result .title');
const userPickElement = document.querySelector('.user-pick');
const pcPickElement = document.querySelector('.pc-pick');
const pickedSection = document.querySelector('.section.picked');
const playAgainButton = document.querySelector('.play-again');
const gameCards = document.querySelectorAll('.game-card');

// Function to get the computer's choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "tie";
  } else if (rules[playerChoice].includes(computerChoice)) {
    return "win";
  } else {
    return "lose";
  }
}

// Function to play a round
function playRound(choice) {
  playerChoice = choice;
  computerChoice = getComputerChoice();
  const outcome = determineWinner(playerChoice, computerChoice);

  updateDOMAfterRound(outcome);
}

// Function to update the DOM after a round
function updateDOMAfterRound(outcome) {
  userPickElement.innerHTML = `<img src="assets/hand-icons/icon-${playerChoice}.svg" alt="${playerChoice}">`;
  pcPickElement.innerHTML = `<img src="assets/hand-icons/icon-${computerChoice}.svg" alt="${computerChoice}">`;

  if (outcome === "win") {
    resultTitleElement.textContent = "You win!";
    playerScore++;
  } else if (outcome === "lose") {
    resultTitleElement.textContent = "You lose!";
    computerScore++;
  } else {
    resultTitleElement.textContent = "It's a tie!";
  }

  scoreCountElement.textContent = playerScore - computerScore;
  pickedSection.classList.remove('hidden');
  resultElement.classList.remove('hidden');
}

// Event listeners for player choices
gameCards.forEach(card => {
  card.addEventListener('click', () => {
    const choice = card.getAttribute('data-choice');
    playRound(choice);
  });
});

// Event listener for play again button
playAgainButton.addEventListener('click', () => {
  pickedSection.classList.add('hidden');
  resultElement.classList.add('hidden');
  userPickElement.innerHTML = "";
  pcPickElement.innerHTML = "";
  playerScore = 0;
  computerScore = 0;
  scoreCountElement.textContent = 0;
});
  

  
