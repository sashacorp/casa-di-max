import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import cloud from '../../images/cloud.png'
import earth from '../../images/earth.png'
import littleDog from '../../images/littledog.png'
// import Max from '../../images/max.png'
// import Onlus from '../../images/onlus.png'
// import Arzana from '../../images/arzana.png'
// import SardinienHunde from '../../images/sardinienhunde.png'
import { Typography } from '@material-ui/core'
// import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useMediaQuery } from '@mui/material'

const useStyles = makeStyles(theme => ({
   responsiveText: {
    [theme.breakpoints.down('md')]: {
      fontSize: '3rem'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem'
    },
   },
   responsiveImage: {
    width: '20%',
    [theme.breakpoints.down('md')]: {
      width: '30%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '50%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '70%'
    },
   },
   responsiveEarth: {
    width: '60%',
    [theme.breakpoints.down('md')]: {
      width: '70%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      height: '50%'
      
    },
   }
}))
// Little helpers ...
const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`




export default function Animation() {
  const parallax = useRef((null))
  const classes= useStyles()
  
  
  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax ref={parallax} pages={6}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#253237' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#253237' }} />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={6}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={cloud} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={cloud} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={cloud} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={cloud} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={cloud} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={5.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img src={earth} className={classes.responsiveEarth} />
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: `url(${Max})`,
          }}
        /> */}

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(0)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          
              <Typography variant="h1" style={{color: 'rgba(255, 213, 111, 0.8)'}} classes={{h1: classes.responsiveText}}> 
                Benvenuti al rifugio Casa di Max!
              </Typography>
            
          
        </ParallaxLayer> 

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}>
          <Typography variant="h1" style={{color: 'rgba(255, 213, 111, 0.8)', width: '70%'}} classes={{h1: classes.responsiveText}}> 
          Max è stato un cagnolino molto speciale, tanto da averci ispirato a fondare un rifugio in sua memoria!
              </Typography>
        </ParallaxLayer> 

        <ParallaxLayer
          offset={2}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}>
          <Typography variant="h1" style={{color: 'rgba(255, 213, 111, 0.8)', width: '70%'}}  classes={{h1: classes.responsiveText}}> 
          Barbara Pistis ha istituito la Onlus ConFidointe a tutela dei pet meno fortunati d'Europa.
              </Typography>
        </ParallaxLayer> 

        <ParallaxLayer
          offset={3}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}>
          <Typography variant="h1" style={{color: 'rgba(255, 213, 111, 0.8)', width: '70%'}}  classes={{h1: classes.responsiveText}}> 
          Il rifugio Casa di Max è una struttura attiva nelle campagne ogliastrine, in Sardegna.
              </Typography>
        </ParallaxLayer> 

        <ParallaxLayer
          offset={4}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}>
          <Typography variant="h1" style={{color: 'rgba(255, 213, 111, 0.8)', width: '70%'}}  classes={{h1: classes.responsiveText}}> 
          Tra i nostri amici contiamo la Onlus Sardinien Hunde, che da anni si impegna per la cura e la protezione dei cagnolini della Sardegna.
              </Typography>
        </ParallaxLayer> 

         <ParallaxLayer
          offset={5}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(3)}>
          <img src={littleDog} className={classes.responsiveImage} />
        </ParallaxLayer> 
      </Parallax>
    </div>
  )
}
