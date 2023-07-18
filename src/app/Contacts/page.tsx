import React from 'react'
import Projects from '../components/HeroImg2'
import Navfile from '../components/Navfile'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
function ContactRoute() {
  return (
    <div>
      <Navfile/>
      <Projects heading="CONTACT" text="Lets have a chat"/>
      <ContactForm/> 
      <Footer/>
    </div>
  )
}

export default ContactRoute