import axios from 'axios'
import React, { Component } from 'react'
import { Spinner } from 'react-bootstrap'
import Button from '@material-ui/core/Button';
import { Redirect } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../config'
import { Helmet } from 'react-helmet';
import { Grid } from '@material-ui/core';
import ChatBot from './ChatBot'



class ItemDetail extends Component {

    state = {
        itemDetail: null,
    }


    async componentDidMount() {
        try {
            let itemId = this.props.match.params.itemId

            console.log('itemId in match.params', itemId)
            let response = await axios.get(`${API_URL}/api/items/${itemId}`)

            console.log('item detail response data', response.data)

            this.setState({
                itemDetail: response.data
            })
        }
        catch (err) {
            console.log('Item fetch Failed', err)
        }
    }



    render() {

        <Helmet>
            <style>{"body { background-color:#3f5445; }"}</style>
        </Helmet>

        if (!this.props.user) {
            return <Redirect to={'/signin'} />
        }

        if (!this.state.itemDetail) {
            return <Spinner animation="border" variant="primary" />
        }
        const { itemDetail } = this.state
        console.log('item detail this.state', itemDetail)
        console.log('item detail this.props = ', this.props)
        return (
            <Grid container justify="center">
                <div className="application" style={{color: '#dae8dd', marginTop:'-445px', justifyContent:'center'}}>

                    <h3>
                        Username: {itemDetail.username}
                    </h3>
                    <h4>
                        Name: {itemDetail.name}
                    </h4>
                    <h5>
                        Description: {itemDetail.description}
                    </h5>
                    {
                        itemDetail.image && (
                            <img src={itemDetail.image} alt={itemDetail.name} />
                        )
                    }
                    <Button onClick={() => { this.props.onDelete(itemDetail._id) }} variant="contained" color="primary">
                        Delete
                    </Button>
                    <Button type="submit" variant="contained" color="secondary">
                        <Link to={`/items/${itemDetail._id}/edit`}> Edit Item </Link>
                    </Button >
                    <div>
                        <ChatBot />
                    </div>
                </div>
            </Grid>
        )
    }
}


export default ItemDetail;