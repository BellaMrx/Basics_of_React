import React, { Component } from "react";

function App() {
  return ( 
    <React.Fragment >
      <h1> Demonstration </h1>
     <Simple titel={"The use of useState"} />
    </React.Fragment>
  );
}

function Simple(props) {
  const [counter, setCounter] = React.useState(0);

  return ( 
    <React.Fragment >
      <h2> { props.titel } </h2>
      <p> The button was clicked {counter}x! </p>
      <button onClick = {
          () => setCounter(counter + 1) } > Push me </button>
    </React.Fragment>
  );
}

export default App;
