export interface CardMetaData {
  [key: string]: string;
}

export interface CardWithNames {
  manaCost?: number;
  className?: string;
  cardSet?: string;
  cardType?: string;
}

export interface CardsComparison {
  class?: boolean;
  type?: boolean;
  manaCost?: "higher" | "lower" | true;
  set?: boolean;
}
