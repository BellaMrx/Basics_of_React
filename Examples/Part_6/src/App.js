import React from 'react';

function App() {
  return ( 
    <div>
      <h1> Login </h1> 
      <InputT name = "Firstname" / >
      <InputT name = "Lastname" / >
      <InputT name = "E-Mail" / >
    </div>
  );
}

function InputT(props) {
return ( 
  <div> 
    <label> { props.name } </label> : 
    <input type = "text" placeholder = { props.name } />
  </div>
);
}
export default App;

