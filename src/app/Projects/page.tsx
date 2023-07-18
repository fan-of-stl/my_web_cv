import React from 'react'
import Navfile from '../components/Navfile'
import Footer from '../components/Footer'
import Projects from '../components/HeroImg2'
import Work from '../components/Work'
function ProjectsRoute() {
  return (
    <div>
      <Navfile/>
      <Projects heading="PROJECTS" text="Some of my most recent works"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default ProjectsRoute