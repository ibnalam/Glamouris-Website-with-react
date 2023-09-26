import React from 'react'
import Image from './Image'
import Addtocartbtn from './Addtocartbtn'
import Productname from './Productname'
import Price from './Price'
import Star from './Star'
import Flex from './Flex'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsEye} from 'react-icons/bs'





const Withinputproduct = ({img, pricess, ratingnumber}) => {
  return (
    <div className='mx-5 w-[250px] h-[370px] mt-[35px]'>
    <div className='relative overflow-hidden group'>
        <div className='w-[250px] h-[250px]'>
        <Image src={img} className="m-12"/>
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
    <Flex>      
              <input id='test2' type="checkbox" className='peer/test2' hidden/>
              <label className='relative mt-0 inline-block pl-5 before:w-3 before:h-3 before:border before:border-solid before:border-input before:rounded-[50%] before:absolute before:top-1.5 before:left-0 before:content[""]  after:w-2 after:h-2 after:peer-checked/test2:border after:peer-checked/test2:border-solid after:peer-checked/test2:border-white after:absolute after:rounded-[50%] after:top-2 after:left-0.5 after:content[""] after:peer-checked/test2:bg-red' for='test2'>
              </label>
    
        
              <input id='test3' type="checkbox" className='peer/test3' hidden/>
              <label className='relative mt-0  inline-block pl-5 before:w-3 before:h-3 before:border before:border-solid before:border-input before:rounded-[50%] before:absolute before:top-1.5 before:left-0 before:content[""]  after:w-2 after:rounded-[50%] after:h-2 after:peer-checked/test3:border after:peer-checked/test3:border-solid after:peer-checked/test3:border-white after:absolute after:top-2 after:left-0.5 after:content[""] after:peer-checked/test3:bg-red' for='test3'>
              </label>
    </Flex>
    
    
  </div>
  )
}

export default Withinputproduct