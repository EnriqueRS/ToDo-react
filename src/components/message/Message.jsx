import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import style from './message.module.scss'
import { clearMessage } from '../../actions/message'
import { SUCCESS, ERROR, WARNING, INFO } from '../../types/MessageTypes'

function Message () {
  const { text, kind } = useSelector((state) => state.message)
  const dispatch = useDispatch()

  function close () {
    dispatch(clearMessage())
  }

  function getClassName () {
    switch (kind.toUpperCase()) {
      case SUCCESS:
        return style.success
      case ERROR:
        return style.error
      case WARNING:
        return style.warning
      case INFO:
        return style.info
      default:
        return style.simple
    }
  }

  if (text) {
    return (
      <div className={`${style.alert} ${getClassName()}`}>
        <h3>{text}</h3>
        <a onClick={close} className={style.close}>&times;</a>
      </div>
    )
  } else {
    return (<></>)
  }
}

export default Message
