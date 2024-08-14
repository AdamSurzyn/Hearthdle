import { createContext, useContext, useState } from "react";
import { CardsComparisonAndNamesArr } from "../types/gameStateContextTypes";
import { CardsComparisonAndNames } from "../types/utils";
type CardsComparisonContextType = {
  cardsComparisonOutcomeArr: CardsComparisonAndNamesArr;
  addToCardsComparisonOutcomeArr: (card: CardsComparisonAndNames) => void;
  clearCardsComparisonOutcomeArr: () => void;
};

const CardsComparisonContext = createContext<CardsComparisonContextType | null>(
  null
);

export const CardsComparisonProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cardsComparisonOutcomeArr, setCardsComparisonOutcomeArr] =
    useState<CardsComparisonAndNamesArr>([]);

  const addToCardsComparisonOutcomeArr = (card: CardsComparisonAndNames) => {
    setCardsComparisonOutcomeArr((prevArr) => [...prevArr, card]);
  };
  const clearCardsComparisonOutcomeArr = () => {
    setCardsComparisonOutcomeArr([]);
  };

  return (
    <CardsComparisonContext.Provider
      value={{
        cardsComparisonOutcomeArr,
        addToCardsComparisonOutcomeArr,
        clearCardsComparisonOutcomeArr,
      }}
    >
      {children}
    </CardsComparisonContext.Provider>
  );
};

export const useCardsComparisonContext = () => {
  const ctx = useContext(CardsComparisonContext);

  if (!ctx) {
    throw Error(
      "Missing CardsComparisonContext, it's not wrapped in the provider"
    );
  }

  return ctx;
};
