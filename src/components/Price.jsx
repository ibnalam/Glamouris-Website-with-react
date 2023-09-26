import React from 'react'

const Price = ({className, text}) => {
  return (
    <div className={`font-poppins text-red text-[16px] ${className}`}>{text}</div>
  )
}

export default Price