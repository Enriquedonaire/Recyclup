import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';    
import axios from 'axios'
import {API_URL} from '../config'
import {Helmet} from "react-helmet";
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



function TitlebarImageList() {

  //useeffect with axios call to db
  //slice minus 12

const [items, fetchItems] = useState(null)

useEffect(() => {
  async function getItems (){
    let response = await axios.get(`${API_URL}/api/items`, {withCredentials: true})
    fetchItems (response.data.slice(-1))
    

  }
getItems()
}, [])
console.log(items)


  const classes = useStyles();

  return items ? (
    <Grid container justify = "center">
      <div className="application">
      {/* <Cards/> */}
            <Helmet>
                <style >{"body { background-image: url('./assets/bg.jpg')}, {color: 'white'}"}</style>
            </Helmet>
            
      </div>
    </Grid>
  ) : <p> Loading...</p>
}   


export default TitlebarImageList;    

