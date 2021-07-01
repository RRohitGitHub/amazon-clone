import React, { useState } from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import {db,auth} from '../firebase'

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const signIn = (e) =>{
        e.preventDefault();
    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth)
            if(auth){
                history.push("/")
            }
        })
        .catch(error=>alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://logosmarken.com/wp-content/uploads/2020/04/Amazon-Logo.png" />
            </Link>   
            <div className="login__container">
                <h1>Sign-In</h1>
                <form className="login__form">
                    <label><strong>Email or mobile phone number</strong></label>
                    <input type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label><strong>Password</strong></label>
                    <input type="password"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                    />
                    <button type="submit" className="login__signInButton"
                        onClick={signIn}
                    >Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="login__registerButton">Create an account</button>
            </div>
        </div>
    )
}

export default Login
