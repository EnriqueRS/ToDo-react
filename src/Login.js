import Form from './components/form';
import React, { useState } from 'react';
import { FaTasks } from 'react-icons/fa'


function Login() {
  const [formType, setFormType] = useState('SIGNUP');
  const [token, setToken] = useState();

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
    <div id='container'>
      <div id='wrapper'>
        <div className='panel_login'>
          <h3>ToDo App</h3>
          <FaTasks className='logo icon_white' />
        </div>
        <Form 
        setToken={ setToken }
        type={ formType } 
        onTypeChange={toggleMessageAccount}/>
      </div>
    </div>
  );
}

export default Login;