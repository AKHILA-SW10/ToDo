import React from "react";
import { useState } from "react/cjs/react.development";
import './LoginForm.css'

const LoginForm = (props) => {
    const [name,setName]=useState('');

    const nameHandler=(event)=>{
       setName(event.target.value);
       props.getUser(event.target.value);
    }


    return (
        <div>
            <div><input type="text" value={name} onChange={nameHandler} placeholder="Name"></input></div>
            <div><input type="text" placeholder="Email"></input></div>
            <button className="login-button" type="submit" onClick={props.trigger}>Login</button>
        </div>
    )
}

export default LoginForm;