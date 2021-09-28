import React from 'react';
import Card from './Card';
import image1 from '../asset/image1.jpg';
import image2 from '../asset/image2.jpg';
import image3 from '../asset/image3.jpg';

const cards = [
    {
        id: 1,
        title: 'Free Items',
        image: image1,
        url: '/signup'
    },
    {
        id: 2,
        title: 'Recyclup Donations',
        image: image2,
        url: '/signup'
    },
    {
        id: 3,
        title: 'More',
        image: image3,
        url: '/signup'
    }
]

function Cards() {
    return (
        <div className="container">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} imageSource={card.image} url={card.url} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards
