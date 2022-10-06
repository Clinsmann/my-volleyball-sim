function setsScore({ player1, player2, set }) {
  let team1 = 0;
  let team2 = 0;
  let server = 0;
  let scoreList = [];
  let finalList = [];
  let number = set === 5 ? 15 : 25;
  console.log(`Set ${set}`);

  while (true) {
    if (server === 0) {
      if (Math.random() < player1) {
        team1 += 1;
      } else {
        server = 1;
      }
    } else {
      if (Math.random() < player2) {
        team2 += 1;
        scoreList.push(team1.toString() + "-" + team2.toString());
        finalList.push(scoreList.toString());
        console.log(finalList);
      } else {
        server = 0;
      }
    }

    if (team1 >= number || team2 >= number) {
      if (Math.abs(team1 - team2) >= 2) {
        break;
      }
    }
  }

  console.log(team1.toString() + "-" + team2.toString());

  if (team1 > team2) {
    console.log("Team 1 wins the set!");
    return team1;
  }

  console.log("Team 2 wins the set!");
  return team2;
}

function volleyballSimulator(player1, player2) {
  setsScore({ player1, player2, set: 1 });
  setsScore({ player2, player1, set: 2 });
  setsScore({ player1, player2, set: 3 });
  setsScore({ player1, player2, set: 4 });
  setsScore({ player1, player2, set: 5 });
}

volleyballSimulator(0.7, 0.7);
