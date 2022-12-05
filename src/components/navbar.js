import React, { componentDidMount, useEffect, useState } from "react"
import { Link } from "gatsby"
import '../styles/styles.scss'
import Logo from '../images/logocasadimax.svg'




function NavBar () {
  
  function componentDidMount() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  }

  return (
    <div className="navigation">
      <div className="Logo">
        <Link to="/" className="img-link">
        <img src={Logo} alt="logo"/>
        </Link>
      </div>
          <ul>   
              <li key="home"><Link to="/">Home</Link></li>
              <li key="about"><Link to="/aboutus">About</Link></li>
              <li key="blog"><Link to="/blog">Blog</Link></li>
              <li key="cats"><Link to="/cats">Cats</Link></li>
              <li key="dogs"><Link to="/dogs">Dogs</Link></li>
              <li key="donate"><Link to="/donate">Donate</Link></li>
              <li key="contact"><Link to="/contact">Contacts</Link></li>
          </ul>
    </div>
  )
}

export default NavBar
