import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './Header';
import Cards from './Cards';
import Signin from './Signin';
import Signup from './Signup';
import MyProfile from './MyProfile';
import EditItem from './EditItem';
import ItemDetail from './ItemDetail';



const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.REACT_APP_SERVER_URL + './assets/bg.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    }));




    

function BackGround() {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        
        <Header />
        <Cards/>
        <Signup />
        <Signin/>
        <MyProfile/>
        <ItemDetail/>
        <EditItem/>
        

    
    
    </div>
    );
    }




export default BackGround;