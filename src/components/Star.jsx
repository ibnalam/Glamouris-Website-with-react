import React from 'react'
import {AiFillStar} from 'react-icons/ai'

const Star = ({className,text}) => {
  return (
    <div className={`flex text-yellow text-[16px] relative ${className}`}>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <span className={`pl-[90px] absolute -top-[5px] ${className}`}>{text}</span>
    </div>
  )
}

export default Star