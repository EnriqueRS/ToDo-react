// import React from 'react';
import './form.css';

function Form(props) {
    const { 
        buttonName, 
        icon, 
        placeholder,
        messageAccount 
    } = setAttributesType(props.type);

    return (
        <div className="form_div">
        <form method="post" action="">
          <div className={`center icon ${icon}`}/>
          <p><input type="text" placeholder={placeholder} /></p>
          <p><input type="password" placeholder="Password" /></p>
          <p><input type="submit" value={buttonName} /></p>
          <a onClick={props.onTypeChange}>{messageAccount}</a>
        </form>
      </div>
    );
}

const FormType = {
    SIGNIN: 'SIGNIN',
    SIGNUP: 'SIGNUP'
}

function setAttributesType(type) {
    switch (type) {
        case FormType.SIGNIN:
            return {
                buttonName: 'SIGN IN',
                icon: 'login_icon',
                placeholder: 'User',
                messageAccount: 'Don\'t have an account yet?'
            }
        case FormType.SIGNUP:
            return {
                buttonName: 'SIGN UP',
                icon: 'signup_icon',
                placeholder: 'Name',
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