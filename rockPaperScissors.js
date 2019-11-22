function pressRock() {
	const enemyChoice = Math.ceil(Math.random() * 3);
	const enemyHand = document.createElement("p");
	if (enemyChoice === 2) {
		enemyHand.innerText = "Yor Rock lost to Paper";
	} else if (enemyChoice === 1) {
		enemyHand.innerText = "Your Rock tied with Rock";
	} else {
		enemyHand.innerText = "Your Rock won against Scissors";
	}
	const divHistory = document.querySelector('#divHistory');
	divHistory.appendChild(enemyHand);
}
function pressPaper() {
	const enemyChoice = Math.ceil(Math.random() * 3);
	const enemyHand = document.createElement("p");
	if (enemyChoice === 2) {
		enemyHand.innerText = "Your Paper tied with Paper";
	} else if (enemyChoice === 1) {
		enemyHand.innerText = "Your Paper won against Rock";
	} else {
		enemyHand.innerText = "Your Paper lost to Scissors";
	}
	const divHistory = document.querySelector('#divHistory');
	divHistory.appendChild(enemyHand);
}
function pressScissors() {
	const enemyChoice = Math.ceil(Math.random() * 3);
	const enemyHand = document.createElement("p");
	if (enemyChoice === 2) {
		enemyHand.innerText = "Your Scissors won against Paper";
	} else if (enemyChoice === 1) {
		enemyHand.innerText = "Your Scissors lost to Rock";
	} else {
		enemyHand.innerText = "Your Scissors tied with Scissors";
	}
	const divHistory = document.querySelector('#divHistory');
	divHistory.appendChild(enemyHand);
}