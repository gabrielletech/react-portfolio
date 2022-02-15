import React from 'react'
import data from '../data/data.json'

import classes from './ProjectCard.module.scss'

const ProjectCard = data.map( (data) => {
    return (
    <>
        <div className={classes.projects_container}>
            <ul>
            <li>
                <div className={classes.project} key={data.id}>
                    <img src={data.image} alt="FlowersZim Mockup" className={classes.project_img} />
                    <div className={classes.project_text}>
                        <h3 className={classes.project_title}>{data.title}</h3>
                    </div>
                </div>
            </li>
        </ul>
        </div>
        
    </>
  )
}) 

export default ProjectCard