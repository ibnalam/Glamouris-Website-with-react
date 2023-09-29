import React from 'react'
import Flex from '../Flex'
import Image from '../Image'
import Signimg from '../../assets/Signimg.png'
import Sectionlargeheading from '../Sectionlargeheading'
import List from '../List'
import Button from '../Button'
import {FcGoogle} from 'react-icons/fc'




const Signup = () => {
  return (
  
      <Flex className="my-[130px]">    
        <div className='w-2/3'>
          <Image src={Signimg}/>
        </div>
        <div className='w-2/3 pl-[230px] mt-[50px]'>
          <Sectionlargeheading text="Create an account"/>
          <List text="Enter your details below " className="pt-[20px]"/>
          <input type="text" placeholder='Name' className='border-b mt-[40px] border-gray pr-[90px] pb-[10px] border-solid border-line mt-[16px]'/>
          <div>
          <input type="email" placeholder='Enter Your Email' className='border-b border-gray  mt-[40px] pr-[90px] pb-[10px] border-solid border-line mt-[16px]'/>
          </div>
          <div>
          <input type="password" placeholder='password' className='border-b border-gray  mt-[40px] pr-[90px] pb-[10px] border-solid border-line mt-[16px]'/>
          </div>
          <Button text="Create Account" className="rounded-[5px] mt-[52px] px-[77px]"/>
          <div>
          <button className="py-4 mt-[15px] flex rounded-[5px] px-[50px] bg-white text-black font-poppins font-bold text-[16px] border border-solid border-black hover:bg-red hover:text-white duration-300"><FcGoogle className='mt-[3px] mr-[5px]'/>Sign up with Google</button>
          </div>
        </div>
      </Flex>

  )
}

export default Signup