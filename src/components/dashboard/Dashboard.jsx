import React, { useEffect, useState } from 'react'
import { getAll } from '../../api/todo.service'
import styles from './dashboard.module.css'
import Sidebar from '../sidebar/Sidebar'
import Main from '../main/Main'
import useToken from '../../middleware/useToken'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setMessage } from '../../actions/message'

const calculateTags = (todosRaw) => {
  const arrayTags = todosRaw.map((item) => item.type)
  return arrayTags.reduce(function (types, current) {
    types[current] = (types[current] || 0) + 1
    return types
  }, {})
}

function Dashboard () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useToken()

  const [tags, setTags] = useState({})
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getAll(token)
      .then((response) => {
        if (response.statusCode === 401) {
          navigate('/login')
        } else {
          setTodos(response)
          setTags(calculateTags(response))
        }
      }).catch((error) => {
        console.log(error)
        if (error.statusCode === 401) {
          navigate('/login')
        }
        dispatch(setMessage(error.response.data.data, error.response.data.status))
      })
  }, [])

  const handleTodoAdd = (toDoDto) => {
    const newTodos = [...todos, toDoDto]
    setTodos(newTodos)
    setTags(calculateTags(newTodos))
  }

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar tagsInitial={tags} />
      </div>
      <Main todosInitial={todos}
        onTodoAdd={handleTodoAdd}
      />
    </div>
  )
}

export default Dashboard
