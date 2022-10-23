import React from 'react'
import PropTypes from 'prop-types'
import styles from './tag.module.css'

function Tag (props) {
  return (
    <>
      <div className={styles.container}>
        {props.name} {props.number}
      </div>
    </>
  )
}

Tag.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number
}

export default Tag
