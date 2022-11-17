import * as React from "react"
import { Link } from "gatsby"

const links = [ 
    {
    text: "Home",
    url: "localhost:8000/"
}
]

const NavBar = () => {
  return (
    <div>
         <ul>
            <li key={links.url}>
                <span>
                    <Link to="/">HomePage</Link>
                    <Link to="/aboutus">About</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/donate">Donate</Link>
                    <Link to="/contact">Contact</Link>
                </span>
            </li>
         </ul>
    </div>
  )
}

export default NavBar
