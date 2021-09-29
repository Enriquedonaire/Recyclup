import React from 'react'
import {Component} from 'react'
import MapView from './MapView'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet';

class AddItem extends Component {


    state ={
        position: [37.18339180230675, -3.590014870182515]
    }
    
    updatePosition = (position) =>{
        this.setState({
            position:[ position.lat, position.lng]
        })
    }


    

    render() {
        const {onAddItem} = this.props
        console.log('add ite props', this.props)

        return (
            <>    
            <Grid container justify = "center"> 
            <div className="application">
                <Helmet>
                <style>{"body { background-image: url('https://github.com/Chensokheng/island/blob/master/public/assets/bg.jpg?raw=true');; }"}</style>
                </Helmet>
                <form onSubmit={(event) => {onAddItem(event, this.state.position) }} style={{display:'flex', justifyContent:'center',marginLeft:'250px', marginBottom:'25px', marginTop: '-640px' }} encType="multipart/form-data"  >                
                    <input name="name"  type="text"  placeholder="Enter your item"/>
                    <input name="username"  type="text"  placeholder="what is your username?"/>
                    <input name="description"  type="text"  placeholder="describe your item"/>
                    <input type="file" name="imageUrl" accept="image/png, image/jpg" placeholder="Insert image URL" variant="contained" color="secondary"/>
                    <Button  type="submit"  variant="contained" color="secondary"> 
                        Add 
                    </Button>                    
                </form>         
                <MapView onMapClick={this.updatePosition} position={this.state.position}/>
                </div>
                </Grid>    
            </>
            
        )
    }
}

export default AddItem
