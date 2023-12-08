import React, { Component } from "react";
import Songs from "./Songs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
    console.log("App - constructor() is called");
  }

    componentDidMount() {
        console.log("App - componentDidMount() is called");
    }
    delSongs = () => {
      this.setState({ show: false });
    };
    addSongs = () => {
      this.setState({show: true} );
    };

  render() {
    let mysongs;
    if (this.state.show) {
        mysongs = <Songs playlist = { "Bella" } />;
    }
    console.log("App - render()");
    return ( 
      <div> { mysongs }
        <button onClick = { this.delSongs } > 
          Remove songs component
        </button>
        <button onClick = { this.addSongs } > 
          Adding songs component
        </button>
      </div>
    );
}

}
export default App;
