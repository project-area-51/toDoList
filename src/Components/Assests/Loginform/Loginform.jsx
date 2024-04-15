import React from 'react';
import './Loginform.css';
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function Loginform() {
    return (
        <div className='wrapper'>

            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='usernme' required />
                    <FaUserAlt className='icon' />
                </div>


                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className='icon' />
                </div>


                <div className="remember-forgot">
                    <label><input type="checkbox" /> remember me</label>
                    <a href="www.google.com">Forgot password?</a>
                </div>

                <button type="submit">Login</button>

                <div className="registration-link">
                    <p>Don't have an account? <a href="www.facebook.com">Register</a></p>
                </div>
            </form>

        </div >


    )
}

export default Loginform;