import React from 'react'

const Base = ({className, text}) => {
  return (
    <button className={`font-poppins absolute text-bold text-white bg-red py-1 px-4 rounded-[5px] top-2 left-2 ${className}`}>
        {text}
    </button>
  )
}

export default Base