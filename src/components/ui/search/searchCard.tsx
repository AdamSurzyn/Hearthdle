import React from "react";
import { CardCommonAttributes } from "../../../types/searchTypes";
interface Props {
  cardData: CardCommonAttributes;
  handleCurrentCard: (cardData: CardCommonAttributes) => void;
}

export const SearchCard = ({ cardData, handleCurrentCard }: Props) => {
  const setCurrentChosenCard = () => {
    handleCurrentCard(cardData);
  };

  return (
    <div className="search-card" onClick={setCurrentChosenCard}>
      {cardData.name}
    </div>
  );
};
