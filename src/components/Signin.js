import React, {useState} from 'react'
import axios from 'axios'


function SignIn(props) {
    
    const [username, updateUsername] = useState(null)
    const [password, updatePassword] = useState(null)
    console.log('username', username)
    console.log('password', password)

    return (
        <div>
            <form onSubmit={(event) => {props.onSignIn(event, username, password)}}>
            <div className="form-group">
                <label htmlFor="InputUsername">Username</label>
                <input onChange={(event)=>{updateUsername(event.target.value)}} type="text" className="form-control" id="InputUsername" name="username" />
            </div>
            <div className="form-group">
                <label htmlFor="InputPassword">Password</label>
                <input onChange={(event)=>{updatePassword(event.target.value)}} name="password" type="password" className="form-control" id="InputPassword" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            {
                props.error ? (
                    <p>{props.error}</p>
                ) : ''
            }
            {
                    props.error && <p>{props.error}</p>
            }
        </form>
            
        </div>
    )
}

export default SignIn