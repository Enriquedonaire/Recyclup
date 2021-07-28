import React from 'react'
import {Component} from 'react'
import {API_URL} from '../config'
import {Link} from 'react-router-dom'
import MapView from './MapView'


class AddItem extends Component {

    //state ={
       // position: null
    

    getLocation(){
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                //this.setState({position: [position.coords.latitude, position.coords.longitude]})
                console.log( `[${position.coords.latitude}, ${position.coords.longitude}]`)
            })
        }
    }

    

    render() {
        const {onAddItem} = this.props
        console.log('add ite props', this.props)

        return (
            <>            
                <form onSubmit={onAddItem}>                
                    <input name="name"  type="text"  placeholder="Enter your item"/>
                    <input name="username"  type="text"  placeholder="what is your username?"/>
                    <input name="description"  type="text"  placeholder="describe your item"/>
                    <input type="file" name="imageUrl" accept="image/png, image/jpg" placeholder="Insert image URL"/>
                    <input name="location" type="text" value={this.getLocation()}/>
                    <button type="submit"  >Add </button>
                </form>            
                <MapView />
            
                    
                
            </>
            
        )
    }
}

export default AddItem
