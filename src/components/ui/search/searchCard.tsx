import React from "react";
import { CardCommonAttributes } from "../../../types/searchTypes";
interface SearchCardProps {
  cardData: CardCommonAttributes;
  handleCurrentCard: (cardData: CardCommonAttributes) => void;
}

export const SearchCard: React.FC<SearchCardProps> = ({
  cardData,
  handleCurrentCard,
}) => {
  const setCurrentChosenCard = () => {
    handleCurrentCard(cardData);
  };

  return (
    <div className="search-card" onClick={setCurrentChosenCard}>
      {cardData.name}
    </div>
  );
};
