import React from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {GrLinkNext} from 'react-icons/gr'

const Sectionicon = ({className}) => {
  return (
    <div className={`flex  gap-x-[10px] pt-[38px] pl-[470px] ${className}`}>
        <BiArrowBack />
        <GrLinkNext/>
    </div>
  )
}

export default Sectionicon