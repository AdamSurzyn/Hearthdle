import React from "react";
import "../ui/grid.scss";
import { CardCommonAttributes } from "../../types/searchTypes";

interface GridCardAttributes {
  correctCard: CardCommonAttributes | null;
  choosenCard: CardCommonAttributes | null;
}

const Grid = ({ correctCard, choosenCard }: GridCardAttributes) => {
  if (!choosenCard) {
    return null;
  }
  return (
    <div className="cards-grid-container">
      <div className="card">Example1</div>
      <div className="card">Example2</div>
      <div className="card">Example3</div>
    </div>
  );
};

export default Grid;
