import axios from 'axios'
import React, { Component } from 'react'
import {Spinner} from 'react-bootstrap'
import {API_URL} from '../config'
import {Redirect} from 'react'

class ItemDetail extends Component {
    state = {
        itemDetail: null,
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
                
            </div>
        )
    }
}


export default ItemDetail;