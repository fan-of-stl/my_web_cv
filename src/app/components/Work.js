"use client"
import '../styles/WorkCard.css'
import React from 'react'
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData'


function Work()
 {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects</h1>
      <div className='project-container'>
        
       {WorkCardData.map((val,index)=>{
        // console.log(val,"here");
        
        return (
        <div key={index} >
    
          
        <WorkCard imgsrc= {val.imgsrc} 
        title={val.title} text={val.text} view={val.view} source={val.source}/>
        </div>
        )
       })

       }
       </div>
    </div>
  )
}

export default Work;
