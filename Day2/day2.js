// rock > scissors
// scissors > paper
// paper > rock
// same shape = draw
// premiere colonne = ce que l'adversaire joue, A = Rock, B = Paper, C = Scissors
// deuxieme colonne = ce que je dois jouer, X = Rock, Y = Paper, Z = Scissors
// pas trop in sinon sus
// gagnant étant celui avec le plus de score
// score total = somme du score de chaque round
// le score d'un round = shape sélectionne, Rock = 1, Paper = 2, Scissors = 3
// + le résultat, Loose = 0, Draw = 3, Win = 6

// X > Z > Y > X

var fs = require("fs");

var data = fs.readFileSync("./input.txt").toString().split("\n");

function getTotalScore(data) {
  let totalScore = 0;
  data.forEach((round, i) => {
    let formattedRound = round.split(" ");
    let adversaire = formattedRound[0];
    let joueur = formattedRound[1];

    // Si le joueur joue Rock
    if (joueur === "X") {
      totalScore += 1;
      // Si l'adversaire joue Rock
      if (adversaire === "A") {
        totalScore += 3;
      }
      // Si l'adversaire joue Scissors
      if (adversaire === "C") {
        totalScore += 6;
      }
    }
    // Si le joueur joue Paper
    if (joueur === "Y") {
      totalScore += 2;
      // Si l'avdersaire joue Paper
      if (adversaire === "B") {
        totalScore += 3;
      }
      // Si l'adversaire joue Rock
      if (adversaire === "A") {
        totalScore += 6;
      }
    }

    // Si le joueur joue Scissors
    if (joueur === "Z") {
      totalScore += 3;
      // Si l'adversaire joue Scissors
      if (adversaire === "C") {
        totalScore += 3;
      }
      // Si l'adversaire joue Paper
      if (adversaire === "B") {
        totalScore += 6;
      }
    }

    console.log(i, totalScore);
  });
  return totalScore;
}

// X = lose, Y = draw, Z = win
function getTotalScore2(data) {
  let totalScore = 0;
  data.forEach((round) => {
    let formattedRound = round.split(" ");
    let adversaire = formattedRound[0];
    let joueur = formattedRound[1];

    // Je dois lose
    if (joueur === "X") {
      if (adversaire === "A") {
        totalScore += 3;
      } else if (adversaire === "B") {
        totalScore += 1;
      } else {
        totalScore += 2;
      }
    }

    // Je dois faire draw
    if (joueur === "Y") {
      totalScore += 3;
      if (adversaire === "A") {
        totalScore += 1;
      } else if (adversaire === "B") {
        totalScore += 2;
      } else {
        totalScore += 3;
      }
    }

    // Je dois win
    if (joueur === "Z") {
      totalScore += 6;
      if (adversaire === "A") {
        totalScore += 2;
      } else if (adversaire === "B") {
        totalScore += 3;
      } else {
        totalScore += 1;
      }
    }
  });

  return totalScore;
}

console.log("Score total : ", getTotalScore2(data));
