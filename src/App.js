import { Switch, Route, withRouter } from "react-router-dom";
import React, { Component } from 'react'
import axios from 'axios'
import SignIn from './components/Signin'
import SignUp from "./components/Signup";
import NavBar from "./components/Navbar";
import Landing from './components/Landing'; 
// import dotenv from 'dotenv'
import MapView from './components/MapView'
import NotFound from "./components/NotFound";
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";

// import Material
import {API_URL} from './config'
import "./App.css";



class App extends Component {

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

  handleDeleteitem = (itemId) => {
    // delete the item from the DB
    axios.delete(`${API_URL}/api/items/${itemId}`, {withCredentials: true})
      .then(() => {
        // and then also filter and remove the item from the local state
        let filtereditems = this.state.items.filter((item) => {
          return item._id !== itemId
        })

        //update the state and redirect synchronously
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

  render() {
    console.log('App props', this.props)
  
    if (this.state.fetchingUser) {
      return <p>Loading . . . </p>
    }


    return (
      <div >
      
        
        <NavBar user={this.state.user} onLogOut={this.handleLogOut} />
          <Switch>
              <Route exact path={'/'}  render={() => {
                return <ItemList  items={this.state.items} />
              }} />
              <Route exact path={'/item/:itemId'} render={(routeProps) => {
                return <ItemDetail user={this.state.user} {...routeProps} onDelete={this.handleDeleteItem} />
              }} />
        
              <Route  path="/signin"  render={(routeProps) => {
                return  <SignIn  error={this.state.myError} onSignin={this.handleSignin} {...routeProps}  /> 
              }}/>
              <Route  path="/signup"  render={(routeProps) => {
                return  <SignUp onSignup={this.handleSignup} {...routeProps}  />
              }}/>
            
                <Route component= {NotFound} />
              <MapView />
            </Switch>
      </div>
    );
  }
}

export default withRouter(App);
