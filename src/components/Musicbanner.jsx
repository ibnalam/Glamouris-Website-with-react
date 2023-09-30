import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image  from './Image' 
import catagorybanner from '../assets/catagorybanner.png'
import Bannercounter from './Bannercounter'

const Musicbanner = () => {
  return (
    <Container>
        <Flex className="bg-black mt-[120px]">
            <div className='w-1/2 pl-[56px]'>
                <p className='font-poppins text-base text-[14px] text-green pt-[70px]'>Catagories</p>
                <h4 className='text-white text-[48px] leading-[60px] pt-[32px]'>Enhance your Music Experience </h4>
                <div className='pt-[30px]'>
                <Bannercounter className="" duration={23 * 5* 60 * 60 * 1000}/>
                </div>
                <button className='mt-[30px] border  bg-green py-4 px-16  border-solid border-black hover:bg-white hover:text-black duration-500 '>
                    Buy Now 
                </button>
            </div>
            <div className='w-1/2'>
                <Image src={catagorybanner} className="py-[82px] px[60px]"/>
            </div>
        </Flex>
    </Container>
  )
}

export default Musicbanner