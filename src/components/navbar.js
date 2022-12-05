import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import '../styles/styles.scss'
import Logo from '../images/logocasadimax.svg'




function NavBar () {
  
  const [toggleMenu, setToggleMenu] = useState(true)
  const [windowWidth, setWindowWidth] = useState(0)

  const toggleNav = () => {
    return setToggleMenu(!toggleMenu)
  }
  
  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWidth)
  }, [])
  return (
    <div className="navigation">
      <div className="Logo">
        <Link to="/" className="img-link">
        <img src={Logo} alt="logo"/>
        </Link>
      </div>
          {(
            (windowWidth > 600 || toggleMenu) && (
              <ul>   
              <li key="home"><Link to="/">Home</Link></li>
              <li key="about"><Link to="/aboutus">About</Link></li>
              <li key="blog"><Link to="/blog">Blog</Link></li>
              <li key="cats"><Link to="/cats">Cats</Link></li>
              <li key="dogs"><Link to="/dogs">Dogs</Link></li>
              <li key="donate"><Link to="/donate">Donate</Link></li>
              <li key="contact"><Link to="/contact">Contacts</Link></li>
              </ul>
            )
          )}
          <button className="toggle" onClick={toggleNav} alt="toggle button"> Button </button>
    </div>
  )
}

export default NavBar
