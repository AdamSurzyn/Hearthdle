
import { GameActionKind, GameAction } from "../types/gameReducerTypes"; 
import { Dispatch } from "react"; 

export const startGame = (dispatch: Dispatch<GameAction>) => {
  dispatch({ type: GameActionKind.START_GAME });
};

export const endGame = (dispatch: Dispatch<GameAction>) => {
  dispatch({ type: GameActionKind.END_GAME });
};

export const resetGame = (dispatch: Dispatch<GameAction>) => {
  dispatch({ type: GameActionKind.RESET_GAME });
};

export const addScore = (dispatch: Dispatch<GameAction>, score: number) => {
  dispatch({ type: GameActionKind.ADD_SCORE, payload: { score } });
};

export const addGuess = (dispatch: Dispatch<GameAction>, guesses: number) => {
  dispatch({ type: GameActionKind.ADD_GUESS, payload: { guesses } });
};