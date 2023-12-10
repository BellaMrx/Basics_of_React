import React from 'react';

const header_1 = true;
const mark = true;

function isImportant() {
    return mark;
}

function isHeader() {
    return header_1;
}
const msg = <p style = {{ color: isImportant() ? "green" : "black" }} >
    Welcome to React </p>;

function App() {
    return ( 
      <div > 
        { isHeader() ? <h1> { msg } </h1> : <p>{msg}</p> } 
      </div>
    );
}
export default App;

