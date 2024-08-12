import React, { useEffect, useRef, useState } from "react";
import "../../ui/search/search.scss";
import { CardCommonAttributes } from "../../../types/searchTypes";
import Scroll from "./scroll";
import SearchList from "./searchList";
import { CardsQueryData } from "../../../types/searchTypes";
import { useQuery } from "react-query";
import { getAllCards } from "../../../api/getCards";
const Search = () => {
  let typingTimer: NodeJS.Timeout;
  const handleClickOutside = (event: MouseEvent): void => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setShowResults(false);
    }
  };
  const [searchField, setSearchField] = useState("");

  const { error, data, isLoading } = useQuery<CardsQueryData, Error>({
    queryKey: ["cardsQuery"],
    queryFn: getAllCards,
  });
  const searchRef = useRef<HTMLDivElement | null>(null);
  const [showResults, setShowResults] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (isLoading) {
    return <div className="card-search-container">Loading...</div>;
  }

  if (error) {
    return <div>An error occured : {error.message}</div>;
  }

  const filteredCards = data?.cards.filter((card: CardCommonAttributes) => {
    return card.name.toLowerCase().includes(searchField.toLowerCase());
  });
  //Waits 400ms to search after input
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(typingTimer);
    const inputValue = e.target.value;

    typingTimer = setTimeout(() => {
      setSearchField(inputValue);
    }, 400);
    setShowResults(true);
  };
  return (
    <div className="card-search-container">
      <div ref={searchRef} className="card-search-list-container">
        <input
          className="card-search"
          type="search"
          onChange={handleSearchInputChange}
          placeholder="What card?"
        ></input>
        {showResults && searchField && data?.cards !== undefined && (
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
