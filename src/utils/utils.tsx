import { CardCommonAttributes } from "../types/searchTypes";
import {
  CardMetaData,
  CardWithNames,
  CardsComparison,
  CardsComparisonAndNames,
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
  const cardTypes = cardTypesMeta;
  const cardSets = cardSetsMeta;
  const cardClasses = cardClassesMeta;

  const mapIdToName = (id: number, metaData: CardMetaData): string => {
    return metaData[id]!;
  };

  const newCard: CardWithNames = {
    manaCost: card.manaCost,
    className: mapIdToName(card.classId, cardClasses),
    cardSet: mapIdToName(card.cardSetId, cardSets),
    cardType: mapIdToName(card.cardTypeId, cardTypes),
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
    classCorrect: correctCard.className === chosenCard.className,
    typeCorrect: correctCard.cardType === chosenCard.cardType,
    manaCostCorrect: compareManaCost(correctCard.manaCost, chosenCard.manaCost),
    setCorrect: correctCard.cardSet === chosenCard.cardSet,
  };

  const cardsComparisonAndNames: CardsComparisonAndNames = {
    ...cardsComparisonOutcome,
    ...chosenCard,
  };

  return cardsComparisonAndNames;
};

const compareManaCost = (
  correctCost?: number,
  chosenCost?: number
): "lower" | "higher" | true => {
  if (correctCost === undefined || chosenCost === undefined) {
    return "lower";
  }

  if (correctCost === chosenCost) {
    return true;
  } else if (correctCost < chosenCost) {
    return "lower";
  } else {
    return "higher";
  }
};
