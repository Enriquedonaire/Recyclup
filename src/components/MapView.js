import React from  'react'
import {MapContainer, TileLayer, Marker, Popup} from  'react-leaflet'
// //Don't forget to import the css
import  'leaflet/dist/leaflet.css'


function MapView() {
    //Some random co-ordinate
	const position = [51.505, -0.09]

    //Do not forget to set a width and height style to your map. Else it won't show up
	return (
	<div>
		<MapContainer>
		<TileLayer/>
		
			position 
		<TileLayer/>
		
		</MapContainer>

	</div>
	)
}

export  default MapView