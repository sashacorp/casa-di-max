import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'


export function MDLogo() {

    return  <StaticImage 
       src="../../images/casadimaxlogowhite.png" 
       alt="Logo representing a dog"
       quality="100"
       style={{
        imageRendering: "-webkit-optimize-contrast",
        width: "120px"
        
       }}
    />
}