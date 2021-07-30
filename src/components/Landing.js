import React from 'react';
import TitlebarImageList from './ImageListLanding'
import CheckoutForm from './CheckoutForm';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function Landing(props) {
    const promise = loadStripe("pk_test_51JII5pGg1ODUJ9EWMy7M1ezwET1h3BmiBnpyhdGRUHf307kleb3uSprms860qvDW89OVqfYe1wT2XorqaSJPDJMA00NQ9twcfL");

        
        return (
            <div>
                {/*  */}
            <TitlebarImageList user= {props.user}/>   

            <Elements stripe={promise} width="50px" 
>
                <CheckoutForm />
            </Elements>  
        </div>
    )
}


export default Landing;