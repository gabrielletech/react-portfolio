import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import Footer from '../../components/footer/Footer'

import classes from './Home.module.scss'

export default function Home() {
  return (
      <>
      <section>
        <div className={classes.hero}>
           <Navbar />
            <div className={classes.hero_text}>
              <h1 className={classes.hero_title}>Gabrielle Ndoro</h1>
              <h4 className={classes.sub_title}>Freelance Web Designer & Front-End Developer</h4>
            </div>
        </div>
      </section>
      
      <div className={classes.services}>
        <Dropdown.Menu >
        <Dropdown.Header>Dropdown header</Dropdown.Header>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      </Dropdown.Menu>
      </div>

      <Footer />
      </>
  )
}
