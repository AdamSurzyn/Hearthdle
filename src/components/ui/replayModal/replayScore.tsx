import React from "react";

const ReplayScore = ({ gameScores }) => {
  return (
    <div className="game-score-container">
      <table>
        <tr>
          <td>Tries this round:</td>
          <td>/tries/</td>
        </tr>
        <tr>
          <td>Total guessed cards:</td>
          <td>/total score/</td>
        </tr>
        <tr>
          <td>Correct guesses:</td>
          <td>/correct guesses divided by guesses * 100/</td>
        </tr>
      </table>
    </div>
  );
};
