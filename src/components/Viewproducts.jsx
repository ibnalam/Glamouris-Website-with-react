import React from 'react'

const Viewproducts = ({className}) => {
  return (
     <button className={`font-poppins border text-white mt-[80px] ml-[450px] text-[16px] py-4 px-12 bg-red hover:border-solid hover:border-black hover:border-2 hover:border-line hover:bg-white hover:text-black duration-500  ${className}`}>View All Products</button>
     
  )
}

export default Viewproducts