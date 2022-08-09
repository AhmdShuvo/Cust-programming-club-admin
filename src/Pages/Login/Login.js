import React from 'react';
import './login.css'

const Login = () => {
    return (
       <section className='body'>
         <div className='form-container'>
            <form className='form'>
  <h3>Login Here</h3>
  <label htmlFor="email">Email Address</label>
  <input className='input' type="email" name='email' placeholder="Email Address" id="email" />
  <label htmlFor="password">Password</label>
  <input className='input' name='password' type="password" placeholder="Password" id="password" />
  <button className='btn'>Log In</button>

</form>

        </div>
       </section>
    );
};

export default Login;