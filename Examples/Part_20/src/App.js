import React, { Component } from "react";

const appContext = React.createContext();

const App = () => {
    var user = {
        nickname: "BellaMrx",
        name: "Bella Mrx",
        email: "contact@book-of-coding.com",
        private: true,
    };
    return (
      <appContext.Provider value = { user } >
        <React.Fragment >
          <h1> Demonstration of useContext </h1>
          <Copyright />
          <Status />
        </React.Fragment>{" "} 
      </appContext.Provider>
    );
}

const Copyright = () => {
    const user = React.useContext(appContext);
    return ( 
      <React.Fragment >
        <footer> © <a href = { "mailto:" + user.email } >
          { user.name } </a>
        </footer> 
      </React.Fragment>
    );
}

const Status = () => {
  const user = React.useContext(appContext);
  return ( 
    <React.Fragment >
      <p> { user.nickname + " " } is online { " " }
            { user.private === true 
               ? ( <small> { "Name:Hidden" } </small> )
               : ( <small> { user.name } </small> ) } 
      </p>
    </React.Fragment>
  );
}

export default App;
