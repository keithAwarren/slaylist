import React from "react";
import './App.css';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import TrackList from "../TrackList/TrackList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
      {
        name: "Example Track Name 1",
        artist: "Example Track Artist 1",
        album: "Example Track Album 1",
        id: 1,
      },
      {
        name: "Example Track Name 2",
        artist: "Example Artist Name 2",
        album: "Example Album Name 2",
        id: 2
      },
    ],
        playlistName: "Example Playlist",
        playlistTracks: [
          {
          name: "Example Playlist Track Name 3",
          artist: "Example Playlist Track Artist 3",
          album: "Example Playlist Track Album 3",
          id: 3,
          },
          {
          name: "Example Playlist Track Name 4",
          artist: "Example Playlist Track Artist 4",
          album: "Example Playlist Track Album 4",
          id: 4,
          },
        ],
  };
}


  render() {
    return (
      <div>
	      <h1>Sla<span className="highlight">yl</span>ist
        </h1>
	        <div className="App">
            <SearchBar />
		        <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults} />	
              <Playlist 
                playlistName={this.state.playlistName} 
                playlistTracks={this.state.playlistTracks}
              />	
            </div>
	        </div>
      </div>
    );
  }
}

export default App;
