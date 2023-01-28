import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './tag.module.css'
import { ToDoType } from '../../types/ToDoTypes'
function Tag ({ onTagClicked, name, number, initialSelected }) {
  const [className, setClassName] = useState({})
  const [selected, setSelected] = useState(initialSelected)
  useEffect(() => {
    switch (name) {
      case ToDoType.SPORT:
        setClassName({
          name: styles.nameSport,
          number: styles.numberSport,
          selected: styles.sportSelected
        })
        break
      case ToDoType.DEVELOPMENT:
        setClassName({
          name: styles.nameDevelopment,
          number: styles.numberDevelopment,
          selected: styles.developmentSelected
        })
        break
      case ToDoType.LANGUAGE:
        setClassName({
          name: styles.nameLanguage,
          number: styles.numberLanguage,
          selected: styles.languageSelected
        })
        break
      case ToDoType.HOME:
        setClassName({
          name: styles.nameHome,
          number: styles.numberHome,
          selected: styles.homeSelected
        })
        break
      default:
        setClassName({
          name: styles.nameOther,
          number: styles.numberOther,
          selected: styles.otherSelected
        })
    }
  }, [])

  // useEffect(() => {
  //   console.log('useEffect initialSelected ' + name, initialSelected)
  //   setSelected(initialSelected)
  // }, [initialSelected])

  const tagClicked = () => {
    setSelected(!selected)
    onTagClicked(name)
  }

  return (
    <>
      <div onClick={tagClicked}
        className={`${styles.container} ${className.name} ${selected ? className.selected : ''}`}>
        <span className={`${styles.name}`}>{name}</span>
        {number && <span className={`${styles.number} ${className.number}`}>{number}</span>}
      </div>
    </>
  )
}

Tag.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  initialSelected: PropTypes.bool,
  onTagClicked: PropTypes.func
}

export default Tag
