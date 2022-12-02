import * as React from 'react'
import Landing from '../images/casadimaxLanding.svg'
import '../styles/styles.scss'

const WelcomeSection = () => {
   return (
      <div className="WelcomeSection">
         <div className="Title">
         <h1>Casa di Max</h1>
         </div>
         <div className="Media">
         <img src={Landing} alt="landing"/>
         </div>
      </div>
   )
}

export default WelcomeSection