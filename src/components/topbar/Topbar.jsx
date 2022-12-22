import React from 'react'
import "./Topbar.scss"
import {Person, Mail} from "@mui/icons-material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

//to check if the menu is open, a state is defined in app.jsx

export default function Topbar({menuOpen,setMenuopen}) {
  return (
    <div className={'topbar '+(menuOpen && "active")}>
      <div className='wrapper'>
        <div className='left'>
            <a href='#intro' className='logo'>developer .</a>
            <div className="itemContainer">
                <Person className='icon'/>
                <span>+1 857 210 1934</span>

            </div>
            <div className="itemContainer">
                <Mail className='icon'/>
                <span>pampatwar.a@northeasstern.edu</span>
            </div>
            <div className="itemContainer">
              <a target="_blank" href='https://www.linkedin.com/in/anay-pampatwar28/'><LinkedInIcon className='icon'/></a>
            </div>
            <div className="itemContainer">
              <a target="_blank" href='https://github.com/Anay-Pampatwar'><GitHubIcon className='icon'/></a>
            </div>
        
        </div>

        <div className='right'>
            <div className="hamburger" onClick={()=> setMenuopen(!menuOpen)}>
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
            </div>

        </div>
      </div>
    </div>
  )
}
