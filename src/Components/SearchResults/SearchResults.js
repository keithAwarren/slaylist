import React from "react";
import "./SearchResults.css";

// Tracklist is imported to be inserted into the SearchResults component.

import TrackList from "../TrackList/TrackList";

// The SearchResults function
// The TrackList component receives props that include an array of tracks to be displayed,
// as well as the function to add tracks to the playlist.

const SearchResults = (props) => {
  return (
    <div className="Search-results">
      <h2>Results</h2>
      <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
    </div>
  );
};

export default SearchResults;
