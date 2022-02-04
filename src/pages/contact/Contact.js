import React, { useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Alert from 'react-bootstrap/Alert'
import emailjs from 'emailjs-com'

import classes from './Contact.module.scss'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [emailSent, setEmailSent] = useState(false)

  const submit = () => {
    if (name && email && message) {
      const serviceId = 'service_id';
            const templateId = 'template_id';
            const userId = 'user_id';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

      setName('')
      setEmail('')
      setMessage('')
      setEmailSent(true)
    }
    else {
      <Alert variant="secondary">'Please fill in all fields.'</Alert>
    }
  }

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
            <input 
                type="text" 
                placeholder="Your Name" 
                className={classes.input_name} 
                value={name}
                onChange={e => setName(e.target.value)}
                
            />
            <input 
                type="email" 
                placeholder="Your email address" 
                className={classes.input_email}
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <textarea 
                placeholder="Your message" 
                className={classes.input_message}
                value={message}
                onChange={e => setMessage(e.target.value)}></textarea>
            <button className={classes.submit_btn} onClick={submit}>Send Message</button>
            <br />
            <span className={emailSent ? 'Show' : null}>Thank you for your message, I will get back to you soon :) </span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
