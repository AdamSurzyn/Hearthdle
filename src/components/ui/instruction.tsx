import React from "react";

const Instruction = () => {
  return (
    <div>
      <h1>Rules</h1>
      <h3>Gameplay</h3>
      <ul>
        <li>
          The guesser first makes a guess by writing a card title to the input
          field
        </li>
        <li>
          The game provides feedback on the guess on the following criteria:
          <ul>
            <li>Green: A card has the same property as the correct card</li>
            <li>
              Yellow: A card partialy the same property as the correct card
            </li>
            <li>
              Red: A card does not have the same property as the correct card
            </li>
          </ul>
        </li>
        <li>
          Based on that feedback, the guesser narrows down the search and make
          subsequent guesses using deduction and logic
        </li>
      </ul>
      <h3>Winning</h3>
      <p>The guesser wins when they correctly guess the card</p>
    </div>
  );
};

export default Instruction;
