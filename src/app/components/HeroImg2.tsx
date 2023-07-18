import React from 'react'
import '../styles/HeroImg2.css'
type ProjectsProps = {
    heading: string;
    text: string;
  };
function Projects({heading,text}: ProjectsProps) {
  return (
    <div className='hero-img'>
      <div className='heading'>
      <h1>{heading}</h1>
      <p>{text}</p>
      </div>
    </div>
  )
}

export default Projects