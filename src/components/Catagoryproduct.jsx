import React from 'react'
import Image from './Image'
import Phons from '../assets/Phons.png'

const Catagoryproduct = ({img,text}) => {
  return (
    <div className='border-solid border-black border-2 border-line hover:bg-red hover:text-white duration-500 ${className}`}>{text}</button>
    )'>
        <Image src={img} className="pt-6 px-14"/>
        <p className="pt-4 pl-14 pb-6">{text}</p>
    </div>
  )
}

export default Catagoryproduct