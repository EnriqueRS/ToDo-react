import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FaTasks } from 'react-icons/fa'
import styles from './sidebar.module.css'
import Tag from '../tag/Tag.jsx'

function Sidebar (props) {
  const [tags, setTodos] = useState([])
  useEffect(() => {
    setTodos(props.tags)
  }, [props.tags])

  return (
    <>
      <div className={styles.header}>
        <FaTasks className={styles.logo} />
        <h2>ToDo APP</h2>
      </div>
      <div className={styles.tags}>
        {Object.keys(tags).map(function (keyName, keyIndex) {
          return (
            <Tag key={keyIndex} name={keyName} number={tags[keyName]} />
          )
        })}
      </div>
    </>
  )
}
Sidebar.propTypes = {
  tags: PropTypes.object
}

export default Sidebar
