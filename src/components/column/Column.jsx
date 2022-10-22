import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './column.module.css'
import ToDo from '../todo/ToDo'

function Column (props) {
  const dragItem = useRef()
  const dragOverItem = useRef()
  const [list, setList] = useState([])
  useEffect(() => {
    setList(props.items)
  }, [props.items])

  const dragStart = (e, position) => {
    dragItem.current = position
    dragItem.type = props.type
    console.log(props.type)
    console.log(position)
    console.log('start\n' + e.target.innerHTML)
  }

  const dragEnter = (e, position) => {
    dragOverItem.current = position
    console.log(props.type)
    console.log(position)
    console.log('enter\n' + e.target.innerHTML)
  }

  const drop = (e) => {
    console.log(props.type)
    console.log('drop')
    console.log(dragItem)
    const copyListItems = [...list]
    const dragItemContent = copyListItems[dragItem.current]
    copyListItems.splice(dragItem.current, 1)
    copyListItems.splice(dragOverItem.current, 0, dragItemContent)
    dragItem.current = null
    dragOverItem.current = null
    setList(copyListItems)
  }

  return (
    <>
      <h2>{props.type}</h2>
      <div className={styles.cards}>
        {
          list &&
          list.map((item, index) => (
            <div
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragEnd={drop}
              key={index}
              className={`${styles.draggable}`}
              draggable>
              <ToDo category={item.type}
                title={item.title}
                className={`${styles.todo}`} />
            </div>
          ))}
      </div>
    </>
  )
}
Column.propTypes = {
  type: PropTypes.string,
  items: PropTypes.array
}

export default Column
