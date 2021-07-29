import React, { Component } from 'react'
import {MapContainer, TileLayer, Marker, Popup, useMapEvents} from  'react-leaflet'
import { Link } from 'react-router-dom'
import  'leaflet/dist/leaflet.css'
import L from 'leaflet';
import {Button} from  'react-bootstrap'


class ItemList extends Component {

    


    render() {
        
        const MyIcon = L.icon({
            iconUrl: 'https://img.icons8.com/pastel-glyph/64/000000/marker.png',
            iconSize: [25, 41],
            iconAnchor: [12.5, 41 ],
            popupAnchor: [0, -41],
            
        })
        const {items} = this.props
        const position = [37.18339180230675, -3.590014870182515]

        return (
            <div>
                <h1>
                    Items 

                </h1>
            
                <MapContainer  
                    style={{width: '800px', height: '500px'}} 
                    center={position}  zoom={13}  
                    scrollWheelZoom={false} className="myMap" >
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
                                        <Link to={`/items/${item._id}`}>{item.name}</Link>
                                        <Button className="btn btn-primary" >
                                        Item Details
                                        </Button>
                                    </Popup>
                            
                                </Marker>
                        )
                        
                    })
                }
    
                </MapContainer>
            </div>
        )
    }
}

export default ItemList;