import { useState } from 'react'
import './App.css'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import FirstPage from './pages/FirstPage'
import Login from './pages/Login'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
