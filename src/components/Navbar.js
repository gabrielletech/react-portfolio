import React, { useState, useEffect } from 'react'
import Logo  from '../images/brand-logo.png'
import { Link } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'

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
    <header className='header'>
        <div className='header-content'>
            <Link to="/" className='header-logo'>
                <img src={Logo} alt='logo' className='logo' />
            </Link> 
            <nav className='header-nav'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>  
            <div className='header-toggle'>
                <BiMenuAltRight className='menu-toggler'/>
            </div>
        </div>
    </header>
   </>
  )
}

export default Navbar;
