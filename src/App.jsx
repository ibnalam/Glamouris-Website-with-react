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
// import Navber from './layout/Navber';




const router = createBrowserRouter(
  createRoutesFromElements(

    <Route
      path="/"
      element={<Rootlayout />}
    >
      <Route path='/' element={<Homepart/>}></Route>
      <Route path='/contuct' element={<Contuct/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/sign-up' element={<Signup/>}></Route>



     


    </Route>
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
