import React, { Component } from "react";

class App extends Component {
  eventButton = (args) => {
    alert(args + " : " + this);
  };
  render() {
    return ( 
      <div>
        <h1> Trigger events in React </h1>
        <button onClick = {
            () => this.eventButton("One argument") 
          } > Trigger event </button>
      </div>
    );
  }
}

export default App;