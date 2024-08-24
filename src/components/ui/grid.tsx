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
  const getCardClassName = (isCardPropertyCorrect: boolean) =>
    isCardPropertyCorrect ? "card-prop-right" : "card-prop-wrong";

  const getManaIndicator = (manaProp: "higher" | "lower" | "equal") => {
    let manaClass = "card-prop";

    if (manaProp === "higher") {
      return (manaClass += "-mana-up");
    } else if (manaProp === "lower") {
      return (manaClass += "-mana-down");
    }
    return "card-prop-right";
  };
  //! I will want to check if the game has ended after everything here is already rendered.
  return (
    <div className="cards-grid-container">
      {cardsComparisonArr.map((card, id) => (
        <div className="card-comparison" key={id}>
          <div className={getCardClassName(card.classCorrect)}>
            {card.className}
          </div>
          <div className={getManaIndicator(card.manaCostCorrect)}>
            {card.manaCost}
          </div>
          <div className={getCardClassName(card.setCorrect)}>
            {card.cardSet}
          </div>
          <div className={getCardClassName(card.typeCorrect)}>
            {card.cardType}
          </div>
        </div>
      ))}
    </div>
  );
};

//

export default Grid;
