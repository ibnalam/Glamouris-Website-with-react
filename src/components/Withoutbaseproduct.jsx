import React from 'react'
import Image from './Image'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsEye} from 'react-icons/bs'
import Addtocartbtn from './Addtocartbtn'
import Productname from './Productname'
import Price from './Price'
import Star from './Star'
import { Link } from 'react-router-dom'



const Withoutbaseproduct = ({img,pricess,  ratingnumber}) => {
  return (
    <div className='mx-5 w-[250px] h-[370px] mt-[35px]'>
    <div className='relative overflow-hidden group'>
        <div className='w-[250px] h-[250px]'>
        <Link to="/product-details">
        <Image src={img} className="m-12"/>
        </Link>
        </div>
        <AiOutlineHeart className='absolute top-[12px] right-[20px] text-black'/>
        <BsEye className='absolute top-8 right-[20px] text-black'/>
        <div className='absolute -bottom-32 left-[15px]  group-hover:bottom-0 duration-500'>
          <Addtocartbtn text="Add to Cart"/>
        </div>
    </div>
    <Productname text="HAVIT HV-G92 Gamepad"/>
    <Price text={pricess}/>
    <Star text={ratingnumber}/>
  </div>
  )
}

export default Withoutbaseproduct