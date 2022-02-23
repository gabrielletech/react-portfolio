import React, { useRef, setState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
//import Alert from 'react-bootstrap/Alert'
import emailjs from '@emailjs/browser'
import{ init } from '@emailjs/browser';
import configData from '../../config.json'

import classes from './Contact.module.scss'

const service_id = configData.SERVICE_ID;
const template_id = configData.TEMPLATE_ID;
const user_id = configData.USER_ID;

export default function Contact() {
  const form = useRef();

  init("user_nkh12fcJa28oNOnWHLj5J");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service_id, template_id, form.current, user_id)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text)
      });

      alert("Email Sent!")
  };

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
              For general questions, inquiries, or technical issues with this website, drop me an email here
              <a href='mailto:gabriellendoro.fn@gmail.com' className={classes.email_address}> gabriellendoro.fn@gmail.com </a>
            </p>
            <p>Or quickly write me a message using the form. Don’t hesitate to reach out to me, besides, my consultations are completely free!</p>
          </div>

          <div className={classes.contact_form} id="contact-form">
            <form ref={form} onSubmit={sendEmail}>
                  <input 
                  type="text" 
                  placeholder="Your Name" 
                  className={classes.input_name} 
                  name="name"
              />
              <input 
                  type="email" 
                  placeholder="Your email address" 
                  className={classes.input_email}
                  name="email"
              />
              <textarea 
                  placeholder="Your message" 
                  className={classes.input_message}
                  name="message"
                  ></textarea>
              <input type="submit" value="Send Message" onClick={sendEmail} className={classes.submit_btn} />
              <br />
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
