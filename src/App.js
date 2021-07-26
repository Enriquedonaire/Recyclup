import { Switch, Route, withRouter } from "react-router-dom";
import React, { Component } from 'react'
import axios from 'axios'
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";
import Signin from './components/Signin'
import Signup from './components/Signup'
import {API_URL} from './config'
import "./App.css";
import MapView from './components/MapView'
import  Navbar  from './components/Navbar'
import Landing from './components/Landing'; 
import NotFound from './components/NotFound'
// import dotenv from 'dotenv'??

class App extends Component {

  state = {
    items: [],
    name: [],
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


    console.log(event.target.myImage.files[0] )

    let formData = new FormData()
    formData.append('imageUrl', event.target.myImage.files[0])

    let imgResponse = await axios.post(`${API_URL}/api/upload`, formData)
    console.log(imgResponse)


    let newItem = {
      name: event.target.name.value,
      description: event.target.description.value,
      available: false,
      image: imgResponse.data.image
    }

    axios.post(`${API_URL}/api/create`, newItem, {withCredentials: true})
      .then((response) => {

          this.setState({
            items: [response.data, ...this.state.items]
          }, () => {
        
              this.props.history.push('/')
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

  handleEditItem = (event, item) => {
    event.preventDefault()

    axios.patch(`${API_URL}/api/items/${item._id}`, item, {withCredentials: true})
      .then(() => {
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
    const {name, email, password} = event.target

    let newUser = {
      name: name.value,
      email: email.value,
      password: password.value
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

    }
    catch(err) {
      console.log('Logout failed', err)
    }
  }

  render() {
  
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
              <Route  path="/signup"  render={(routeProps) => {
                return  <Signup onSignup={this.handleSignup} {...routeProps}  />
              }}/>
              <Route  path="/signin"  render={(routeProps) => {
                return  <Signin  error={this.state.myError} onSignin={this.handleSignin} {...routeProps}  /> 
              }}/>
              <Route component= {NotFound} />
            <MapView />
            
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
