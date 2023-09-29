import React from 'react'
import Flex from '../Flex'
import Container from '../Container'
import Sectionlargeheading from '../Sectionlargeheading'
import Image from '../Image'
import aboutbanner from '../../assets/aboutbanner.png'
import {AiOutlineHome} from 'react-icons/ai'
import {BiLogoFacebook} from 'react-icons/bi'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import tomm from '../../assets/tomm.png'
import emma from '../../assets/emma.png'
import will from '../../assets/will.png'
import Clientservice from '../Clientservice'






const About = () => {
  return (
      <Container>
        <Flex >
        <div className='w-1/2 mt-[260px]'>
          <Sectionlargeheading text="Our Story"/>
          <p className='mt-[35px]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
          <p className='mt-[24px]'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div  className='w-1/2 mt-[140px]'>
          <Image src={aboutbanner}/>
        </div>
      </Flex>
      <Flex className="gap-x-8 mt-[140px]">
      <div className='w-[270px] h-[230px] border-solid border-black border-2 border-line hover:bg-red hover:text-white duration-500 '>
        <div className='h-[88px] w-[88px] mt-[30px] ml-[94px] bg-black border-solid border-gray border-2 border-line text-white text-[35px] rounded-[50%] relative'>
        <AiOutlineHome className='mt-[20px] absolute ml-[25px]'/>
        </div>
        <p className="mt-[10px] ml-[95px] text-[32px] font-bold text-black">10.5k </p>
        <p className="ml-[64px] pb-[30px] text-[16px] text-black">Sallers active our site</p>
    </div>
    <div className='w-[270px] h-[230px] border-solid border-black border-2 border-line hover:bg-red hover:text-white duration-500 '>
        <div className='h-[88px] w-[88px] mt-[30px] ml-[94px] bg-black border-solid border-gray border-2 border-line text-white text-[35px] rounded-[50%] relative'>
        <AiOutlineHome className='mt-[20px] absolute ml-[25px]'/>
        </div>
        <p className="mt-[10px] ml-[95px] text-[32px] font-bold text-black">10.5k </p>
        <p className="ml-[64px] pb-[30px] text-[16px] text-black">Sallers active our site</p>
    </div>
    <div className='w-[270px] h-[230px] border-solid border-black border-2 border-line hover:bg-red hover:text-white duration-500 '>
        <div className='h-[88px] w-[88px] mt-[30px] ml-[94px] bg-black border-solid border-gray border-2 border-line text-white text-[35px] rounded-[50%] relative'>
        <AiOutlineHome className='mt-[20px] absolute ml-[25px]'/>
        </div>
        <p className="mt-[10px] ml-[95px] text-[32px] font-bold text-black">10.5k </p>
        <p className="ml-[64px] pb-[30px] text-[16px] text-black">Sallers active our site</p>
    </div>
    <div className='w-[270px] h-[230px] border-solid border-black border-2 border-line hover:bg-red hover:text-white duration-500 '>
        <div className='h-[88px] w-[88px] mt-[30px] ml-[94px] bg-black border-solid border-gray border-2 border-line text-white text-[35px] rounded-[50%] relative'>
        <AiOutlineHome className='mt-[20px] absolute ml-[25px]'/>
        </div>
        <p className="mt-[10px] ml-[95px] text-[32px] font-bold text-black">10.5k </p>
        <p className="ml-[64px] pb-[30px] text-[16px] text-black">Sallers active our site</p>
    </div>
      </Flex>

      <Flex className="gap-x-24 mt-[130px]">
        <div className='w-1/3 bg-gray2 '>
            <Image src={tomm}/>
            <h4 className='top-[30px]font-poopins text-[32px] mt-[30px]'>Tom Cruise</h4>
            <p className='mt-[2px]'>Founder & Chairman</p>
            <Flex className="gap-x-6 mt-[12px] text-[22px] mt-[16px]">
              <BiLogoFacebook/>
              <BsTwitter className='ml-[16px]'/>
              <BsInstagram className='ml-[16px]'/>
            </Flex>
        </div>
        <div className='w-1/3 bg-gray2'>
        <Image src={emma}/>
        <h4 className='top-[30px] font-poopins text-[32px] mt-[30px]'>Tom Cruise</h4>
            <p className='mt-[2px]'>Founder & Chairman</p>
            <Flex className="gap-x-6 mt-[12px] text-[22px] mt-[16px]">
              <BiLogoFacebook/>
              <BsTwitter className='ml-[16px]'/>
              <BsInstagram className='ml-[16px]'/>
            </Flex>
        </div>
        <div className='w-1/3 bg-gray2'>
        <Image src={will}/>
        <h4 className='top-[30px] font-poopins text-[32px] mt-[30px]'>Tom Cruise</h4>
            <p className='mt-[2px]'>Founder & Chairman</p>
            <Flex className="gap-x-6 mt-[12px] text-[22px] mt-[16px]">
              <BiLogoFacebook/>
              <BsTwitter className='ml-[16px]'/>
              <BsInstagram className='ml-[16px]'/>
            </Flex>
        </div>
      </Flex>
      <div>
      <Clientservice servicename="FREE AND FAST DELIVERY" servicedetails="Free delivery for all orders over $140" servicename2="24/7 CUSTOMER SERVICE" servicedetails2="Friendly 24/7 customer support" servicename3="MONEY BACK GUARANTEE" servicedetails3="We return money within 30 days"/>
      </div>
      </Container>
  )
}

export default About