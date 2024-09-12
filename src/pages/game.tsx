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
import { useEffect, useReducer, useState } from "react";
import { ReplayButton } from "../components/ui/replayModal/replayButton";
import { gameReducer, initialGameState } from "../reducers/gameReducers";
import {
  GameAction,
  GameActionKind,
  GameStateType,
} from "../types/gameReducerTypes";
import { ReplayModal } from "../components/ui/replayModal/replayModal";
const Game = () => {
  const currentChosenCard = useChosenCardContext();
  const { userGuessArr, addToUserGuessArr, clearUserGuessArr } =
    useGameContext();
  const { error, data, isLoading } = useQuery<CardsQueryData, Error>({
    queryKey: ["cardsQuery"],
    queryFn: getAllCards,
  });

  const [currentGameState, gameDispatch] = useReducer(
    gameReducer,
    initialGameState
  );

  const startGame = () => {
    gameDispatch({ type: GameActionKind.START_GAME });
  };

  const endGame = () => {
    gameDispatch({ type: GameActionKind.END_GAME });
  };

  const resetGame = () => {
    gameDispatch({ type: GameActionKind.RESET_GAME });
  };

  const addScore = (score: number) => {
    gameDispatch({ type: GameActionKind.ADD_SCORE, payload: { score } });
  };

  const addGuess = (guesses: number) => {
    gameDispatch({ type: GameActionKind.ADD_GUESS, payload: { guesses } });
  };
  //TODO Move above to a separate folder.
  const [randomCard, setRandomCard] = useState<CardCommonAttributes | null>(
    null
  );
  console.log(currentGameState);
  useEffect(() => {
    if (!data || currentGameState.gameState !== "preStart") {
      return;
    }
    const randomCard = pickRandomCard(data.cards);
    setRandomCard(randomCard);
    startGame();
  }, [data, currentGameState]);

  useEffect(() => {
    if (!currentChosenCard.choosenCard || !randomCard) return;

    const newRandomCard = replaceIdWithName(randomCard);
    console.log(randomCard);
    const newChosenCard = replaceIdWithName(currentChosenCard.choosenCard);
    addGuess(1);
    const cardsComparisonOutcome = compareCardAttributes(
      newRandomCard,
      newChosenCard
    );
    if (cardsComparisonOutcome?.cardNameCorrect) {
      clearUserGuessArr();
      addScore(1);
      endGame();
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

      {currentGameState.gameState === "End" && (
        <ReplayModal onReset={resetGame}></ReplayModal>
      )}
    </div>
  );
};

export default Game;
