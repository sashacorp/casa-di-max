import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'


export function Logo() {

    return  <StaticImage 
       src="../../images/logocasadimaxmin.png" 
       alt="Logo representing a dog"
       quality="100"
       style={{
        imageRendering: "-webkit-optimize-contrast",
        
       }}
    />
}