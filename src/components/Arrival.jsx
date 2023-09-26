import React from 'react'
import Flex from './Flex'
import Image from './Image'
import arrival1 from '../assets/arrival1.png'
import arrival2 from '../assets/arrival2.png'
import arrival3 from '../assets/arrival3.png'
import arrival4 from '../assets/arrival4.png'


const Arrival = ({className}) => {
  return (
     <Flex className={`gap-x-4 ${className}`}>
        <div className='w-1/2 bg-black relative'>
            <Image src={arrival1} className="ml-[30px] mt-[40px]"/>
            <div className='absolute top-[380px] text-white ml-[32px]'>
                <h6 className=' text-[24px] text-bold font-poppins'>PlayStation 5</h6>
                <p className='pt-3 text-[14px] font-poppins w-[242px]'>Black and White version of the PS5 coming out on sale.</p>
                <button className='border-b border-solid border-gray'>Shop Now</button>
            </div>
        </div>
        <div className='w-1/2'>
            <div className='bg-black relative'>
                <Image src={arrival2} className="ml-36 "/>
                     <div className='text-white ml-[32px] top-[150px]  absolute'>
                        <h6 className=' text-[24px] text-bold font-poppins'>PlayStation 5</h6>
                        <p className='pt-3 text-[14px] font-poppins w-[242px]'>Black and White version of the PS5 coming out on sale.</p>
                        <button className='border-b border-solid border-gray'>Shop Now</button>
                     </div>
            </div>
            <div className='mt-4 flex'>
                <div className='bg-black w-1/2 mr-4 pr-[30px] relative'>
                    <Image src={arrival3} className="mx-[40px] my-[30px]"/>
                    <div className='text-white ml-[32px] top-[150px]  absolute'>
                        <h6 className=' text-[20px] text-bold font-poppins'>PlayStation 5</h6>
                        <p className='pt-2s text-[14px] font-poppins w-[242px]'>Black and White version of the PS5 coming out on sale.</p>
                        <button className='border-b border-solid border-gray'>Shop Now</button>
                     </div>
                </div>
                <div className=' bg-black w-1/2 relative'>
                    <Image src={arrival4} className="mx-[40px] my-[30px] "/>
                    <div className='text-white ml-[32px] top-[150px]  absolute'>
                        <h6 className=' text-[20px] text-bold font-poppins'>PlayStation 5</h6>
                        <p className='pt-2 text-[14px] font-poppins w-[242px]'>Black and White version of the PS5 coming out on sale.</p>
                        <button className='border-b border-solid border-gray'>Shop Now</button>
                     </div>
                </div>
            </div>
        </div>
     </Flex>
  )
}

export default Arrival