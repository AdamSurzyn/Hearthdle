import { createContext, useContext, useState } from "react";
import { UserGuessArr } from "../types/gameStateContextTypes";
import { UserGuess } from "../types/utils";
type GameContextType = {
  userGuessArr: UserGuessArr;
  addToUserGuessArr: (card: UserGuess) => void;
  clearUserGuessArr: () => void;
};

const GameContext = createContext<GameContextType | null>(null);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [userGuessArr, setUserGuessArr] = useState<UserGuessArr>([]);

  const addToUserGuessArr = (card: UserGuess) => {
    setUserGuessArr((prevArr) => [...prevArr, card]);
  };
  const clearUserGuessArr = () => {
    setUserGuessArr([]);
  };

  return (
    <GameContext.Provider
      value={{
        userGuessArr,
        addToUserGuessArr,
        clearUserGuessArr,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const ctx = useContext(GameContext);

  if (!ctx) {
    throw Error("Missing UserGuessContext, it's not wrapped in the provider");
  }

  return ctx;
};
