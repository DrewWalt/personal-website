import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import { IconButton } from '@material-ui/core'
import { Email, GitHub} from '@material-ui/icons'
import "../styles/Home.css"

function Home() {
  return (
    <div className="home">
      <div className="about"> 
        <h2> Hello, My Name is Drew Walton</h2>
        <div className="prompt"> 
          <p>
            I am a recent computer science graduate from Gettysburg College.  I created this website as a learning experience as well as a way to demonstrate my skills.  I plan to update this website as I expand my portfolio.
          </p>
            <IconButton href="https://www.linkedin.com/in/drew-walton-528029240/" target="_blank" rel="noopener noreferrer" >
                <LinkedInIcon style={{ fill: '#0077b5' }}/>
            </IconButton>

            <IconButton href="https://github.com/DrewWalt" target="_blank" rel="noopener noreferrer">
                <GitHub style={{ fill: 'black' }}/>
            </IconButton>

            <IconButton href="mailto:drew.walton.website@gmail.com" target="_blank" rel="noopener noreferrer">
                <Email style={{ fill: 'deepskyblue' }}/>
            </IconButton>
        </div>
      </div>
      <div className="skills"> 
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, CSS, HTML
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Java Spring, MySQL, AWS lambda, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
              Java, Python, JavaScript, Assembly
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home