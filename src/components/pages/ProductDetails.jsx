import React from 'react'
import Container from '../Container'
import { useState, useRef } from 'react'
import Flex from '../Flex'
import Image from '../Image'
import productdetailssmall1 from '../../assets/productdetailssmall1.png'
import productdetailssmall2 from '../../assets/productdetailssmall2.png'
import productdetailssmall3 from '../../assets/productdetailssmall3.png'
import productdetailssmall4 from '../../assets/productdetailssmall4.png'
import productdetailsmain from '../../assets/productdetailsmain.png'
import Sectionlargeheading from '../Sectionlargeheading'
import Star from '../Star'
import {AiOutlineHeart} from 'react-icons/ai'
import {PiCarProfile} from 'react-icons/pi'
import {GiReturnArrow} from 'react-icons/gi'
import Sectionbutton from '../Sectionbutton'
import Sectionsmallheading from '../Sectionsmallheading'
import Product from '../Product'
import ProductOne from '../../assets/ProductOne.png'
import Monitor from '../../assets/Monitor.png'
import Keyboard from '../../assets/Keyboard.png'
import Chair from '../../assets/Chair.png'
// import Sectionlargeheading from '../Sectionlargeheading'



const ProductDetails = () => {


  let [count, setcount] = useState(1)
  let countref = useRef(null)

  let increaseclick = () => {
    setcount(count + 1)
  }
  const decreaseclick = () => {
    if (count > 1) {
      setcount(count => count - 1);
    }
  };
 







  return (
    <Container>
        <Flex className="mt-[180px]">
            <div className='w-1/5 ml-[30px]'>
                <Image src={productdetailssmall1} className="mb-[70px] pt-[40px]"/>
                <Image src={productdetailssmall2} className="mb-[70px]"/>
                <Image src={productdetailssmall3} className="mb-[80px]"/>
                <Image src={productdetailssmall4} />   
            </div>
            <div className='w-2/4 ml-[70px] mt-[200px]'>
              <Image src={productdetailsmain}/>
            </div>
            <div className='w-2/4 ml-[80px]'>
                <Sectionlargeheading text="Havic HV G-92 Gamepad" className="pt-0"/>
                <div className='flex mt-[14px]'>
                <Star className="mt-[4px]"/>
                <span className='text-gray font-poppins font-[14px] ml-[8px]'>(150 Reviews)</span>
                <span className='text-gray ml-[16px]'>|</span>
                <span className='text-green ml-[16px]'>In Stock</span>
                </div>
                <Sectionlargeheading text="$192.00" className="pt-[10px]"/>
                <p className='font-poppins text-[16px] mt-[12px]'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                <div className='border-t border-gray border-solid border-line mt-[20px]'></div>
                <div className='flex mt-[20px]'>
                  <p className='font-poppins text-[16px] mr-[24px]'>Colors :</p>
                  <input id='test2' type="checkbox" className='peer/test2' hidden/>
                    <label className='relative mt-0 inline-block pl-5 before:w-3 before:h-3 before:border before:border-solid before:border-input before:rounded-[50%] before:absolute before:top-1.5 before:left-0 before:content[""]  after:w-2 after:h-2 after:peer-checked/test2:border after:peer-checked/test2:border-solid after:peer-checked/test2:border-white after:absolute after:rounded-[50%] after:top-2 after:left-0.5 after:content[""] after:peer-checked/test2:bg-gray' for='test2'>
                    </label>
          
        
                    <input id='test3' type="checkbox" className='peer/test3' hidden/>
                      <label className='relative mt-0  inline-block pl-5 before:w-3 before:h-3 before:border before:border-solid before:border-input before:rounded-[50%] before:absolute before:top-1.5 before:left-0 before:content[""]  after:w-2 after:rounded-[50%] after:h-2 after:peer-checked/test3:border after:peer-checked/test3:border-solid after:peer-checked/test3:border-white after:absolute after:top-2 after:left-0.5 after:content[""] after:peer-checked/test3:bg-red' for='test3'>
                      </label>
                </div>
                <div className='flex mt-[20px]'>
                  <p className='font-poppins text-[16px] mt-[4px]'>Size :</p>
                  <div className='border-solid border hover:bg-red hover:text-white w-[32px] h-[32px] rounded-[5px] ml-[24px]'>
                    <p className='font-poppins text-[16px] pt-[5px] pl-[5px]'>XS</p>
                  </div>
                  <div className='border-solid border hover:bg-red hover:text-white w-[32px] h-[32px] rounded-[5px] ml-[16px]'>
                    <p className='font-poppins text-[16px] pt-[5px] pl-[8px]'>S</p>
                  </div>
                  <div className='border-solid border hover:bg-red hover:text-white w-[32px] h-[32px] rounded-[5px] ml-[16px]'>
                    <p className='font-poppins text-[16px] pt-[5px] pl-[8px]'>M</p>
                  </div>
                  <div className='border-solid border hover:bg-red hover:text-white w-[32px] h-[32px] rounded-[5px] ml-[16px]'>
                    <p className='font-poppins text-[16px] pt-[5px] pl-[8px]'>L</p>
                  </div>
                  <div className='border-solid border hover:bg-red hover:text-white w-[32px] h-[32px] rounded-[5px] ml-[16px]'>
                    <p className='font-poppins text-[16px] pt-[5px] pl-[5px]'>XL</p>
                  </div>
                </div>
                <div className='flex mt-[24px]'>
                    <div className='border-solid border hover:bg-red hover:text-white hover:border-black w-[40px] h-[40px] rounded-l-[5px] cursor-pointer' onClick={decreaseclick}>
                      <p className='text-[24px] font-bold pl-[15px]'>-</p>
                    </div>
                    <div className='border-solid border w-[80px] h-[40px]'>
                      <p className='text-[20px] font-bold pl-[34px] pt-[4px]' ref={countref}>{count}</p>
                    </div>
                    <div className='border-solid border cursor-pointer hover:bg-red hover:text-white hover:border-black w-[40px] h-[40px] rounded-r-[5px]' onClick={increaseclick}>
                    <p className='text-[24px] font-bold pl-[11px]'>+</p>
                    </div>
                    <button className='bg-red -mt-[4px] rounded-[5px] text-white border top-[2px] hover:border hover:bg-white hover:text-black ml-[16px] px-[48px] py-[10px]'>Buy Now</button>
                    <div className='border text-[32px] -mt-[4px] ml-[20px] pt-[6px] pl-[6px] pr-[6px] rounded-[5px]'>
                      <AiOutlineHeart/>
                    </div>
                </div>
                <div className='mt-[40px]'>
                  <div className='flex border border-gray rounded-t-[5px]'>
                    <div className='flex mt-[24px] ml-[16px] mb-[24px]'>
                        <PiCarProfile className='text-[35px] mt-[10px] mr-[16px]'/>
                        <div>
                          <p className='text-[20px] font-poppins font-bold'>Free Delivery</p>
                          <p className='text-[14px] font-poppins'>Enter your postal code for Delivery Availability</p>
                        </div>
                    </div>
                  </div>
                  <div className='flex border border-gray rounded-b-[5px]'>
                    <div className='flex mt-[24px] ml-[16px] mb-[24px]'>
                        <GiReturnArrow className='text-[35px] mt-[10px] mr-[16px]'/>
                        <div>
                          <p className='text-[20px] font-poppins font-bold'>Return Delivery</p>
                          <p className='text-[14px] font-poppins'>Free 30 Days Delivery Returns. Details</p>
                        </div>
                    </div>
                  </div>
                </div>

            </div>
        </Flex>
       <section className='mb-[130px]'>
        
       <Flex className="mt-[120px]">
        <Sectionbutton/>
        <Sectionsmallheading text="Related Item"/>
        </Flex>
        <Flex>
            <Product basetext="-30%" img={ProductOne} ratingnumber="(77)" Prices="$120"/>
            <Product basetext="-32%" img={Monitor} ratingnumber="(88)" Prices="$123"/>
            <Product basetext="-28%" img={Keyboard} ratingnumber="(92)" Prices="$124"/>
            <Product basetext="-34%" img={Chair} ratingnumber="(65)" Prices="$130"/>
        </Flex>
       </section>
        
      


    </Container>
  )
}

export default ProductDetails