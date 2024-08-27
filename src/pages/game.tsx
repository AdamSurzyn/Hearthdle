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
import { useGameContext } from "../contexts/GameStateContext";
import { useEffect, useState } from "react";
import { ReplayButton } from "../components/ui/replayButton";

const Game = () => {
  const currentChosenCard = useChosenCardContext();
  const { userGuessArr, addToUserGuessArr, clearUserGuessArr } =
    useGameContext();
  const { error, data, isLoading } = useQuery<CardsQueryData, Error>({
    queryKey: ["cardsQuery"],
    queryFn: getAllCards,
  });

  const [randomCard, setRandomCard] = useState<CardCommonAttributes | null>(
    null
  );
  const [isReplay, setIsReplay] = useState<boolean>(false);

  useEffect(() => {
    if (!data || isReplay) {
      return;
    }
    const randomCard = pickRandomCard(data.cards);
    setRandomCard(randomCard);
  }, [data, isReplay]);

  useEffect(() => {
    if (!currentChosenCard.choosenCard || !randomCard) return;

    const newRandomCard = replaceIdWithName(randomCard);
    const newChosenCard = replaceIdWithName(currentChosenCard.choosenCard);

    const cardsComparisonOutcome = compareCardAttributes(
      newRandomCard,
      newChosenCard
    );
    if (cardsComparisonOutcome?.cardNameCorrect) {
      clearUserGuessArr();
      setIsReplay(true);
    } else if (cardsComparisonOutcome) {
      addToUserGuessArr(cardsComparisonOutcome);
    }
  }, [currentChosenCard, data]); //! Czemu mi podpowiada, zebym dodal random card do tablicy zaleznosci, jesli logicznie to nie ma sensu?

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
      <Grid cardsComparisonArr={userGuessArr} />
      {isReplay && (
        <ReplayButton isReplay={isReplay} setIsReplay={setIsReplay} />
      )}
    </div>
  );
};

export default Game;
