import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Link } from 'gatsby'


// import search from '../../images/search.svg'
// import cat from '../../images/cat.svg'
import menu from '../../images/menu.svg'
// import dog from '../../images/account-header.svg'

const useStyles = makeStyles(theme => ({
    coloredIndicator: {
        backgroundColor: theme.palette.common.yellow
    },
    appBar: {
        backgroundColor: theme.palette.primary.main,

    },
    text: {
        textTransform :"none",
        color: theme.palette.common.offWhite,
        [theme.breakpoints.down('lg')]:{
            fontSize: '2.7rem'
        },

        [theme.breakpoints.down('md')]: {
        fontSize: '2rem'
       },
       [theme.breakpoints.down('xs')]: {
        fontSize: '1.5rem'
       }
    },
   
    tabs: {
        marginLeft: 'auto',
        marginRight: 0
    },
    icon: {
        height: "2.5rem",
        width: "2.5rem"
    },
    logoContainer: {
        [theme.breakpoints.down('md')]: {
            marginRight: "auto",
            
        }
    },
    titleButton: {
    ...theme.typography.h1,
    fontSize: '1.5rem',
    textTransform: 'none',
    color: theme.palette.common.offWhite,
    },
    drawer: {
        backgroundColor: theme.palette.common.offWhite,
        padding: '1rem 3rem 0 3rem'
    },
    listItemText: {
        color: theme.palette.primary.main,
        fontWeight: 400,
        fontSize: '1.3rem'
    },
    tab: {
        ...theme.typography.body1,
        fontSize: "0.9rem"
    },
}))
const isBrowser = typeof window !== "undefined"

function NavBar() {
    // Styles
    const classes = useStyles()
    // Responsiveness
    const matchesMD = useMediaQuery((theme) => theme.breakpoints.down('sm'))
    // Menù Piece of State
    const [drawerOpen, setDrawerOpen] = useState(false)
     
    // Data
    const routes = [
        {node: {name: 'Come Contattarci', link: '/contact'}},
        {node: {name: 'Dona', a: 'https://www.patreon.com/user?u=90622049'}}
        
        //{node: {name: 'About Us', link: '/aboutus'}}
    ]

    const actions = [
        //{icon: search, alt: "string", visible: true, onClick: () => console.log("search")}, 
        //{icon: cat, alt: "cats", visible: true, link: "/cats"},
        //{icon: dog, alt: "dogs", visible: true, link: "/dogs"},
        {icon: menu, alt: 'menu', visible: matchesMD, onClick: () => setDrawerOpen(true)}
        ]

    // Active Index Method
    
    
    const activeIndex = () => {
        const found = routes.indexOf(
             routes.filter(
             ({ node: { name, link } }) => 
             `${link}/` === window.location.pathname || undefined
        )[0])
        return found === -1 ? false : found
     }
    
   
    
    

    // Open Tabs
    const tabs = (
        <Tabs 
        value={isBrowser && activeIndex()}
        classes={{ indicator: classes.coloredIndicator, root: classes.tabs}}>
            {routes.map(route => (
                <Tab 
                component={route.node.link? Link : "a"}
                href={route.node.a}
                target="_blank"
                to={route.node.link || `/${route.node.name.toLowerCase()}`}
                classes={{root: classes.tab}}
                label={route.node.name} 
                key={route.node.name} />
            ))}
        </Tabs>
    )

    // Hidden Menù
    const drawer = (
        <SwipeableDrawer 
           open={drawerOpen} 
           onOpen={() => setDrawerOpen(true)}
           onClose={() => setDrawerOpen(false)}
           classes={{ paper: classes.drawer}}
           >
          <List disablePadding>
            {routes.map((route, index)=>(
                <ListItem 
                   selected={isBrowser && activeIndex() ? activeIndex === index : null}
                   divider 
                   button 
                   key={route.node.name.toLowerCase()} 
                   component={route.node.link? Link : "a"}
                   href={route.node.a}
                   target="_blank"
                   to={route.node.link || `/${route.node.name.toLowerCase()}`}
                   
                   >
                    <ListItemText primary={route.node.name} classes={{ primary: classes.listItemText}} key={route.node.strapiId + `1`}/>
                </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
    )


  
    
    return (
        <AppBar elevation={0} position="static" classes={{root: classes.appBar}}>
            <Toolbar>
                <Button component={Link} to="/" classes={{ root: classes.logoContainer, text: classes.titleButton}}>
                    
                        Casa di Max
                   
                </Button> 
                {matchesMD ? drawer : tabs}
                {actions.map(action => 
                 { if (action.visible){
                    return (
                    <IconButton
                      key={action.alt}
                      component={action.onClick ? undefined: Link}
                      to={action.onClick ? undefined: action.link}
                      onClick={action.onClick}
                    >
                    <img 
                    className={classes.icon}
                    src={action.icon} 
                    alt={action.alt} 
                    key={action.alt}
                    />
                    </IconButton>
                    )}
                    else { return (null)}
                 } 
                )}
            </Toolbar>
        </AppBar>
    )
}

export default NavBar