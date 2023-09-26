import React from 'react'
import Flex from '../components/Flex'
import Container from '../components/Container'
import Homelist from '../components/Homelist'
import {FaAngleRight} from 'react-icons/fa'
import Image from '../components/Image' 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Bannermain from '../assets/Bannermain.png'
import Slider from "react-slick";
import List from '../components/List'




const Bannerpart = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };


  return (
    <div>
                    
            <section className='pb-140'>
            <Container>
                <Flex className="gap-x-15 relative after:absolute after:top-0 after:left-[235px] after:w-px after:h-full after:bg-gray pt-10">
                <div className='w-1/4 flex flex-col gap-y-4'>
                    <div className='flex items-center justify-between w-3/4'>
                    <List className="hover:after:h-0" text="Woman’s Fashion"/><FaAngleRight/>
                    </div>
                    <div className='flex items-center justify-between w-3/4'>
                    <List className="hover:after:h-0" text="man’s Fashion"/><FaAngleRight/>
                    </div>
                    <List className="hover:after:h-0" text="Electronics"/>
                    <List className="hover:after:h-0" text="Home & Lifestyle"/>
                    <List className="hover:after:h-0" text="Sports & Outdoor"/>
                    <List className="hover:after:h-0" text="Baby’s & Toys"/>
                    <List className="hover:after:h-0" text="Groceries & Pets"/>
                    <List className="hover:after:h-0" text="Health & Beauty"/>
                    
                    
                </div>
                <div className='w-3/4 relative'>
                <Slider {...settings}>
                    <div>
                    <Image src={Bannermain}/>
                    </div>
                    <div>
                    <Image src={Bannermain}/>
                    </div>
                    <div>
                    <Image src={Bannermain}/>
                    </div>
                    <div>
                    <Image src={Bannermain}/>
                    </div>
                    <div>
                    <Image src={Bannermain}/>
                    </div>
                    </Slider>
                    
                </div>
                </Flex>
            </Container>
            </section>
    </div>
  )
}

export default Bannerpart