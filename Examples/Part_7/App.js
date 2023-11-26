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
      <h1> My guides </h1>
      <ul>
        <Recommendation / >
      </ul>
    </div>
  );
}

const Recommendation = () =>
  recommendEbooks.map(book => (
    <li key = { book.id } > < MakeLink link = { book } / >
            by { book.author }) </li > 
  ));

const MakeLink = props => 
  <a href = { props.link.url } > { props.link.title } </a>

export default App;
