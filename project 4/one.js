let value = parseInt(Math.random() * 100 + 1);
console.log(value);

const submit = document.querySelector("#subt");
let userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
let resultParas = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number bigger than 1");
  } else if (guess > 100) {
    alert("Please enter a number smaller than 100");
  } else {
    prevGuess.push(guess);
    if (numGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game Over! Randomn no. was ${value}`);
      gameOver();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess > value) {
    displayMessage(` Your Number is High`);
  } else if (guess < value) {
    displayMessage(`Your Number is Low`);
  } else {
    displayMessage(`You guesses it right`);
    gameOver();
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} , `;
  numGuesses++;
  lastResult.innerHTML = `${11 - numGuesses+1}`;
}

function gameOver() {
  userInput.setAttribute("disabled", "");
  userInput.value = "";
  p.classList.add("button");
  p.innerHTML = `<button id='newGame'>Start Again !</button>`;
  resultParas.append(p);
  playGame = false;
  newGame();
}

function newGame() {
  const Button = document.querySelector("#newGame");
  Button.addEventListener("click", function (e){
    value = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuesses = 1;
    guessSlot.innerHTML = "";
    lastResult.innerHTML = `${11 - numGuesses}`;
    userInput.removeAttribute("disabled");
    resultParas.removeChild(p);
    lowOrHi.innerHTML = "";
    playGame = true;
  });
}
