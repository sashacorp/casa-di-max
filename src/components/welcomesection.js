import * as React from 'react'
import { Hero} from './gatsby-images/welcomedesign'
import '../styles/styles.scss'

import ClientTypes from "./clienttypes"

function WelcomeSection (props)  {
   
   return (
      <div className="WelcomeSection">
       {
         props.width > ClientTypes.Tablet.w &&
         <div className="Media">
           <Hero />
         </div>
       }
      </div>
   )
}

export default WelcomeSection