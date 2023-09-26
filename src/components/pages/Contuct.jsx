import React from 'react'
import Flex from '../Flex'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {CiMail} from 'react-icons/ci'
import Container from '../Container'
import Button from '../Button'

const Contuct = () => {
  return (
        <Container className="mt-[80px] mb-[180px]"> 
            <Flex className="gap-x-12">
            <div className='w-1/4'>
                <Flex className="gap-x-4">
                    <div className='w-[22px] h-[22px] bg-red rounded-[50%] text-[16px] text-white'>
                    <BsFillTelephoneFill className='pt-[3px] pl-[4px]'/>
                    </div>
                    <p className='font-poppins font-bold text-black text-[16px]'>Call To Us</p>
                </Flex>
                <p className='font-poppins pt-[28px] text-black text-[16px]'>We are available 24/7, 7 days a week.</p>
                <p className='font-poppins pt-[22px] text-black text-[16px]'> Phone: +8801611112222</p>
                <div className='border-t border-solid border-line mt-[16px]'></div>

                <Flex className="gap-x-4 mt-[40px]">
                    <div className='w-[22px] h-[22px] bg-red rounded-[50%] text-[16px] text-white'>
                    <CiMail className='pt-[3px] pl-[4px]'/>
                    </div>
                    <p className='font-poppins font-bold text-black text-[16px]'>Write To US</p>
                </Flex>
                <p className='font-poppins pt-[28px] text-black text-[16px]'>Fill out our form and we will contact you within 24 hours.</p>
                <p className='font-poppins pt-[20px] text-black text-[16px]'>Emails: customer@exclusive.com</p>
                <p className='font-poppins pt-[20px] text-black text-[16px]'>Emails: support@exclusive.com</p>

            </div>
            <div className='w-3/4'>
                <div className='flex gap-x-8'>
                <input type="text" placeholder='Your Name *' className='bg-gray2'/>
                <input type="text" placeholder='Your Email *' className='bg-gray2'/>
                <input type="text" placeholder='Your phone *' className='bg-gray2'/>
                </div>
                <div className='mt-[32px]'>
                <input type="text" placeholder='Your massage *' className='pb-[210px] pr-[695px] bg-gray2 '/>
                </div>
                <Button text="Send Massage" className="ml-[610px] mt-[48px]"/>
            </div>
        </Flex>
        </Container>
  )
}

export default Contuct