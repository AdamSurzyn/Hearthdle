import React, { useState } from "react";
import "../../ui/search/search.scss";
import { useCardsQuery } from "../../hooks/cardsQuery";
import { CardCommonAttributes } from "./searchTypes";
import Scroll from "./scroll";
import SearchList from "./searchList";
import { CardsQueryData } from "./searchTypes";

const Search = () => {
  let typingTimer: NodeJS.Timeout | undefined;
  const [searchField, setSearchField] = useState("");
  const { cards, isLoading, error }: CardsQueryData =
    useCardsQuery() as CardsQueryData;
  //! Czy to jest bezpieczne? Nie moglem w zaden inny sposob sprawic, zeby dzialalo...
  if (isLoading) {
    return <div className="card-search-container">Loading...</div>;
    //! Czy posiadanie tej samej klasy co kontener searchu jest ok, zeby miec loading w tej samej pozycji co searchbar?
  }

  if (error) {
    return <div>An error occured : {error.message}</div>;
  }

  const filteredCards = cards.cards.filter((card: CardCommonAttributes) => {
    return card.name.toLowerCase().includes(searchField);
  });
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(typingTimer);
    const inputValue = e.target.value;

    typingTimer = setTimeout(() => {
      setSearchField(inputValue);
    }, 400);
  };
  return (
    <div className="card-search-container">
      <div className="card-search-list-container">
        <input
          className="card-search"
          type="search"
          onChange={handleSearchInputChange}
          placeholder="What card?"
        ></input>
        {searchField && cards.cards !== undefined && (
          <Scroll>
            <SearchList filteredCards={filteredCards}></SearchList>
          </Scroll>
        )}
      </div>
      <button className="search-button">Search</button>
    </div>
  );
};

export default Search;
