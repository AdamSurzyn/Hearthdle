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

  if (isLoading) {
    return (
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    );
  }

  if (error) {
    return <div>An error occured : {error.message}</div>;
  }

  const RandomCard = pickRandomCard(cards?.cards);
  console.log("");
  return (
    <div className="container">
      <Search></Search>
      <Grid correctCard={RandomCard}></Grid>
    </div>
  );
};

export default Game;
