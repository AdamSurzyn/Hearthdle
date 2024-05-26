import { CardsComparison } from "./utils";

export enum GameActionKind {
  ADD = "ADD",
  RESET = "RESET",
}

export interface GameAction {
  type: GameActionKind;
  payload: CardsComparison;
}

export type CardsComparisonArr = CardsComparison[];
