// import React from 'react';
import './form.css';

function Form(props) {
    const { buttonName, icon, placeholder } = setAttributesType(props.type);
    return (
        <div className="form_div">
        <form method="post" action="">
          <div className={`center icon ${icon}`}/>
          <p><input type="text" placeholder={placeholder} /></p>
          <p><input type="password" placeholder="Password" /></p>
          <p><input type="submit" value={buttonName} /></p>
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
                placeholder: 'User'
            }
        case FormType.SIGNUP:
            return {
                buttonName: 'SIGN UP',
                icon: 'signup_icon',
                placeholder: 'Name'
            }
        default:
            return {
                buttonName: 'Button',
                icon: 'icon',
                placeholder: 'Placeholder'
            }
    }
}

export default Form;