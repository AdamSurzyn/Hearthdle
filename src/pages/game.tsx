import Search from "../components/ui/search/search";
import Grid from "../components/ui/grid";
import "../pages/game.scss";
import { CardsQueryData } from "../types/searchTypes";
import { useQuery } from "react-query";
import { getAllCards } from "../features/getCards";
import { pickRandomCard } from "../utils/randomCard";
import { useChosenCardContext } from "../contexts/CardsContext";

const Game = () => {
  const currentChosenCard = useChosenCardContext();
  const {
    error,
    data: cards,
    isLoading,
  } = useQuery<CardsQueryData, Error>({
    queryKey: ["cardsQuery"],
    queryFn: getAllCards,
  });

  if (error) {
    return <div>An error occured : {error.message}</div>;
  }

  const randomCard = pickRandomCard(cards?.cards);

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
      <Grid correctCard={randomCard} />
    </div>
  );
};

export default Game;
