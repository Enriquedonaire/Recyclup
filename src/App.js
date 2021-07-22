import React, {useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import * as PATHS from "./utils/paths";

import axios from 'axios'

import SignIn from './components/Signin'
import SignUp from "./components/Signup";
import Navbar from "./components/Navbar";
import Landing from './components/Landing';

// import Material

function App() {

  // const [user,userUpdate] = useState(null)

  // useEffect(() => {
  //   const getUser = async() => {
  //     try {
  //       let response = await axios.get(`${API_URL}//`, {withCredentials: true})
  //       console.log('user data', response.data)
  //       userUpdate( response.data )
  //     }
  //     catch(err){
  //       console.log('failed to fetch user', err)
  //     }

  //   }; getUser()

  // }, [user])  

  const handleSignIn = async(event, email, password) => {
    event.preventDefault()

    let myUser = {
      email: email,
      password: password
    }
    console.log(email, password)
    
    try{
      let response = await axios.post(`${API_URL}/API/signin`, myUser, {withCredentials: true})
      console.log('user info passed') 
    }
    catch(err){
      console.log('failed to fetch user')
    }

  }


  return (
    
    <div className="App">
      <Navbar/>
      <Switch>
        <Route  path="/signin"  render={(routeProps) => {
        return  <SignIn  onSignIn={handleSignIn} {...routeProps}/>
        }}/>
        <Route  path="/signup"  render={(routeProps) => {
        return  <SignUp onSignUp={null} {...routeProps}/>
        }}/>      
      </Switch>
    </div>
  );
}

export default App;

// gigi was here 