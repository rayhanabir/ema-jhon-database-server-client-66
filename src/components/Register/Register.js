import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
const Register = () => {
    return (
        <div className="register-form">
           <div>
            <h2>Create Account</h2>
            <form onSubmit="">
                <input className="my-2" type="text" name="" id="" placeholder="your name"/>
                <br />
                <input className="my-2" type="email" name="" id="" placeholder="your email" />
                <br />
                <input className="my-2" type="password" name="" id="" placeholder="your password" />
                <br />
                <input className="my-2" type="password" name="" id="" placeholder="Re-enter your password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>Already have an Account? <Link to="/login">Log in</Link></p>
            <div>-------or--------</div>
            <button className="btn-regular">Google</button>


            </div> 
        </div>
    );
};

export default Register;