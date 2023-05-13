import React, { useState, useCallback } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  
  // useState is used to define a state variable called term, initialized to an empty string.
  
  const [term, setTerm] = useState("");
  
  // The handleTermChange function updates the term state variable.
  // useCallback ensures that the function reference remains constant between renders, unless its dependencies change.
  
  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []
  );
  
  // The search function invokes the onSearch prop function with the current value of the term state variable.
  // useCallback ensures that the function reference remains constant between renders, unless its dependencies change.
  
  const search = useCallback(() => {
    props.onSearch(term);
  }, [props.onSearch, term]
  );
  
  // The following renders an input field with placeholders that calls the handleTermChange function on changed events,
  // as well as a button labeled 'SEARCH' that calls the search function when clicked
  
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
