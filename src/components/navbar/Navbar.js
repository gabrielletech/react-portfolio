import React, { useState, useEffect } from 'react'
import Logo  from '../../images/brand-logo.png'
import { Link } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'

import classes from './Navbar.module.scss'

const Navbar = () => {
   
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined
  })

  useEffect(() => {
      const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
      };
      window.addEventListener("resize", handleResize)

      return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
      if (windowSize.width > 768 && menuOpen) {
          setMenuOpen(false);
      }
  }, [windowSize.width, menuOpen])

  const menuTogglerHandler = () => {
      setMenuOpen((p) => !p);
  }

  return (
   <>
    <header className={classes.header}>
        <div className={classes.header_content}>
            <div className={classes.header_logo}>
                <Link to="/">
                    <img src={Logo} alt='logo' className={classes.logo} />
                </Link> 
            </div>
            <nav className={`${classes.header_nav} ${menuOpen ? classes.isMenu : ""}`}>
                <ul>
                    <li>
                        <Link to="/" className={classes.link_item}>Home</Link>
                    </li>
                    <li>
                        <Link to="/services" className={classes.link_item}>Services</Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className={classes.link_item}>Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={classes.link_item}>Contact</Link>
                    </li>
                </ul>
            </nav>  
            <div className={classes.header_toggle}>
               {!menuOpen ? <BiMenuAltRight onClick={menuTogglerHandler} className={classes.menu_toggler}/> : <MdClose className={classes.close_menu} onClick={menuTogglerHandler}/>} 
            </div>
        </div>
    </header>
   </>
  )
}

export default Navbar;
