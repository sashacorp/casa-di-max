import React from 'react'
import { MDLogo} from './gatsby-images/logomidsize'
import { SCLogo } from './gatsby-images/sashacorplogo'
import {SHLogo } from './gatsby-images/shlogo'


const Logos = () => {
    return (
        <div className="logos" >
            <table>
                <tbody>
                <tr key="caption-social">
                        <td>
                           <h2>Contatti</h2>
                        </td>      
                    </tr>
                    <tr>
                        <td>
                            <a href="https://www.facebook.com/casadimaxarzana" alt="facebook link">Facebook</a>
                        </td>
                        <td>
                            <a href="https://www.instagram.com/onlusconfidointe/" alt="instagram link">Instagram</a>
                        </td>
                        <td>
                            <a href="mailto:barbarapistis@gmail.com" alt="email">Mail</a>
                        </td>
                    </tr>
                    <tr key="caption-amici">
                        <td>
                          <h2>Tra amici</h2>
                        </td>
                    </tr>
                    <tr key="list-logos">
                         <td key="logo-sh">
                             <a href="https://www.sardinienhunde.org" alt="sardinienhunde link and logo"><SHLogo/></a>
                         </td>
                         <td key="logo-md">
                             <a href="https://www.casadimax.org" alt="casa di max link and logo"><MDLogo/></a>
                         </td>
                         <td key="logo-sc">
                             <a href="https://www.sashacorp.dev" alt="sashacorp link and logo"><SCLogo/></a>
                         </td>
                    </tr>
                    
                </tbody>
            </table>
              
            
            
        </div>
    )
}

export default Logos