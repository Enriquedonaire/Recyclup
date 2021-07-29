import React from 'react'
import {Component} from 'react'
import {API_URL} from '../config'
import {Link} from 'react-router-dom'
import MapView from './MapView'
import {Button} from  'react-bootstrap'
import {Redirect} from 'react-router-dom'

class AddItem extends Component {


    state ={
       position: [37.18339180230675, -3.590014870182515]
    }
    
    updatePosition = (position) =>{
        this.setState({
            position
        })
    }


    

    render() {
        const {onAddItem} = this.props
        console.log('add ite props', this.props)

        return (
            <>            
                <form onSubmit={(event) => {onAddItem(event, this.state.position) }}  encType="multipart/form-data"  >                
                    <input name="name"  type="text"  placeholder="Enter your item"/>
                    <input name="username"  type="text"  placeholder="what is your username?"/>
                    <input name="description"  type="text"  placeholder="describe your item"/>
                    <input type="file" name="imageUrl" accept="image/png, image/jpg" placeholder="Insert image URL"/>
                    <Button type="submit"> 
                        Add 
                    </Button>                    
                </form>         
                <MapView onMapClick={this.updatePosition} position={this.state.position}/>
            </>
            
        )
    }
}

export default AddItem
