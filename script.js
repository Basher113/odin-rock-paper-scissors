const getComputerChoice = () => {
    const num = Math.random();
    if (num >= 0 && num <= 1/3) {
        return "rock";
    } else if (num > 1/3 && num <= 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

const getHumanChoice = () => {
    return prompt("Please choose between 'rock', 'paper', or 'scissors' ").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();
