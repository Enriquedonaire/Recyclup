import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class ItemList extends Component {


    render() {
        const {items} = this.props
        console.log('ItemList props are', this.props)
        return (
            <div>
                <h1>
                    Items 

                </h1>
                {/* {
                    items.map((item, i) => {
                        return <p key={i}>
                            <Link to={`/items/${item._id}`}>{item.name}</Link>
                            </p>
                    })
                } */}
            </div>
        )
    }
}

export default ItemList;