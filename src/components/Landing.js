import React from 'react';

import CheckoutForm from './CheckoutForm';
import Header from './Header';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Cards from './Cards';

function Landing(props) {
    const promise = loadStripe("pk_test_51JII5pGg1ODUJ9EWMy7M1ezwET1h3BmiBnpyhdGRUHf307kleb3uSprms860qvDW89OVqfYe1wT2XorqaSJPDJMA00NQ9twcfL");

        
        return (
            <div>
            <Cards user= {props.user}/>   
            <br/>
            <br/>
            
            <Elements stripe={promise} width="50px">
                <CheckoutForm />
            </Elements>  
        </div>
    )
}


export default Landing;