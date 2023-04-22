import React from "react";

class Playlist extends React.Component {
    render () {
        return (
            <div class="Playlist">
                <input value="New Playlist" />
                <button class="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;