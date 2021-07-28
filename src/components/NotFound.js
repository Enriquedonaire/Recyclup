import React, { Component } from 'react'

import LottieControl from './LottieControl';


//Below you see the other error animations I used. I tried to put them on top of each other (so that 2 would be rendered)
//that didnt work, but feel free to try out.
//if you wanna use another one, just go to lottiefile, download free animation as json, copy code in src--> animations --> someAnimation.json & import here
//import sofaError from '../animations/notfound.json'   //save json locally!
//import TextAndButtonAndCable from '../animations/notFoundWithText.json'
import wineError from '../animations/wineError.json'

class NotFound extends Component {
    render() {
        return (
            <div>
                 {/*  put 'go back' button below?  */}
                <LottieControl 
                        
                    width = {1000}
                    height= {600}
                    animation = {wineError}      


                            
                />
            </div>
        )
    }
}


export default NotFound;


//this is our 404 page
