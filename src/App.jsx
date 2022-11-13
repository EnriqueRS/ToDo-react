import React from 'react'
import './App.css'
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import PrivateRoute from './middlewares/PrivateRoute'
import history from './middlewares/history'
import Message from './components/message/Message'

function App () {
  history.navigate = useNavigate()
  history.location = useLocation()
  return (
    <div className='App'>
      <Message />
      <div className='page'>
        <div className='content'>
          <Routes>
            <Route path='/' exact={true} element={<Login />} />
            <Route path='/login' exact={true} element={<Login />} />
            <Route
              path='/dashboard'
              exact={true}
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes >
        </div >
      </div >
    </div >
  )
}

export default App
