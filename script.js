game(5);

function game(rounds) {
	let ps = 0;
	let cs = 0;

	for (let i = 0; i < rounds; i++) {
		const result = promptPlay();
		switch (result) {
			case 0:
				console.log("you lost");
				cs++;
				break;
			case 1:
				console.log("you win");
				ps++;
				break;

			default:
				console.log("it's a tie");
				break;
		}
	}

	console.log("Player score: " + ps);
	console.log("Computer score: " + cs);
	if (ps > cs) {
		console.log("Player wins");
	} else if (cs > ps) {
		console.log("Computer wins");
	} else {
		console.log("Tie");
	}
}

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

	if (
		(ps == "rock" && cs == "paper") ||
		(ps == "paper" && cs == "scissors") ||
		(ps == "scissors" && cs == "rock")
	) {
		result = 0; // player lost
	} else if (ps == cs) {
		result = -1; // tie
	} else {
		result = 1; // player win
	}

	return result;
}

function promptPlay() {
	console.log("-= Choose rock, paper or scissors =-");
	return playRound(prompt(), getComputerChoice());
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
