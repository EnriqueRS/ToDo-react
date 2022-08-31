import React, { useState } from 'react';
import axios from 'axios';
import './form.css';
import { FormType } from '../types/formTypes'

function Form(props) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const {
    buttonName,
    icon,
    placeholder,
    messageAccount
  } = setAttributesType(props.type);

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginPost({
      'username': username,
      'password': password
    });
    props.setToken(token);
  }

  return (
    <div className="form_div">
      <form onSubmit={handleSubmit}>
        <div className={`center icon ${icon}`} />
        <p><input type="text" placeholder='User' onChange={e => setUserName(e.target.value)} /></p>
        <p><input type="password" placeholder={placeholder} onChange={e => setPassword(e.target.value)} /></p>
        <p><input type="submit" value={buttonName} /></p>
        <button
          type="button"
          className="link-button"
          onClick={props.onTypeChange}
        >
          {messageAccount}
        </button>
      </form>
    </div>
  );
}

async function loginPost(credentials) {
  return axios.post(`${process.env.REACT_APP_URL_API}:${process.env.REACT_APP_PORT_API}/api/${process.env.REACT_APP_VERSION_API}/login/`,
    JSON.stringify(credentials),
    {
      headers: {
        'content-type': 'application/json'
      }
    })
    .then((response) => {
      if (response.data.statusCode === 200) {
        return response.data.data;
      }
    })
    .catch((error) => {
      console.log(error);
    })
}

function setAttributesType(type) {
  switch (type) {
    case FormType.SIGNIN:
      return {
        buttonName: 'SIGN IN',
        icon: 'login_icon',
        placeholder: 'Password',
        messageAccount: 'Don\'t have an account yet?'
      }
    case FormType.SIGNUP:
      return {
        buttonName: 'SIGN UP',
        icon: 'signup_icon',
        placeholder: 'New password',
        messageAccount: 'Already have an account?'
      }
    default:
      return {
        buttonName: 'Button',
        icon: 'icon',
        placeholder: 'Placeholder',
        messageAccount: 'Message account'
      }
  }
}

export default Form;