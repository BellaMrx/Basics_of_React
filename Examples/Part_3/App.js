import React from 'react';

function format_header_1(text, user) {
    return text + ', ' + user.fname + ' ' + user.lname;
}

const user = {
    fname: 'Bella',
    lname: 'Mrx'
};

function App() {
    return ( 
      <div> 
         <h1> { format_header_1('Welcome', user) } </h1>
      </div>
    );
}
export default App;