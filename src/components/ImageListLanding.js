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




function TitlebarImageList(props) {
  const {user} = props
  //useeffect with axios call to db
  //slice minus 12

const [items, fetchItems] = useState(null)

useEffect(() => {
  async function getItems (){
    let response = await axios.get(`${API_URL}/api`, {withCredentials: true})
    fetchItems (response.data.slice(-12))
    

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
    {/* wrap Link around to map view if not logged in: res.redirect/signin else: show map accordning to location */}
        { items.map((item) => {
          return user ? (
          <Link to={`/item/${item._id}`}>                     {/*link here???? */}
          <ImageListItem key={item.image}>
            <img src={item.image} alt='something' />
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
          ):(<Link to="/signin">                     {/*link here???? */}
          <ImageListItem key={item.image}>
            <img src={item.image} alt='something' />
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
          </Link> )    
        })}
      </ImageList>
    </div>
  ) : <p> Loading...</p>
}   


export default TitlebarImageList;    

