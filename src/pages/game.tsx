import Search from "../components/ui/search/search";
import Grid from "../components/ui/grid";
import "../pages/game.scss";
import { CardCommonAttributes, CardsQueryData } from "../types/searchTypes";
import { useQuery } from "react-query";
import { getAllCards } from "../api/getCards";
import {
  compareCardAttributes,
  pickRandomCard,
  replaceIdWithName,
} from "../utils/utils";
import { useChosenCardContext } from "../contexts/CardsContext";
import { useCardsComparisonContext } from "../contexts/GameStateContext";
import { useEffect, useState } from "react";
import { GameActionKind } from "../types/gameReducerTypes";

const Game = () => {
  const currentChosenCard = useChosenCardContext();
  const { cardsComparisonOutcomeArr, dispatch } = useCardsComparisonContext();
  const { error, data, isLoading } = useQuery<CardsQueryData, Error>({
    queryKey: ["cardsQuery"],
    queryFn: getAllCards,
  });

  const [randomCard, setRandomCard] = useState<CardCommonAttributes | null>(
    null
  );

  useEffect(() => {
    if (!data) {
      return;
    }
    const randomCard = pickRandomCard(data.cards);
    setRandomCard(randomCard);
  }, [data]);

  useEffect(() => {
    if (!currentChosenCard.choosenCard || !randomCard) return;

    const newRandomCard = replaceIdWithName(randomCard);
    console.log(newRandomCard);
    const newChosenCard = replaceIdWithName(currentChosenCard.choosenCard);

    const cardsComparisonOutcome = compareCardAttributes(
      newRandomCard,
      newChosenCard
    );

    if (cardsComparisonOutcome) {
      dispatch({ type: GameActionKind.ADD, payload: cardsComparisonOutcome });
    }
    if (cardsComparisonOutcome?.cardNameCorrect) {
      dispatch({
        type: GameActionKind.RESET,
        payload: cardsComparisonOutcome,
      });
    }
  }, [currentChosenCard, data, dispatch, randomCard]);

  if (error) {
    return <div>An error occured : {error.message}</div>;
  }
  return (
    <div className="container">
      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner">
            <div className="circle"></div>
            <div className="circle"></div>
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
