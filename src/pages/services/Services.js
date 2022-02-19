import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Hero from '../../images/services-hero.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Ecom from '../../images/e-commerce.svg'
import Seo from '../../images/seo.svg'
import Web from '../../images/web-development.svg'

import classes from './Services.module.scss'

export default function Services() {
  AOS.init()

  AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

  return (
    <>
      <section>
        <Navbar />
        <div className={classes.services_hero}>
          <div className={classes.hero_left}>
            <img src={Hero} alt="Services Hero Img" className={classes.services_img} />
          </div>
          <div className={classes.hero_right}>
            <p>Nowadays it sure feels like the internet is on steroids with everything 
            going digital and business processes evolving. That’s your sign to go digital, 
            no matter what stage your business is in, you deserve an online presence! Once 
            your business is online, the possibilities are endless...</p>
          </div>
        </div>

        <div className={classes.services_container}>
          <div className={classes.services}>
              <h3 className={classes.services_heading}>Here's What I Can Do For You:</h3>
          </div>
          <ul>
          <div data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
          >
            <li className={classes.box}>
                <div className={classes.icon}>
                  <img src={Web} alt="Web Development Icon" className={classes.web} />
                </div>
                <p className={classes.services_title}>Web Development</p>
                <p className={classes.services_desc}>Affordable website solutions that will showcase your brand in the most engaging way, 
                and market your service offering to a larger audience. Custom coded solutions available as well, bespoke and unique to you.</p>
            </li>
          </div>
          <div data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out">
              <li className={classes.box}>
                <div className={classes.icon}>
                    <img src={Ecom} alt="E-Commerce Icon" className={classes.ecom} />
                </div>
                <p className={classes.services_title}>E-Commerce Solutions</p>
                <p className={classes.services_desc}>An e-commerce solution designed according to your brand and
                 specifications, providing your users with a straightforward and secure shopping experience, <em>hello more sales :)</em></p>
            </li>
          </div>
          <div data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-easing="ease-in-out">
              <li className={classes.box}>
                <div className={classes.icon}>
                    <img src={Seo} alt="SEO Icon" className={classes.seo} />
                </div>
                <p className={classes.services_title}>SEO</p>
                <p className={classes.services_desc}>Optimize your site to be highly ranked on Google, giving your brand the credibility it 
                deserves and making sure you remain relevant and visible on search results pages like Google or Bing.</p>
            </li>
          </div>
          </ul>
        </div> 

        <div className={classes.services_cta}>
          <h3 className={classes.services_cta_heading}>
            Let’s grab a virtual coffee and discuss your next digital product
          </h3>
          <button className={classes.services_cta_btn}>
            <a href="https://calendly.com/gabriellen/web-design-consultation">
              Book A Consultation
            </a>
          </button>
          <p className={classes.services_free}>It's Free!</p>
        </div>
      </section>

      <Footer />

    </>);
}
