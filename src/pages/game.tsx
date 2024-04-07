import Search from "../components/ui/search";
import Grid from "../components/ui/grid";
import "../pages/game.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { useCardsQuery } from "../components/hooks/cardsQuery";

const blizzardQueryClient = new QueryClient();
const Game = () => {
  return (
    <div className="container">
      <QueryClientProvider client={blizzardQueryClient}>
        <Search></Search>
        <Grid></Grid>
      </QueryClientProvider>
    </div>
  );
};

export default Game;
