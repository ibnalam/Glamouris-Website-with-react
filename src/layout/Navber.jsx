import React, { useRef, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'

import {FaAngleDown} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiFillHeart,AiOutlineStar} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {CgShoppingBag} from 'react-icons/cg'
import {RxCrossCircled} from 'react-icons/rx'
import {BiLogOut} from 'react-icons/bi'





import List from "../components/List"
import { Link } from 'react-router-dom'

const Navber = () => {

  const [open, setopen] = useState(false)


  const User = [ "Manage My Account","My Order","My Cancellations", "My Reviews", "Logout"]




  const Userref = useRef()
  const iconref = useRef()

  // window.addEventListener('click', (e)=> {
  //   if(e.target !== Userref.current && e.target !== iconref.current){
  //     setopen(false)
  //   }
  // })




  return (

    <>
    {/*  ====== top header section ========= */}
     <div className='bg-black'>
        <Container>
              <Flex>
                <div className='font-poppins w-4/5 text-center text-16'>
                  <p className='text-white pl-[150px]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='text-red'>ShopNow</span></p>
                </div>
                <div className='w-1/5 text-16 text-white text-end flex justify-end'>
                  <p  className=''> English</p> <FaAngleDown className='mt-1'/>
                </div>
              </Flex>
        </Container>
     </div>


   {/*========= Header Section here =============  */}

        <nav className='mt-[47px]'>
          <Container>
             <Flex>
              <div className='w-1/6'>
                <p className='text-logo'>Glamourise</p>
              </div>
              <Flex className='w-1/2 ml-[40px] justify-center'>
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
                 <div className='relative flex justify-center' >
                 <div onClick={() => setopen(!open)} className='cursor-pointer hover:bg-red h-[25px] w-[25px] rounded-[50%]'> 
                      <FaUserAlt className='mt-1 ml-[4px]' />
                </div>
                
                {
                  open && 
                <div className='absolute flex bg-gray z-10 opacity-75 mt-[10px] p-4 w-[224px] h-[200px] shadow-lg text-white -left-[208px] top-[20px] rounded-[5px]'>
                   <ul className=''>
                        {
                              <li className='' 
                              onClick={()=> setopen(false)}
                              key={User}>
                              <FaUserAlt className='text-[20px] mr-[20px]'/>
                              <CgShoppingBag className='text-[20px] mr-[20px] mt-[13px]'/>
                              <RxCrossCircled className='text-[20px] mr-[20px] mt-[16px]'/>
                              <AiOutlineStar className='text-[20px] mr-[20px] mt-[13px]'/>
                              <BiLogOut className='text-[20px] mr-[20px] mt-[13px]'/>

                              </li>
                          }
                </ul>
                <ul className=''>
                   {
                    User.map((User)=> (
                      <li className='mb-[9px]' 
                      onClick={()=> setopen(false)}
                      key={User}>
                       {User}
                        
                      </li>
                    ))
                   }
                </ul>
                </div>
                }
                  
                
                 </div>
              </Flex>
             </Flex>
          </Container>
          <div className='border-t border-solid border-line mt-[16px]'></div>
        </nav>




    </>
  )
}

export default Navber