import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './form.module.css'
import { FormType } from '../../types/FormTypes'
import { sendPostRequest } from '../../api/sendPostRequest'

function Form (props) {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  const {
    buttonName,
    icon,
    placeholder,
    messageAccount
  } = setAttributesType(props.type)

  const handleSubmit = async e => {
    e.preventDefault()
    let type
    const payload = {
      username,
      password
    }
    switch (props.type) {
      case FormType.SIGNIN:
        type = 'login'
        break
      case FormType.SIGNUP:
        type = 'user'
        payload.role = 'ROLE.USER'
        break
      default:
        return
    }
    const token = await sendPost(type, payload)
    props.onSetToken(token)
  }

  return (
    <div className={styles.form_div}>
      <form onSubmit={handleSubmit}>
        <div className={`${styles.center} ${styles.icon} ${icon}`} />
        <p><input type='text' placeholder='User' onChange={e => setUserName(e.target.value)} /></p>
        <p><input type='password' placeholder={placeholder} onChange={e => setPassword(e.target.value)} /></p>
        <p><input type='submit' value={buttonName} /></p>
        <button
          type='button'
          className={styles.link_button}
          onClick={props.onTypeChange}
        >
          {messageAccount}
        </button>
      </form>
    </div>
  )
}

async function sendPost (url, credentials) {
  return sendPostRequest(url, credentials)
}

function setAttributesType (type) {
  switch (type) {
    case FormType.SIGNIN:
      return {
        buttonName: 'SIGN IN',
        icon: `${styles.login_icon}`,
        placeholder: 'Password',
        messageAccount: 'Don\'t have an account yet?'
      }
    case FormType.SIGNUP:
      return {
        buttonName: 'SIGN UP',
        icon: `${styles.signup_icon}`,
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

Form.propTypes = {
  onTypeChange: PropTypes.func,
  onSetToken: PropTypes.func,
  type: PropTypes.string
}

export default Form
