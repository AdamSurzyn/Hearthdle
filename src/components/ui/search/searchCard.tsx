import React from "react";
import { CardCommonAttributes } from "./searchTypes";
interface SearchCardProps {
  cardData: CardCommonAttributes;
}

export const SearchCard: React.FC<SearchCardProps> = ({ cardData }) => {
  return <div className="search-card">{cardData.name}</div>;
};
