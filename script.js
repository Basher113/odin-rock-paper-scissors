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

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
    const winMessage = `You won! ${humanChoice} beats ${computerChoice}` 
    const loseMessage = `You lose! ${computerChoice} beats ${humanChoice}`

    if (humanChoice === computerChoice) {
        console.log(`Tie! You both chose ${humanChoice}`)
        return;
    } 

    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log(winMessage);
            humanScore++;
        } else if (computerChoice === "paper") {
            console.log(loseMessage);
            computerScore++;
        }

    } else if (humanChoice === "paper") {
        if (computerChoice === "rock" ) {
            console.log(winMessage);
            humanScore++;
        } else if (computerChoice === "scissors") {
            console.log(loseMessage);
            computerScore++;
        }

    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log(winMessage);
            humanScore++;
        }
        else if (computerChoice === "rock" ) {
            console.log(loseMessage);
            computerScore++;
        }
    } else {
        console.log("Invalid Input.");
    }
}

 

playGame()