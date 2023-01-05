import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'


export function SHLogo() {

    return  <StaticImage 
       src="../../images/sardinienhunde.jpg" 
       alt="Logo representing a dog"
       quality="100"
       style={{
        imageRendering: "-webkit-optimize-contrast",
        width: "150px"
       }}
    />
}