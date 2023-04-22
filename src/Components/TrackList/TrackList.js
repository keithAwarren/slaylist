import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {this.props.track.map(song => {
                  return <Track key={song.id} track={song}/>
                })}
            </div>
        );
    }
}

export default TrackList;