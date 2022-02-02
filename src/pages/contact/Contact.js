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

              <a href='#'>gabriellen.tech</a>
            </p>
            <p>Or quickly write me a message using the form. Don’t be shy to reach out to me, besides, my consultations are completely free!</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
