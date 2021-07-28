import { Switch, Route, withRouter } from "react-router-dom";
import React, { Component } from 'react'
import axios from 'axios'
import Signin from './components/Signin'
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
// import Landing from './components/Landing'; 

import MyProfile from "./components/MyProfile";
import ItemDetail from './components/ItemDetail'
import ItemList from './components/ItemList'
import EditProfile from './components/EditProfile'
import AddItem from './components/AddItem'
import EditItem from './components/EditItem';
import Lottie from './components/LottieControl'
// import NotFound from "./components/NotFound";

import {API_URL} from './config.js';
import "./App.css";
import MapView from './components/MapView'
import Landing from './components/Landing'; 
import NotFound from './components/NotFound'
import { responsiveFontSizes } from "@material-ui/core";
// import dotenv from 'dotenv'??

class App extends Component {

  // const [user,updateUser] = useState(null)
  // console.log(user, updateUser)
  // const [items, updateItems] = useState(null)
  
  state = {
    items: [],
    user: [],
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
    
    console.log('hello handleADDITEM')
    event.preventDefault()
        
    // console.log(event.target.myImage.files[0] )
    
    // let formData = new FormData()
    // formData.append('imageUrl', event.target.myImage.files[0])
    
    // let imgResponse = await axios.post(`${API_URL}/api/upload`, formData)
    // console.log(imgResponse)
    
    
    let newItem = {
      username: event.target.name.value,
      name: event.target.name.value,
      description: event.target.description.value,
      position: event.target.location.value,
      available: false,
      // image: imgResponse.data.image,
    }
    console.log(newItem)
    axios.post(`${API_URL}/api/create`, newItem, {withCredentials: true})
    .then((response) => {
      
      this.setState({
        items: [response.data, ...this.state.items]
      }, () => {
        
        this.props.history.push('/items')
      })
    })
    .catch(() => {
      console.log('Adding item failed')
    })
  }


//this is just check
  handleDeleteItem = (itemId) => {
    axios.delete(`${API_URL}/api/items/${itemId}`, {withCredentials: true})
      .then(() => {
        let filtereditems = this.state.items.filter((item) => {
          return item._id !== itemId
        })

        this.setState({
          items: filtereditems
        } , () => {
          this.props.history.push('/')
        })

      })
      .catch(() => {
        console.log('Delete failed')
      })
  }  
  
  


  // handleEdititem = (event, item) => {
  //   event.preventDefault()

  //   // pass a second parameter to the patch for sending info to your server inside req.body
  //   axios.patch(`${API_URL}/api/items/${item._id}`, item, {withCredentials: true})
  //     .then(() => {
  //         // also update your local state here and redirect to home page
  //         // mapping over all the items and updating the one that was edited
  //         let updateditems = this.state.items.map((singleitem) => {
  //             if (singleitem._id === item._id) {
  //               singleitem.name = item.name
  //               singleitem.description = item.description
  //             } 
  //           return singleitem
  //         })

  //         this.setState({
  //           items: updateditems
  //         }, () => {
  //             this.props.history.push('/')
  //         })
  //     })
  //     .catch(() => {
  //         console.log('Edit failed')
  //     })
  // }



  handleSignup = async (event) => {
    event.preventDefault()
    const {username, name, email, password} = event.target
    console.log(event.target)

    let newUser = {
      name: name.value,
      email: email.value,
      password: password.value,
      username: username.value
    }

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
    console.log('Sign in works!!')
      const { email, password} = event.target

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
      console.log('logout successful')
    }
    catch(err) {
      console.log('Logout failed', err)
    }
  }

  
  
  
handleProfile= async(event) =>{


  try{
    let response = await axios.get(`${API_URL}/api/profile`, {withCredentials:true})
    console.log(responsiveFontSizes)
    this.setState({
      user: response.data
    }, () => {
      this.props.history.push(`/profile`)
    })
  }
  catch(err){
    console.log('failed to fetch profile', err)
  }
}

// handleEditProfileDetail = async (event) => {
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
//       return  <Signin  onSignIn={handleSignIn} {...routeProps}/>
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
        <Navbar user={this.state.user} onLogOut={this.handleLogOut} onHandleProfile={this.handleProfile} />
          <Switch>
            <Route exact path='/' render={(routeProps) => { 
                return <Landing items={this.state.items} user= {this.state.user}/>
            }} />
            <Route  path="/signup"  render={(routeProps) => {
              return  <Signup onSignup={this.handleSignup} {...routeProps}  />
            }}/>
            <Route  path="/signin"  render={(routeProps) => {
              return  <Signin  error={this.state.myError} onSignin={this.handleSignin} {...routeProps}  /> 
            }}/>
            <Route exact path={'/items'}  render={() => {
              return <ItemList  items={this.state.items} />
            }} />
            <Route exact path={'/items/:itemId'} render={(routeProps) => {
              return <ItemDetail user={this.state.user} {...routeProps}  onDelete={this.handleDeleteItem}/>
            }} />
            <Route exact path={'/profile'}  render={(routeProps) => {
              return <MyProfile user={this.state.user}  {...routeProps}/>
            }} />
            <Route exact path={'/profile/create'}  render={(routeProps) => {
              return <AddItem {...routeProps} user={this.state.user}  onAddItem={this.handleAddItem} />
            }} />
            <MapView />
            <Route component= {NotFound} />
            
          </Switch>
      </div>
    )
  }
}


export default withRouter(App)
