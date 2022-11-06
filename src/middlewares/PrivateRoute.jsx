import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

function PrivateRoute ({ children }) {
  const { user: authUser } = useSelector(x => x.auth)

  if (!authUser) {
    return <Navigate to="/" />
  }

  return children
}

PrivateRoute.propTypes = {
  children: PropTypes.node
}

export default PrivateRoute
