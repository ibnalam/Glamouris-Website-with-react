import React from 'react'
import Navber from '../layout/Navber'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Rootlayout = () => {
  return (
    <>
        <Navber/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Rootlayout