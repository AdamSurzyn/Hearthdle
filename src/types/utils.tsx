export type CardMetaData = Record<number, string>;

export interface CardWithNames {
  name: string;
  manaCost: number;
  className: string;
  cardSet: string;
  cardType: string;
}

export interface CardsComparison {
  cardNameCorrect: boolean;
  classCorrect: boolean;
  typeCorrect: boolean;
  manaCostCorrect: "higher" | "lower" | "equal";
  setCorrect: boolean;
}

export interface UserGuess extends CardWithNames, CardsComparison {}
