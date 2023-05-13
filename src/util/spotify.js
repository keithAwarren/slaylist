// Variables for Spotify Client ID and redirect URI

const clientId = "5b53e27155824e289fa0e3318450aca7"
const redirectUri = "https://slaylist.netlify.app/"

// Variable that stores the access token

let accessToken;

const Spotify = {
    
    // GetAccessToken is used to get an access token from Spotify.
    // Checks if an access token has already been set
    
    getAccessToken() {
      if (accessToken) {
        return accessToken;
      }
  
      const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
      const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
        
    // The following checks if the access token and expiration time were successfully retrieved from the URI.
    // It will then set the access token and expiration time.
    // window.setTimeout will set a timer to clear the access token after it expires.
    // window.history.pushState() will eemove the access token and expiration time from the URL
    // The access token is then returned.
        
      if (urlAccessToken && urlExpiresIn) {
        accessToken = urlAccessToken[1];
        const expiresIn = Number(urlExpiresIn[1]);
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/'); 
        return accessToken;
          
    // If the access token and expiration time were not found in the URL, it will redirect to the Spotify login page.
          
      } else {
        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
        window.location = redirect;
      }
    },
 
    // The search method will search for tracks on Spotify.
    // The fetch method will send a GET request to the Spotify API to search for tracks.
    // If no tracks were found, an empty array will be returned.
    
    search(term) {
      const accessToken = Spotify.getAccessToken();
      return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (!jsonResponse.tracks) {
          return [];
        }
          
    // Once the tracks are returned by the API the tracks are mapped into an array of simplified track objects.
          
        return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }));
      });
    },
    
    

    // This function saves the playlist to the user's Spotify account.
    // It takes in a name for the playlist and an array of track URIs.
    // If the name or track URIs are missing, the function returns.
    // Otherwise, it retrieves the access token from Spotify using the
    // getAccessToken() method and sets up the headers for the API request.
    // It then sends a request to get the user's ID and creates a new playlist with the given name. 
    // Finally, it adds the tracks to the newly created playlist.
  
    savePlaylist(name, trackUris) {
      if (!name || !trackUris.length) {
        return;
      }
  
      const accessToken = Spotify.getAccessToken();
      const headers = { Authorization: `Bearer ${accessToken}` };
      let userId;
  
      return fetch('https://api.spotify.com/v1/me', {headers: headers}
      )
      .then(response => response.json()
      )
      .then(jsonResponse => {
        userId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({name: name})
        })
        .then(response => response.json()
        )
        .then(jsonResponse => {
          const playlistId = jsonResponse.id;
          return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({uris: trackUris})
          });
        });
      });
    }
  };
  
  export default Spotify;
  
