import React from 'react'

const List = ({text,className}) => {
  return (
    <li className={`font-sm text-sm font-normal font-poppins ${className}`}>{text}</li>
  )
}

export default List