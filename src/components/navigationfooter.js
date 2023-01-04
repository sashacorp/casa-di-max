import React from "react"
import { Link } from "gatsby"

const NavigationFooter = () => {

    return (
      <div>
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

export default NavigationFooter