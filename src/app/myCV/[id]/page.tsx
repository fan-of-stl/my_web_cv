"use client"
import React, { useEffect, useState } from 'react';
import axios from "axios";

function MyCV({ params }: { params: { id: string } }) {
  const [user, setUser] = useState({});
  useEffect(() => {getResumeData(params.id);},[])
    async function getResumeData(id: string) {
      const res = await axios.get(`/api/getData/${id}`).then(response => {  
        setUser(response.data) 
      })

      return res
      
    }

  return (
    <>
    <p>Created Resume Page</p>
    <p>User ID: {params.id}</p>
    <p>User Name:{(user as any).username}</p>
    </>
  )
}

export default MyCV;