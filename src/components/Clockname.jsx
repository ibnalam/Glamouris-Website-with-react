import React from 'react'

const Clockname = ({text, className}) => {
  return (
    <h5 className={`font-poppins text-base ${className}`}>{text}</h5>
  )
}

export default Clockname