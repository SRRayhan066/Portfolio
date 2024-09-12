import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebuttons from './components/Sidebuttons';
import Hero from './pages/Hero';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';


import { Alert } from 'antd';


const App = () => {
  const [show,setShow] = useState(false);
  

  return (
    <div className=''>   
      <Navbar/>
      {show && (
        <div className='relative flex justify-center items-center z-50'>
          <Alert className='bottom-[3vh] w-[auto] fixed' message={<span className='font-serif font-bold'>Sent Successfully</span>} type="success" showIcon />
        </div>
      )}
      
      <Sidebuttons/>
      <Hero/>
      <About/>
      <Project/>
      <Contact setShow={setShow}/>
    </div>
  );
};

export default App;