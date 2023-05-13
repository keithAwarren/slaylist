import React, { useCallback } from "react";
import "./Track.css";

const Track = (props) => {
  
  // addTrack calls the onAdd function passed in through props, passing the current track as its argument.
  
  const addTrack = useCallback(
    (event) => {
      props.onAdd(props.track);
    },
    [props.onAdd, props.track]
  );
  
  // removeTrack calls the onRemove function passed in through props, passing the current track as its argument.

  const removeTrack = useCallback(
    (event) => {
      props.onRemove(props.track);
    },
    [props.onRemove, props.track]
  );
  
  // This function returns a button element. 
  // If the isRemoval prop is true, the button will display " - " and calls the removeTrack function when clicked.
  // Otherwise, the button displays a " + " and calls the addTrack function when clicked.

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className="Track-action" onClick={removeTrack}>
          -
        </button>
      );
    }
      return (
        <button className="Track-action" onClick={addTrack}>
          +
        </button>
    );
  };

  // Renders the track with its name, artist name, and album name.
  // Also renders the button defined in the renderAction function.

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;
