import React, { useEffect } from 'react'
import sendGetRequest from '../../api/sendGetRequest'
import UseToken from '../../middlewares/useToken'
import { FaTasks } from 'react-icons/fa'
import styles from './dashboard.module.css'
import ToDo from '../todo/ToDo'

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
            <div className='column-header'>
              <h2>To Do</h2>
            </div>
            <div className={styles.cards}>
              <ToDo category={'sport'} />
              <ToDo category={'development'} />
              <ToDo category={'language'} />
            </div>
          </div>
          <div className={`${styles.inprogress} ${styles.column}`}>
            <div className='column-header'>
              <h2>In Progress</h2>
            </div>
            <div className={styles.cards}>
              <ToDo category={'sport'} />
              <ToDo category={'development'} />
            </div>
          </div>
          <div className={`${styles.done} ${styles.column}`}>
            <div className='column-header'>
              <h2>Done</h2>
            </div>
            <div className={styles.cards}>
              <ToDo category={'home'} />
              <ToDo category={'other'} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard
