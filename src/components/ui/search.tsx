import React from "react";
import "../ui/search.scss";
const futureSearch = () => {};

const Search = () => {
  return (
    <div className="card-search-container">
      <input
        className="card-search"
        type="text"
        value={"Pick a card..."}
        onChange={futureSearch}
        placeholder="What card?"
      ></input>
      <button className="search-button">Search</button>
    </div>
  );
};

export default Search;
