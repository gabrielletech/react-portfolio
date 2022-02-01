import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import FlowersZim from '../../images/flowerszim-mockup.png'
import Rico from '../../images/rico-mockup.png'
import Notes from '../../images/notes-mockup.png'
import Tbt from '../../images/the-bold-type-mockup.png'
import Industria from '../../images/industria-mockup.png'

import classes from './Portfolio.module.scss';
import { MdSpeakerNotesOff } from 'react-icons/md'

export default function Portfolio() {
  return (
    <>
      <section>
        <Navbar />
        <div className={classes.portfolio_header}>
          <h3 className={classes.portfolio_heading}>A Peak At What I Have Created</h3>
        </div>

        <div className={classes.projects_container}>
          <ul>
            <li className={classes.project}>
                <img src={FlowersZim} alt="FlowersZim Mockup" className={classes.project_img} />
            </li>
          </ul>
          <ul>
            <li className={classes.project}>
                <img src={Rico} alt="FlowersZim Mockup" className={classes.project_img} />
            </li>
          </ul>
          <ul>
            <li className={classes.project}>
                <img src={Notes} alt="FlowersZim Mockup" className={classes.project_img} />
            </li>
          </ul>
          <ul>
            <li className={classes.project}>
                <img src={Tbt} alt="FlowersZim Mockup" className={classes.project_img} />
            </li>
          </ul>
          <ul>
            <li className={classes.project}>
                <img src={Industria} alt="FlowersZim Mockup" className={classes.project_img} />
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  )
}
