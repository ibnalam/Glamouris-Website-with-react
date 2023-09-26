import React from 'react'

const Sectionbutton = ({text, className}) => {
  return (
    <button className={`bg-red h-[40px] w-[20px] rounded-[5px] ${className}`}>{text}</button>
  )
}

export default Sectionbutton