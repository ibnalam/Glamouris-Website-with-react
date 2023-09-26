
import React from 'react'

const Button = ({className,text}) => {
  return (
    <button className={`py-4 px-16 bg-red text-white font-poppins font-bold text-[16px] border border-solid border-black hover:bg-white hover:text-black duration-500 ${className}`}>{text}</button>
  )
}

export default Button