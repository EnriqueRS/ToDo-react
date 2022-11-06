import React, { useState } from 'react'
import { FaTasks } from 'react-icons/fa'
import Form from '../form/Form'
import { FormType } from '../../types/FormTypes'
import styles from './login.module.css'

function Login (props) {
  const [formType, setFormType] = useState(FormType.SIGNIN)

  function toggleMessageAccount (event) {
    event.preventDefault()
    if (formType === FormType.SIGNIN) {
      setFormType(FormType.SIGNUP)
    } else if (formType === FormType.SIGNUP) {
      setFormType(FormType.SIGNIN)
    } else {
      setFormType('')
    }
  }

  return (
    <div id={styles.container}>
      <div id={styles.wrapper}>
        <div className={styles.panel_login}>
          <h3>ToDo APP</h3>
          <FaTasks className={`${styles.logo} ${styles.icon_white}`} />
        </div>
        <Form type={formType} onTypeChange={toggleMessageAccount} />
      </div>
    </div>
  )
}

export default Login
