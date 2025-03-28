import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Card from './pages/Card/Card';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import  { useState } from 'react'

import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    { showLogin?<LoginPopup setShowLogin/>:<></>}
    <div className='app'>
      <Navbar setShowLogin ={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Card/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
