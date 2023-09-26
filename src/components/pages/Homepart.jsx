import React from 'react'
import Navber from '../../layout/Navber'
import Bannerpart from '../../layout/Bannerpart'
import Sectionbutton from '../Sectionbutton'
import Container from '../Container'
import Sectionsmallheading from '../Sectionsmallheading'
import Flex from '../Flex'
import Sectionlargeheading from '../Sectionlargeheading'
import Clock from '../Clock'
import Sectionicon from '../Sectionicon'
import Product from '../Product'
import Viewproducts from '../Viewproducts'
import Line from '../Line'
import Catagoryproduct from '../Catagoryproduct'
import Viewallbtn from '../Viewallbtn'
import Withoutbaseproduct from '../Withoutbaseproduct'
import Musicbanner from '../Musicbanner'
import Withinputproduct from '../Withinputproduct'
import Arrival from '../Arrival'
import Clientservice from '../Clientservice'

// Product here 
import ProductOne from '../../assets/ProductOne.png'
import Monitor from '../../assets/Monitor.png'
import Keyboard from '../../assets/Keyboard.png'
import Chair from '../../assets/Chair.png'
import Phons from '../../assets/Phons.png'
import HeadPhone from '../../assets/HeadPhone.png'
import Gaming from '../../assets/Gaming.png'
import watch from '../../assets/watch.png'
import Computers from '../../assets/Computers.png'
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'
import p5 from '../../assets/p5.png'
import p6 from '../../assets/p6.png'
import p7 from '../../assets/p7.png'
import p8 from '../../assets/p8.png'
import p9 from '../../assets/p9.png'
import p10 from '../../assets/p10.png'
import p11 from '../../assets/p11.png'
import Footer from '../Footer'


// icons here 
// import {AiOutlineCar} from 'react-icons/ai'









const Homepart = () => {
  return (
   <>
   
     <Container>
        <Bannerpart/>
        <Flex className="mt-[120px]">
        <Sectionbutton/>
        <Sectionsmallheading text="Today`s"/>
        </Flex>
        <Flex>
        <Sectionlargeheading text="Flash Sales"/>
        <Clock/>
        <Sectionicon/>
        </Flex>
        <Flex>
            <Product basetext="-30%" img={ProductOne} ratingnumber="(77)" Prices="$120"/>
            <Product basetext="-32%" img={Monitor} ratingnumber="(88)" Prices="$123"/>
            <Product basetext="-28%" img={Keyboard} ratingnumber="(92)" Prices="$124"/>
            <Product basetext="-34%" img={Chair} ratingnumber="(65)" Prices="$130"/>
        </Flex>
        <Viewproducts/>
        <Line/>

        <Flex className="mt-[120px]">
        <Sectionbutton/>
        <Sectionsmallheading text="Catagories"/>
        </Flex>
        <Flex className="mb-14">
        <Sectionlargeheading text="Browse By Catagories"/>
        <Sectionicon className="pl-[690px]"/>
        </Flex>
        <Flex className="gap-x-7">
            <Catagoryproduct img={Phons} text="Phons" />
            <Catagoryproduct img={Computers} text="Computers" />
            <Catagoryproduct img={Gaming} text="Gaming" />
            <Catagoryproduct img={watch} text="watch" />
            <Catagoryproduct img={HeadPhone} text="HeadPhone" />
            <Catagoryproduct img={Computers} text="Computers" />
        </Flex>
        <Line className="mt-[50px]"/>
        <Flex className="mt-[120px]">
        <Sectionbutton/>
        <Sectionsmallheading text="This Month"/>
        </Flex>
        <Flex className="mb-14">
        <Sectionlargeheading text="Best Selling Products"/>
        <Viewallbtn/>
        </Flex>
        <Flex className="gap-x-4">
          <Withoutbaseproduct img={p1} pricess="$213" ratingnumber="(45)"/>
          <Withoutbaseproduct img={p2} pricess="$210" ratingnumber="(72)"/>
          <Withoutbaseproduct img={p3} pricess="$221" ratingnumber="(86)"/>
          <Withoutbaseproduct img={p4} pricess="$231" ratingnumber="(82)"/>
        </Flex>
        <Musicbanner/>
        <Flex className="mt-[120px]">
        <Sectionbutton/>
        <Sectionsmallheading text=" Our Products"/>
        </Flex>
        <Flex className="mb-14">
        <Sectionlargeheading text="Explre Our Products"/>
        <Viewallbtn/>
        </Flex>
        <Flex className="gap-x-4">
          <Withoutbaseproduct img={p5} pricess="$232" ratingnumber="(45)"/>
          <Withoutbaseproduct img={p6} pricess="$243" ratingnumber="(72)"/>
          <Withoutbaseproduct img={p7} pricess="$221" ratingnumber="(86)"/>
          <Withoutbaseproduct img={p8} pricess="$231" ratingnumber="(82)"/>
        </Flex>

        <Flex className="mt-[60px] gap-x-4">
        <Withinputproduct img={p9} pricess="$123" ratingnumber="(42)"/>
        <Withinputproduct img={p10} pricess="$123" ratingnumber="(42)"/>
        <Withinputproduct img={p11} pricess="$123" ratingnumber="(42)"/>
        <Withinputproduct img={p7} pricess="$123" ratingnumber="(42)"/>
        </Flex>


        <Flex className="mt-[120px]">
        <Sectionbutton/>
        <Sectionsmallheading text=" Featured"/>
        </Flex>
        <Sectionlargeheading text="New Arrival"/>

        <Arrival className="mt-[60px]"/>
        
        <Clientservice servicename="FREE AND FAST DELIVERY" servicedetails="Free delivery for all orders over $140" servicename2="24/7 CUSTOMER SERVICE" servicedetails2="Friendly 24/7 customer support" servicename3="MONEY BACK GUARANTEE" servicedetails3="We reurn money within 30 days"/>
     </Container>
     
   </>
  )
}

export default Homepart