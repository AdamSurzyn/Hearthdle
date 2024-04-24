import { CardCommonAttributes } from "../components/ui/search/searchTypes";

export const randomCard = (cardsCollection: CardCommonAttributes[]) => {
  const CardsCollectionLength = cardsCollection.length;
  const randomCardsCollectionIndex = Math.floor(
    Math.random() * CardsCollectionLength
  );
  return cardsCollection[randomCardsCollectionIndex];
};
