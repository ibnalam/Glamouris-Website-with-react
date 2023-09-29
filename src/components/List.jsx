import React from 'react'

const List = ({text,className}) => {
  return (
   <ul>
     <li className={` text-[20px] font-normal font-poppins ${className}`}>{text}</li>
   </ul>
  )
}

export default List