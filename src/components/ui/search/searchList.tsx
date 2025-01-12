import React from "react";
import { SearchCard } from "./searchCard";
import { CardCommonAttributes } from "../../../types/searchTypes";

interface Props {
  filteredCards: CardCommonAttributes[];
  focusedIndex: number;
}

const SearchList = ({ filteredCards, focusedIndex }: Props) => {
  if (filteredCards.length === 0) {
    return <div>Opps! No cards match your search.</div>;
  }

  return (
    <ul tabIndex={0}>
      {filteredCards.map((card, index) => (
        <SearchCard
          cardData={card}
          className={
            index === focusedIndex ? "search-card--focus" : "search-card"
          }
          key={card.id}
        />
      ))}
    </ul>
  );
};

export default SearchList;
