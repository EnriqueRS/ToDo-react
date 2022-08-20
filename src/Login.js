import React from "react";
import Form from "./components/form";
import { useState } from "react";

function Login() {
  const [formType, setFormType] = useState('SIGNUP');

  function toggleMessageAccount(event) {
    event.preventDefault();
    if (formType === 'SIGNIN') {
      setFormType('SIGNUP');
    } else if (formType === 'SIGNUP') {
      setFormType('SIGNIN');
    } else {
      setFormType('');
    }
  }

  return (
    <div id="wrapper">
      <h1>ToDo Application</h1>
      <Form type={ formType } onTypeChange={toggleMessageAccount}/>
    </div>
  );
}

export default Login;