import React, { useState, useEffect} from "react"
import { Link } from "gatsby"
import '../styles/styles.scss'
import Logo from '../images/logocasadimax.svg'



function NavBar () {
  
  const [toggleMenu, setToggleMenu] = useState(false)
  // I tried to solve the global variable problem without passing it into useState() but I'm pretty sure it doesn't make any sense.
  const [screenWidth, setScreenWidth ] = useState()

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
              <li key="home"><Link to="/">Home</Link></li>
              <li key="about"><Link to="/aboutus">About</Link></li>
              <li key="blog"><Link to="/blog">Blog</Link></li>
              <li key="cats"><Link to="/cats">Cats</Link></li>
              <li key="dogs"><Link to="/dogs">Dogs</Link></li>
              <li key="donate"><Link to="/donate">Donate</Link></li>
              <li key="contact"><Link to="/contact">Contacts</Link></li>
          </ul>
        )
      }
    </div>
  )
}

export default NavBar
