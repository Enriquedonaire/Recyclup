import React from 'react'
import {Component} from 'react'
import {API_URL} from '../config'
import {Link} from 'react-router-dom'


class AddItem extends Component {

    state = {
        items: []
    }

    render() {
        const {onAddItem} = this.props
        console.log('add iten props', this.props)

        return (
            
            <form onSubmit={onAddItem}>                
            <input  name="name"  type="text"  placeholder="Enter your item"/>
            <input  name="username"  type="text"  placeholder="what is your username?"/>
            <input  name="description"  type="text"  placeholder="describe your item"/>
            <input  name="image"  type="text"  placeholder="upload picture"/>
            <button  type="submit"  >Submit</button>
            </form>
        )
    }
}

export default AddItem
