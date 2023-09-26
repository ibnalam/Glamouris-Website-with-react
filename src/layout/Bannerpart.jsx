import React from 'react'
import Flex from '../components/Flex'
import Container from '../components/Container'
import Homelist from '../components/Homelist'
import {FaAngleRight} from 'react-icons/fa'
import Image from '../components/Image'
import Bannerr from '../assets/banner.png'
import Slider from "react-slick";

const Bannerpart = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


  return (
    <div>
        <Container className="mt-[40px]">
            <Flex>
                <Flex className='w-1/4 border-r border-pl-3 border-solid'>
                    <ul className='w-full'>
                        <Flex className="w-full justify-between">
                        <Homelist text="Woman’s Fashion"/>
                         <FaAngleRight className=''/>
                        </Flex>
                        <Flex className="justify-between">
                        <Homelist text="Men’s Fashion"/> 
                        <FaAngleRight/>
                        </Flex >
                        <Flex className="justify-between">
                        <Homelist text="Electronics"/> 
                        <FaAngleRight/>
                        </Flex>
                        <Flex className="justify-between">
                        <Homelist text="Home & Lifestyle"/> 
                        <FaAngleRight/>
                        </Flex>
                        <Flex className="justify-between">
                        <Homelist text="Medicine"/> 
                        <FaAngleRight/>
                        </Flex>
                        <Flex className="justify-between">
                        <Homelist text="Sports & Outdoor"/> 
                        <FaAngleRight/>
                        </Flex>
                        <Flex className="justify-between">
                        <Homelist text="Baby’s & Toys"/> 
                        <FaAngleRight/>
                        </Flex>
                        <Flex className="justify-between">
                        <Homelist text="Groceries & Pets"/>
                         <FaAngleRight/>
                        </Flex>
                        <Flex className="justify-between">
                        <Homelist text="Health & Beauty"/> 
                        <FaAngleRight/>
                        </Flex>
                    </ul>
                </Flex>
                  
            </Flex>
        </Container>
    </div>
  )
}

export default Bannerpart