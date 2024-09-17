import React from "react";
import { calculatePercentOfWins } from "../../../utils/utils";
import { GameScoreType } from "../../../types/modalTypes";

export const ReplayScore = ({ gameState }: GameScoreType) => {
  console.log(gameState);
  const percentOfWins = calculatePercentOfWins(
    gameState.score,
    gameState.totalGuesses
  );

  return (
    <div className="game-score-container">
      <table>
        <tr>
          <td>Tries this round:</td>
          <td>{gameState.guesses}</td>
        </tr>
        <tr>
          <td>Total guessed cards:</td>
          <td>{gameState.score}</td>
        </tr>
        <tr>
          <td>Correct guesses:</td>
          <td>{percentOfWins}</td>
        </tr>
      </table>
    </div>
  );
};
