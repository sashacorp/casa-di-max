import React from 'react'
import { Link } from 'gatsby'

const MotivationalSection = () => {
    return (
        <div className="motivational-section">
           <div className="content">
           <h1>Unisciti agli amici della Casa Di Max</h1>
           <button>
             <Link to="/donate">
                Supporta Ora
             </Link>
           </button>
           </div>   
        </div>
    )
}

export default MotivationalSection