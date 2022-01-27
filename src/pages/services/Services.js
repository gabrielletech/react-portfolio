import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

import classes from './Services.module.scss'

export default function Services() {
  return (
    <>
      <section>
        <Navbar />
        <div className={classes.services}>
            <h3 className={classes.services_heading}>Here's What I Can Do For You:</h3>
        </div>

        <div className={classes.services_container}>
          <ul>
            <li className={classes.box}>
                <div className={classes.dot}>
                  <span className={classes.dot_i}></span>
                </div>
                <p className={classes.services_title}>Web Development</p>
                <p className={classes.services_desc}>Affordable website solutions that will showcase your brand in the most engaging way, 
                and market your service offering to a larger audience. Custom coded solutions available as well, bespoke and unique to you.</p>
            </li>
            <li className={classes.box}>
                <div className={classes.dot}>
                    <span className={classes.dot_iii}></span>
                </div>
                <p className={classes.services_title}>E-Commerce Solutions</p>
                <p className={classes.services_desc}>An e-commerce solution designed according to your brand and
                 specifications, providing your users with a straightforward and secure shopping experience, <em>hello more sales :)</em></p>
            </li>
            <li className={classes.box}>
                <div className={classes.dot}>
                    <span className={classes.dot_iii}></span>
                </div>
                <p className={classes.services_title}>SEO</p>
                <p className={classes.services_desc}>Optimize your site to be highly ranked on Google, giving your brand the credibility it 
                deserves and making sure you remain relevant and visible on search results pages like Google or Bing.</p>
            </li>
          </ul>
        </div> 

        <div className={classes.services_cta}>
        <h3 className={classes.services_cta_heading}>
          Let’s grab a virtual coffee and discuss your next digital product
        </h3>
        <button className={classes.services_cta_btn}>Book A Consultation</button>
        <p className={classes.services_free}>It's Free!</p>
      </div>
      </section>

      <Footer />

    </>);
}
