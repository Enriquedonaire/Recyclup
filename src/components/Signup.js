/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet';



const theme = createTheme({
    palette: {
            primary: {
            main: '#2e7d32',
            },
            secondary: {
            main: '#c0ca33',
            },
        },
});



function Signup(props){
    
    

    
    const {onSignup} = props 

    return (
        
        <Grid container justify = "center">
        <div className="application">
        <Helmet>
        <style>{"body { background-image: url('./assets/bg.jpg'); }"}</style>
        </Helmet>
        <ThemeProvider theme={theme}>
        <form onSubmit={onSignup} style={{marginTop: '-550px'}}>
            <div className="form-group">
                <label htmlFor="InputName"></label>
                <TextField type="text" className="form-control" id="InputName" name="name" placeholder="Fill in your name." id="outlined-basic"variant="outlined"/><br></br>
            </div>
            <div className="form-group">
                <label htmlFor="InputName"></label>
                
                <TextField id="outlined-basic"variant="outlined" name="username" placeholder="Please chose username." id="outlined-basic"variant="outlined" style={{backgroundColor:'white'}}/><br/>
            </div>
            <div className="form-group">
                <label htmlFor="InputEmail"></label>
                <TextField type="email" className="form-control" id="InputEmail" name="email" placeholder="Fill in your email address." id="outlined-basic"variant="outlined"/><br></br> 
            
            </div>
            <div className="form-group">
                <label htmlFor="InputPassword"></label>
                <TextField name="password" type="password" className="form-control" id="InputPassword" placeholder="Choose your password." id="outlined-basic"variant="outlined"/>
            </div>
            <Button type="submit"  variant="contained" color="secondary">Sign up!</Button>
        </form>
        </ThemeProvider>
        </div>
        </Grid>
    )
}

export default Signup;
