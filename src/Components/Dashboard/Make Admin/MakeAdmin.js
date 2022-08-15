import { Button, Container } from '@mui/material';
// import { borderRadius } from '@mui/system';
import React from 'react';

const MakeAdmin = () => {
    return (
        <Container>
           <center> </center>

            <section className="form-container">
           
                <form className='form' action="">
                <h3 style={{margin:"10px"}}>Make Admin</h3>
                    <label for="email">Enter  email:</label>
                    <input style={{ width: "60%", padding: "10px", marginLeft: "10px",backgroundColor:'inherit' }} className='email-input' placeholder='example.12345@cust.edu.bd' pattern='[A-Z0-9a-z._%+-]+@(cust)+.(edu)+.(bd)' type="email" id="email" name="email"></input> <br /><br />
                   <center> <Button style={{marginLeft:"10px"}} variant="contained" size="large">Submit</Button></center>

                </form>
            </section>
        </Container>
    );
};

export default MakeAdmin;