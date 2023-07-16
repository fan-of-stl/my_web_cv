"use client"
import {useRouter} from "next/navigation";
import axios from 'axios';
import { useState } from "react";

function CVCreator() {
    const [userName, setuserName] = useState("");
    const [userId, setuserId] = useState("");
    const router = useRouter();

    async function showWebCV() {
        await axios.put('/api/updateData/',{
            "_id" : userId,
            "username" : userName
        }).then(()=>{
          router.push('/myCV/'+userId);
        })
      };

  return (
    <>
    <p>Resume Creator page</p>
    <input placeholder='enter user name' value={userName} onInput={(e)=>setuserName((e.target as HTMLInputElement).value)}></input>
    <input placeholder='enter user id'value={userId} onInput={(e)=>setuserId((e.target as HTMLInputElement).value)}></input>
    <button onClick={showWebCV}>Generate Resume</button>
    </>
  )
}

export default CVCreator