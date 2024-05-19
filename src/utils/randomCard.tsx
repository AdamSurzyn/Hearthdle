import { CardCommonAttributes } from "../types/searchTypes";

export const pickRandomCard = (cardsCollection: CardCommonAttributes[]) => {
  if (cardsCollection) {
    const CardsCollectionLength = cardsCollection.length;
    const randomCardsCollectionIndex = Math.floor(
      Math.random() * CardsCollectionLength
    );
    return cardsCollection[randomCardsCollectionIndex];
  }
  return null;
};
