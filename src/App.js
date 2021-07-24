import React, {useState, useEffect} from "react";
import { Switch, Route, withRouter } from "react-router-dom";
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

function App(props) {



  const [user,updateUser] = useState(null)
  console.log(user, updateUser)

  
  useEffect(async () => {          //works as componentDidMount, make api/items request here. why do you fetch user and not all items here?
    try {
      let response = await axios.get(`${API_URL}/api/user`, {withCredentials: true})
      updateUser(response.data)
    }  
    catch(err){
      console.log('user fetch failed', err)
    }
  }, [])

  /*

 const [items,updateItems] = useState([])

  // fetch all the initial items to show on the home page
 useEffect(async () => {          //works as componentDidMount, make api/items request here. 
    try {
      let itemResponse = await axios.get(`${API_URL}/api/items`)    //for the landing page
      updateItems(response.data)
    }  
    catch(err){
      console.log('item fetch failed', err)
    }
  }, [])

  */


 
  //________________________SIGN IN_____________________________________
  const handleSignIn = async (event, username, password) => {
    event.preventDefault();

    let myUser = {
      username: username,
      password: password,
    };

    console.log(username, password);

    try {
      let response = await axios.post(`${API_URL}/API/signin`, myUser, {
        withCredentials: true,
      });
      console.log("user info passed");
      updateUser(response.data);
    } catch (err) {
      console.log("failed to send user");
    }
  };

 //________________________SIGN UP_____________________________________
  const handleSignUp = async (event, username, email, password) => {
    event.preventDefault();

    let myUser = {
      username: username,
      email: email,
      password: password,
    };

    try {
      let response = await axios.post(`${API_URL}/API/signup`, myUser, {
        withCredentials: true,
      });
      console.log();
      updateUser(response.data);
    } catch (err) {
      console.log("failed to send ");
    }
  };

  //__________________ADD ITEM__________________________
  const handleAddItem = async (event) => {

    event.preventDefault()

    try {
      let newItem = {
        name: event.target.name.value,
        description: event.target.description.value,
        available: false,     //or set it to true by default??
        picture: event.target.image.value

      }
      let response = await axios.post(`http://localhost:5005/api/create`, newItem)
      updateItems([response.data, ...items])
    }  
    catch(err){
      console.log('Item fetch failed', err)
    }
   
  }

  //_______________________DELETE ITEM_________________________
  const handleDeleteItem = async (itemId) => {
    try {
      // delete the item from the DB
      await axios.delete(`http://localhost:5005/api/items/${itemId}`)
      // and then also filter and remove the item from the local state
      let filteredItems = items.filter((item) => {
        return item._id !== itemId
      })
      updateItems(filteredItems)

    }  
    catch(err){
      console.log('Item fetch failed', err)
    }
    
  }

  //________________EDIT ITEM______________________________
  const handleEditItem = async (event, item) => {
    event.preventDefault()
    try {
      // pass a second parameter to the patch for sending info to your server inside req.body
      await axios.patch(`http://localhost:5005/api/items/${item._id}`, item)
      // and then also filter and remove the item from the local state
      // also update your local state here and redirect to home page
      // mapping over all the items and updating the one that was edited
      let updatedItems = items.map((singleItem) => {
        if (singleItem._id === item._id) {
          singleItem.name = item.name
          singleItem.description = item.description
        } 
        return singleItem
      })
      updateItems(updatedItems)
    }  
    catch(err){
      console.log('Item fetch failed', err)
    }

  }



//________________________________________________________-

  return (
    
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path= {"/"} render= {()=> {
        return <Landing items = {items}/>
         }}/>
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

export default withRouter(App);   //so that App component- which is not handled in routes here- also gets props

// gigi was here 
//sin too