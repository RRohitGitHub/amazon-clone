import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://logosmarken.com/wp-content/uploads/2020/04/Amazon-Logo.png" />
            </Link>   
            <div className="login__container">
                <h1>Sign-In</h1>
                <form className="login__form">
                    <label><strong>Email or mobile phone number</strong></label>
                    <input type="text"/>
                    <label><strong>Password</strong></label>
                    <input type="password"/>
                    <button className="login__SignInButton">Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button className="login__registerButton">Create an account</button>
            </div>
        </div>
    )
}

export default Login
