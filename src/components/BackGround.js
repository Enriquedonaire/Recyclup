import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './Header';
import ImageListLanding from './ImageListLanding'
import Signin from './Signin';
import Signup from './Signup';
import MyProfile from './MyProfile';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.REACT_APP_SERVER_URL + '/assets/bg.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    }));




    

function BackGround() {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        
        <Header />
        <Signup />
        <Signin/>
        <MyProfile/>

        <ImageListLanding/>

    
    
    </div>
    );
    }




export default BackGround;