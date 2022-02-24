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
            <p className={classes.testimonial_text}>“Gabrielle has been an absolute pleasure to work with on our www.habesharesort.com site! She was responsive
            and intuitive on the build, has provided regular reports and feedback since and ensured the visibility of our site. I couldn't recommend her enough.
            Thank you Gabby!”
            <p className={classes.testimonial_name}>Letty Chiwara</p>
            </p>
      </div>
      </section>

      <Footer />
    </>
  )
}
