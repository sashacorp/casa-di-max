import * as React from 'react'
import { Hero} from './gatsby-images/welcomedesign'
import '../styles/styles.scss'



function WelcomeSection (props)  {
   
   return (
      <div className="WelcomeSection">
       
         <div className="Media">
           <Hero />
         </div>
       
      </div>
   )
}

export default WelcomeSection