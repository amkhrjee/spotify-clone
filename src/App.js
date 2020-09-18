import React, { useEffect, useState } from "react";
import { getTokenFromUrl } from "./API/spotify";
import LoginPage from "./Pages/Login/LoginPage";
import Player from "./Pages/Player/Player";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
    }
  }, []);
  return <div className="app">{token ? <Player /> : <LoginPage />}</div>;
}

export default App;
