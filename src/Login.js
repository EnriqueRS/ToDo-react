import Form from './components/form';
import React, { useState } from 'react';
import { FaTasks } from 'react-icons/fa'
import { FormType } from './types/formTypes'


function Login(props) {
  const [formType, setFormType] = useState(FormType.SIGNIN);

  function toggleMessageAccount(event) {
    event.preventDefault();
    if (formType === FormType.SIGNIN) {
      setFormType(FormType.SIGNUP);
    } else if (formType === FormType.SIGNUP) {
      setFormType(FormType.SIGNIN);
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
        setToken={ props.setToken }
        type={ formType } 
        onTypeChange={toggleMessageAccount}/>
      </div>
    </div>
  );
}

export default Login;