"use client"
import React,{useState,useEffect} from 'react'
import '../styles/Navfile.css'
import Link from 'next/link';
import {FaBars,FaTimes} from "react-icons/fa"
function Navfile() {
const [clicked,setClicked]=useState(false)
const[color,setColor]=useState(false)
const changeColor=()=>{
    if(window.scrollY>=100){
        setColor(true)
    }
    else{
        setColor(false)
    }
}
useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', changeColor);

      return () => {
        window.removeEventListener('scroll', changeColor);
      };
    }
  }, []);
  return (
    <div className={color?'header header-bg':'header'}>
        
      <Link href='/'><h1>Portfolio</h1></Link>
    <ul id="nav-menu" className={clicked?"#nav-menu active":'nav-menu'}>
        <li>
        <Link href='/Home'>Home</Link></li>
       <li>  <Link href='/Projects'>projects</Link></li>
        <li> <Link href='/About'>About</Link></li>
      <li>  <Link href='/Contacts'>Contact</Link></li>

    </ul>
    <div className='hamburger'  onClick={()=>{setClicked(!clicked)}}>
    {clicked?<FaTimes size={20} style={{color:"white"}}/>:<FaBars size={20} style={{color:"white"}}/>}
    </div>
      </div> 
            // <div id="mobile" onClick={()=>{setClicked(!clicked)}}>
            //     <i id='bar' className={clicked?'fas fa-times':"fas fa-bars"} ></i>
            //    </div>
       
    
  )
}

export default Navfile