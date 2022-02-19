import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
//import FlowersZim from '../../images/flowerszim-mockup.png'
//import Rico from '../../images/rico-mockup.png'
//import Notes from '../../images/notes-mockup.png'
//import Tbt from '../../images/the-bold-type-mockup.png'
//import Industria from '../../images/industria-mockup.png'
import ProjectCard from '../../components/projects/ProjectCard';

import classes from './Portfolio.module.scss';
//import { MdSpeakerNotesOff } from 'react-icons/md'

export default function Portfolio() {
  return (
    <>
      <section className={classes.main}>
        <Navbar />
        <div className={classes.portfolio_header}>
          <h3 className={classes.portfolio_heading}>A Peak At What I Have Created</h3>
        </div>
<ProjectCard />
        
        <div classname={classes.testimonials}>
        <div className={classes.quote}>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/quote-right.png" alt="Quote - tesimonials"/>
        </div>
            <p className={classes.testimonial_text}>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum.”
            <p className={classes.testimonial_name}>No Name</p>
            </p>
      </div>
      </section>

      <Footer />
    </>
  )
}
