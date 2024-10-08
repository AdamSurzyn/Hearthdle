import React, { useState, useRef, useEffect } from "react";
import { SearchCard } from "./searchCard";
import { CardCommonAttributes } from "../../../types/searchTypes";
import { useChosenCardContext } from "../../../contexts/CardsContext";
interface FilteredCardsProps {
  filteredCards: CardCommonAttributes[];
}

const SearchList: React.FC<FilteredCardsProps> = ({ filteredCards }) => {
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const { setChosenCard } = useChosenCardContext();
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      setFocusedIndex((prev) =>
        prev < filteredCards.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      setFocusedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter" && cardRefs.current[focusedIndex]) {
      setChosenCard(filteredCards[focusedIndex]);
    }
  };

  useEffect(() => {
    if (cardRefs.current[focusedIndex]) {
      cardRefs.current[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  if (filteredCards.length === 0) {
    return <div>Opps! No cards match your search.</div>;
  }

  return (
    <div onKeyDown={handleKeyDown} tabIndex={0} style={{ outline: "none" }}>
      {filteredCards.map((card, index) => (
        <SearchCard
          key={card.id}
          cardData={card}
          ref={(el) => (cardRefs.current[index] = el)}
          style={{
            border:
              focusedIndex === index ? "2px solid blue" : "1px solid gray", // Optional
          }}
        />
      ))}
    </div>
  );
};

export default SearchList;
