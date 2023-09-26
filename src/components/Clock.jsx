import React from 'react'
import Flex from './Flex'
import List from './List'

const Clock = () => {
  return (
     <Flex>
        <ul className='flex gap-x-5 pt-[24px] pl-[90px]'>
            <div className=''>
                <List text="Days" className="font-bold "/>
                <p className='font-bold  text-black'>03</p>
            </div>
            <span className='mt-3  font-bold text-red'>:</span>
            <div className=''>
                <List text="Hours" className="font-bold "/>
                <p className='font-bold '>23</p>
            </div>
            <span className='mt-3 font-bold  text-red'>:</span>
            <div className=''>
                <List text="Minutes" className="font-bold "/>
                <p className='font-bold '>19</p>
            </div>
            <span className='mt-3 font-bold  text-red'>:</span>
            <div className=''>
                <List text="Seconds" className="font-bold"/>
                <p className='font-bold '>56 </p>
            </div>
        </ul>
     </Flex>
  )
}

export default Clock