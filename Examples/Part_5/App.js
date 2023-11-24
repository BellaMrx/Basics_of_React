import React from 'react';

const recommendEbooks = [{
  title: 'JavaScript - DOM - Document-Object-Model',
  url: 'https://github.com/BellaMrx/DOM_Document-Object-Model',
  author: 'Bella Mrx',
  id: 3,
},
{
  title: 'JavaScript - Introduction to Web APIs',
  url: 'https://github.com/BellaMrx/JavaScript_Introduction-To-Web-APIs',
  author: 'Bella Mrx',
  id: 4,
},
{
  title: 'JavaScript - Introduction to Ajax and jQuery',
  url: 'https://github.com/BellaMrx/JavaScript_Introduction_to_Ajax_and_jQuery',
  author: 'Bella Mrx',
  id: 5,
},
];


function App() {
    return ( 
      <div>
        <h1> Further literature about JavaScript </h1> 
        <ul> {
          recommendEbooks.map(function(book) {
            return <li key = { book.id } > <a href = { book.url } >
              { book.title } < /a> (by {book.author}) </li> ;
          })}
        </ul>
      </div>
    );
}
export default App;


