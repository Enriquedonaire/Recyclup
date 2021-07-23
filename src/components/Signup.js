import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function SignUp(props) {

    const {onSignUp} = props
    console.log('signup props', onSignUp)

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [username, setUsername] = useState(null)

    return (
        <form onSubmit={(event)=>{onSignUp(email,password, username)}}>
            <div className="form-group">
                <label htmlFor="InputUsername">Username</label>
                <input onChange={(event)=>{setUsername(event.target.value)}} type="text" className="form-control" id="InputUsername" name="username" placeholder="Please choose a username"/>
            </div>
            <div className="form-group">
                <label htmlFor="InputEmail">Email address</label>
                <input onChange={(event)=>{setEmail(event.target.value)}} type="email" className="form-control" id="InputEmail" name="email" placeholder ="Please fill in your email address."/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="InputPassword">Password</label>
                <input onChange={(event)=>{setPassword(event.target.value)}} name="password" type="password" className="form-control" id="InputPassword" placeholder="Please choose a password."/>
            </div>
            <button type="submit" className="btn btn-primary">Sign up!</button>
        </form>
    )
    
}
export default SignUp
