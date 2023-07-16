"use client";
import { useRouter } from 'next/navigation';
import styles from './page.module.css'
import React, { useState } from 'react';


export default function Home() {
  const router = useRouter();
  
  function openResumeCreator(){
    router.push('/CVCreator/');
  }

  return (
    <>
    <button onClick={openResumeCreator}>Create My Page</button>
    </>
  )
}
