import React from 'react'
import {useState, useEffect} from 'react'
// import {itemDetail} from './components/ItemDetail'
import axios from 'axios'
import {API_URL} from '../config'
import {Link} from 'react-dom'
 

function ProfileDetail() {

    const [profileDetail, updateProfileDetail] = useState(null)
    // const [items, updateItems] = usestate(null)
    // const [itemList, updateItemList] = useState(null)
    
    
    useEffect(async () => {          //works as componentDidMount, get items
        try {
            let response = await axios.get(`${API_URL}/api/user`, {withCredentials: true})
            updateProfileDetail(response.data)
        }  
        catch(err){
            console.log('user fetch failed', err)
        }
        }, [])

        
    return (
        <div>
            <div>
                <h4>
                    username: {profileDetail.name}
                </h4>
                <h6>
                    {profileDetail.image}
                </h6>
                <Link to={`/profile/${profileDetail._id}/edit`}>
                    <button  >
                        Edit 
                    </button>
                </Link>
                {/* <Link to={`/profile/${props.itemDetail._id}/edit`}>
                    <button  >
                        Edit item
                    </button>
                </Link> */}
            </div>
            
        </div>
    )
}

export default ProfileDetail
