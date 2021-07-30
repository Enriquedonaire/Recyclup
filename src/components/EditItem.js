import React from 'react'
import {Component} from 'react'
import {API_URL} from '../config'
import Button from '@material-ui/core/Button';
import MapView from './MapView'
import  'leaflet/dist/leaflet.css'
import L from 'leaflet';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet';




class EditItem extends Component {

    state ={
        item: null,
        position: null
        }
        
        updatePosition = (position) =>{
            this.setState({
                position
            })
        }




    componentDidMount() {
        console.log('component mounted')
        const myItem = this.props.match.params.itemId 
        axios.get(`${API_URL}/api/items/${myItem}`, {withCredentials: true})
        // console.log('axios.get response = ', response.data)
        .then((response) => {
            console.log('response axios =',response)
            this.setState({
                item: response.data
            })
        })
        .catch((error) => {
            console.lot('error editing item', error)
        })
    }
    

    onEditItem = (event) => {
        console.log('handle edit item hello')
        
    
        event.preventDefault()
        let isAvailable = event.target.available.value === 'on'  
        console.log('evento checkbox', event.target.available.value)
        const editedItem = {
            name: event.target.name.value,
            username: event.target.username.value,
            description: event.target.description.value,
            image: event.target.image.value,
            available: isAvailable
        }
        
        // const [items] = this.state
    
        // pass a second parameter to the patch for sending info to your server inside req.body
        axios.patch(`${API_URL}/api/items/${this.state.item._id}`, editedItem, {withCredentials: true})
            .then(() => {              
                this.props.history.push('/profile')
                })   
            .catch((err) => {
                console.log('Edit failed', err)
            })
        }
    
    render() {

        // const {onEditItem} = this.props
        console.log('edit item props', this.props)

        if (!this.state.item) {
            return (
                <p>L O A D I N G  . . . . . . .</p>
            )
        }
        
        const {name, username, description, image, location, available} = this.state.item
        console.log('this.state.item in edit item component is ', this.state.item)
        return (
            <Grid container justify = "center">
            <div className="application">
            <Helmet>
            <style>{"body { background-image: url('https://github.com/Chensokheng/island/blob/master/public/assets/bg.jpg?raw=true');; }"}</style>
            </Helmet>
            <>            
                <form onSubmit={(event)=>{this.onEditItem(event)}} encType="multipart/form-data">                
                    <input name="name" type="text" placeholder= {name}/>
                    <input name="username" type="text" placeholder={username}/>
                    <input name="description" type="text" placeholder={description}/>
                    <input type="file" name="imageUrl" accept="image/png, image/jpg" placeholder="Insert image URL"/>
                    <label>
                            available? 
                    </label>
                    <input name="available" type="checkbox" label="is this item still available ?"/>
                    {/* PUT CHECK BOX WITH YES AND NO  */}
                    <Button variant="contained" color="secondary" type="submit">Edited</Button>
                </form> 
                <MapView  onMapClick={this.updatePosition}/>                
            </>
            </div>
             </Grid >
            
            
        )
    }
}

export default EditItem