import { CardCommonAttributes } from "../types/searchTypes";
import {
  CardMetaData,
  CardWithNames,
  CardsComparison,
  CardsComparisonAndNames,
} from "../types/utils";
import { cardClassesMeta, cardSetsMeta, cardTypesMeta } from "./cardData";

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
  let cardsComparisonOutcome: CardsComparison = {
    classCorrect: false,
    typeCorrect: false,
    manaCostCorrect: "lower",
    setCorrect: false,
  };

  if (!correctCard || !chosenCard) {
    return;
  }

  const comparisonMapping = {
    className: "class",
    cardType: "type",
    manaCost: "manaCost",
    cardSet: "set",
  };

  for (const [cardProp, outcomeProp] of Object.entries(comparisonMapping)) {
    const correctValue = correctCard[cardProp as keyof CardWithNames];
    const chosenValue = chosenCard[cardProp as keyof CardWithNames];

    if (cardProp === "manaCost") {
      if (correctValue !== undefined && chosenValue !== undefined) {
        if (correctValue === chosenValue) {
          cardsComparisonOutcome.manaCostCorrect = true;
        } else if (correctValue < chosenValue) {
          cardsComparisonOutcome.manaCostCorrect = "lower";
        } else {
          cardsComparisonOutcome.manaCostCorrect = "higher";
        }
      }
    } else {
      if (correctValue && chosenValue && correctValue === chosenValue) {
        cardsComparisonOutcome[outcomeProp as keyof CardsComparison] = true;
      }
    }
  }
  const cardsComparisonAndNames: CardsComparisonAndNames = {
    ...cardsComparisonOutcome,
    ...chosenCard,
  };
  return cardsComparisonAndNames;
};
