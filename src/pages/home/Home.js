import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import HomeImg from '../../images/home-mockup.png'
import { Link } from 'react-router-dom'

import classes from './Home.module.scss'

export default function Home() {

  return (
      <>
      <section>
        <div className={classes.hero}>
        <div className={classes.nav}>
          <Navbar />
        </div>
            <div className={classes.hero_text}>
              <h1 className={classes.hero_title}>Gabrielle Ndoro</h1>
              <h4 className={classes.sub_title}>Freelance Web Designer & Front-End Developer</h4>
              <button className={classes.hero_btn}>
              <Link to='/contact' className={classes.link}>
                   Get In Touch
              </Link>
             </button>
            </div>
            <div className={classes.hero_side}>
              <img src={HomeImg} alt="Responsive Web Design" className={classes.hero_img} />
              <div className={classes.side_text}>
                I help Small Businesses and Entrepreneurs build an online presence - giving you
                 a website that represents your brand, and that your users will LOVE!
              </div>
            </div>
        </div>

        <div className={classes.services}>
          <div className={classes.service}>
            <p> <span className={classes.dot_i}></span><h3 className={classes.service_heading}>Web Development</h3></p>
          </div>
           <div className={classes.service}>
            <p><span className={classes.dot_ii}></span><h3 className={classes.service_heading}>Custom Web Development</h3></p>
          </div>
           <div className={classes.service}>
            <p><span className={classes.dot_iii}></span><h3 className={classes.service_heading}>E-Commerce Solutions</h3></p>
          </div>
           <div className={classes.service}>
            <p><span className={classes.dot_iv}></span><h3 className={classes.service_heading}>SEO</h3></p>
          </div>
      </div>

      <div className={classes.cta_section}>
        <h3 className={classes.cta_heading}>Let me help you build an online presence</h3>
        <button className={classes.cta_btn}>Talk to me</button>
      </div>
      </section>
      <Footer />
      </>
  )
}
