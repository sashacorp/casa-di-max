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
     <div>
      
     </div>
      
        
      
    </div>
  )
}