import React from 'react'
import Flex from './Flex'
import Container from './Container'
import Productname from './Productname'
import Homelist from './Homelist'

// icon here 
import {PiPaperPlaneRightDuotone } from 'react-icons/pi'
import {BiLogoFacebook } from 'react-icons/bi'
import {AiOutlineTwitter } from 'react-icons/ai'
import {BsInstagram } from 'react-icons/bs'
import {FaLinkedinIn } from 'react-icons/fa'



import Image from './Image'
import Barcode from '../assets/Barcode.png'
import AppStore from '../assets/AppStore.png'
import GooglePlay from '../assets/GooglePlay.png'





const Footer = () => {
  return (
    <div className='bg-black'>
        <Container>
            <Flex className="gap-x-2">
                <div className='w-1/5'>
                    <Productname text="Exclusive" className="text-white text-[24px]"/>
                    <Productname text="Subscribe" className="text-white text-[18px]"/>
                    <ul>
                        <Homelist text="Get 10% off your first order" className="text-white pt-4"/>
                    </ul>
                    <Flex className="relative">
                    <input type="email" placeholder='Enter Your Email' className='bg-black placeholder:text-gray'/>
                    <PiPaperPlaneRightDuotone className='text-white absolute right-12 top-1'/>
                    </Flex>
                </div>
                <div className='w-1/5'>
                    <Productname text="Support" className="text-white text-[18px]"/>
                    <ul>
                        <Homelist text="111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh." className="text-white pt-4"/>
                        <Homelist text="exclusive@gmail.com" className="text-white pt-2"/>
                        <Homelist text="+88015-88888-9999" className="text-white pt-2"/>
                    </ul>
                </div>
                <div className='w-1/5'>
                <Productname text="Account" className="text-white text-[18px]"/>
                    <ul>
                        <Homelist text="My Account." className="text-white mb-2 mt-4"/>
                        <Homelist text="Login / Register" className="text-white mb-2"/>
                        <Homelist text="Cart" className="text-white mb-2"/>
                        <Homelist text="Wishlist" className="text-white mb-2"/>
                        <Homelist text="Shop" className="text-white"/>
                    </ul>
                </div>
                <div className='w-1/5'>
                <Productname text="Quick Link" className="text-white text-[18px]"/>
                    <ul>
                        <Homelist text="Privacy Policy" className="text-white mb-2 mt-4"/>
                        <Homelist text="Terms Of Use" className="text-white mb-2"/>
                        <Homelist text="FAQ" className="text-white mb-2"/>
                        <Homelist text="Wishlist" className="text-white mb-2"/>
                        <Homelist text="Contact" className="text-white"/>
                    </ul>
                </div>
                <div className='w-1/5'>
                <Productname text="Download App" className="text-white text-[18px]"/>
                     <ul>
                        <Homelist text="Save $3 with App New User Only" className="text-white mb-2 mt-4"/>
                    </ul>
                    <div className='flex'>
                        <Image src={Barcode}/>
                        <div className='ml-[8px]'>
                            <Image src={AppStore} className="mb-[10px]"/>
                            <Image src={GooglePlay}/>
                        </div>
                    </div>
                    <div className='flex text-white mt-[24px] gap-x-8 text-[22px]'>
                            <BiLogoFacebook/>
                            <AiOutlineTwitter/>
                            <BsInstagram/>
                            <FaLinkedinIn/>
                    </div>
                </div>
            </Flex>
        </Container>
        <div className='border-t border-gray border-solid border-line mt-[16px]'></div>
        <div className='flex justify-center mt-[20px] pb-[20px]'>
        <p className='text-white'>Copyright <span className='text-red font-bold'>Shawon Islam</span> 2023. All right reserved</p>
        </div>
    </div>
  )
}

export default Footer