import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map((song) => {
                  return <Track 
                    key={song.id} 
                    track={song}
                    onAdd={this.props.onAdd}
                    />;
                })}
            </div>
        );
    }
}

export default TrackList;