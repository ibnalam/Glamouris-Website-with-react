import React from 'react'

const Clockheading = ({className,text}) => {
  return (
    <h2 className={`${className} font-poppins font-bold pl-[20px] text-[32px]`}>{text}</h2>
  )
}

export default Clockheading