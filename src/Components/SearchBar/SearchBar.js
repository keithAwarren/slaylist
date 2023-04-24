import React, { useState, useCallback } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []
  );

  const search = useCallback(() => {
    props.onSearch(term);
  }, [props.onSearch, term]
  );

  return (
    <div className="Search-bar">
      <input placeholder="Enter a Song, Artist or Album" onChange={handleTermChange} />
      <button className="Search-button" onClick={search}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
