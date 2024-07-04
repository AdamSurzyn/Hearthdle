import "../ui/grid.scss";
import { CardsComparisonAndNamesArr } from "../../types/gameReducerTypes";

const Grid = ({
  cardsComparisonArr,
}: {
  cardsComparisonArr: CardsComparisonAndNamesArr;
}) => {
  if (!cardsComparisonArr) {
    return null;
  }
  console.log(cardsComparisonArr);
  const getClassName = (value: boolean) => {
    let className = "card-prop";

    if (value) {
      className += "-right";
    } else {
      className += "-wrong";
    }

    return className;
  };

  return (
    <div className="cards-grid-container">
      {cardsComparisonArr.map((card, id) => (
        <div className="card-comparison" key={id}>
          <div className={getClassName(card.classCorrect)}>
            {card.className}
          </div>
          <div className="card-prop">{card.manaCostCorrect.toString()}</div>
          <div className={getClassName(card.setCorrect)}>{card.cardSet}</div>
          <div className={getClassName(card.typeCorrect)}>{card.cardType}</div>
        </div>
      ))}
    </div>
  );
};

//

export default Grid;
