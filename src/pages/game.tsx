import Search from "../components/ui/search/search";
import Grid from "../components/ui/grid";
import "../pages/game.scss";
import { CardsQueryData } from "../types/searchTypes";
import { useQuery } from "react-query";
import { getAllCards } from "../features/getCards";
import {
  compareCardAttributes,
  pickRandomCard,
  replaceIdWithName,
} from "../utils/utils";
import { useChosenCardContext } from "../contexts/CardsContext";
import { useCardsComparisonContext } from "../contexts/GameStateContext";
import { useEffect } from "react";
import { GameActionKind } from "../types/gameReducerTypes";

const Game = () => {
  const currentChosenCard = useChosenCardContext();
  const { cardsComparisonOutcomeArr, dispatch } = useCardsComparisonContext();
  const {
    error,
    data: cards,
    isLoading,
  } = useQuery<CardsQueryData, Error>({
    queryKey: ["cardsQuery"],
    queryFn: getAllCards,
  });

  useEffect(() => {
    if (!cards || !currentChosenCard) return;

    const randomCard = pickRandomCard(cards.cards);
    //Replaces id's with names according to metadata
    const newRandomCard = replaceIdWithName(randomCard);
    const newChosenCard = replaceIdWithName(currentChosenCard.choosenCard);
    const cardsComparisonOutcome = compareCardAttributes(
      newRandomCard,
      newChosenCard
    );
    if (cardsComparisonOutcome) {
      dispatch({ type: GameActionKind.ADD, payload: cardsComparisonOutcome });
    }
  }, [currentChosenCard, dispatch, cards]);

  if (error) {
    return <div>An error occured : {error.message}</div>;
  }

  return (
    <div className="container">
      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner">
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <Search />
      )}
      <Grid cardsComparisonArr={cardsComparisonOutcomeArr} />
    </div>
  );
};

export default Game;
