import React from  'react'
import {MapContainer, TileLayer, Marker, Popup} from  'react-leaflet'
import { Link } from 'react-router-dom'
import  'leaflet/dist/leaflet.css'
import L from 'leaflet';
import ItemDetail from  './ItemDetail'
import {Button} from  'react-bootstrap'


const MyIcon = L.icon({
	iconUrl: 'https://img.icons8.com/pastel-glyph/64/000000/marker.png',
	iconSize: [25, 41],
	iconAnchor: [12.5, 41 ],
	popupAnchor: [0, -41],
	
})

// research click hook for leaflet


function MapView() {
    //Some random co-ordinate
	const position = [37.18339180230675, -3.590014870182515]
	const positionTwo = [48.136104987921655, 11.582689579256405]
	const positionThree = [37.19642565106683, -3.635752072085296]
	const positionFour = [37.18937597538319, -3.7195308903238926]
    //Do not forget to set a width and height style to your map. Else it won't show up
	return (
	
		<MapContainer  
			style={{width: '800px', height: '500px'}} 
			center={position}  zoom={13}  
			scrollWheelZoom={false} className="myMap" >
			<TileLayer 
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			
            <Marker  position={position} icon={MyIcon}  >
            <Popup>
					<h2>Item Description </h2> <br/>
					<img src='https://www.hastaterminarstock.com.uy/imgs/productos/productos31_67951.png'/>
					<Link to={`/item/${ItemDetail._id}`}/>
                    <Button className="btn btn-primary" >
                    Item Details
                    </Button>
				</Popup>
        
			</Marker>
			<Marker  position={positionTwo} icon={MyIcon}  >
            <Popup>
					<h2>Item Description </h2> <br/>
					<img src='https://www.alfaventas.com/imgs/productos/productos31_4575.jpg'/>
					<Link to={`/item/${ItemDetail._id}`}/>
                    <Button className="btn btn-primary" >
                    Item Details
                    </Button>
				</Popup>
        
			</Marker>
			<Marker  position={positionThree} icon={MyIcon}  >
            <Popup>
					<h2>Item Description </h2> <br/>
					<img src='https://images-v2.rappi.com/products/2093237187-1615478847357.jpg?d=240x240'/>
					<Link to={`/item/${ItemDetail._id}`}/>
                    <Button className="btn btn-primary" >
                    Item Details
                    </Button>
				</Popup>
        
			</Marker>
			<Marker  position={positionFour} icon={MyIcon}  >
            <Popup>
					<h2>Item Description </h2> <br/>
					<img src='https://www.szames.com.uy/imgs/productos/productos31_2731.jpg'/>
					<Link to={`/item/${ItemDetail._id}`}/>
                    <Button className="btn btn-primary" >
                    Item Details
                    </Button>
				</Popup>
        
			</Marker>
		</MapContainer>
	
	)
}

export  default MapView