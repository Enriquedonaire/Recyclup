import { Switch, Route, withRouter } from "react-router-dom";
import React, { Component } from 'react'

import axios from 'axios'
import SignIn from './components/Signin'
import SignUp from "./components/Signup";
import NavBar from "./components/Navbar";
import Landing from './components/Landing'; 

import ProfileDetail from "./components/ProfileDetail";
import ItemDetail from './components/ItemDetail'
import EditProfile from './components/EditProfile'
import AddItem from './components/AddItem'
import EditItem from './components/EditItem';
import Lottie from './components/LottieControl'
import NotFound from "./components/NotFound";

import {API_URL} from './config.js';
import "./App.css";
import MapView from "./components/MapView";


class App extends Component {

  // const [user,updateUser] = useState(null)
  // console.log(user, updateUser)
  // const [items, updateItems] = useState(null)
  
  state = {
    items: [],
    user: null,
    myError: null,
    fetchingUser: true, 
  }

  async componentDidMount(){
    try {
        let response = await axios.get(`${API_URL}/api/items`, {withCredentials: true})
        console.log(response.data)
        this.setState({
          items: response.data
        })


        let userResponse = await axios.get(`${API_URL}/api/user`, {withCredentials: true})
        this.setState({
          user: userResponse.data,
          fetchingUser: false,
        })

    }  
    catch(err){
      console.log('item fetch failed', err)
      this.setState({
        fetchingUser: false,
      })
    }
  }

  handleAddItem = async (event) => {

    event.preventDefault()

    //First upload the image to cloudinary
    // then send the image url to our /api/create request
    
    // How to grab the image from our input 
    console.log(event.target.myImage.files[0] )

    let formData = new FormData()
    formData.append('imageUrl', event.target.myImage.files[0])

    let imgResponse = await axios.post(`${API_URL}/api/upload`, formData)
    console.log(imgResponse)


    let newItem = {
      name: event.target.name.value,
      description: event.target.description.value,
      completed: false,
      image: imgResponse.data.image
    }

    // Pass the data in POST requests as the second parameter
    // create the item in the DB
    axios.post(`${API_URL}/api/create`, newItem, {withCredentials: true})
      .then((response) => {
          // Also update the state locally
          // use the newly created to from your DB and not the local item that we created above.

          this.setState({
            items: [response.data, ...this.state.items]
          }, () => {
              // to do something synchronous with the setState

              // redirects the app to a certain url
              // we're using the history push method to redirect it to any url we want
              this.props.history.push('/')
          })
      })
      .catch(() => {
        console.log('Adding item failed')
      })

  }

  // handleDeleteitem = (itemId) => {
  //   // delete the item from the DB
  //   axios.delete(`${API_URL}/api/items/${itemId}`, {withCredentials: true})
  //     .then(() => {
  //       // and then also filter and remove the item from the local state
  //       let filtereditems = this.state.items.filter((item) => {
  //         return item._id !== itemId
  //       })
  //       //update the state and redirect synchronously
  //       this.setState({
  //         items: filtereditems
  //       } , () => {
  //         this.props.history.push('/')
  //       })
  //     }
  //     .catch(() => {
  //       console.log(error, 'error')
  //     })
  // }

  handleItem = async(event) => {
    try {
      let response = await axios.get(`http://localhost:5005/api/item`,)
      updateItems(response.data)
    }  
    catch(err){
      console.log('Item fetch failed', err)
    }

  }


