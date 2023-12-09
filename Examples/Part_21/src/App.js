import React from "react";
import useAlphaCounter from "./useAlphaCounter";

function App() {
    const counter_1 = useAlphaCounter();
    const counter_2 = useAlphaCounter(500);
    return ( 
      <React.Fragment >
      <h1 > Demonstration </h1>
        <p> { counter_1 } { counter_2 } </p>
      </React.Fragment>
    );
}
export default App;

