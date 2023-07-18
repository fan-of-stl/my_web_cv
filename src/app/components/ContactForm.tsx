import "../styles/ContactForm.css"
import React from 'react'

function ContentForm() {
  return (
    <div className="content">
        <form>
            <label>your name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows={6} placeholder="Type your message here"/>
            <button className="btn">Submit</button>
   
        </form>

    </div>
  )
}

export default ContentForm