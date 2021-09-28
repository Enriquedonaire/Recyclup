import React from 'react'
import './cards.css'


function Card({title, imageSource, url}) {
    
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
                <img src={imageSource} alt="" className="card-img-top"/>
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                    <p className="card-text text-secondary">
                        The most Amazing Free Items for you!
                        check it out ours Stuff
                    </p>
                    <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank" rel="noreferrer">
                        Go to this Website!
                    </a>
            </div>
            
        
        </div>
    )
}

export default Card
