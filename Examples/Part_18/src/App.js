import React, { Component } from "react";

function App() {
  return ( 
    <React.Fragment >
      <h1> Demonstration </h1>
     <Simple titel={"The use of useState"} / >
    </React.Fragment>
  );
}

function Simple(props) {
  const [counter, setCounter] = React.useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  return ( 
    <React.Fragment >
      <h2> { props.titel } </h2>
      <p> The button was clicked {counter}x! </p >
      <button onClick = { handleClick } > Push me </button>
    </React.Fragment>
  );
}

export default App;
