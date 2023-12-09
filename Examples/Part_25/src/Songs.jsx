import React, { Component } from "react";
import { getPlaylist } from "./songList";
import styled from "styled-components";


const Button = styled.button`
  background-color: darkgrey;
  border: none;
  color: white;
  padding: 12px 35px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition-duration: 0.4s;
  :hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

const StyledTable = styled.table`
  width: ${(props) => (props.width ? props.width : "80%")};
  th {
    padding: 0.5em;
    text-transform: uppercase;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    text-align: left;
  }
  tr:nth-child(even) {
    background: lightgray;
  }
  td:nth-child(1) {
    font-weight: bold;
  }
  td {
    padding: 0.5em;
  }
  tr:hover {
    background: rgb(212, 89, 85);
    color: white;
  }
`;


const Songs = (props) => {
  const [songs, setSongs] = React.useState(getPlaylist());

  const handleRemoveSong = (song) => {
    const newsongs = songs.filter((s) => s._id !== song._id);
    setSongs(newsongs);
  };

  return (
<React.Fragment>
      <h2>{props.playlist}'s Playlist</h2>
      <StyledTable width="95%">
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
              <td style={{ textAlign: "center" }}>
                <Button onClick={() => handleRemoveSong(song)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </React.Fragment>
  );
};
export default Songs;
