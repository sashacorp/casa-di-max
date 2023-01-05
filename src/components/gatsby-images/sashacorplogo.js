import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'


export function SCLogo() {

    return  <StaticImage 
       src="../../images/sashacorplogo.png" 
       alt="Logo representing a dog"
       quality="100"
       style={{
        imageRendering: "-webkit-optimize-contrast",
        width: "110px"
       }}
    />
}