import React, { useState } from 'react'
import styles from './main.module.css'
import ToDo from '../todo/ToDo'
import PropTypes from 'prop-types'
import Tag from '../tag/Tag'

function Main (props) {
  const todoArray = props.todos
  const types = [...new Set(todoArray.map((item) => item.type))]
  const [newTodo, setNewTodo] = useState('')
  const [showCategories, setShowCAtegories] = useState(false)

  const handleChange = (event) => {
    setShowCAtegories(event.target.value !== '')
    setNewTodo(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setNewTodo(newTodo)
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
            <Tag key={keyIndex} name={keyName} number={undefined} />
          )
        })}
      </div>}

      <div className={styles.todos}>
        {
          Array.from(todoArray).map((item) => (
            <ToDo key={item.id}
              id={item.id}
              category={item.type}
              title={item.title}
              state={item.state} />
          ))
        }
      </div>
    </div>
  )
}

Main.propTypes = {
  todos: PropTypes.array
}

export default Main
