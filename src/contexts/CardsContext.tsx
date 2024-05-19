import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { CardCommonAttributes } from "../types/searchTypes";

type ContextSearchCard = {
  searchCard: CardCommonAttributes | null;
  setSearchCard: Dispatch<SetStateAction<CardCommonAttributes | null>>;
};

const SearchCardContext = createContext<ContextSearchCard | null>(null);

export const SearchCardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchCard, setSearchCard] = useState<CardCommonAttributes | null>(
    null
  );

  return (
    <SearchCardContext.Provider value={{ searchCard, setSearchCard }}>
      {children}
    </SearchCardContext.Provider>
  );
};

export const useSearchCardContext = () => {
  const ctx = useContext(SearchCardContext);

  if (!ctx) {
    throw Error("Missing SearchCardContext, it's not wrapped in the provider");
  }

  return ctx;
};
