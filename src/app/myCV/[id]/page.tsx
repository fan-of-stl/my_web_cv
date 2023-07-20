"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

function MyCV({ params }: { params: { id: string } }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    getResumeData(params.id);
  }, []);
  async function getResumeData(id: string) {
    const res = await axios.get(`/api/getData/${id}`).then((response) => {
      setUser(response.data);
    });
    return res;
  }

  return (
    <>
      <p>Created Resume Page</p>
      <p>User ID: {params.id}</p>
      <p>User Name:{(user as any).username}</p>
      <p>Designation:{(user as any).designation}</p>
      <div>
        <h3>Skills:</h3>
        <ul>
          {(user as any).technical_skills &&
            (user as any).technical_skills.map((item: any, index: any) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default MyCV;
