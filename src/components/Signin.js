import React, {useState} from 'react'
import axios from 'axios'


function SignIn(props) {
    
    const [email, updateEmail] = useState(null)
    const [password, updatePassword] = useState(null)
    console.log('email', email)
    console.log('password', password)

    return (
        <div>
            <form onSubmit={props.onSignIn}>
            <div className="form-group">
                <label htmlFor="InputEmail">Email address</label>
                <input onChange={(event)=>{updateEmail(event.target.value)}} type="email" className="form-control" id="InputEmail" name="email" />
            </div>
            <div className="form-group">
                <label htmlFor="InputPassword">Password</label>
                <input onChange={(event)=>{updatePassword(event.target.value)}} name="password" type="password" className="form-control" id="InputPassword" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
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