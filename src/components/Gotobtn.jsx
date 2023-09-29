import React, { useEffect, useState } from 'react'
import Container from './Container'
import {AiOutlineToTop} from 'react-icons/ai'



const Gotobtn = () => {

    
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };


  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

    window.addEventListener('scroll', toggleVisible);

    

  return (
    <Container>
        
        <button className='cursor-pointer text-[30px] text-black w-[40px] ml-[1130px] h-[40px] bg-gray mb-[30px] rounded-[50%]'  onClick={scrollToTop}>
            <AiOutlineToTop style={{display: visible ? 'inline' : 'none'}} className='mb-[15px]'/>
        </button>
   
    </Container>
  )
}

export default Gotobtn