import React, { Component } from "react";
import { getPlaylist } from "./songList";

class Songs extends Component {
  constructor(props) {
    console.log("Songs - constructor() is called");
    super(props);
    this.state = {
      songs: getPlaylist(),
      playlist: "",
    };
  }

  componentDidMount() {
    console.log("Songs - componentDidMount() is called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Songs - getDerivedStateFromProps() is called");
    if (props.playlist !== state.playlist) return { playlist: props.playlist };
    else return null;
    // or directly in state: playlist: this.props.playlist,
  }

  handleRemoveSong = (song) => {
    const songs = this.state.songs.filter((s) => s._id !== song._id);
    this.setState({ songs });
  };

  render() {
    console.log("Songs - render() is called");
    return (
      <div>
        <h2>{this.state.playlist}'s Playlist</h2>
        <table>
          <thead>
            <tr>
              <th>Song</th>
              <th>Interpret</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.songs.map((song) => (
              <tr key={song._id}>
                <td>{song.song}</td>
                <td>{song.interpreter}</td>
                <td>{song.genre}</td>
                <td>
                  <button onClick={() => this.handleRemoveSong(song)}>
                  Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Songs;