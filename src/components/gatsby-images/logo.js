import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'


export function Logo() {

    return  <StaticImage 
       src="../../images/logomax.png" 
       alt="Logo representing a dog"
       width={50}
    />
}