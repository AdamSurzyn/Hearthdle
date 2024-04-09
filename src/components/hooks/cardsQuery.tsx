import clientToken from "../../features/hsToken";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { allCards } from "../../features/getCards";

export const useCardsQuery = () => {
  const {
    error,
    data: cards,
    isLoading,
  } = useQuery({
    queryKey: ["cardsQuery"],
    queryFn: allCards,
  });

  if (error) {
    return <span>An error has occured: {(error as Error).message}</span>;
  }

  return { cards, isLoading };
};
