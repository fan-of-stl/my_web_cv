import '../styles/WorkCard.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Image from 'next/image';
type ProjectsProps = {
    imgsrc:string;
    title: string;
    text:string;
    view:string;
    source:string
  };
function WorkCard({imgsrc,title,text,view,source}:ProjectsProps)
 {console.log("imgsrc",imgsrc);
  return (
    <div className='project-card'>

    <img src="./assets/project1.jpg" alt="image1" width={800} height={600} />
    <h2 className='project-title'>{title}</h2>
    <div className='pro-details'>
       <p>{text}</p>
       <div className='pro-btns'>
          <NavLink to={view} className="btn">View</NavLink>
          <NavLink to={source} className="btn">source</NavLink>

       </div>
    </div>
    </div>
  )
}

export default WorkCard;
