const buttons = document.querySelectorAll("button");
console.log(buttons);
for (const btn of buttons) {
	btn.addEventListener("click", () => {
		playRound(btn.className, getComputerChoice());
	});
}

const winPoints = 5;

let playerScore = 0;
let computerScore = 0;
const playerScoreHTML = document.querySelector(".p-score-num");
const computerScoreHTML = document.querySelector(".c-score-num");

let results;
const resultsFull = document.querySelector(".results-full");
const resultsText = document.querySelector(".results-full .text");

function playRound(playerSelection, computerSelection) {
	const ps = playerSelection.toLowerCase();
	const cs = computerSelection.toLowerCase();

	if (!["rock", "paper", "scissors"].includes(ps)) {
		console.log("Invalid input");
		return promptPlay();
	}

	console.log("Player chose " + ps);
	console.log("Computer chose " + cs);

	let result;

	const resultDiv = document.createElement("div");
	let text = ps + " vs " + cs + ": ";

	let background;
	let lightColor = "eaeaea";
	let darkColor = "#222222";

	if (
		(ps == "rock" && cs == "paper") ||
		(ps == "paper" && cs == "scissors") ||
		(ps == "scissors" && cs == "rock")
	) {
		result = 0; // player lost
		computerScore++;
		text += "Computer won";
		background = "hsl(348, 83%, 55%)";
		color = lightColor;
	} else if (ps == cs) {
		result = -1; // tie
		text += "Tie";
		background = "gray";
		color = lightColor;
	} else {
		result = 1; // player win
		playerScore++;
		text += "Player won";
		background = "hsl(120, 73%, 75%)";
		color = darkColor;
	}

	resultDiv.style.color = color;
	resultDiv.innerText = text;
	resultDiv.style.background = background;
	resultDiv.className = "result";

	results = document.querySelector(".results");
	results.prepend(resultDiv);

	if (playerScore === winPoints || computerScore === winPoints) {
		const endResultDiv = document.createElement("div");
		endResultDiv.className = "result endresult";
		if (playerScore > computerScore) {
			// win
			background = "hsl(120, 73%, 65%)";
			endResultDiv.style.color = "black";
			endResultDiv.innerHTML = `Player <strong>${playerScore}</strong>  vs  ${computerScore} Computer`;
		} else {
			// lose
			background = "hsl(348, 83%, 47%)";
			endResultDiv.style.color = "white";
			endResultDiv.innerHTML = `Player ${playerScore}  vs  <strong>${computerScore}</strong> Computer`;
		}
		endResultDiv.style.background = background;
		results.prepend(endResultDiv);

		const newResults = document.createElement("div");
		newResults.className = "results";
		resultsText.insertAdjacentElement("afterend", newResults);

		playerScore = 0;
		computerScore = 0;
	}

	playerScoreHTML.innerText = playerScore;
	computerScoreHTML.innerText = computerScore;

	return result;
}

function getComputerChoice() {
	const choice = Math.floor(Math.random() * 3);
	let choiceName;
	switch (choice) {
		case 0:
			choiceName = "Rock";
			break;
		case 1:
			choiceName = "Paper";
			break;
		case 2:
			choiceName = "Scissors";
			break;

		default:
			break;
	}
	return choiceName;
}
