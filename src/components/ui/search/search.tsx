import React, { useState } from "react";
import "../../ui/search/search.scss";
import { useCardsQuery } from "../../hooks/cardsQuery";
import { CardCommonAttributes } from "./searchTypes";


const futureSearch = () => {};

const Search = () => {
  const [searchField, setSearchField] = useState("");
  const cards = useCardsQuery();
  const filteredCards = cards.filter((card: CardCommonAttributes) =>{card.name.toLowerCase().includes(searchField)})


  console.log(cards);
  return (
    <div className="card-search-container">
      <input
        className="card-search"
        type="search"
        onChange={futureSearch}
        placeholder="What card?"
      ></input>
      <button className="search-button">Search</button>
    </div>
  );
};

export default Search;
