import React from 'react'
import PropTypes from 'prop-types'
import { FaSignOutAlt } from 'react-icons/fa'
import styles from './sidebar.module.css'
import Tag from '../tag/Tag.jsx'
import { logout } from '../../actions/auth'
import { useDispatch } from 'react-redux'
import history from '../../middleware/history'

function Sidebar ({ tagsInitial }) {
  const dispatch = useDispatch()

  function onLogout () {
    dispatch(logout())
    history.navigate('/')
  }

  const onTagClicked = (name) => {
  }

  return (
    <>
      <div className={styles.header}>
        <h2>ToDo APP</h2>
        <FaSignOutAlt onClick={onLogout} className={`${styles.logo} ${styles.cursor}`} />
      </div>
      <div className={styles.tags}>
        {Object.keys(tagsInitial).map(function (keyName, keyIndex) {
          return (
            <Tag
              key={keyIndex}
              name={keyName}
              number={tagsInitial[keyName]}
              selected={false}
              onTagClicked={onTagClicked}
            />
          )
        })}
      </div>
    </>
  )
}
Sidebar.propTypes = {
  tagsInitial: PropTypes.object
}

export default Sidebar
