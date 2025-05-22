const result = document.querySelector(".result");
const finalWinner = document.querySelector(".winner")
let humanScore = 0;
let computerScore = 0;

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



const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        result.textContent = `Tie! You both chose ${humanChoice}`;
        renderScores();
        return;
    } 

    const winMessage = `You won! ${humanChoice} beats ${computerChoice}` ;
    const loseMessage = `You lose! ${computerChoice} beats ${humanChoice}`;

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result.textContent = winMessage;
        humanScore++;
    } else {
        result.textContent = loseMessage;
        computerScore++;
    }
    renderScores();

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            finalWinner.textContent = "You WIN!"
        } else if (humanScore < computerScore) {
            finalWinner.textContent = "You LOSE"
        } else {
            finalWinner.textContent = "Tie"
        }

        result.textContent = `Your Final Score: ${humanScore}  Computer Final Score: ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
        
    }
}

const renderScores = () => {
    const humanScoreElement = document.querySelector(".human_score");
    const computerScoreElement = document.querySelector(".computer_score");
    humanScoreElement.textContent = `Your Score: ${humanScore}`;
    computerScoreElement.textContent = `Computer Score: ${computerScore}`;
}


const buttons = document.querySelectorAll(".option_image");
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const humanSelected = button.children[1].textContent.toLowerCase();
        const computerSelected = getComputerChoice();

        playRound(humanSelected, computerSelected);
    })
})