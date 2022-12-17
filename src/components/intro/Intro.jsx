import React from 'react'
import "./Intro.scss"
import Typed from "react-typed"


export default function Intro({menuOpen,setMenuopen}) {
  
  return (
    <div className='intro' id='intro'>
     <div className="left">
      <div className=  {"imgContainer "+(menuOpen && "active")}>
        <img src="assets/portFinal2.png" alt="" />
      </div>
     </div>
     <div className="right">
      <div className="wrapper">
        <h2>Hi There, I am</h2>
        <h1>Anay Pampatwar</h1>

        <Typed
      strings={[
            "I'm a Software Engg Grad Student.",
            "I Love Software Development.",
            "I am a learner for life...",
          ]}
          typeSpeed={50}
          backSpeed={50}
          loop
        />
      </div>
      <a href='#portfolio'>
        <img src='assets/down.png'></img>
      </a>
     </div>
    </div>
  )
}
