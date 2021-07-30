import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';     //kann we put all of those imports in 1 line??
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BasicPopover from './AboutUs';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { ThemeProvider } from '@material-ui/core/styles';

import { createTheme } from '@material-ui/core/styles';

const themeStyles = createTheme({
    palette: {
    primary: {
      main: '#004d40',
    },
    secondary: {
      main: '#ffd54f',
    },
  },
});

const theme = createTheme({
  
  palette: {
    primary: {
      main: '#1b5e20',
    },
    secondary: {
      main: '#01579b',
    },
  },
});


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
  }));

function Navbar(props) {

    const classes = useStyles()
    
    
    return (

        <div className={classes.root}>
          <ThemeProvider theme={theme, themeStyles}>
            <AppBar  position="static">
              <Toolbar >
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                
                </IconButton>
                <Typography variant="h6" className={classes.title} justifyContent="center">
                RECYCLUP
                <BasicPopover />
                </Typography>
              
                {
                  props.user ? (
                    <>    <IconButton>
                    <AccountCircle />
                
                      <Button onClick={props.onHandleProfile}>Profile</Button> </IconButton>
                      <Button variant="contained" color="secondary" onClick={props.onLogOut}>Logout</Button>
                    </>
                    ) : (
                    <>
                
                      
            <Link to={'/signin'}><Button variant="contained" color="secondary" >SignIn</Button></Link>
                      
                      
                      
            <Link to={'/signup'}><Button  variant="contained" color="secondary">SignUp</Button></Link>
                    </>
                )}
              </Toolbar>
            </AppBar>
            </ThemeProvider>
        </div>
    )  
}

export default Navbar;
