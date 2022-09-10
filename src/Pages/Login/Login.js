import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Components/Hooks/useAuth';
import RedAlert from '../../Components/RedAlert/RedAlert';
import './login.css'

const Login = () => {
   const { Login, setIsLoadng,admin,user,LogOUt } = useAuth()

   const [logInData, setData] = useState({})
   const [error, setError] = useState('')

   const location = useLocation()
   const history = useNavigate()
   const url = '/'

   const handleChange = e => {
      const field = e.target.name
      const value = e.target.value
      const newLogindata = { ...logInData }
      newLogindata[field] = value;
      setData(newLogindata)


   }

   const handleLogin = e => {
      e.preventDefault()

      Login(logInData.email, logInData.password).then((userCredential) => {
         // Signed in 
         setIsLoadng(false);
         const user = userCredential.user;
         history(url)

         // ...
      })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
            console.log(errorMessage);
         }).finally(() => {


         });
   }

   return (
      <section className='body'>
         <div className='form-container'>

          
            <form className='form' onSubmit={handleLogin}>
                   
               <h3>Login Here</h3>
            
               <label htmlFor="email">Email Address</label>
               <input className='input' type="email" pattern='[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+.(edu)+.(bd)' onChange={handleChange} name='email' placeholder="Email Address" id="email" />
               <label htmlFor="password">Password</label>
               <input className='input' name='password' type="password" onChange={handleChange} placeholder="Password" id="password" />
               <button type='submit' className='btn'>Log In</button>
{error&& <RedAlert message={error}></RedAlert>}
            </form>
         </div>
      </section>
   );
};

export default Login;