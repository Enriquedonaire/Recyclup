import React from 'react'
import {useState, useEffect} from 'react'
// import {itemDetail} from './components/ItemDetail'
import axios from 'axios'

function ProfileDetail() {

    const [profileDetail, updateProfileDetail] = useState(null)
    const [items, updateItems] = usestate()
    const [itemList, updateItemList] = useState()
    
    
    useEffect(async () => {          //works as componentDidMount, get items
        try {
            let response = await axios.get(`${API_URL}/api/user`, {withCredentials: true})
            updateUser(response.data)
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
