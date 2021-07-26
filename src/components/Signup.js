import React from 'react';

function Signup(props){
    
    const {onSignup} = props 

    return (
        <form onSubmit={onSignup}>
            <div className="form-group">
                <label htmlFor="InputName">Name</label>
                <input type="text" className="form-control" id="InputName" name="name" />
            </div>
            <div className="form-group">
                <label htmlFor="InputEmail">Email address</label>
                <input type="email" className="form-control" id="InputEmail" name="email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="InputPassword">Password</label>
                <input name="password" type="password" className="form-control" id="InputPassword" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Signup;
