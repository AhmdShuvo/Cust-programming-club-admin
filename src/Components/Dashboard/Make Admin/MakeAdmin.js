import { Button, Container } from '@mui/material';
// import { borderRadius } from '@mui/system';
import React, { useState } from 'react';

const MakeAdmin = () => {

    
  const [email,setEmail]=useState('');


  const handleChange=e=>{
    setEmail(e.target.value)
  }

  const handleAdmin=e=>{

    const user={email,}

          
                              
        fetch('http://localhost:9000/users',{
          method:'PUT',
          headers:{ "content-type": 'application/json'},
                 body:JSON.stringify(user)
      
        }).then(res=>res.json()).then(data=>console.log(data)).then(()=>alert(email+"  " +"succesfully updated"))

    e.preventDefault()
  }
    return (
        <Container>
           <center> </center>

            <section  className="form-container">
           
                <form onSubmit={handleAdmin} className='form' action="">
                <h3 style={{margin:"10px"}}>Make Admin</h3>
                    <label for="email">Enter  email:</label>
                    <input onChange={handleChange} style={{ width: "60%", padding: "10px", marginLeft: "10px",backgroundColor:'inherit' }} className='email-input' placeholder='example.12345@cust.edu.bd' pattern='[A-Z0-9a-z._%+-]+@(cust)+.(edu)+.(bd)' type="email" id="email" name="email"></input> <br /><br />
                   <center> <Button type='submit'  style={{marginLeft:"10px"}} variant="contained" size="large">Submit</Button></center>

                </form>
            </section>
        </Container>
    );
};

export default MakeAdmin;