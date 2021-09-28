//insert List of items here? (like Manish shows in Video from Week 7, Day 5, 2:22:0
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Avatar} from '@material-ui/core';
import ItemList from './ItemList'
import axios from 'axios'
import {API_URL} from '../config'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet';

class MyProfile extends Component {

    state = {
        user: null,
    }

    // cnosole.log('userprops?', this.props.user)

    async componentDidMount(){
        try {
            //check the `<Routes>` in App.js. That's where the params `todoId` comes from
            
            let userId = this.props.user._id
            let response = await axios.get(`${API_URL}/api/profile/${userId}`, {withCredentials: true})
            this.setState({
                user: response.data
            })
        }  
        catch(err){
            console.log('Todo fetch failed', err)
        }
    }



    render() {

        if (!this.state.user) {
            return <p>Loading . . .</p>
        }
        const {user} = this.state
        return (
            <Grid  container justify = "center" >
            <div className="application" >
                <Helmet>
                <style>{"body { background-image: url('https://github.com/Chensokheng/island/blob/master/public/assets/bg.jpg?raw=true');; }"}</style>
                </Helmet>
                {/* <Avatar alt="Remy Sharp" src="someImageUrl"/> */}
                <div>Hey ! {user.username}</div>
                
                <Button variant="contained" color="secondary"style={{ marginTop:'-165px'}}> <Link to={`/profile/create`}>
                    +Add Item+</Link>
                        
                </Button>
                <Button variant="contained" color="secondary" style={{ marginTop:'-165px'}}> <Link to={`/profile/:profileId/edit`}>
                    Edit your Profile
                        </Link>
                </Button>
                
                <ItemList items={user.itemsId}/>
            </div>
            </Grid>
        )
    }
}

export default MyProfile
