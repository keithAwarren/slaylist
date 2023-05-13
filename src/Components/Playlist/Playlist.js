import React, { useCallback } from "react";
import "./Playlist.css";

// TrackList is imported to be inserted into the Playlist component.

import TrackList from "../TrackList/TrackList";

const Playlist = (props) => {
  
  // The handleNameChange function handles changes to the playlist name's input field.
  
  const handleNameChange = useCallback((event) => {
      props.onNameChange(event.target.value);
    },
    [props.onNameChange]
  ); 
  
  // The following renders an input field for the playlist name, with a default value of "New Playlist",
  // a TrackList component that displays the playlist's tracks,
  // as well as a button labeled "SAVE TO SPOTIFY" which saves the playlist to the user's Spotify account.
  
  return (
    <div className="Playlist">
      <input onChange={handleNameChange} defaultValue={"New Playlist"} />
      <TrackList

  // The isRemoval property determines whether or not the remove button should be displayed.
  // The onRemove property is a function that is called when the remove button is clicked for a particular track.

        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}
      />
      <button className="Playlist-save" onClick={props.onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
