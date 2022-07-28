import { Button, Container } from '@mui/material';
import { borderRadius } from '@mui/system';
import React from 'react';

const MakeAdmin = () => {
    return (
        <Container style={{ backgroundColor: "white", padding: "40px", borderRadius: "10px" }}>
            <h1>Make Admin</h1>

            <section className="form-container">
                <form action="">

                    <label for="email">Enter  email:</label>
                    <input style={{ width: "60%", padding: "10px", marginLeft: "10px" }} className='email-input' pattern='[A-Z0-9a-z._%+-]+@(cust)+.(edu)+.(bd)' type="email" id="email" name="email"></input>
                    <Button style={{margin:"10px"}} variant="contained" size="large">Submit</Button>

                </form>
            </section>
        </Container>
    );
};

export default MakeAdmin;