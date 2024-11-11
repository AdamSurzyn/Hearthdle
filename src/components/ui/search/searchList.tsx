import React from "react";
import { SearchCard } from "./searchCard";
import { CardCommonAttributes } from "../../../types/searchTypes";

interface FilteredCardsProps {
  uniqueCards: CardCommonAttributes[];
  handleCurrentCard: (cardData: CardCommonAttributes) => void;
}

const SearchList: React.FC<FilteredCardsProps> = ({
  uniqueCards,
  handleCurrentCard,
}) => {
  if (uniqueCards.length === 0) {
    return <div>Opps! No cards match your search.</div>;
  }
  const cards = uniqueCards.map((card) => (
    <SearchCard
      key={card.id}
      cardData={card}
      handleCurrentCard={handleCurrentCard}
    />
  ));

  return <div>{cards}</div>;
};

export default SearchList;
