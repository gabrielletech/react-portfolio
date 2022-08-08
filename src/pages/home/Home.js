import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import HomeImg from '../../images/home-mockup.png'
import Ecom from '../../images/e-commerce.svg'
import Seo from '../../images/seo.svg'
import Web from '../../images/web-development.svg'
import Custom from '../../images/customdev.svg'
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
              <a href="https://calendly.com/gabriellendoro" target="_blank" rel="noreferrer"className={classes.link}>
                   Book a Consultation
              </a>
             </button>
            </div>
            <div className={classes.hero_side}>
              <img src={HomeImg} alt="Responsive Web Design" className={classes.hero_img} />
              <div className={classes.side_text}>
                I use my expertise in Web Development to build responsive, functional websites and interfaces that represent your brand, and that your users will LOVE!
              </div>
            </div>
        </div>

        <div className={classes.services}>
          <div className={classes.service}>
            <p> 
              <img src={Web} className={classes.icon} alt="web-icon" />
              <h3 className={classes.service_heading}>
                <Link to='/services' className={classes.service_heading_link}>Web Development</Link></h3>
            </p>
          </div>
           <div className={classes.service}>
            <p>
              <img src={Custom} className={classes.icon} alt="web-icon" />
              <h3 className={classes.service_heading}>
                <Link to='/services' className={classes.service_heading_link}>Custom Web Development</Link>
              </h3>
            </p>
          </div>
           <div className={classes.service}>
            <p>
              <img src={Ecom} className={classes.icon} alt="web-icon" />
              <h3 className={classes.service_heading}>
                <Link to='/services' className={classes.service_heading_link}>E-Commerce Solutions</Link>
              </h3>
            </p>
          </div>
           <div className={classes.service}>
            <p>
            <img src={Seo} className={classes.icon} alt="web=icon" />
              <h3 className={classes.service_heading}>
                <Link to='/services' className={classes.service_heading_link}>SEO</Link>
              </h3>
            </p>
          </div>
      </div>

      <div className={classes.cta_section}>
        <h3 className={classes.cta_heading}>Let me help you build an online presence</h3>
        <button className={classes.cta_btn}>
          <a href="https://calendly.com/gabriellen/web-design-consultation">
            Book A Consultation
          </a>
        </button>
      </div>
      </section>
      <Footer />
      </>
  )
}
