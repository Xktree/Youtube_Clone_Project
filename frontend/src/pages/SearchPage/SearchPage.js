import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchResults from "../../components/SearchResults/SearchResults";

const SearchPage = (props) => {
  return (
    <div>
      <SearchResults />
    </div>
  );
};

export default SearchPage;
