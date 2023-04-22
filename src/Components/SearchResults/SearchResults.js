import React from "react";
import "./SearchResults"
import TrackList from "../TrackList/TrackList";

class SearchResults extends React.Component {
    render () {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList track/> 
            </div>
        );
    }
}

export default SearchResults;