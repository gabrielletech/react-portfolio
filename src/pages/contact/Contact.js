import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

import classes from './Contact.module.scss'

export default function Contact() {
  return (
    <>
      <section>
        <Navbar />
        <div className={classes.container}>
          <div className={classes.contact_text}>
            <p>
              <img src="https://img.icons8.com/material-sharp/24/000000/marker.png" alt="Location" className={classes.location}/>
              <span>Centurion, Gauteng, South Africa</span>
            </p>
            <p>
              ( I’m quite flexible & willing to connect with anyone in Johannesburg )
            </p>
            <p>
              For general questions, inquiries, or technical issues with this website, drop me an email at
              <a href='/'> gabriellen.tech</a>
            </p>
            <p>Or quickly write me a message using the form. Don’t hesitate to reach out to me, besides, my consultations are completely free!</p>
          </div>

          <div className={classes.contact_form} id="contact-form">
            <input type="text" placeholder="Your Name" className={classes.input_name}/>
            <input type="email" placeholder="Your email address" className={classes.input_email}/>
            <textarea placeholder="Your message" className={classes.input_message}></textarea>
            <button className={classes.submit_btn}>Send Message</button>
            <span className={classes.thank_you_msg}>Thank you for your message, we will be in touch in no time!</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
