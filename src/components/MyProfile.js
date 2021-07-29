//insert List of items here? (like Manish shows in Video from Week 7, Day 5, 2:22:0
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Avatar} from '@material-ui/core';
import ItemList from './ItemList'
import axios from 'axios'
import {API_URL} from '../config'



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
            <div>
                <Avatar alt="Remy Sharp" src="someImageUrl"/>
                <div>Hey ! I am this user {user.name}</div>
                <div> this is my profile pic</div>
                <button> <Link to={`/profile/create`}>
                    post item to give away
                        </Link>
                </button>
                <button> <Link to={`/profile/:profileId/edit`}>
                    Edit your Profile
                        </Link>
                </button>
                <div>Items added are here </div>
                <ItemList items={user.itemsId}/>
            </div>
        )
    }
}

export default MyProfile
