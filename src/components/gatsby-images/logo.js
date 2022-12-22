import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'


export function Logo() {

    return  <StaticImage 
       src="../../images/logomax.png" 
       alt="Logo representing a dog"
       quality="100"
       width={50}
       style={{
        imageRendering: "-webkit-optimize-contrast",
       }}
    />
}