import React from 'react';
import './loginregister.css';
import {Link} from 'react-router-dom';

export default function Register() {
  return (
    <div>
       <div className="auth-page"> 
      <div className='auth-form'>
        <h2>Register</h2>
        <form>
        <label htmlFor='name'>Name</label>
        <input type='name' required/>
            <label htmlFor='email'>Email</label>
            <input type='email' required/>
            <label htmlFor='password'>Password</label>
            <input type='password' required/>
            <button className='common-btn'>Register</button>
        </form>
        <p>  Have an account?<Link  to='/login'>Login</Link></p>
      </div>
    </div>
    </div>
  )
}
