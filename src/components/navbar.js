import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import '../styles/styles.scss'
import Logo from '../images/logocasadimax.svg'


function NavBar () {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth ] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
      window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])
  return (
    <div className="navigation">
      <div className="Logo">
        <Link to="/" onClick={toggleNav} className="img-link">
        <img src={Logo} alt="logo"/>
        </Link>
      </div>
      {
        (toggleMenu || screenWidth > 700 ) && (
          <ul>   
              <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutus">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/cats">Cats</Link></li>
              <li><Link to="/dogs">Dogs</Link></li>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/contact">Contacts</Link></li>
          </ul>
        )
      }
    </div>
  )
}

export default NavBar
