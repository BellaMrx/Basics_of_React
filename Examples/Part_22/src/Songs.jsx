import React, { Component } from "react";
import { getPlaylist } from "./songList";

const Songs = (props) => {
  const [songs, setSongs] = React.useState(getPlaylist());

  const handleRemoveSong = (song) => {
    const newsongs = songs.filter((s) => s._id !== song._id);
    setSongs(newsongs);
  };

  return (
    <React.Fragment >
      <h2>{props.playlist}s Playlist</h2>
      <table
        style={{
          width: "80%",
          backgroundColor: "greenyellow",
          textAlign: "left",
          padding: "3px",
        }}
      >
        <thead>
          <tr>
            <th>Song</th>
            <th>Interpreter</th>
            <th>Genre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr key={song._id} style={{ backgroundColor: "white" }}>
              <td>{song.song}</td>
              <td>{song.interpreter}</td>
              <td>{song.genre}</td>
              <td>
                <button onClick={() => handleRemoveSong(song)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};
export default Songs;
