let restart = document.getElementById("restart");
let compScoreVal = document.getElementById("compScoreVal");
let playerScoreVal = document.getElementById("userScoreVal");
// complete logic of the janeken game
const jankenGame = () => {
  let playerScore = 0;
  let computerScore = 0;
  let options = ["rock", "paper", "scissors"];
  let moves = 10;

  const playGame = () => {
    let rockBtn = document.getElementById("r");
    let paperBtn = document.getElementById("p");
    let scissorsBtn = document.getElementById("s");
    let map = new Map();
    map.set("r", "rock");
    map.set("p", "paper");
    map.set("s", "scissors");

    let options = [rockBtn, paperBtn, scissorsBtn];
    options.forEach((option) => {
      option.addEventListener("click", () => {
        // moves get reduced every time player choses a shape
        moves--;
        let computerMove = randomComputerMove();

        if (moves == 0) {
          // if no moves, its time to end the game and decide the winner
          gameOver();
        }
        winner(map.get(option.id), computerMove);
      });
    });
  };

  // function to decide game winner
  let gameOver = () => {
    if (playerScore == computerScore) {
      console.log("Tie");
      document.getElementById("result-final-stat").innerText = "Tie";
    } else if (playerScore > computerScore) {
      console.log("Player won Game");
      document.getElementById("result-final-stat").innerText = "Player won";
    } else {
      console.log("Computer won Game");
      document.getElementById("result-final-stat").innerText = "Computer won";
    }

    restart.style.display = "block";
    restart.addEventListener("click", () => {
      restartGame();
      jankenGame();
    });
  };

  //
  let restartGame = () => {
    playerScore = 0;
    computerScore = 0;
    moves = 10;
    restart.style.display = "none";
    document.getElementById("result-final-stat").innerText = 'Winner:';
    compScoreVal.innerText = 0;
    playerScoreVal.innerText = 0;
  };
  // function to get computer's move
  let randomComputerMove = () => {
    let move = Math.floor(Math.random() * 3);
    return options[move];
  };

  /* function to decide the winner of the move
     rock beats scissors
     scissors beats paper
     paper beats rock
  */
  let winner = (playerMove, computerMove) => {
    console.log("Moves left :"+moves);
    if (playerMove == computerMove) {
      console.log("Tie");
    } else if (playerMove == "rock") {
      if (computerMove == "paper") {
        console.log("Computer Won");
        compScoreVal.innerText++;
        computerScore++;
      } else if (computerMove == "scissors") {
        console.log("Player won");
        playerScoreVal.innerText++;
        playerScore++;
      }
    } else if (playerMove == "paper") {
      if (computerMove == "scissors") {
        console.log("Computer Won");
        compScoreVal.innerText++;
        computerScore++;
      } else if (computerMove == "rock") {
        console.log("Player won");
        playerScoreVal.innerText++;
        playerScore++;
      }
    } else {
      if (computerMove == "paper") {
        compScoreVal.innerText++;
        console.log("Computer Won");
        computerScore++;
      } else if (computerMove == "rock") {
        console.log("Player won");
        playerScoreVal.innerText++;
        playerScore++;
      }
    }
    console.log("compScoreVal = "+compScoreVal.innerText);
    console.log("computerScore = "+computerScore);
    console.log("playerScoreVal = "+playerScoreVal.innerText);
    console.log("playerScore = "+playerScore);
  };

  // calling playGame function
  playGame();
};

// calling the game function
jankenGame();
