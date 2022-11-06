import React, { useEffect, useState } from 'react'
import sendGetRequest from '../../api/sendGetRequest'
import styles from './dashboard.module.css'
import Sidebar from '../sidebar/Sidebar'
import Main from '../main/Main'
import useToken from '../../middlewares/useToken'

function Dashboard (props) {
  const token = useToken()
  const [tags, setTags] = useState({})

  useEffect(() => {
    sendGetRequest('todo', token)
      .then((response) => {
        const arrayTags = response.map((item) => item.type)
        const res = arrayTags.reduce(function (types, current) {
          types[current] = (types[current] || 0) + 1
          return types
        }, {})
        setTags(res)
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar tags={tags} />
      </div>
      <Main />
    </div>
  )
}

export default Dashboard
