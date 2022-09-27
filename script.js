const buttons = document.querySelectorAll("button");
console.log(buttons);
for (const btn of buttons) {
	btn.addEventListener("click", () => {
		playRound(btn.className, getComputerChoice());
	});
}

const results = document.querySelector(".results");

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
	let color = "black";

	if (
		(ps == "rock" && cs == "paper") ||
		(ps == "paper" && cs == "scissors") ||
		(ps == "scissors" && cs == "rock")
	) {
		result = 0; // player lost
		text += "Computer won";
		background = "crimson";
		color = "white";
	} else if (ps == cs) {
		result = -1; // tie
		text += "Tie";
		background = "gray";
		color = "white";
	} else {
		result = 1; // player win
		text += "Player won";
		background = "lightgreen";
	}

	resultDiv.style.color = color;
	resultDiv.innerText = text;
	resultDiv.style.background = background;
	resultDiv.className = "result";

	results.prepend(resultDiv);

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
