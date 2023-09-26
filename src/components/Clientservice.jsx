import React from 'react'
import {AiOutlineCar} from 'react-icons/ai'
import {ImHeadphones} from 'react-icons/im'
import {SiAdguard} from 'react-icons/si'
import Flex from './Flex'

const Clientservice = ({ servicename, servicedetails,servicename2,servicedetails2, servicename3 ,servicedetails3 }) => {
  return (
    <>
     <Flex className="gap-x-[88px] mt-[150px] mb-[130px] justify-center">
     <div className='text-center'>
        <div  className='justify-center ml-[84px] mb-[24px] text-[35px] text-white rounded-[50%] border-gray border-[8px] relative flex w-[75px] h-[75px] bg-black'>
        <AiOutlineCar className='absolute top-3'/>
        </div>
        <h5 className='text-[20px] font-poppins font-bold'>{servicename}</h5>
        <p className='text-[16px] font-poppins '>{servicedetails}</p>
    </div>
    <div className='text-center'>
        <div className='justify-center ml-[84px] mb-[24px] text-[35px] text-white rounded-[50%] border-gray border-[8px] relative flex w-[75px] h-[75px] bg-black'>
        <ImHeadphones className='absolute top-3'/>
        </div>
        <h5 className='text-[20px] font-poppins font-bold'>{servicename2}</h5>
        <p className='text-[16px] font-poppins '>{servicedetails2}</p>
    </div>
    <div className='text-center'>
        <div className='justify-center ml-[84px] mb-[24px] text-[35px] text-white rounded-[50%] border-gray border-[8px] relative flex w-[75px] h-[75px] bg-black'>
        <SiAdguard className='absolute top-3'/>
        </div>
        <h5 className='text-[20px] font-poppins font-bold'>{servicename3}</h5>
        <p className='text-[16px] font-poppins '>{servicedetails3}</p>
    </div>
     </Flex>
    </>
  )
}

export default Clientservice