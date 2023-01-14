import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FaSignOutAlt } from 'react-icons/fa'
import styles from './sidebar.module.css'
import Tag from '../tag/Tag.jsx'
import { logout } from '../../actions/auth'
import { useDispatch } from 'react-redux'
import history from '../../middlewares/history'

function Sidebar (props) {
  const dispatch = useDispatch()

  const [tags, setTodos] = useState([])
  useEffect(() => {
    setTodos(props.tags)
  }, [props.tags])

  function onLogout () {
    dispatch(logout())
    history.navigate('/')
  }

  return (
    <>
      <div className={styles.header}>
        <h2>ToDo APP</h2>
        <FaSignOutAlt onClick={onLogout} className={`${styles.logo} ${styles.cursor}`} />
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
