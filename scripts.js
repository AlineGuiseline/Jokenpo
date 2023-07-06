const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const options = ["pedra", "papel", "tesoura"];
  const randomIndex = Math.floor(Math.random() * 3);

  return options[randomIndex];
};

const playTheGame = (human, machine) => {
  if (human === machine) {
    result.innerHTML = "Deu empate";
  } else if (
    (human === "papel" && machine === "pedra") ||
    (human === "pedra" && machine === "tesoura") ||
    (human === "tesoura" && machine === "papel")
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
