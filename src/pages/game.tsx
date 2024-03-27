import Search from "../components/ui/search";
import Grid from "../components/ui/grid";
import "../pages/game.scss";
import clientToken from "../features/hsToken";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const blizzardQueryClient = new QueryClient();
const Game = () => {
  const access_token = clientToken();
  const { error, data } = useQuery({
    queryKey: ["cardsQuery"],
    queryFn: async () => {
      try {
        const response = await fetch(
          "https://eu.api.blizzard.com/hearthstone/cards?locale=en_US&rarity=legendary&pageSize=850",
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        return response;
      } catch (error) {
        throw new Error(`An error occured ${(error as Error).message}`);
      }
    },
  });

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
