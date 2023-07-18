"use client";
import React from 'react'
import Navfile from '../components/Navfile'
import Home from '../components/CompHome'
import Footer from '../components/Footer'
function HomeRoute() {
  return (
    <div>
      <Navfile/>  
      <Home/>
      <Footer/>
      </div>
  )
}
export default HomeRoute;