import React from 'react'
import { Routes,Route } from 'react-router-dom'
import AllBlogs from './components/AllBlogs'
import Login from './components/Login'
function App() {
  return (
    <Routes>
      <Route path="/" element={<AllBlogs />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App