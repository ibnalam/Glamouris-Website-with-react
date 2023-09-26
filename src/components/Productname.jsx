import React from 'react'

const Productname = ({className,text}) => {
  return (
    <div className={`text-[16px] pt-8 text-bold font-poppins ${className}`}>{text}</div>
  )
}

export default Productname