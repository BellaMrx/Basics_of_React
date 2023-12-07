import React, { Component } from "react";
import Songs from "./Songs";

class App extends Component {
    state = {};
    constructor(props) {
        super(props);
        console.log("App - constructor() is called");
    }
    componentDidMount() {
        console.log("App - componentDidMount() is called");
    }
    render() {
        console.log("App - render()");
        return (
          <div> { " " } 
            <Songs playlist = "MyPlaylist" />
          </div>
        );
    }
}
export default App;
