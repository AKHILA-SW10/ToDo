import React from "react";
import './LoginForm.css'

const LoginForm = (props) => {
    return (
        <div>
            <div><input type="text" placeholder="Name"></input></div>
            <div><input type="text" placeholder="email"></input></div>
            <button className="login-button" type="submit" onClick={props.trigger}>Login</button>
        </div>
    )
}

export default LoginForm;