import React from 'react'
import MainCont from './MainCont'

import { useEffect } from 'react'
import "aos/dist/aos.css"
import AOS from 'aos';
import { Route, Routes } from 'react-router-dom';
import Gallery from './Gallery';
import Accordion from './Accordion';

const Container = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div id='container'>
      <Routes>
        {/* path='경로' element={보여줄 컴포넌트} */}
        <Route path='/' element={<MainCont></MainCont>}></Route>
        <Route path='/Gallery' element={<Gallery></Gallery>}></Route>
        <Route path='/Pages' element={<Accordion></Accordion>}></Route>
      </Routes>
    </div>
  )
}

export default Container
