const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

let humanScoreNumber = 0
let machineScoreNumber = 0

// ENUM
const GAME_OPTIONS = {
  ROCK: 'pedra',
  PAPER: 'papel',
  SCISSORS: 'tesoura'
}

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const options = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS];
  const randomIndex = Math.floor(Math.random() * 3);

  return options[randomIndex];
};

const playTheGame = (human, machine) => {
  if (human === machine) {
    result.innerHTML = "Deu empate";
  } else if (
    (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
    (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
    (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
  ) {
    humanScoreNumber++
    humanScore.innerHTML = humanScoreNumber
    result.innerHTML = `Você ganhou! A máquina escolheu ${machine}.`;
  } else {
    machineScoreNumber++
    machineScore.innerHTML = machineScoreNumber
    result.innerHTML = `Você perdeu. A máquina escolheu ${machine}.`
  }
};
