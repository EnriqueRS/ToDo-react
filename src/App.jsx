import React from 'react'
import './App.css'
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './middlewares/PrivateRoute'

function App () {
  return (
    <div className='App'>
      <div className='page'>
        <div className='content'>
          <Routes>
            <Route path='/' exact={true} element={<Login />} />
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
