import { CardCommonAttributes } from "./searchTypes";

export interface CardPair {
  wrongCard: CardCommonAttributes;
  rightCard: CardCommonAttributes;
}

export enum GameActionKind {
  FAKE = "FAKE",
}

export interface GameAction {
  type: GameActionKind;
  payload: CardPair;
}
