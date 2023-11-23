import React from 'react';

const greetings = 'Hello world';
const title = 'React';
const ptext = <p> React application during execution. </p>;
const expression = <p> 420 * 7 = { 420 * 7 } </p>;
const mlist = ( < ol >
    <li> Item 1 </li>  
    <li> Item 2 </li>
    <li> Item 3 </li>  
  </ol > );

function App() {
    return ( 
      <div >
        <h1> { greetings } in { title } </h1>
        { ptext } 
        { expression }
        Enumeration list: { mlist } 
      </div >
    );
}
export default App;