import * as React from "react"
import { Link } from "gatsby"
import '../styles/styles.scss'
import Logo from '../images/logocasadimax.svg'


const NavBar = () => {
  return (
    <div className="navigation">
      <div className="Logo">
        <Link to="/">
        <img src={Logo} alt="logo"/>
        </Link>
      </div>
         <ul>   
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutus">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/cats">Cats</Link></li>
                <li><Link to="/dogs">Dogs</Link></li>
                <li><Link to="/donate">Donate</Link></li>
                <li><Link to="/contact">Contacts</Link></li>
          </ul>
    </div>
  )
}

export default NavBar
