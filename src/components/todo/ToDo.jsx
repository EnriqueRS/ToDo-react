import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './todo.module.css'
import useToken from '../../middleware/useToken'
import { sendPostRequestAuth } from '../../api/sendPostRequest'
import { useDispatch } from 'react-redux'
import { setMessage } from '../../actions/message'
import { ToDoType } from '../../types/ToDoTypes'
import {
  MdComputer,
  MdOutlineSportsSoccer,
  MdOutlineHome
} from 'react-icons/md'
import { TbMessageLanguage, TbQuestionMark } from 'react-icons/tb'
import ConfettiExplosion from 'confetti-explosion-react'

export default function ToDo (props) {
  const [isExploding, setIsExploding] = useState(false)
  const [state, setState] = useState(props.state)
  const dispatch = useDispatch()
  const token = useToken()
  const classType = () => {
    switch (props.category) {
      case ToDoType.SPORT:
        return styles.sport
      case ToDoType.DEVELOPMENT:
        return styles.development
      case ToDoType.LANGUAGE:
        return styles.language
      case ToDoType.HOME:
        return styles.home
      default:
        return styles.other
    }
  }

  const iconType = () => {
    switch (props.category) {
      case ToDoType.SPORT:
        return <MdOutlineSportsSoccer />
      case ToDoType.DEVELOPMENT:
        return <MdComputer />
      case ToDoType.LANGUAGE:
        return <TbMessageLanguage />
      case ToDoType.HOME:
        return <MdOutlineHome />
      default:
        return <TbQuestionMark />
    }
  }

  function handleToDoDone () {
    const newState = state === 'done' ? 'todo' : 'done'
    const data = {
      id: props.id,
      state: newState
    }
    sendPostRequestAuth(`todo/${props.id}`, token, data)
      .then((response) => {
        setState(newState)
      }).catch((error) => {
        console.log(error)
        dispatch(setMessage(error.response.data.data, error.response.data.status))
      })
    setIsExploding(true)
    setTimeout(() => {
      setIsExploding(false)
    }, 4000)
  }

  return (
  <>
    {isExploding && <ConfettiExplosion/>}
    <div className={`${state === 'done' ? styles.done : null} ${styles.card} ${styles.container} ${classType()}`}
      onClick={handleToDoDone}>
      {/* <div> */}
        {iconType()}
      {/* </div> */}
      {/* <div> */}
        <h3 className={styles.todo_type}>{props.category}</h3>
      {/* </div> */}
      {/* <div className={`${styles.card}`}> */}
        <h4 className={styles.todo_text}>{props.title}</h4>
      {/* </div> */}
    </div>
    </>
  )
}

ToDo.propTypes = {
  id: PropTypes.number,
  category: PropTypes.string,
  title: PropTypes.string,
  state: PropTypes.string
}
