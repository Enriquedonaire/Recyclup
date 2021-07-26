import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NavBar from './Navbar'

import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
//import items from './itemData';
//und: https://material-ui.com/components/popover/     für das About us Popup. 


//material UI "image list with title bars" für die 10 random items 
{/*
  
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
      color: 'rgba(25
        5, 255, 255, 0.54)',
    },
  }));     */}                                                                    //image list
  
  /**
   
   *
   * import image from 'path/to/image.jpg';
   *
   *
   * const items = [
   *   {
   *     image: image,
   *     name: 'Image',
   *     username: 'author',
   *          //dont display descrip/location/available on landing
   *            
   *   },
   *   {
   *     [etc...]
   *   },
   * ];
   */
 
 

{/*   
  
function Landing()  {


  let randomItems = []
  let randomIndexes = []

  //____________USE EFFECT____________________________________________________
  const [items,updateItems] = useState([])


  useEffect(async () => {          
    try {
      let itemResponse = await axios.get(`${API_URL}/api/items`)   
      updateItems(itemResponse.data)

      for(let i=1; i<=15; i++ ){ 
         let randomIndex = Math.floor(Math.random()*items.length)
         if(!randomIndexes.includes(randomIndex)){
            //push stuff to itemsarr. random index & elem
            else {
                break 
            }
         }
      }
    }  
    catch(err){
      console.log('item fetch failed', err)
    }
  }, [])

const classes = useStyles();

return (                                                                  //material ui image list. 
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Find items in your neighbourhood</ListSubheader>
      </ImageListItem>

    
    </ImageList>

     let sliceArr = randomItems.slice(0, 13)

    </ImageList> {sliceArr.map((item) => (  


              */} 
                 


               
             {/*no double items   */}

                {/*  Wrap ImageListItem in Link tag */}
      {/*              return <Link to={"/"}> {/* link to signin form if user not logged in. else: link to /map */}





