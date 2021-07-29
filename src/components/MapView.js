import React ,{ useState} from  'react'
import {MapContainer, TileLayer, Marker, Popup, useMapEvents} from  'react-leaflet'
import { Link } from 'react-router-dom'
import  'leaflet/dist/leaflet.css'
import L from 'leaflet';





const MyIcon = L.icon({
	iconUrl: 'https://img.icons8.com/pastel-glyph/64/000000/marker.png',
	iconSize: [25, 41],
	iconAnchor: [12.5, 41 ],
	popupAnchor: [0, -41],
})


function MapView(props) {
	
	function LocationMarker(myProps) {
	
		const map = useMapEvents({
			click(e) {
				console.log(e.latlng)
				
				props.onMapClick(e.latlng)
				map.locate()
			},
			locationfound(e) {
				
				map.flyTo(e.latlng, map.getZoom())
			},
		})
	
			return myProps.position === null ? null : (
			<Marker position={myProps.position} icon={MyIcon} >
				<Popup>You are here</Popup>
			</Marker>
			)
}

	
    //Some random co-ordinate
	const position = props.position 
    
	//Do not forget to set a width and height style to your map. Else it won't show up
	return (
		

	
		<MapContainer  
			style={{width: '800px', height: '500px'}} 
			center={position}  zoom={13}  
			scrollWheelZoom={false} className="myMap" >
			<TileLayer 
				attribution='&copy; <a href="http://osm.org/copyright">Recyclup-Map</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
		<LocationMarker icon={MyIcon} position={position}/>
		</MapContainer>
	
	)
}

export  default MapView