import axios from 'axios'
import React, { Component } from 'react'
import {Spinner} from 'react-bootstrap'

import {Redirect} from 'react'
import { Link } from 'react-router-dom'
import {API_URL} from '../config'
import {Button} from  'react-bootstrap'

const itemDetail = ItemDetail

class ItemDetail extends Component {
    state = {
        myItemDetail: null,
    }

    async componentDidMount() {
        try {
            let itemId = this.props.match.params.itemId
            let response = await axios.get(`${API_URL}/api/items/${itemId}`)
            this.setState({
                itemDetail: response.data
            })
        }
        catch (err) {
            console.log('Item fetch Failed', err)
        }
    }


    render() {

        if(!this.props.user) {
            return <Redirect to={'/signin'} />
        }

        if (!this.state.itemDetail) {
            return <Spinner animation="border" variant="primary" />
        } 

        return (
            <div>
                <h4>
                    Name: {itemDetail.name}
                </h4>
                <h6>
                    Description: {itemDetail.description}
                </h6>
                <Link to={`/item/${itemDetail._id}/edit`}>
                    <Button className="btn btn-primary" >
                        Edit 
                    </Button>
                </Link>
                <Button onClick={() => {  this.props.onDelete( itemDetail._id )   } } className="btn btn-primary">
                    Delete
                </Button>
            </div>
        )
    }
}


export default ItemDetail;