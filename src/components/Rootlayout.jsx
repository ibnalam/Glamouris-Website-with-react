import React from 'react'
import Navber from '../layout/Navber'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Gotobtn from './Gotobtn'

const Rootlayout = () => {
  return (
    <>
        <Navber/>
        <Outlet/>
        <Gotobtn/>
        <Footer/>
    </>
  )
}

export default Rootlayout