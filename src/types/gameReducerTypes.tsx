import { CardWithNames } from "./utils";

export enum GameActionKind {
  WRONG = "WRONG",
  RIGHT = "RIGHT",
}

export interface GameAction {
  type: GameActionKind;
  payload: CardPair;
}

export interface CardPair {
  wrongCard: CardWithNames;
  rightCard: CardWithNames;
}
