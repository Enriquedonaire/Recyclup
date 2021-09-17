import React, { Component } from 'react'
import {MapContainer, TileLayer, Marker, Popup} from  'react-leaflet'
import { Link } from 'react-router-dom'
import  'leaflet/dist/leaflet.css'
import L from 'leaflet';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet';



class ItemList extends Component {
    
    getLocation = () => {
        let position = [37.18339180230675, -3.590014870182515]
        
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
              // console.log([position.coords.latitude, position.coords.longitude])
                //this.setState({position: [position.coords.latitude, position.coords.longitude]})
                console.log('position',position)
                this.setState({position: [position.coords.latitude, position.coords.longitude]})
            })
        } console.log(position)
        this.setState({position})
    }; 

    componentDidMount = () => {
        this.getLocation()  
    } 

    state = {
        position: []
    }


    render() {

        const {items} = this.props

        
        if (!items || this.state.position.length ==0) {
            return <p> L O A D I N G   . . . . .</p>
        }
        

        const MyIcon = L.icon({
            iconUrl: 'https://img.icons8.com/pastel-glyph/64/000000/marker.png',
            iconSize: [25, 41],
            iconAnchor: [12.5, 41 ],
            popupAnchor: [0, -41],
            
        })

    

        const {position} = this.state
        console.log('ItemList props are', this.props)
        // const position = [37.18339180230675, -3.590014870182515]

        return (
            <Grid container justify = "center">
            <div className="application">
        <Helmet>
        <style>{"body { background-image: url('./assets/bg.jpg'); }, {color: #ffffff}"}</style>
        </Helmet>
                <h1 >
                    Items 

                </h1>

                <MapContainer  
                    style={{width: '800px', height: '500px', padding:'0px', margin:'0px'}} 
                    center={position}  zoom={13}  
                    scrollWheelZoom={false} className="myMap">
                    <TileLayer 
                        attribution='&copy; <a href="http://osm.org/copyright">Recyclup-Map</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                    items.map((item, i) => {
                        return (
                            <Marker  key={i}  position={item.position} icon={MyIcon}  >
                                <Popup>
                                        <h2>Item Description </h2> <br/>
                                        <img src={item.image}/>
                                        <Button variant="contained" color="secondary">
                                        <Link to={`/items/${item._id}`}>{item.name}</Link>
                                        </Button>
                                </Popup>                            
                            </Marker>
                        )
                        
                        })
                    }
    
                </MapContainer>
            </div>
            </Grid>
        )
    }
}

export default ItemList;