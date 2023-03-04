import * as React from 'react'
import { Hero} from './gatsby-images/welcomedesign'


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