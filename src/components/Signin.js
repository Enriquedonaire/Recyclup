import React from 'react';

function Signin(props){
    return (
        <form onSubmit={props.onSignin}>
            <div className="form-group">
                <label htmlFor="InputEmail">Email address</label>
                <input type="email" className="form-control" id="InputEmail" name="email" placeholder="Fill in your email adress."/>
            </div>
            <div className="form-group">
                <label htmlFor="InputPassword">Password</label>
                <input name="password" type="password" className="form-control" id="InputPassword" placeholder="Fill in your password."/>
            </div>
            <br></br>
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
    )
}

export default Signin;