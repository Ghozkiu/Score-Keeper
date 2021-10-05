const select = document.querySelector("#limitPoints");
const ResetBtn = document.querySelector(".reset");
let isGameOver = false;

//Players Objects
const playerOne = {
  score: 0,
  button: document.querySelector(".player-one"),
  display: document.querySelector("#player-one-display"),
};
const playerTwo = {
  score: 0,
  button: document.querySelector(".player-two"),
  display: document.querySelector("#player-two-display"),
};

//Events
playerOne.button.addEventListener("click", function () {
  increment(playerOne, playerTwo);
});

playerTwo.button.addEventListener("click", function () {
  increment(playerTwo, playerOne);
});

ResetBtn.addEventListener("click", function () {
  reset();
});

//Keydown events
document.body.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "Digit1":
    case "Numpad1":
      increment(playerOne, playerTwo);
      break;
    case "Digit2":
    case "Numpad2":
      increment(playerTwo, playerOne);
      break;
    case "KeyR":
    case "Enter":
      reset();
      break;
  }
});

//Increment method
const increment = (player, opponent) => {
  if (!isGameOver) {
    player.score += 1;
    player.display.innerText = player.score;
    if (player.score == select.value) {
      player.display.classList.add("winner");
      opponent.display.classList.add("loser");
      player.button.disabled = true;
      opponent.button.disabled = true;
      select.disabled = true;
      isGameOver = true;
    }
  }
};

//Reset method
function reset() {
  [playerOne, playerTwo].forEach((player) => {
    player.score = 0;
    player.display.innerText = 0;
    player.display.classList.remove("loser", "winner");
    player.button.disabled = false;
  });
  select.disabled = false;
  isGameOver = false;
}
