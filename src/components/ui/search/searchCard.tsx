import React from "react";
import { CardCommonAttributes } from "../../../types/searchTypes";
import { useChosenCardContext } from "../../../contexts/CardsContext";
interface SearchCardProps {
  cardData: CardCommonAttributes;
  className: string;
}

export const SearchCard = (
  { cardData, className }: SearchCardProps,
  key: number
) => {
  const { setChosenCard } = useChosenCardContext();

  const setCurrentChosenCard = () => {
    setChosenCard(cardData);
  };
  return (
    <li className={className} onClick={setCurrentChosenCard} key={key}>
      {cardData.name}
    </li>
  );
};

export default SearchCard;
