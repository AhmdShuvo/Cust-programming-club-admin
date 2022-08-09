import { MobileDatePicker } from '@mui/lab';
import { TextareaAutosize, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const Notice = () => {
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Container>

      <section className='form-container'>
        <form className='form' action="">
          <h3 style={{margin:"10px"}}>Post Notice</h3>
          <div>
            <label htmlFor="Title"> Notice Subject</label>
            <input className='input' type="text" name='Subject' placeholder="Subject" id="title" />
          </div>
          <div>
            <label htmlFor="password">Notice Body</label>
            <TextareaAutosize
             required
              
             name="noticeBody"
             minRows={4}
             placeholder="Event Details"
             style={{padding:"10px", backgroundColor: "inherit", border: "2px solid white", width: "100%" }}
             defaultValue=""
            >
             
            </TextareaAutosize>
          </div>

          <div>
            <label htmlFor="Date">Date</label><br /><br />
          <input type="date" style={{backgroundColor:'inherit',border:'1px solid white',padding:'10px'}} name="" id="" />
          </div>
          <button className='btn'>Log In</button>
        </form>

      </section>
    </Container>
  );
};

export default Notice;