let countRock = 0;
let countPaper = 0;
let countScissors = 0;
let historyCount = 0;
function pressRock() {
  historyCount++;
  countRock++;
  const enemyChoice = Math.ceil(Math.random() * 3);
  const result = document.querySelector("h2");
  if (result) {
    result.remove();
  }
  const enemyImage = document.createElement("img");
  const enemyHand = document.createElement("p");
  const span = document.querySelector("rockPercent");
  const percentage =
    (countRock / (countRock + countPaper + countScissors)) * 100;
  rockPercent.innerText = percentage.toFixed(2);
  if (enemyChoice === 2) {
    enemyHand.innerText = "Your Rock lost to Paper";
  } else if (enemyChoice === 1) {
    enemyHand.innerText = "Your Rock tied with Rock";
  } else {
    enemyHand.innerText = "Your Rock won against Scissors";
  }
  const divHistory = document.querySelector("#divHistory");
  divHistory.appendChild(enemyHand);
}
function pressPaper() {
  historyCount++;
  countPaper++;
  const enemyChoice = Math.ceil(Math.random() * 3);
  const result = document.querySelector("h2");
  if (result) {
    result.remove();
  }
  const enemyImage = document.createElement("img");
  const enemyHand = document.createElement("p");
  const span = document.querySelector("paperPercent");
  const percentage =
    (countPaper / (countRock + countPaper + countScissors)) * 100;
  paperPercent.innerText = percentage.toFixed(2);
  if (enemyChoice === 2) {
    enemyHand.innerText = "Your Paper tied with Paper";
  } else if (enemyChoice === 1) {
    enemyHand.innerText = "Your Paper won against Rock";
  } else {
    enemyHand.innerText = "Your Paper lost to Scissors";
  }
  const divHistory = document.querySelector("#divHistory");
  divHistory.appendChild(enemyHand);
}
function pressScissors() {
  historyCount++;
  countScissors++;
  const enemyChoice = Math.ceil(Math.random() * 3);
  const result = document.querySelector("h2");
  if (result) {
    result.remove();
  }
  const enemyImage = document.createElement("img");
  const enemyHand = document.createElement("p");
  const span = document.querySelector("scissorsPercent");
  const percentage =
    (countScissors / (countRock + countPaper + countScissors)) * 100;
  scissorsPercent.innerText = percentage.toFixed(2);
  if (enemyChoice === 2) {
    enemyHand.innerText = "Your Scissors won against Paper";
  } else if (enemyChoice === 1) {
    enemyHand.innerText = "Your Scissors lost to Rock";
  } else {
    enemyHand.innerText = "Your Scissors tied with Scissors";
  }
  const divHistory = document.querySelector("#divHistory");
  divHistory.appendChild(enemyHand);
}
