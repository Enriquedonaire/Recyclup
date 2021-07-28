import React from  'react'
import {MapContainer, TileLayer, Marker, Popup} from  'react-leaflet'
import { Link } from 'react-router-dom'
import  'leaflet/dist/leaflet.css'
import L from 'leaflet';
import {Button} from  'react-bootstrap'




const MyIcon = L.icon({
	iconUrl: 'https://img.icons8.com/pastel-glyph/64/000000/marker.png',
	iconSize: [25, 41],
	iconAnchor: [12.5, 41 ],
	popupAnchor: [0, -41],
	
})



function MapView() {
	
    //Some random co-ordinate
	const position = [37.18339180230675, -3.590014870182515]
	const positionTwo = [48.136104987921655, 11.582689579256405]
	const positionThree = [37.19642565106683, -3.635752072085296]
	const positionFour = [37.18937597538319, -3.7195308903238926]
    


	// const LocationMarker = () => {
    //     const [position, setPosition] = useState(null)
	// 		const map = useMapEvents({
	// 		click() {
	// 			map.locate()
	// 		},
	// 		locationfound(e) {
	// 			setPosition(e.latlng)
	// 			map.flyTo(e.latlng, map.getZoom())
	// 		},
	// 		})
	// 		//call props here
	// 		useState(position)
	// 		console.log('here')
	// 		return position === null ? null : (
	// 		<Marker position={position}>
	// 			<Popup>You are here</Popup>
	// 		</Marker>
	// 		)
	// 	}

	return (
			
		<MapContainer  
			style={{width: '800px', height: '500px'}} 
			center={position}  zoom={13}  
			scrollWheelZoom={false} className="myMap" >
			<TileLayer 
				attribution='&copy; <a href="http://osm.org/copyright">Recyclup-Map</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>			    
			{/* <LocationMarker /> */}
		</MapContainer>
	)
}

export  default MapView