import React from "react";
import { SearchCard } from "./searchCard";
import { CardCommonAttributes } from "../../../types/searchTypes";

interface FilteredCardsProps {
  filteredCards: CardCommonAttributes[];
  handleCurrentCard: (cardData: CardCommonAttributes) => void;
}

const SearchList: React.FC<FilteredCardsProps> = ({
  filteredCards,
  handleCurrentCard,
}) => {
  if (filteredCards.length === 0) {
    return <div>Opps! No cards match your search.</div>;
  }
  const cards = filteredCards.map((card) => (
    <SearchCard
      key={card.id}
      cardData={card}
      handleCurrentCard={handleCurrentCard}
    />
  ));

  return <div>{cards}</div>;
};

export default SearchList;
