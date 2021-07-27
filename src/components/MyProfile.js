//insert List of items here? (like Manish shows in Video from Week 7, Day 5, 2:22:0
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Avatar} from '@material-ui/core';
import axios from 'axios'
import {API_URL} from '../config'



class MyProfile extends Component {

    state = {
        user: this.props.user,
        items: this.props.user.itemsId
    }

    // async componentDidMount(){
    //     try {
    //         //check the `<Routes>` in App.js. That's where the params `todoId` comes from
            
    //         let userId = this.props.match.params._id
    //         let response = await axios.get(`http://${API_URL}/api/profile/${userId}`)
    //         this.setState({
    //             user: response.data
    //         })
    //     }  
    //     catch(err){
    //         console.log('Todo fetch failed', err)
    //     }
    // }



    render() {

        const {user} = this.props
        
        return (
            <div>
                <Avatar alt="Remy Sharp" src="someImageUrl"/>
                <div>Hey ! I am this user {user.username}</div>
                <div> this is my profile pic</div>
                <Link to="/profile/${userId}/createitem">
                    <h3>post item to give away</h3>
                </Link>
            </div>
        )
    }
}

export default MyProfile