  //__________________ADD ITEM__________________________
  handleAddItem = async (event) => {

    

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

  handleEdititem = (event, item) => {
    event.preventDefault()

    // pass a second parameter to the patch for sending info to your server inside req.body
    axios.patch(`${API_URL}/api/items/${item._id}`, item, {withCredentials: true})
      .then(() => {
          // also update your local state here and redirect to home page
          // mapping over all the items and updating the one that was edited
          let updateditems = this.state.items.map((singleitem) => {
              if (singleitem._id === item._id) {
                singleitem.name = item.name
                singleitem.description = item.description
              } 
            return singleitem
          })

          this.setState({
            items: updateditems
          }, () => {
              this.props.history.push('/')
          })
      })
      .catch(() => {
          console.log('Edit failed')
      })
  }

  handleSignup = async (event) => {
    event.preventDefault()
    
    const {username, email, password} = event.target

    let newUser = {
      username: username.value,
      email: email.value,
      password: password.value
    }
      console.log(newUser)
    // make a POST signup request to the server
    try {
      await axios.post(`${API_URL}/api/signup`, newUser, {withCredentials: true})
    
      this.props.history.push('/signin')
    }
    catch(err) {
      console.log('Signup failed', err)
    }
  }

  handleSignin = async (event) => {
    event.preventDefault()
    console.log('Sign in works!!!! Yippeeee')
      const { email, password} = event.target

      // our new user info
      let myUser = {
        email: email.value,
        password: password.value
      }
  
      try {
        let response = await axios.post(`${API_URL}/api/signin`, myUser, {withCredentials: true})
        this.setState({
          user: response.data
        }, () => {

            this.props.history.push('/mapview')
        })
        
        
      }
      catch(err) {
        console.log('Signup failed', err.response.data)
        this.setState({
          myError: err.response.data.error
        })
      }
  }


  handleLogOut = async () => {
    try {

      await axios.post(`${API_URL}/api/logout`, {}, {withCredentials: true})
      this.setState({
        user: null
      } , () => {
        this.props.history.push('/')
      })

    }
    catch(err) {
      console.log('Logout failed', err)
    }
  }

  // // ====== PROFILE DETAIL AND PROFILE EDIT ========

  // const handleProfileDetail = async(event, profile) =>{

  //   event.preventDefault()
    
  //   try{
  //     await axios.get(`http://localhost:5005/api/user/${user._id}`, profile)
  //   }
  //   catch(err){
  //     console.log('failed to fetch profle', err)
  //   }
  // }

  // const handleEditProfileDetail = async (event, profile) => {
  //   event.preventDefault()
  //   try {
  //     // pass a second parameter to the patch for sending info to your server inside req.body
  //     await axios.patch(`http://localhost:5005/api/user/${user._id}`, profile)
  //     // and then also filter and remove the todo from the local state
  //     // also update your local state here and redirect to home page
  //     // mapping over all the todos and updating the one that was edited
   
      
  //   }  
  //   catch(err){
  //     console.log('profile update failed', err)
  //   }

  // }



//________________________________________________________-

  // return (
    
  //   <div className="App">
  //     <NavBar/>
  //     <Switch>
  //       <Route exact path= {"/"} render= {()=> {
  //       return <Landing items = {items}/>
  //        }}/>
  //       <Route  path="/signin"  render={(routeProps) => {
  //       return  <SignIn  onSignIn={handleSignIn} {...routeProps}/>
  //       }}/>
  //       <Route  path="/signup"  render={(routeProps) => {
  //       return  <SignUp onSignUp={handleSignUp} {...routeProps}/>         
  //       }}/>
  //       <Route path={'/profile/:profileId'}  render={(routeProps) => {
  //       return <ProfileDetail {...routeProps}  onEdit={handleProfileDetail} />
  //       }} />
  //       <Route path={'/profile/:profileId/edit'}  render={(routeProps) => {
  //       return <EditProfile {...routeProps}  onEdit={handleEditProfileDetail} />
  //       }} />
  //       <Route path={'/items/:itemId'}  render={(routeProps) => {
  //       return <ItemDetail {...routeProps}  onAdd={handleItem} />
  //       }} />
  //       <Route path={'/items/newitem'}  render={(routeProps) => {
  //       return <AddItem {...routeProps}  onAdd={handleAddItem} />
  //       }} />
  //       <Route path={'/items/:itemId/edit'}  render={(routeProps) => {
  //       return <EditItem {...routeProps}  onAdd={handleEditItem} />
  //       }} />
  //      <Route component= {NotFound} />
  //       <MapView />
  //     </Switch>
  //   </div>
  // );
  
  render(){
  console.log('App props', this.props)
  
  if (this.state.fetchingUser) {
    return <p>Loading . . . </p>
  }
  

    return (
      <div >        
        <Navbar user={this.state.user} onLogOut={this.handleLogOut} />
          <Switch>
              <Route exact path={'/'}  render={() => {
                return <ItemList  items={this.state.items} />
              }} />
              <Route exact path={'/item/:itemId'} render={(routeProps) => {
                return <ItemDetail user={this.state.user} {...routeProps} onDelete={this.handleDeleteItem} />
              }} />
        
              <Route  path="/signin"  render={(routeProps) => {
                return  <Signin  error={this.state.myError} onSignin={this.handleSignin} {...routeProps}  /> 
              }}/>
              <Route  path="/signup"  render={(routeProps) => {
                return  <Signup onSignup={this.handleSignup} {...routeProps}  />
              }}/>
              <MapView />
            </Switch>
      </div>
    )
  }
}

export default withRouter(App)
