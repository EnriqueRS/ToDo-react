import React, { useEffect, useState } from 'react'
import sendGetRequest from '../../api/sendGetRequest'
import UseToken from '../../middlewares/useToken'
import { FaTasks } from 'react-icons/fa'
import styles from './dashboard.module.css'
import Column from '../column/Column'

function Dashboard (props) {
  const { token } = UseToken()
  const [todos, setTodos] = useState([])
  const [doing, setDoing] = useState([])
  const [done, setDone] = useState([])

  useEffect(() => {
    sendGetRequest('todo', token)
      .then((response) => {
        setTodos(response.filter((item) => item.state === 'todo'))
        setDoing(response.filter((item) => item.state === 'doing'))
        setDone(response.filter((item) => item.state === 'done'))
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2>ToDo APP</h2>
        <FaTasks className={`${styles.logo} ${styles.icon_white}`} />
      </div>
      <div className={styles.main}>
        <div className={`${styles.todo} ${styles.column}`}>
          <Column type={'todo'}
            items={todos} />
        </div>
        <div className={`${styles.inprogress} ${styles.column}`}>
          <Column type={'doing'}
            items={doing} />
        </div>
        <div className={`${styles.done} ${styles.column}`}>
          <Column type={'done'}
            items={done} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
