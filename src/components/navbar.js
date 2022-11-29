import * as React from "react"
import { Link } from "gatsby"


const NavBar = () => {
  return (
    <div>
         <ul>
                <li><Link to="/">HomePage</Link></li>
                <li><Link to="/aboutus">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/cats">Cats</Link></li>
                <li><Link to="/dogs">Dogs</Link></li>
                <li><Link to="/donate">Donate</Link></li>
                <li><Link to="/contact">Contact</Link></li>
          </ul>
    </div>
  )
}

export default NavBar
