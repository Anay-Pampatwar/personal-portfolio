import React from 'react'
import './Works.scss'
import LinkIcon from '@mui/icons-material/Link'
import { useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: '1',
      icon: './assets/writing.png',
      title: 'Stock Portfolio Manager',
      desc:
        'MERN Stack React Project hosted on netlify and server hosted on heroku.',
      img:
      "assets/details (1)1.png",
      livelink:
      "https://stocktradeportfolio.netlify.app/",
      github:
      "https://github.com/Anay-Pampatwar/Stocks-Portfolio-Manager-React-App"
    },
    {
      id: '2',
      icon: './assets/globe.png',
      title: 'Recipe Suggestion JavaFX Application',
      desc:
        'JavaFX desktop application made using REST Api that suggests meals based on the groceries that user has.',
        img:
        "assets/cerealkiller.png",
    
        
        github:
        "https://github.com/Anay-Pampatwar/cerealkillers/tree/master"
    },
    // {
    //   id: '3',
    //   icon: './assets/writing.png',
    //   title: 'Branding',
    //   desc:
    //     'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    //   img:
    //     'https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg',
    // },
  ]

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }
  return (
    <div className="works" id="works">
      <h1>Projects</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Live:</span>
                  <a
                    target="_blank"
                    href={d.livelink}
                  >
                    https://stradeportfolio.netlify.app/ <LinkIcon />
                  </a>
                  <span>
                    Github:
                    <a
                      target="_blank"
                      href={d.github}
                    >
                      <GitHubIcon />
                    </a>
                  </span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt=""></img>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" onClick={()=>handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" onClick={()=>handleClick("right")}/>
    </div>
  )
}
