import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles({
    root: {
        maxWidth: 645,
        background: 'rgba(0,0,0,0.5)',
        margin: '20px',
        },
        media: {
        height: 440,
        },
        title: {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: '2rem',
        color: '#fff',
        },
        desc: {
        fontFamily: 'Nunito',
        fontSize: '1.1rem',
        color: '#ddd',
        },
    });

function ImageCard() {
    const classes = useStyles();
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

        
    return (
       
      <Grid container justify = "center">
            <div>
                <h1 text-align="center" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif;">
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
       
    );

}


export default ImageCard;