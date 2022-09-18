import React, { useEffect } from 'react'
import sendGetRequest from '../../api/sendGetRequest'
import UseToken from '../../middlewares/useToken'

function Dashboard (props) {
  const { token } = UseToken()
  useEffect(() => {
    sendGetRequest('todo', token)
  })

  return (
    <div id='container'>
        <h1>Dashboard Client</h1>
    </div>
  )
}

export default Dashboard
