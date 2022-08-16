import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    let newSearchValue = searchValue;
    console.log(newSearchValue);
    props.searchValue(newSearchValue);
    navigate("/search-results");
    setSearchValue("");
  }

  return (
    <div className="searchbar-container">
      <form className="submission-container" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Search Here"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>
        <button type="submit" onClick={() => navigate("/search-results")}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
