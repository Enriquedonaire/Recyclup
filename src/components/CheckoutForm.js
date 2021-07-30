import React, { useState, useEffect } from "react";
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

import { API_URL } from "../config";
import axios from 'axios'

import Grid from '@material-ui/core/Grid';


export default function CheckoutForm() {

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads

    axios.post(`${API_URL}/api/create-payment-intent`, {items: [{ id: "xl-tshirt" }]}, {withCredentials: true})
      .then(res => {
        return res.data;
      })
      .then(data => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: "white",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "20px",
        "::placeholder": {
          color: "white"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);



    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      axios.post(`${API_URL}/api/createdonation`, {}, {withCredentials: true})
    } 
  };

  return (
    <Grid container justify = "center" margin top = "1125px">
      <br/>

    <form id="payment-form" className ="form1" onSubmit={handleSubmit}>
      <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
      <button
        disabled={processing || disabled || succeeded}
        id="submit"
      >
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Make a small 5 $ donation"
          )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
      
        <a
          href={`https://dashboard.stripe.com/test/payments`}
        >
          {" "}
          Stripe dashboard.
        </a> Refresh the page to pay again.
      </p>
    </form>
    </Grid>
  );
}



{/*    
Make a test payment
Use a test card number to try your integration.
 These card numbers work in test mode with any CVC, postal code, 
 and future expiry date. Stripe also has a set of international test cards
  to test specific postal code formats (e.g. only allow numerical values for U.S. zip codes):

4242 4242 4242 4242
4000 0025 0000 3155
4000 0000 0000 9995


*/}