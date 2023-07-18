import React from 'react'
import '../styles/Footer.css'
import { FaFacebook, FaHome,FaLinkedin,FaMailBulk,FaPhone, FaTwitter } from 'react-icons/fa'
function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'> 
         <div className='left'>
            <div className='location'>
              <FaHome size={20} style={{color:"white",marginRight:"2rem"}}/> 
              <div>
                <p>123 housing</p>
                <p>India</p>
              </div>
            </div>
          <div className='phone'>
              <h4> <FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>1-234-343-233 </h4>
          </div>
          <div className='email'>
              <h4> <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>xyz@gmail.com</h4>
          </div>
         </div>
         <div className='right'>
           <h4>About the company</h4>
           <p>This is a xyz company</p>
           <div className='social'>
           <FaFacebook className='FaFacebook' size={20} style={{color:"white",marginRight:"2rem"}}/>
           <FaTwitter className='FaTwitter' size={20} style={{color:"white",marginRight:"2rem"}}/>
           <FaLinkedin className='FaLinkedin' size={20} style={{color:"white",marginRight:"2rem"}}/>
           </div>
           </div> 
      </div>
    </div>
  )
}

export default Footer