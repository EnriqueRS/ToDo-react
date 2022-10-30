import React from 'react'
import PropTypes from 'prop-types'
import styles from './tag.module.css'

function Tag (props) {
  const classType = () => {
    switch (props.name) {
      case 'sport':
        return [styles.nameSport, styles.numberSport]
      case 'development':
        return [styles.nameDevelopment, styles.numberDevelopment]
      case 'language':
        return [styles.nameLanguage, styles.numberLanguage]
      case 'home':
        return [styles.nameHome, styles.numberHome]
      case 'other':
        return [styles.nameOther, styles.numberOther]
      default:
        return [styles.nameOther, styles.numberOther]
    }
  }

  return (
    <>
      <div className={`${styles.container} ${classType()[0]}`}>
        <span className={`${styles.name}`}>{props.name}</span>
        <span className={`${styles.number} ${classType()[1]}`}>{props.number}</span>
      </div>
    </>
  )
}

Tag.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number
}

export default Tag
