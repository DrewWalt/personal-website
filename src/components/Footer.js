import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import "../styles/Footer.css"
import { IconButton } from '@material-ui/core'
import { Email, GitHub } from '@material-ui/icons'

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <IconButton href="https://www.linkedin.com/in/drew-walton-528029240/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
            </IconButton>

            <IconButton href="https://github.com/DrewWalt" target="_blank" rel="noopener noreferrer">
                <GitHub/>
            </IconButton>

            <IconButton href="mailto:drew.walton.website@gmail.com" target="_blank" rel="noopener noreferrer">
                <Email/>
            </IconButton>
        </div>
        <p> &copy; 2022 drewjwalton.com</p>
    </div>
  )
}

export default Footer