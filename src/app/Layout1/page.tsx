"use client";
import React from 'react'
import Navfile from '../components/Navfile'
import Home from '../components/CompHome'
// import Projects from '../components/Work'
import AboutContent from '../components/AboutContent';
import ContentForm from '../components/ContactForm';
import Footer from '../components/Footer'
function HomeRoute() {
  return (
    <div>
      <Navfile/>  
      <Home/>
      {/* <Projects/> */}
      <AboutContent/>
      <ContentForm/>
      <Footer/>
      </div>
  )
}
export default HomeRoute;