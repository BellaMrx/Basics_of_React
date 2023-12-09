import React, { useEffect } from "react";

function App() {
  return ( 
    <React.Fragment >
      <h1> Demonstration </h1>
     <Simple titel={"The use of useEffect"} />
    </React.Fragment>
  );
}

function Simple(props) {
    const [counter, setCounter] = React.useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [counter]);

    return ( 
      <React.Fragment >
        <h2 > { props.titel } </h2>
        <p> The side effect was { counter }x executed! </p>
      </React.Fragment>
    );
}


export default App;
