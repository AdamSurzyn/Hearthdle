//TODO Stworzyc faktyczny reducer do grida

import { GameAction, CardPair } from "../types/gameReducerTypes";

export default function gameReducer(cards: CardPair, action: GameAction) {
  switch (action.type) {
    case "FAKE": {
      return [cards];
    }
    default: {
      throw Error("??");
    }
  }
}
