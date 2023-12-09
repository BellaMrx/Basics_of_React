import React, { Component } from "react";
import { getPlaylist } from "./songList";
import styles from "./App.module.css";

const Songs = (props) => {
  const [songs, setSongs] = React.useState(getPlaylist());

  const handleRemoveSong = (song) => {
    const newsongs = songs.filter((s) => s._id !== song._id);
    setSongs(newsongs);
  };

  return (
    <React.Fragment >
      <h2>{props.playlist}'s Playlist</h2>
      <table className="playlist_table">
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
            <tr key={song._id}>
              <td>{song.song}</td>
              <td>{song.interpreter}</td>
              <td>{song.genre}</td>
              <td>
                <button onClick={() => handleRemoveSong(song)} className="playlist_button playlist_button_hover">
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
