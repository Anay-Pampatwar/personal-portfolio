import React from 'react'
import "./Works.scss"
import LinkIcon from '@mui/icons-material/Link'


export default function Works() {
  return (
    <div className='works' id='works'>
      
       <div className="slider">
       
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/mobile.png"/> 
                </div>
                <h2>Stock Portfolio Manager</h2>
                <p>
                  MERN Stack React Project, 
                  hosted on netlify and server hosted on heroku
                </p>
                <span>Live:</span>
                <a
                      target="_blank"
                      href="https://stocktradeportfolio.netlify.app/"
                    >
                      https://stocktradeportfolio.netlify.app/ <LinkIcon />
                    </a>
              </div>

            </div>
            <div className="right">
              <img src="assets/details (1)1.png" alt=""></img>

            </div>
          </div>
        </div>
       </div>
       <img src="assets/arrow.png" className='arrow left' />
       <img src="assets/arrow.png" className='arrow right' />
    </div>
  )
}
