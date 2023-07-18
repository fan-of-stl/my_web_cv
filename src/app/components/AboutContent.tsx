import React from 'react'
import "../styles/AboutStyle.css"
import Link  from 'next/link'
// import project1 from '../assets/project1.jpg'
function AboutContent() {
  return (
    <div className='about'>
        <div className='left'>
          <h1>Who Am I </h1>
          <p>I'm a react front-end developer.Icreate rresponsive secure websites</p>
          <Link href="/contact"><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
              <div className='img-stack top'>
                <img src="./assets/project1.jpg" className='img' alt='img'/>
              </div>
              <div className='img-stack bottom'>
                <img src="./assets/project1.jpg" className='img' alt='image'/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent