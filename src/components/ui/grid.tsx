import React from "react";
import "../ui/grid.scss";
import { CardCommonAttributes } from "../../types/searchTypes";

interface GridCardAttributes {
  correctCard: CardCommonAttributes;
}

const Grid = ({ correctCard }: GridCardAttributes) => {
  return (
    <div className="cards-grid-container">
      <div className="card">Example1</div>
      <div className="card">Example2</div>
      <div className="card">Example3</div>
    </div>
  );
};

export default Grid;
