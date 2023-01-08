import React from 'react'
import PropTypes from 'prop-types'
import styles from './tag.module.css'
import { ToDoType } from '../../types/ToDoTypes'
function Tag (props) {
  const classType = () => {
    switch (props.name) {
      case ToDoType.SPORT:
        return [styles.nameSport, styles.numberSport]
      case ToDoType.DEVELOPMENT:
        return [styles.nameDevelopment, styles.numberDevelopment]
      case ToDoType.LANGUAGE:
        return [styles.nameLanguage, styles.numberLanguage]
      case ToDoType.HOME:
        return [styles.nameHome, styles.numberHome]
      default:
        return [styles.nameOther, styles.numberOther]
    }
  }

  return (
    <>
      <div className={`${styles.container} ${classType()[0]}`}>
        <span className={`${styles.name}`}>{props.name}</span>
        {props.number && <span className={`${styles.number} ${classType()[1]}`}>{props.number}</span>}
      </div>
    </>
  )
}

Tag.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number
}

export default Tag
