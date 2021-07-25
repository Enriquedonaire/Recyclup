import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class ItemList extends Component {

    // Props will look like this
    /*

    this.props = {
        todos: [{},  . . . . . {}]
    }

    */

    render() {
        const {items} = this.props
        return (
            <div>
                {
                    items.map((item, i) => {
                        return <p key={i}>
                            <Link to={`/todo/${item._id}`}>{item.name}</Link>
                            </p>
                    })
                }
            </div>
        )
    }
}

export default ItemList;