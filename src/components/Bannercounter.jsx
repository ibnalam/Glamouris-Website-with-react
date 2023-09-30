import React from 'react'
import Flex from './Flex'
import { useState } from 'react'
import { useEffect } from 'react'
import Clockheading from './Clockheading'
import Clockname from './Clockname'

const Bannercounter = ({className,duration}) => {

    
    const [time, setTime] = useState(duration)

  useEffect(()=>{
    setTimeout(()=>{
      setTime(time-1000)
    },1000)

    setSeconds(Math.floor(time /1000)%60)
    setMinuts(Math.floor(time / 1000 / 60)%60)
    setHours(Math.floor(time / 1000 / 60 / 60)%24)
    setDayes(Math.floor(time / 1000 / 60 / 60 / 24))

  },[time])
  
  let [days,setDayes] = useState(0);
  let [hours,setHours] = useState(0);
  let [minutes,setMinuts] = useState(0);
  let [seconds,setSeconds] = useState(0);
  




  return (
        <Flex className="gap-x-6">
            <div className={`bg-white h-[62px] w-[62px] text-center relative rounded-[50%] ${className}`}>
                <Clockheading text={hours < 10 ? "0" + hours : hours} className="pl-0 text-[26px]"/>
                <Clockname text="Hours" className=" text-black pl-0 -mt-[10px]"/>
            </div>
            <div className={`bg-white h-[62px] w-[62px] text-center relative rounded-[50%] ${className}`}>
                <Clockheading text={days < 10 ? "0" + days : days} className="pt-0 pl-0 text-[26px]"/>
                <Clockname text="Days" className=" text-black pl-0 -mt-[10px]"/>
            </div>
            <div className={`bg-white h-[62px] w-[62px] text-center relative rounded-[50%] ${className}`}>
                <Clockheading text={minutes < 10 ? "0" + minutes : minutes} className="pl-0 text-[26px]"/>
                <Clockname text="Minutes" className="text-black pl-0 -mt-[10px]"/>
            </div>
            <div className={`bg-white h-[62px] w-[62px] text-center relative rounded-[50%] ${className}`}>
                <Clockheading text={seconds < 10 ? "0" + seconds : seconds} className="pl-0 text-[26px]"/>
                <Clockname text="Seconds" className="text-black pl-0 -mt-[10px]"/>
            </div>
        </Flex>
  )
}

export default Bannercounter