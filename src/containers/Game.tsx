import { useState } from "react";
import { Board, ResetButton, Scoreboard } from "../components";
import { WIN_CONDITIONS } from "../utilities";
import { BoardState, ScoreboardState } from "./Game.types";

const Game = () => {
  // Create hook to set Player 1's name
  const [player1Name, setPlayer1Name] = useState<string>("Player1");
  // Create hook to set Player 2's name
  const [player2Name, setPlayer2Name] = useState<string>("Player2");

  // Create the board State; hook used to change the state of the board
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));

  // Create the hook to check who's turn it is; Player 1 is X, Player 2 is O
  const [isPlayer1Turn, setIsPlayer1Turn] = useState<boolean>(true);

  // Create the hook to check if the game is over or not
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  // Create the hook to set the Scoreboard
  const [scoreboard, setScoreboard] = useState<ScoreboardState>({
    xPlayer: { symbol: "X", name: player1Name, score: 0 },
    oPlayer: { symbol: "O", name: player2Name, score: 0 },
    tieScore: 0,
  });

  // Create a function to handle the reset of the game
  const handleReset = () => {
    // Reset the board
    clearBoard();
    // Reset the player turn
    setIsPlayer1Turn(true);
    // Reset the game over state
    setIsGameOver(false);
  };

  // Create a function to clear the board
  const clearBoard = () => {
    // Clear the board
    setBoard(Array(9).fill(null));
  };

  // Create a function to check if there is a winner or a tie
  const checkWinner = (board: BoardState) => {
    for (let c = 0; c < WIN_CONDITIONS.length; c++) {
      const [p, q, r] = WIN_CONDITIONS[c];

      // Check if there is a winner
      if (board[p] && board[p] === board[q] && board[p] === board[r]) {
        setIsGameOver(true);
        // Update the scoreboard
        if (board[p] === "X") {
          console.log("X wins");
          setScoreboard({
            ...scoreboard,
            xPlayer: {
              ...scoreboard.xPlayer,
              score: scoreboard.xPlayer.score + 1,
            },
          });
        } else {
          console.log("O wins");
          setScoreboard({
            ...scoreboard,
            oPlayer: {
              ...scoreboard.oPlayer,
              score: scoreboard.oPlayer.score + 1,
            },
          });
        }
        handleReset();
      }
      // Check if there is a tie
      else if (!board.includes(null)) {
        setIsGameOver(true);
        // Update the scoreboard
        setScoreboard({ ...scoreboard, tieScore: scoreboard.tieScore + 1 });
        handleReset();
      }
    }
  };

  // Create a function to update the board
  const updateBoard = (index: number) => {
    // Check if the box is already filled
    if (board[index] === null) {
      // Update the board with the current player's move
      const newBoard = [...board];
      newBoard[index] = isPlayer1Turn ? "X" : "O";
      setBoard(newBoard);
    }
  };

  // Create Function to handle a click evevnt on one of the boxes
  const handleClick = (index: number) => {
    // Check if the game is over
    if (isGameOver) {
      handleReset();
    }

    // Update the board
    updateBoard(index);

    // Check if there is a winner or a tie
    checkWinner(board);

    // Update the player turn
    setIsPlayer1Turn(!isPlayer1Turn);
  };

  return (
    <section className="flex place-content-evenly pt-4  ">
      <div className="flex flex-col place-items-center">
        <Board
          board={board}
          onClick={(boxIndx: number) => {
            isGameOver ? handleReset : handleClick(boxIndx);
          }}
        />
        <ResetButton onClick={handleReset} />
      </div>
      <div className="place-items-center self-center">
        <Scoreboard
          xPlayer={scoreboard.xPlayer}
          oPlayer={scoreboard.oPlayer}
          tieScore={scoreboard.tieScore}
        />
      </div>
    </section>
  );
};

export default Game;
