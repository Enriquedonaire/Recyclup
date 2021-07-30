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

function Signin(props){
    return (

        
        <Grid container justify = "center">
        <div className="application">
        <Helmet>
        <style>{"body { background-image: url('https://github.com/Chensokheng/island/blob/master/public/assets/bg.jpg?raw=true');; }"}</style>
        </Helmet>
        <ThemeProvider theme={theme}>
        <form onSubmit={props.onSignin}>
            <div className="form-group">
                <label htmlFor="InputEmail"></label>
                <TextField type="email" className="form-control" id="InputEmail" name="email" placeholder="Email" id="outlined-basic"variant="outlined"/>
            </div>
            <div className="form-group">
                <label htmlFor="InputPassword"></label>
                <TextField name="password" type="password" className="form-control" id="InputPassword" placeholder="Password" id="outlined-basic"variant="outlined"/>
            </div>
            <br></br>
            <Button type="submit" variant="contained" color="primary">Login</Button>
            {
                props.error ? (
                    <p>{props.error}</p>
                ) : ''
            } 

        </form>
        </ThemeProvider>
        </div>
        </Grid>
    )
}

export default Signin;