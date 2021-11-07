import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css';
const Login = () => {
    const {signInUsingGoogle} =useAuth();
    return (
        <div className="login-form">
            <div>
                <h2 className="text-primary">Log in</h2>
                <form onSubmit="">
                    <input className="my-2" type="text" placeholder="your email"/>
                    <br />
                    <input className="my-2" type="password" name="" id=""placeholder="your password" />
                    <br />
                    <input type="submit" value="Submit" />

                </form>
                <p>New to ema-jhon ? <Link to="/register">Create Account</Link></p>
                <div>--------or--------</div>
                <button className="btn-regular"
                onClick={signInUsingGoogle}
                >Google sign in</button>

            </div>
        </div>
    );
};

export default Login;