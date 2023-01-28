import React, { useState, useEffect } from 'react'
import styles from './main.module.css'
import ToDo from '../todo/ToDo'
import PropTypes from 'prop-types'
import Tag from '../tag/Tag'
import { postToDo } from '../../api/todo.service'
import useToken from '../../middleware/useToken'
import { useDispatch } from 'react-redux'
import { setMessage } from '../../actions/message'

function getTags (todos) {
  return [...new Set(todos.map((item) => item.type))]
}

function Main ({ todosInitial, onTagsChange }) {
  const dispatch = useDispatch()
  const token = useToken()

  const [tagSelected, setTagSelected] = useState('')
  const [todos, setTodos] = useState([])
  const [types, setTypes] = useState([])

  useEffect(() => {
    setTodos(todosInitial)
    setTypes(getTags(todosInitial))
  }, [todosInitial])

  useEffect(() => {
    setTypes(getTags(todosInitial))
  }, [tagSelected])

  const [newTodo, setNewTodo] = useState('')
  const [showCategories, setShowCAtegories] = useState(false)

  const handleChange = (event) => {
    setShowCAtegories(event.target.value !== '')
    setNewTodo(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setNewTodo(newTodo)
      const toDoDto = {
        title: newTodo,
        type: tagSelected || 'other',
        date: new Date(),
        state: 'Pending'
      }
      postToDo(token, toDoDto)
        .then((response) => {
          setTodos([...todos, response])
          onTagsChange(todos)
          cleanNewTodo()
        }).catch((error) => {
          console.log(error)
          dispatch(setMessage(error.response.data.data, error.response.data.status))
        })
    }
  }

  const cleanNewTodo = () => {
    setNewTodo(undefined)
    setShowCAtegories(false)
    setTagSelected(undefined)
    document.getElementById('newTodo').value = ''
  }

  const onTagSelected = (name) => {
    if (name !== tagSelected) {
      setTagSelected(name)
    } else {
      setTagSelected(undefined)
    }
  }

  return (
    <div className={`${styles.container}`}>
      <input
        className={styles.editText}
        type="text"
        id="newTodo"
        name="newTodo"
        placeholder="Add new todo"
        value={newTodo}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      {showCategories && <div className={styles.categories}>
        {types.map(function (keyName, keyIndex) {
          return (
            <Tag
              onTagClicked={onTagSelected}
              key={keyIndex}
              name={keyName}
              number={undefined}
              initialSelected={keyName === tagSelected}
            />
          )
        })}
      </div>}

      <div className={styles.todos}>
        {
          Array.from(todos).reverse().map((item) => (
            <ToDo key={item.id}
              idInitial={item.id}
              category={item.type}
              title={item.title}
              stateInitial={item.state} />
          ))
        }
      </div>
    </div>
  )
}

Main.propTypes = {
  onTagsChange: PropTypes.func,
  todosInitial: PropTypes.array
}

export default Main
