import React, { useEffect } from 'react'
import sendGetRequest from '../../api/sendGetRequest'
import UseToken from '../../middlewares/useToken'
import { FaTasks } from 'react-icons/fa'
import styles from './dashboard.module.css'
import Column from '../column/Column'

function Dashboard (props) {
  const { token } = UseToken()
  useEffect(() => {
    sendGetRequest('todo', token)
  })

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2>ToDo APP</h2>
        <FaTasks className={`${styles.logo} ${styles.icon_white}`} />
      </div>
      <div className={styles.main}>
        <div className={`${styles.todo} ${styles.column}`}>
          <Column type={'todo'}
            todos={['sport', 'home', 'other', 'development', 'unknown', 'language']} />
        </div>
        <div className={`${styles.inprogress} ${styles.column}`}>
          <Column type={'doing'}
            todos={['sport', 'home', 'other', 'development']} />
        </div>
        <div className={`${styles.done} ${styles.column}`}>
          <Column type={'done'}
            todos={['sport', 'home', 'unknown', 'language']} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
