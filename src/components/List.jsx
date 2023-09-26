import React from 'react'

const List = ({text,className}) => {
  return (
   <ul>
     <li className={`font-sm text-sm font-normal font-poppins ${className}`}>{text}</li>
   </ul>
  )
}

export default List