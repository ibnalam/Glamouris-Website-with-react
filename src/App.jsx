import { useState } from 'react'
import Homepart from './components/pages/Homepart'


import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from './components/Rootlayout';
import Contuct from './components/pages/Contuct';
import About from './components/pages/About';
import Signup from './components/pages/Signup'
import ProductDetails from './components/pages/ProductDetails';
// import Product from './components/Product';
// import Navber from './layout/Navber';
// import Gotobtn from './components/Gotobtn';




const router = createBrowserRouter(
  createRoutesFromElements(

<>
      
    
    <Route
      path="/"
      element={<Rootlayout />}
    >
      <Route path='/' element={<Homepart/>}></Route>
      <Route path='/contuct' element={<Contuct/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/sign-up' element={<Signup/>}></Route>
      <Route path='/product-details' element={<ProductDetails/>}></Route>



     


    </Route>

</>
  )
);






function App() {
 

  return (
    <>
   








      
   <RouterProvider router={router} />
    </>
  )
}

export default App
