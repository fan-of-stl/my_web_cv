"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import "./CVCreator.css";

function CVCreator() {
  const [userName, setuserName] = useState("");
  const [userId, setuserId] = useState("");
  const [desig, setDesig] = useState("");
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState<String[]>([]);
  const router = useRouter();

  async function showWebCV() {
    await axios
      .put("/api/updateData/", {
        _id: userId,
        username: userName,
        designation: desig,
        technical_skills: skills,
      })
      .then(() => {
        router.push("/myCV/" + userId);
      });
  }

  const handleSkills = () => {
    if (skill.trim() !== "") {
      setSkills([...skills, skill]);
      setSkill("");
    }
  };

  return (
    <>
      <p>Resume Creator page</p>
      <input
        placeholder="enter user name"
        value={userName}
        onInput={(e) => setuserName((e.target as HTMLInputElement).value)}
      ></input>
      <input
        placeholder="enter user id"
        value={userId}
        onInput={(e) => setuserId((e.target as HTMLInputElement).value)}
      ></input>
      <input
        placeholder="enter designation"
        value={desig}
        onInput={(e) => setDesig((e.target as HTMLInputElement).value)}
      ></input>
      <input
        placeholder="enter skills"
        value={skill}
        onInput={(e) => setSkill((e.target as HTMLInputElement).value)}
      ></input>
      <button onClick={handleSkills}>+</button>
      <div>
        <h3>Skills:</h3>
        <ul>
          {skills.map((item, index) => (
            <li key={index} className={`skills skill-${index}`}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={showWebCV}>Generate Resume</button>
    </>
  );
}

export default CVCreator;
