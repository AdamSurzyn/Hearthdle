//TODO Stworzyc faktyczny reducer do grida

import { GameAction, CardPair } from "../types/gameReducerTypes";

export default function gameReducer(cards: CardPair, action: GameAction) {
  switch (action.type) {
    case "WRONG": {
      return [cards];
    }
    case "RIGHT": {
      return [cards];
    }
    default: {
      throw Error("??");
    }
  }
}
//Mana, Class, Type
