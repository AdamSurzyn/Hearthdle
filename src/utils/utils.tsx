import { CardCommonAttributes } from "../types/searchTypes";
import {
  CardMetaData,
  CardWithNames,
  CardsComparison,
  UserGuess,
} from "../types/utils";
import { cardSetsMeta, cardTypesMeta, cardClassesMeta } from "./cardData";

export const pickRandomCard = (cardsCollection: CardCommonAttributes[]) => {
  const CardsCollectionLength = cardsCollection.length;
  const randomCardsCollectionIndex = Math.floor(
    Math.random() * CardsCollectionLength
  );
  return cardsCollection[randomCardsCollectionIndex];
};

export const replaceIdWithName = (
  card: CardCommonAttributes
): CardWithNames => {
  const mapIdToName = (id: number, metaData: CardMetaData): string => {
    return metaData[id]!;
  };

  const newCard: CardWithNames = {
    name: card.name,
    manaCost: card.manaCost,
    className: mapIdToName(card.classId, cardClassesMeta),
    cardSet: mapIdToName(card.cardSetId, cardSetsMeta),
    cardType: mapIdToName(card.cardTypeId, cardTypesMeta),
  };

  return newCard;
};

export const compareCardAttributes = (
  correctCard: CardWithNames,
  chosenCard: CardWithNames
) => {
  if (!correctCard || !chosenCard) {
    return;
  }

  const cardsComparisonOutcome: CardsComparison = {
    cardNameCorrect: correctCard.name === chosenCard.name,
    classCorrect: correctCard.className === chosenCard.className,
    typeCorrect: correctCard.cardType === chosenCard.cardType,
    manaCostCorrect: compareManaCost(correctCard.manaCost, chosenCard.manaCost),
    setCorrect: correctCard.cardSet === chosenCard.cardSet,
  };

  const cardsComparisonAndNames: UserGuess = {
    ...cardsComparisonOutcome,
    ...chosenCard,
  };

  return cardsComparisonAndNames;
};

const compareManaCost = (
  correctCost: number,
  chosenCost: number
): "lower" | "higher" | "equal" => {
  if (correctCost === undefined || chosenCost === undefined) {
    return "lower";
  }

  if (correctCost === chosenCost) {
    return "equal";
  } else if (correctCost < chosenCost) {
    return "lower";
  } else {
    return "higher";
  }
};
