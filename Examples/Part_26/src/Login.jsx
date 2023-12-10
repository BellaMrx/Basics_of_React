import React, { Component } from "react";

const Login = () => {
    const [username, setUsername] = React.useState("");

    const submitForm = (e) => {
        e.preventDefault();
        console.log(username);
    };

    return ( 
      <form method = "post" onSubmit = { submitForm } >
        <p> The username is: { username } </p>
        <p> < input type = "text"
              value = { username }
              onChange = {
                 (e) => setUsername(e.target.value) }
            />
            <input type = "submit" />
          </p>
      </form>
    );
};

export default Login;
