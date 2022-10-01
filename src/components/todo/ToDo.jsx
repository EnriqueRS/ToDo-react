import React from 'react'
import PropTypes from 'prop-types'
import styles from './todo.module.css'

export default function ToDo (props) {
  const classType = () => {
    switch (props.category) {
      case 'sport':
        return styles.sport
      case 'development':
        return styles.development
      case 'language':
        return styles.language
      case 'home':
        return styles.home
      case 'other':
        return styles.other
      default:
        return styles.other
    }
  }

  return (
    <div className={`${classType()} ${styles.card}`}>
    <h3 className={styles.todo_type}>{props.category}</h3>
    <h4 className={styles.todo_text}>Learn ReactJs</h4>
    </div>
  )
}

ToDo.propTypes = {
  category: PropTypes.string
}
