import "../ui/grid.scss";
import { UserGuessArr } from "../../types/gameStateContextTypes";

const Grid = ({ cardsComparisonArr }: { cardsComparisonArr: UserGuessArr }) => {
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
      {cardsComparisonArr.length > 0 && (
        <div className="answer-titles">
          <div className="title">Class</div>
          <div className="title">Mana Cost</div>
          <div className="title">Set</div>
          <div className="title">Type</div>
        </div>
      )}
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
