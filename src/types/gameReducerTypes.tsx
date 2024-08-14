export enum GameActionKind {
  START_GAME = "START_GAME",
  END_GAME = "END_GAME",
  RESET_GAME = "RESET_GAME",
  ADD_GUESS = "ADD_GUESS",
  ADD_SCORE = "ADD_SCORE",
}

type GameState = "preStart" | "During" | "End";
export type GameAction =
  | { type: typeof GameActionKind.START_GAME }
  | { type: typeof GameActionKind.END_GAME }
  | { type: typeof GameActionKind.RESET_GAME }
  | { type: typeof GameActionKind.ADD_SCORE; payload: { score: number } }
  | { type: typeof GameActionKind.ADD_GUESS; payload: { guesses: number } };

export interface GameStateType {
  gameState: GameState;
  score: number;
  guesses: number;
}
