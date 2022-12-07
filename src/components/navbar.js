import React, {useState } from "react"
import { Link } from "gatsby"
import '../styles/styles.scss'
import { Logo } from './gatsby-images/logo'
import ClientTypes from "./clienttypes"
import MenuIcon from '@mui/icons-material/Menu';

console.log(Logo)


function NavBar (props) {
  
  const [toggleMenu, setToggleMenu] = useState(true)

  const toggleNav = () => {
    return setToggleMenu(!toggleMenu)
  }
    
  return (
    <div className="navigation">
      <div className="relevant-nav">
      <Link to="/" className="link-logo">
       <Logo />
       </Link>
       <button className="toggle" onClick={toggleNav} alt="toggle button"> 
           <MenuIcon fontSize="large"/>
      </button>
      </div>
       
        
          {(
            (props.width > ClientTypes.Tablet.w || toggleMenu) && (
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
          
    </div>
  )
}

export default NavBar
