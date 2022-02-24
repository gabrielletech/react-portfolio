import React from 'react'
import data from '../data/data.json'
import { FaAngleDoubleRight } from 'react-icons/fa'

import classes from './ProjectCard.module.scss'

const ProjectCard = () => {
    return (
    <>
        <div className={classes.projects_container}>
        {data.map((data) => {
            return (
                <ul>
                    <li>
                        <div className={classes.project} key={data.id}>
                            <img src={data.image} alt="Portfolio Project Mockup" className={classes.project_img} />
                            <div className={classes.project_text}>
                                <h3 className={classes.project_title}>{data.title}</h3>
                                <p className={classes.tech_stack}>{data.techStack}</p>
                                <span><a href={data.url} target="_blank" rel='noreferrer'>View <FaAngleDoubleRight className={classes.right_icon} /></a></span>
                            </div>
                        </div>
                    </li>
                </ul>
        )  
        })} 
        </div> 
    </>
  )
} 

export default ProjectCard;

// data.map( (data) =>