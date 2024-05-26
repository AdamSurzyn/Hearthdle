import React from "react";
import "../ui/grid.scss";
import { CardsComparison } from "../../types/utils";

interface GridCardAttributes {
  cardsComparisonOutcome: CardsComparison | null | undefined;
}

const Grid = ({ cardsComparisonOutcome }: GridCardAttributes) => {
  if (!cardsComparisonOutcome) {
    return null;
  }
  return (
    //
    <div className="cards-grid-container">
      <div className="card">Example1</div>
      <div className="card">Example2</div>
      <div className="card">Example3</div>
    </div>
  );
};

//

export default Grid;
