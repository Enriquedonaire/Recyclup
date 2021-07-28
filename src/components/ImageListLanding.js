import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
//import items from './itemData';    
import axios from 'axios'
import {API_URL} from '../config'
//import the sclieced array here



//Whats below here if for the IMAGE LIST FROM MATERIAL UI. DO NOT DELETE PLEAAAASE
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));    

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';        
 * [etc...]
 *
 * const items = [
 *   {
 *     image: image,
 *     name: '',
 *     username: '',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

//TODO: show 12 random items with no doubles. avoid having less than 12


//ON SERVER SIDE:
//1. do for loop 20 times inside useEffect [] (?), 
//then push only unique elements to initially empty randomelements array
//(if !randomArr.includes(randomelem)-> push, else break?) (create 2 arrays first?)
//nach Manish: NO for loop in useEffect, stattdessen auf server seite bei der route nur 20 random items fetchen

//2.  then slice that new randomelements array to 12 elements //also server side

//ON CLient side (here)
//map over 12 elems & render properties
//make them clickable --> wrap link to around?? if user loggedIn, redirect to /map, else: redirect /signin




function TitlebarImageList() {

  //useeffect with axios call to db
  //slice minus 12

const [items, fetchItems] = useState(null)

useEffect(() => {
  async function getItems (){
    let response = await axios.get(`${API_URL}/api`, {withCredentials: true})
    fetchItems (response.data.slice(-1))
    

  }
getItems()
}, [])
console.log(items)


  const classes = useStyles();

  return items? (
    <div className={classes.root}>
    
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Find items in your neighbourhood!</ListSubheader>
        </ImageListItem>
    {/* wrap Link around to mao view if not logged in: res.redirect/signin else: show map accordning to location */}
        { items.map((item) => (
          <Link to="/mapview">                     {/*link here???? */}
          <ImageListItem key={item.image}>
            <img src='https://www.hastaterminarstock.com.uy/imgs/productos/productos31_67951.png' alt='something' />
            <img src='http://www.elcopion.com/tbfth.php?w=256&h=256&src=http://www.starplus.es/media/images/fotosAC/ARC5030PT_2.jpg'/>
            <img src='https://www.szames.com.uy/imgs/productos/productos31_2731.jpg'/>
            <img src='https://images-v2.rappi.com/products/2093237187-1615478847357.jpg?d=240x240'/>
            <img src='https://i.pinimg.com/236x/7b/57/58/7b5758f0b81901ac24cb729f8bdbdc75.jpg' alt='something' />
            <img src='https://www.alfaventas.com/imgs/productos/productos31_4575.jpg'/>
            <img src='data:image/jpeg;base64,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'/>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGtym1Sfbq8zZ_q2lFUk9Gx_lC7lv3VtttNQ&usqp=CAU'/>

            <img src='https://statics.glamit.com.ar/media/catalog/product/cache/82/base/256x256/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc02849.jpg'/>
            <img src='https://pbs.twimg.com/profile_images/655846477407920128/DdiwvLLD_400x400.jpg'/>
            <img src='https://cdn.shopify.com/s/files/1/0311/9398/9260/products/Basic-T-shirt-b-01_256x.png?v=1618870363'/>
            
            <ImageListItemBar
              title={item.name}
              subtitle={<span>by: {item.username}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.name}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
          </Link>       
        ))}
      </ImageList>
    </div>
  ) : <p> Loading...</p>
}   


export default TitlebarImageList;    

