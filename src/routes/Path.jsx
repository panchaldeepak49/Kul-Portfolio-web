import React from 'react'
import { Routes,Route } from "react-router-dom"
import Home from '../pages/Home'
import About from '../pages/About'
import Navbar from '../components/Navbar'
import WorkExp from '../pages/WorkExp'

const Path = () => {
  return (
    <>
    <Navbar />

    <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/work' element={<WorkExp />} ></Route>
    </Routes>

    </>
  )
}

export default Path