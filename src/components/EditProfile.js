import React from 'react'

function EditProfile(props) {
    return (
        <div>
            <form onSubmit={props.onEditProfile}>
            <div className="form-group">
                <label htmlFor="InputName">Name</label>
                <input type="text" className="form-control" id="InputName" name="name" placeholder="Fill in your name."/><br></br>
            </div>
            <div className="form-group">
                <label htmlFor="InputName">Username</label>
                <input type="text" className="form-control" id="InputUserName" name="username" placeholder="Please chose username."/><br></br>
            </div>
            <div className="form-group">
                <label htmlFor="InputEmail">Email address</label>
                <input type="email" className="form-control" id="InputEmail" name="email" placeholder="Fill in your email address."/><br></br> 
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small><br></br>
            </div>
            <div className="form-group">
                <label htmlFor="InputPassword">Password</label>
                <input name="password" type="password" className="form-control" id="InputPassword" placeholder="Choose your password."/>
            </div>
            <button type="submit" className="btn btn-primary">Done</button>
        </form>
        </div>
    )
}

export default EditProfile