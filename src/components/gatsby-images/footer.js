import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export function FooterImage() {
  return (
    <div style={{ display: "grid", width: "100vw", bottom: 0}}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        loading= "eager"
        quality= "100"
        fit= "contain"
        placeholder = "none"
        style={{
          zIndex: -1,
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          quality: 100,
          width: "100%",
        }}
         layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        
        // This is a presentational image, so the alt should be an empty string
        alt="Animal Shelter, Arzana, Sardinia by Barbara Pistis"
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        src="../../images/backgroundfooter.png"
        formats={["auto", "webp", "avif", "jpg"]}
      />
      <div
        id="rights"
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center end",
          display:"flex",
          flexDirection: "row",
          paddingLeft:"50%",
          fontSize: 15,
          zIndex: 1,
          color: "darkgreen"
        }}
      >
        {/* Any content here will be centered in the component */}
        <ul>
              <li key="home"><Link to="/">Home</Link></li>
              <li key="about"><Link to="/aboutus">About</Link></li>
              <li key="blog"><Link to="/blog">Blog</Link></li>
              <li key="cats"><Link to="/cats">Cats</Link></li>
              <li key="dogs"><Link to="/dogs">Dogs</Link></li>
              <li key="donate"><Link to="/donate">Donate</Link></li>
              <li key="contact"><Link to="/contact">Contacts</Link></li>
        </ul>
        <ul>
          <li>
            <a href="https://www.facebook.com/casadimaxarzana/">Facebook</a>
          </li>
          <li>
          <a href="mailto:barbarapistis@gmail.com">Email</a>
          </li>
           <li>
           <a href="tel:+393283934768">Chiama</a>
           </li>
        </ul>
      </div>
      
        
      
    </div>
  )
}