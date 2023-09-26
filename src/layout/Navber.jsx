import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'

import {FaAngleDown} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'



import List from "../components/List"
import { Link } from 'react-router-dom'

const Navber = () => {
  return (

    <>
    {/*  ====== top header section ========= */}
     <div className='bg-black'>
        <Container>
              <Flex>
                <div className='font-poppins w-2/3 text-center text-16'>
                  <p className='text-white'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='text-red'>ShopNow</span></p>
                </div>
                <div className='w-1/3 text-16 text-white text-end flex'>
                  <p  className='pl-[18rem]'> English</p> <FaAngleDown className='mt-1'/>
                </div>
              </Flex>
        </Container>
     </div>


   {/*========= Header Section here =============  */}

        <nav className='mt-[47px]'>
          <Container>
             <Flex>
              <div className='w-1/3'>
                <p className='text-logo'>Glamourise</p>
              </div>
              <Flex className='w-1/3 justify-center'>
                  <ul className='flex gap-x-10'>
                    <Link to="/">
                      <List text="Home"/>
                    </Link>
                    <Link to="/contuct">
                    <List text="Contact"/>
                    </Link>
                    <Link to="/about">
                    <List text="About"/>
                    </Link>
                   <Link to="/sign-up">
                   <List text="Sign Up"/> 
                   </Link>
                  </ul>
              </Flex>
              <Flex className='w-1/3 justify-end gap-x-5'>
                <p className='text-[14px] text-[#575056]'>What are you looking for?</p>
                <AiOutlineSearch className='mt-1'/>
                <AiFillHeart className='mt-1'/>
                <AiOutlineShoppingCart className='mt-1'/>
              </Flex>
             </Flex>
          </Container>
          <div className='border-t border-solid border-line mt-[16px]'></div>
        </nav>




    </>
  )
}

export default Navber