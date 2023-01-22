import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './form.module.css'
import { FormType } from '../../types/FormTypes'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/auth'
import { useNavigate } from 'react-router-dom'

function Form ({ type, onTypeChange }) {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  const {
    buttonName,
    icon,
    placeholder,
    messageAccount
  } = setAttributesType(type)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async e => {
    e.preventDefault()
    dispatch(login(username, password))
      .then((data) => {
        navigate('/dashboard')
      })
      .catch((error) => {
        console.log('login catch', error)
      })
  }

  const handleRegister = async e => {
    e.preventDefault()
  }

  const handleSubmit = async e => {
    e.preventDefault()
    switch (type) {
      case FormType.SIGNIN:
        return handleLogin(e)
      case FormType.SIGNUP:
        return handleRegister(e)
      default:
    }
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
          onClick={onTypeChange}
        >
          {messageAccount}
        </button>
      </form>
    </div>
  )
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
  type: PropTypes.string
}

export default Form
