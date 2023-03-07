import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'


import Max from '../../images/max2.png'
import Onlus from '../../images/onlus.png'
import Arzana from '../../images/arzana.png'
import SardinienHunde from '../../images/sardinienhunde.png'

const useStyles = makeStyles(theme => ({
    mainContainer: {
      padding: '1rem',
      backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.down('md')]:
      {
        padding: '1rem 0rem 0rem 0rem'
      },
    },
    welcomeContainer:{
       marginTop: '3rem',
       display: 'flex',
       flexDirection: "center",
       alignItems: 'center'
    },
    welcomeText:{
        color: theme.palette.common.offWhite,
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.5rem'
         },
    },
    span:{
      color: theme.palette.common.yellow
    },
    contentContainer: {
       
       padding: '5rem 0.5rem', 
       [theme.breakpoints.down('md')]: {
        padding: '1rem 0'
       }
       
    },
    mediaStyle: {
       shadowBox: theme.shadows[3],
       borderRadius: 100,
       
       
    },
    mediaItemStyle: {
        width: '40rem',
        maxWidth: '50rem',
        
        [theme.breakpoints.down('sm')]: {
            maxWidth: '30rem',
            
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '20rem',
            
        }
    },
    descriptionContainer: {
        width: '50rem',
        border: `10px solid ${theme.palette.common.lightGreen}`,
        borderBottom: `10px solid ${theme.palette.common.yellow}`,
        padding: '2rem 2rem 2rem 2rem',
        margin: '3rem',
        maxWidth: '35rem',
        backgroundColor: '#fff',
        boxShadow: theme.shadows[5],
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
       
        [theme.breakpoints.down('sm')]: {
            maxWidth: '20rem',   
            padding: '1rem' 
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '15rem',
            
            
        },
        

    }

}))
const isBrowser = typeof window !== "undefined"
export default function AboutUsSection(){
    const classes = useStyles()
    const matchesMD = useMediaQuery(theme => theme.breakpoints.down('md'))
    const matchesXS = useMediaQuery(theme => theme.breakpoints.down('xs'))

    //const maxSection = "Il nostro rifugio deve il suo nome a Max, un cagnolino che qualche anno fa era stato affidato alla nostra presidentessa Barbara Pistis affinché' se ne prendesse cura, poiché' i suoi vecchi proprietari non avevano più' la possibilità' di dedicargli le dovute attenzioni. Purtroppo pero', un giorno Max è scomparso e da allora non è più' stato ritrovato."
    const maxSection = "Max è stato un cagnolino molto speciale, tanto da averci ispirato a fondare un rifugio in sua memoria!"
    const onlusSection = "Barbara Pistis ha fondato la Onlus ConFidointe a tutela dei pet meno fortunati d'Europa."
    const casaDiMaxSection ="Il rifugio Casa di Max è una struttura attiva nelle campagne ogliastrine, in Sardegna."
    const sardinienHunde = "Tra i nostri amici contiamo la Onlus Sardinien Hunde, che da anni si impegna per la cura e la protezione dei cagnolini della Sardegna."
            
    const sections = [
        {
            title: <span>Max</span>,
            media: Max,
            content: maxSection,
        },
        { 
            title: <span>Onlus</span>,
            media: Onlus,
            content: onlusSection
        },
        {
            title: <span>Casa di Max</span>,
            media: Arzana,
            content: casaDiMaxSection
        },
        {
            title: <span>Sardinien {isBrowser && matchesXS ? <br /> : null} Hunde</span>,
            media: SardinienHunde,
            content: sardinienHunde
        }
    ]

    return(
        <Grid container direction="column" classes={{root: classes.mainContainer}} alignItems="center">
          <Grid item classes={{root: classes.welcomeContainer}}>
            <Typography variant="h1" classes={{root: classes.welcomeText}}>
               Benvenuti al rifugio <span className={classes.span}>  {isBrowser && matchesXS ? <br /> : null} Casa di Max!</span>
            </Typography>
          </Grid>
          <Grid item>
            {sections.map(({title, media, content}) => (
                <Grid item container 
                direction={matchesMD ? "column" : 'row'} 
                justifyContent={matchesMD ? "space-between" : "space-around"} 
                alignItems="center" key={title}
                classes={{root: classes.contentContainer}}
                >
                {/** Description */}
                <Grid item classes={{root: classes.descriptionContainer}}>
                    <Grid item container direction="column" justifyContent="center">
                        <Grid item>
                            <Typography variant={isBrowser && matchesXS ? "h4": "h1"} >
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={isBrowser && matchesXS? "h5" : "h3"} >
                                {content}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button/>
                        </Grid>
                    </Grid>
                </Grid>
                
                {/** Media */}
                <Grid item classes={{root: classes.mediaStyle}}>
                    <img src={media} alt="Max" className={classes.mediaItemStyle}/>
                </Grid>
            </Grid>
              ))}
              
          </Grid>
            
        </Grid>
    )
}