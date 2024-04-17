import React from "react";
import { SearchCard } from "./searchCard";
import { CardCommonAttributes } from "./searchTypes";

interface FilteredCardsProps {
  filteredCards: CardCommonAttributes[];
}

const SearchList: React.FC<FilteredCardsProps> = ({ filteredCards }) => {
  const cards = filteredCards.map((card) => (
    <SearchCard key={card.id} cardData={card} />
  ));
  return <div>{cards}</div>;
};

export default SearchList;
