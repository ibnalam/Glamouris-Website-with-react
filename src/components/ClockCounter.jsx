import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Flex from './Flex'
import Clockname from './Clockname'
import Clockheading from './Clockheading'



const ClockCounter = ({className,duration}) => {

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
    <div className={className}>
    <Flex>
      <div>
        <Clockname text="Days" className="ml-2 text-black"/>
        <Clockheading text={days < 10 ? "0" + days : days} className="pt-0"/>
      </div> <div className=' text-4xl text-red mt-3 mx-3'> : </div>
      <div>
        <Clockname text="Hours" className="ml-1 text-black"/>
        <Clockheading text={hours < 10 ? "0" + hours : hours}/>
      </div> <div className=' text-4xl text-red mt-3 mx-3'> : </div>
      <div>
        <Clockname text="Minutes" className="text-black"/>
        <Clockheading text={minutes < 10 ? "0" + minutes : minutes}/>
      </div> <div className=' text-4xl text-red mt-3 mx-3'> : </div>
      <div>
        <Clockname text="Seconds" className="text-black"/>
        <Clockheading text={seconds < 10 ? "0" + seconds : seconds}/>
      </div> 
    </Flex>
  </div>
 )
}

export default ClockCounter