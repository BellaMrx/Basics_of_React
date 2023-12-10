import React, { Component } from "react";

class App extends Component {
    eventButton = () => {
        alert("Button has been pressed! -> " + this);
    };
    render() {
        return ( 
          <div>
            <h1> Trigger events in React </h1> 
            <button onClick = { this.eventButton } >
            Trigger event
            </button>
          </div>
        );
    }
}
export default App;

