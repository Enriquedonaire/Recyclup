import React from 'react';
import TitlebarImageList from './ImageListLanding'


function Landing(props) {
    return (
        <div>
            {/*  */}
         <TitlebarImageList user= {props.user}/>    
        </div>
    )
}


export default Landing;