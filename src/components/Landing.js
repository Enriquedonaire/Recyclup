import React from 'react';
import TitlebarImageList from './ImageListLanding'
import CheckoutForm from './CheckoutForm';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Box from '@material-ui/core/Box';

function Landing(props) {
    const promise = loadStripe("pk_test_51JII5pGg1ODUJ9EWMy7M1ezwET1h3BmiBnpyhdGRUHf307kleb3uSprms860qvDW89OVqfYe1wT2XorqaSJPDJMA00NQ9twcfL");

      
    return (
        <div>
                
                <TitlebarImageList display="flex" alignContent="flex-start" user= {props.user}/>   
                    {/*define dimensions with className ?*/}
                <Elements width="50px" stripe={promise}>
                    <CheckoutForm />
                </Elements>  
            
        </div>
    )
}


export default Landing;