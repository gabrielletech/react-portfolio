import React from 'react'
import Container from 'react-bootstrap/Container'
import LinkedIn from '../../images/linkedin.svg'
import Github from '../../images/github.svg'
//import Instagram from '../../images/instagram.svg'
import Twitter from '../../images/twitter.svg'

import classes from './Footer.module.scss'

export default function Footer() {
  return (
      <>
        <footer className={classes.footer}>
            <Container className={classes.footer_container}>
                <a href='https://www.linkedin.com/in/gabriellendoro'>
                    <img src={LinkedIn} className={classes.footer_icon} alt="LinkedIn Icon" />
                </a>
                <a href='https://github.com/gabrielletech'>
                    <img src={Github} className={classes.footer_icon} alt="Github Icon" />
                </a>
                
                <a href='https://twitter.com/tinytechgirl'>
                    <img src={Twitter} className={classes.footer_icon} alt="Twitter Icon" />
                </a>
                
            </Container>
        </footer>
      </>
  )
}
