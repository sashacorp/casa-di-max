import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'


export function Logo() {

    return  <StaticImage 
       src="../../images/logocasadimax.svg" 
       alt="Logo representing a dog"
       width={100}
    />
}