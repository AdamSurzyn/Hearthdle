import {
  GameAction,
  GameStateType,
  GameActionKind,
} from "../types/gameReducerTypes";

export const initialGameState: GameStateType = {
  gameState: "preStart",
  score: 0,
  guesses: 0,
};

export function gameReducer(
  state: GameStateType,
  action: GameAction
): GameStateType {
  switch (action.type) {
    case GameActionKind.START_GAME: {
      return { ...state, gameState: "During" };
    }
    case GameActionKind.END_GAME: {
      return { ...state, gameState: "End" };
    }
    case GameActionKind.RESET_GAME: {
      return { ...state, gameState: "preStart", score: 0, guesses: 0 };
    }
    case GameActionKind.ADD_SCORE: {
      return { ...state, score: state.score + action.payload.score };
    }
    case GameActionKind.ADD_GUESS: {
      return { ...state, guesses: state.guesses + action.payload.guesses };
    }
    default: {
      throw Error("Wrong or no action chosen in gameReducer!");
    }
  }
}
