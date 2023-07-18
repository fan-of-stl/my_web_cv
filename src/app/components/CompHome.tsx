import React from 'react'

import Link  from 'next/link';
import '../styles/CompHome.css'
function CompHome() {
  return (
    <div className='hero'>
      <div className='mask'>
         <img className='intro-img' src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='introbg'/>
      </div>
       <div className='content'>
        <p>HI,I'M A FREELANCER</p>
        <h1>React Developer</h1>
       <div>
        <Link href="/Projects" className="btn">Projects</Link>
        <Link href="/Contacts" className="btn btn-light">Contacts</Link>

       </div>
        </div> 
        
    </div>
  )
}

export default CompHome;