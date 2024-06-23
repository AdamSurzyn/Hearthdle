import React from "react";
import "../ui/grid.scss";
import { CardsComparisonArr } from "../../types/gameReducerTypes";

interface GridCardAttributes {
  cardsComparisonArr: CardsComparisonArr;
}

const Grid = ({
  cardsComparisonArr,
}: {
  cardsComparisonArr: CardsComparisonArr;
}) => {
  if (!cardsComparisonArr) {
    return null;
  }
  //!Musze tu wrzucic wlasciwe nazwy, a nie tylko, czy jest to true, false etc.
  return (
    <div className="cards-grid-container">
      {cardsComparisonArr.map((card, id) => (
        <div className="card-comparison" key={id}>
          <div className="card-prop">{card.class}</div>
          <div className="card-prop">{card.manaCost}</div>
          <div className="card-prop">{card.set}</div>
          <div className="card-prop">{card.type}</div>
        </div>
      ))}
    </div>
  );
};

//

export default Grid;
