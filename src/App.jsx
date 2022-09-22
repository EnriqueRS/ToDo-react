import React from 'react'
import './App.css'
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import useToken from './middlewares/useToken'

function App () {
  const { setToken } = useToken()

  return (
    <div className='App'>
      <div className='page'>
        <div className='content'>
          <BrowserRouter>
            <Routes>
              <Route path='/' exact={true} element={<Login onSaveToken={setToken} />} />
              <Route path='/dashboard' exact={true} element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  )
}

export default App
