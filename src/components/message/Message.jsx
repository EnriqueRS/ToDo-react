import React from 'react'
import { useSelector } from 'react-redux'

function Message (props) {
  const { isLoggedIn } = useSelector((state) => state.auth)
  const { message } = useSelector((state) => state.message)

  return (
    <div>Info: {message} {isLoggedIn}</div>
  )
}

export default Message
