import { GameStateType } from "./gameReducerTypes";

export interface ReplayButtonProps {
  onReset: () => void;
}
export interface GameScoreType {
  gameState: GameStateType;
}

export interface ReplayModalProps {
  onReset: () => void;
  gameState: GameStateType;
}
