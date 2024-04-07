import React from "react";
import "../ui/search.scss";
import { useCardsQuery } from "../hooks/cardsQuery";
const futureSearch = () => {};

const Search = () => {
  const cards = useCardsQuery();
  console.log(cards);
  return (
    <div className="card-search-container">
      <input
        className="card-search"
        type="text"
        onChange={futureSearch}
        placeholder="What card?"
      ></input>
      <button className="search-button">Search</button>
    </div>
  );
};

export default Search;
