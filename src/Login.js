import React from "react";
import Form from "./components/form";

function Login() {
  return (
    <div id="wrapper">
      <h1>ToDo Application</h1>
      <Form type={'SIGNIN'}/>
      <br />
      <br />
      <br />
      <Form type={'SIGNUP'}/>
    </div>
  );
}

export default Login;