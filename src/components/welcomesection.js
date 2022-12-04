import * as React from 'react'
import Landing from '../images/casadimaxLanding.jpg'
import '../styles/styles.scss'

const WelcomeSection = () => {
   return (
      <div className="WelcomeSection">
         <div className="Media">
         <img src={Landing} alt="landing"/>
         </div>
      </div>
   )
}

export default WelcomeSection