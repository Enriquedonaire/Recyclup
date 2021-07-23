import React, {useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
// import from '@material-ui/core'
import axios from 'axios'
import SignIn from './components/Signin'
import SignUp from "./components/Signup";
import NavBar from "./components/Navbar";
import Landing from './components/Landing';
// import dotenv from 'dotenv'
import {API_URL} from './config'
import MapView from './components/MapView'

// import Material

function App() {



  const [user,updateUser] = useState(null)
  console.log(user, updateUser)

  
  useEffect(async () => {
    try {
      let response = await axios.get(`${API_URL}/api/user`, {withCredentials: true})
      updateUser(response.data)
    }  
    catch(err){
      console.log('user fetch failed', err)
    }
  }, [])
 
  
  const handleSignIn = async(event, username, password) => {

    
    event.preventDefault()

    let myUser = {
      username: username,
      password: password
    }
    
    console.log(username, password)
    
    try{
      let response = await axios.post(`${API_URL}/API/signin`, myUser, {withCredentials: true})
      console.log('user info passed')
      updateUser(response.data)
    }
    catch(err){
      console.log('failed to send user')
    }
  }

  const handleSignUp = async(event, username, email, password) => {
    event.preventDefault()

    let myUser = {
      username: username,
      email: email,
      password: password
      
    }

    try{
      let response = await axios.post(`${API_URL}/API/signup`, myUser, {withCredentials: true})
      console.log()
      updateUser(response.data)
    }
    catch(err) {
      console.log('failed to send ')
    }
  }

  return (
    
    <div className="App">
      <NavBar/>
      <Switch>
        <Route  path="/signin"  render={(routeProps) => {
        return  <SignIn  onSignIn={handleSignIn} {...routeProps}/>
        }}/>
        <Route  path="/signup"  render={(routeProps) => {
        return  <SignUp onSignUp={handleSignUp} {...routeProps}/>
        }}/> 
        <MapView />
      </Switch>
    </div>
  );
}

export default App;

// gigi was here 