import React  from "react";

const Login = () => {
  const inputValue = React.useRef();

  const submitForm = (e) => {
      e.preventDefault();
      console.log(inputValue.current.value);
  };
  const setFocus = () => {
      inputValue.current.focus();
  };

  return (
    <form method = "post" onSubmit = { submitForm }>
      <p> The username is: </p>{" "} 
      <p><input type = "text" ref = { inputValue } />
         <input type="submit" / > { " " }
         <button onClick = { setFocus } > Set focus </button>
      </p>{" "}
    </form>
  );
};


export default Login;
