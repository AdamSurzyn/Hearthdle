import React from "react";

const futureSearch = () => {};

const Search = () => {
  return (
    <div>
      <input
        type="text"
        value={"something"}
        onChange={futureSearch}
        placeholder="What card?"
      ></input>
    </div>
  );
};

export default Search;
