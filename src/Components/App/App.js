import React, { useState, useCallback } from "react";
import "./App.css";

// Imports for the necessary components to be inserted into the App component
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../util/spotify";

const App = () => {
  
  // Using the useState hook to define the state variables.
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  
  // The addTrack function will add a track to the playlist.
  const addTrack = useCallback((track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return; setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  // The removeTrack function will remove a track from the playlist.
  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []
  );
  
  // The updatePlaylistName function will change and save only the name of the playlist to the user's account.
  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);
  
  // The savePlaylist function will save the created playlist to the user's account, "New Playlist" is the default name.
  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);
  
  // The search function will search the Spotify database for the song.
  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);
  
  // The following renders the main App component with the imported components inserted respectfully.
  return (
    <div>
      <h1>
        Sla<span className="highlight">yL</span>ist
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
