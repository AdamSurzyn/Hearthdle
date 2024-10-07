import {
  GameAction,
  GameStateType,
  GameActionKind,
  GameState,
} from "../types/gameReducerTypes";

export const initialGameState: GameStateType = {
  gameState: GameState.Idle,
  score: 0,
  guesses: 0,
  totalGuesses: 0,
};

export function gameReducer(
  state: GameStateType,
  action: GameAction
): GameStateType {
  switch (action.type) {
    case GameActionKind.START_GAME: {
      return { ...state, gameState: GameState.During };
    }
    case GameActionKind.END_GAME: {
      return { ...state, gameState: GameState.End };
    }
    case GameActionKind.RESET_GAME: {
      return { ...state, gameState: GameState.Idle, score: 0, guesses: 0 };
    }
    case GameActionKind.INCREMENT_SCORE: {
      return { ...state, score: state.score + 1 };
    }
    case GameActionKind.ADD_GUESS: {
      if (action.payload) {
        return {
          ...state,
          guesses: state.guesses + action.payload.guesses,
          totalGuesses: state.totalGuesses + action.payload.guesses,
        };
      }
      throw new Error("Error: payload is empty for action ADD_GUESS");
    }

    default: {
      throw Error("Wrong or no action chosen in gameReducer!");
    }
  }
}
