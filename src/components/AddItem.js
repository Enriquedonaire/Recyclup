import React from 'react'
import {Component} from 'react'
import {API_URL} from '../config'
import {Link} from 'react-router-dom'
import MapView from './MapView'


class AddItem extends Component {

    state ={
        position: null
    }

    getLocation(){
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                this.setState({position: [position.coords.latitude, position.coords.longitude]})
            })
        }
    }

    // function LocationMarker() {
    //     const [position, setPosition] = useState(null)
    //     const map = useMapEvents({
    //       click() {
    //         map.locate()
    //       },
    //       locationfound(e) {
    //         setPosition(e.latlng)
    //         map.flyTo(e.latlng, map.getZoom())
    //       },
    //     })
      
    //     return position === null ? null : (
    //       <Marker position={position}>
    //         <Popup>You are here</Popup>
    //       </Marker>
    //     )
    //   }
      
    //   render(
    //     <MapContainer
    //       center={{ lat: 51.505, lng: -0.09 }}
    //       zoom={13}
    //       scrollWheelZoom={false}>
    //       <TileLayer
    //         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //       />
    //       <LocationMarker />
    //     </MapContainer>,
    //   )
    
    render() {
        const {onAddItem} = this.props
        console.log('add iten props', this.props)

        return (
            <>            
                <form onSubmit={onAddItem}>                
                    <input name="name"  type="text"  placeholder="Enter your item"/>
                    <input name="username"  type="text"  placeholder="what is your username?"/>
                    <input name="description"  type="text"  placeholder="describe your item"/>
                    <input name="image"  type="text"  placeholder="upload picture"/>
                    <input name="location" type="text" value={this.getLocation()} hidden />
                    <button  type="submit"  >Submit</button>
                </form>            
                <MapView />
                {/* <MapContainer
                    center={{ lat: 51.505, lng: -0.09 }}
                    zoom={13}
                    scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker />
                </MapContainer>, */}
            </>
            
        )
    }
}

export default AddItem
