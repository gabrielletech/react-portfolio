import React from 'react'
import Container from 'react-bootstrap/Container'
import LinkedIn from '../../images/linkedin.svg'
import Github from '../../images/github.svg'
import Instagram from '../../images/instagram.svg'
import Twitter from '../../images/twitter.svg'
import StackOverflow from '../../images/stackoverflow.svg'

import classes from './Footer.module.scss'

export default function Footer() {
  return (
      <>
        <footer className={classes.footer}>
            <Container className={classes.footer_container}>
                <a href='/'>
                    <img src={LinkedIn} className={classes.footer_icon} alt="LinkedIn Icon" />
                </a>
                <a href='/'>
                    <img src={Github} className={classes.footer_icon} alt="Github Icon" />
                </a>
                <a href='/'>
                    <img src={Instagram} className={classes.footer_icon} alt="Instagram Icon" />
                </a>
                <a href='/'>
                    <img src={Twitter} className={classes.footer_icon} alt="Twitter Icon" />
                </a>
                <a href='/'>
                    <img src={StackOverflow} className={classes.footer_icon} alt="StackOverflow Icon" />
                </a>
            </Container>
        </footer>
      </>
  )
}
