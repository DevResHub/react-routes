import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home/Home'
import NotFound from './routes/NotFound/NotFound'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App