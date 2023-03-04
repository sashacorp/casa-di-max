import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'


import Max from '../../images/max.png'
import Onlus from '../../images/onlus.png'
import Arzana from '../../images/arzana.png'
import SardinienHunde from '../../images/sardinienhunde.png'

const useStyles = makeStyles(theme => ({
    contentContainer: {
       padding: '5rem 0.5rem',
       
    },
    mediaStyle: {
        
        maxWidth: '50rem',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '30rem',
            
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '20rem',
            
        }
    },
    descriptionContainer: {
        
        padding: '0rem 0rem 2rem 2rem',
        maxWidth: '35rem',
        
        [theme.breakpoints.down('sm')]: {
            maxWidth: '30rem'
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '20rem'
        }
    }

}))

export default function AboutUsSection(){
    const classes = useStyles()
    const matchesMD = useMediaQuery(theme => theme.breakpoints.down('md'))

    const maxSection = "Il nostro rifugio deve il suo nome a Max, un cagnolino che qualche anno fa era stato affidato alla nostra presidentessa Barbara Pistis affinché' se ne prendesse cura, poiché' i suoi vecchi proprietari non avevano più' la possibilità' di dedicargli le dovute attenzioni. Purtroppo pero', un giorno Max è scomparso e da allora non è più' stato ritrovato."
    const onlusSection = "Con l'obiettivo di avere un impatto positivo sulla vita di tanti cani e gatti che come Max hanno un disperato bisogno di una nuova casa, nel 20?? Barbara ha fondato la ONLUS ConFidointe, che si occupa di riscattare cani e gatti dai rifugi spagnoli, in cui verrebbero altrimenti soppressi dopo 10 giorni di permanenza."
    const casaDiMaxSection =" Il rifugio Casa di Max, aperto nel 20??, rappresenta il secondo grande progetto di salvaguardia di cani e gatti randagi a opera di Barbara. Oggi il rifugio costituisce la dimora sicura di oltre 150 animali tra cani e gatti. Si trova immerso nella natura incontaminata delle campagne di Arzana, un comune della provincia di Nuoro arroccato sulle montagne del territorio ogliastrino. In un simile territorio, caratterizzato da inverni molto rigidi ed estati afose, l'opera di Casa di Max è essenziale per garantire la sopravvivenza di tanti animali che si troverebbero altrimenti esposti a situazioni di estrema vulnerabilità."
    const sardinienHunde = "Collaboriamo inoltre con la Onlus tedesca SardinienHunde e.V., fondata a Regensburg nel 2015, che si occupa di protezione e cura di cani nell'entroterra sardo."
            
    const sections = [
        {
            title: 'Max',
            media: Max,
            content: maxSection,
        },
        { 
            title: 'Onlus',
            media: Onlus,
            content: onlusSection
        },
        {
            title: 'Casa di Max',
            media: Arzana,
            content: casaDiMaxSection
        },
        {
            title: 'Sardinien Hunde',
            media: SardinienHunde,
            content: sardinienHunde
        }
    ]

    return(
        <Grid container direction="column">
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
                            <Typography variant="h1">
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                {content}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button/>
                        </Grid>
                    </Grid>
                </Grid>
                {/** Media */}
                <Grid item>
                    <img src={media} alt="Max" className={classes.mediaStyle}/>
                </Grid>
            </Grid>
              ))}
              
          </Grid>
            
        </Grid>
    )
}