import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';     //kann we put all of those imports in 1 line??
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function Navbar(props) {

    const classes = useStyles()

    
    return (

        <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                RECYCLUP
                </Typography>
                {
                  props.user ? (
                    <>
                      <button onClick={props.onHandleProfile}>My Profile</button>
                      <button onClick={props.onLogOut}>Logout</button>
                    </>
                    ) : (
                    <>
                      <Link to = {'/signin'}>
                        <Button color="inherit"> Sign in</Button>
                      </Link> 
                      
                      <Link to = {'/signup'}>
                        <Button color="inherit">Sign up</Button>
                      </Link>
                    </>
                )}
              </Toolbar>
            </AppBar>
        </div>
    )  
}

export default Navbar;
