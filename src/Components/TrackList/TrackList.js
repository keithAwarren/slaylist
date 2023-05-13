import React from "react";
import "./TrackList.css";

// Track is imported to be inserted into the TrackList component.

import Track from "../Track/Track"

// The TrackList component renders the track list, using the 'map' method to iterate through each track.
// For each track, a 'Track' component is rendered with the approppriate properties.

const TrackList = (props) => {
  return (
    <div className="Track-list">
      {props.tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={props.onAdd}
            isRemoval={props.isRemoval}
            onRemove={props.onRemove}
          />
        );
      })}
    </div>
  );
};

export default TrackList;
