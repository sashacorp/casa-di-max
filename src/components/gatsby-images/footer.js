import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import LogoContent from "../logocontent"

export function FooterImage() {
  return (
    <div style={{ display: "grid"}}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        loading= "eager"
        quality= "100"
        
        style={{
          zIndex: -1,
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          
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
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: " center start",
          width: "30%",
          display: "grid",
        }}
      >
        {/* Any content here will be centered in the component */}
        <LogoContent />
      </div>
        
      
    </div>
  )
}