import React from 'react';
import './login.css'

const Login = () => {
    return (
       <section className='body'>
         <div className='form-container'>
            <form className='form'>
  <h3>Login Here</h3>
  <label htmlFor="username">Username</label>
  <input className='input' type="text" placeholder="Email or Phone" id="username" />
  <label htmlFor="password">Password</label>
  <input className='input' type="password" placeholder="Password" id="password" />
  <button className='btn'>Log In</button>

</form>

        </div>
       </section>
    );
};

export default Login;