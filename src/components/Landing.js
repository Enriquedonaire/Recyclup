import React from 'react';
import TitlebarImageList from './ImageListLanding'
import CheckoutForm from './CheckoutForm';


function Landing(props) {
    return (
        <div>
            {/*  */}
         <TitlebarImageList user= {props.user}/>   

          <CheckoutForm/>
        </div>
    )
}


export default Landing;