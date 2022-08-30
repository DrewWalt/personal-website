import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList'
import GitHub from '@material-ui/icons/GitHub'
import { IconButton } from '@material-ui/core'
import '../styles/ProjectDisplay.css'

function ProjectDisplay() {
    const {id} = useParams();
    const project = ProjectList[id]
    return (
        <div className="project">
            <h1> {project.name} </h1>
            <img src={project.image} alt={project.name}/>
            <p> <b>Skills:</b> {project.skill} </p>
            <IconButton href={project.link} target="_blank" rel="noopener noreferrer">
                <GitHub/>
            </IconButton>
        </div>
    )
}

export default ProjectDisplay