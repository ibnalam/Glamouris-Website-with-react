import React from 'react'

const Homelist = ({text,className}) => {
  return (
    <li className={`font-sm text-[14px] mb-3 font-normal text-[#575056] font-poppins ${className}`}>{text}</li>
  )
}

export default Homelist