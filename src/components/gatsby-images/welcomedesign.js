import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function Hero() {
  
  return (
    <div style={{ display: "grid", width:"100vw"}}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        loading= "eager"
        quality= "100"
        fit= "contain"
        placeholder = "none"
        style={{
          zIndex: 1,
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          quality: 100,
        }}
         layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        //aspectRatio={16/9}
        // This is a presentational image, so the alt should be an empty string
        alt="Animal Shelter, Arzana, Sardinia by Barbara Pistis"
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        src="../../images/casadimaxLanding.jpg"
        formats={["auto", "webp", "avif", "jpg"]}
      />
      
    
    </div>
  )
}