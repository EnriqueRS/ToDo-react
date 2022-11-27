import React from 'react'
import styles from './main.module.css'
import ToDo from '../todo/ToDo'
import PropTypes from 'prop-types'

function Main (props) {
  const todoArray = props.todos

  return (
    <div className={`${styles.container}`}>
      <div className={styles.editText} contentEditable='true' >

      </div>
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
