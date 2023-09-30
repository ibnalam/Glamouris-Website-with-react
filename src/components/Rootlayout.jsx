import React from 'react'
import Navber from '../layout/Navber'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Gotobtn from './Gotobtn'
// import ClockCounter from './ClockCounter'

const Rootlayout = () => {
  return (
    <>
        <Navber/>
        {/* <ClockCounter/> */}
        <Outlet/>
        <Gotobtn/>
        <Footer/>
    </>
  )
}

export default Rootlayout