import { ChosenCardProvider } from "../../../contexts/CardsContext";
import { CardsComparisonProvider } from "../../../contexts/GameStateContext";
import Hearthdle from "./hearthdle";

export default function HearthdleWithContext() {
  return (
    <div>
      <CardsComparisonProvider>
        <ChosenCardProvider>
          <Hearthdle />
        </ChosenCardProvider>
      </CardsComparisonProvider>
    </div>
  );
}
