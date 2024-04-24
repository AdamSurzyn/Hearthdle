import Search from "../components/ui/search/search";
import Grid from "../components/ui/grid";
import "../pages/game.scss";

const Game = () => {
  return (
    <div className="container">
      <Search></Search>
      <Grid></Grid>
    </div>
  );
};

export default Game;
