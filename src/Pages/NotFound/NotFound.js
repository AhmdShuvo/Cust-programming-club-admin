import { Container} from '@mui/material';
import React from 'react';

const NotFound = () => {
    return (
        <Container>
          <center>
            <section style={{backgroundColor:"whitesmoke",padding:'20%',marginTop:'10px',borderRadius:'10px'}}> 
            <h1>404 page Not Found</h1>
            <a href="/" style={{color:'black',border:'1px solid white',}}> Go Back to Home</a>
            </section>
          </center>
        </Container>
    );
};

export default NotFound;