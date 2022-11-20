import React, { useEffect, useState } from 'react'
import sendGetRequest from '../../api/sendGetRequest'
import styles from './dashboard.module.css'
import Sidebar from '../sidebar/Sidebar'
import Main from '../main/Main'
import useToken from '../../middlewares/useToken'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setMessage } from '../../actions/message'

function Dashboard (props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useToken()
  const [tags, setTags] = useState({})
  const [todos, setTodos] = useState([])

  useEffect(() => {
    sendGetRequest('todo', token)
      .then((response) => {
        setTodos(response)
        const arrayTags = response.map((item) => item.type)
        const res = arrayTags.reduce(function (types, current) {
          types[current] = (types[current] || 0) + 1
          return types
        }, {})
        setTags(res)
      }).catch((error) => {
        console.log(error)
        if (error.response.status === 401) {
          navigate('/login')
        }
        dispatch(setMessage(error.response.data.data, error.response.data.status))
      })
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar tags={tags} />
      </div>
      <Main todos={todos} />
    </div>
  )
}

export default Dashboard
