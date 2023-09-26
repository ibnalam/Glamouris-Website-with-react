import React from 'react'

const Addtocartbtn = ({className,text}) => {
  return (
    <button className={`py-2.5 px-16 bg-black text-white font-poppins font-bold text-[16px]  ${className}`}>
       {text}
    </button>
  )
}

export default Addtocartbtn