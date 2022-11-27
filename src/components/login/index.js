import React from 'react'
import style from './style.module.css'
import axios from 'axios'
import { NavLink } from "react-router-dom";

const Login = () => {

    //   const handleSubmit = () => {
    // await axios.post('url',formData)
    //   }
    return (
        <div className={style.container}>
            <form className={style.form}>
                <h1>Login</h1>
                <input
                    type="email"
                    name="email"
                    placeholder="Type your email"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Type your password"
                />
                <input
                    type="submit"
                    name="submit"
                />
            </form>
            <a to="/signup">Not yet registered? Register Now</a>
        </div>

    )
}

export default Login