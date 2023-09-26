import React from 'react'
import Flex from './Flex'

const Bannercounter = ({className,Hours, Days,Minuts,Seconds}) => {
  return (
        <Flex className="gap-x-6">
            <div className={`bg-white h-[62px] w-[62px] text-center relative rounded-[50%] ${className}`}>
                <p className='pt-[12px] text-bold'>{Hours}</p>
                <p className='text-[14px] -mt-[8px]'>Hours</p>
            </div>
            <div className={`bg-white h-[62px] w-[62px] text-center relative rounded-[50%] ${className}`}>
                <p className='pt-[12px] text-bold'>{Days}</p>
                <p className='text-[14px] -mt-[8px]'>Days</p>
            </div>
            <div className={`bg-white h-[62px] w-[62px] text-center relative rounded-[50%] ${className}`}>
                <p className='pt-[12px] text-bold'> {Minuts}</p>
                <p className='text-[14px] -mt-[8px]'>Minuts</p>
            </div>
            <div className={`bg-white h-[62px] w-[62px] text-center relative rounded-[50%] ${className}`}>
                <p className='pt-[12px] text-bold' >{Seconds}</p>
                <p className='text-[14px] -mt-[8px]'>Seconds</p>
            </div>
        </Flex>
  )
}

export default Bannercounter