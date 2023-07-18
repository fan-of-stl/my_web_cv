import React from 'react'
import Navfile from '../components/Navfile'
import Projects from '../components/HeroImg2'
import Footer from '../components/Footer'
import AboutContent from '../components/AboutContent'
function AboutRoute() {
  return (
    <div>
       <Navfile/>
      <Projects heading="ABOUT" text="Im a friendly Front-End Developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default AboutRoute