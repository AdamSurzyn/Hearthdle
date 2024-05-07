import Search from "../components/ui/search/search";
import Grid from "../components/ui/grid";
import "../pages/game.scss";
import { CardsQueryData } from "../components/ui/search/searchTypes";
import { useQuery } from "react-query";
import { allCards } from "../features/getCards";
import { randomCard } from "../utils/randomCard";

const Game = () => {
  const {
    error,
    data: cards,
    isLoading,
  } = useQuery<CardsQueryData, Error>({
    queryKey: ["cardsQuery"],
    queryFn: allCards,
  });

  if (isLoading) {
    return <div className="card-search-container">Loading...</div>;
  }

  if (error) {
    return <div>An error occured : {error.message}</div>;
  }

  const RandomCard = randomCard(cards?.cards);
  console.log("");
  return (
    <div className="container">
      <Search></Search>
      <Grid correctCard={RandomCard}></Grid>
    </div>
  );
};

export default Game;
