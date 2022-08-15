import { MobileDatePicker } from '@mui/lab';
import { TextareaAutosize, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useState } from 'react';

const Notice = () => {
  const [notice, setNotice] = useState({})
  const handleChange = e => {
    const field = e.target.name
    const value = e.target.value
    const newLogindata = { ...notice }
    newLogindata[field] = value;
    setNotice(newLogindata)
  }


  const handleSubmit = e => {
    const formData = new FormData();
    formData.append('notice', notice);
    e.preventDefault()
    fetch("https://desolate-headland-20264.herokuapp.com/notice", {

      method: "POST", headers: { "content-type": 'application/json' },
      body: JSON.stringify(notice)

    }).then(res => res.json()).then(response => console.log(response))

  }
  console.log(notice);
  return (
    <Container>

      <section className='form-container'>
        <form onSubmit={handleSubmit} className='form' action="">
          <h3 style={{ margin: "10px" }}>Post Notice</h3>
          <div>
            <label htmlFor="Title"> Notice Subject</label>
            <input required onChange={handleChange} className='input' type="text" name='Subject' placeholder="Subject" id="title" />
          </div>
          <div>
            <label htmlFor="password">Notice Body</label>
            <TextareaAutosize
              required
              onChange={handleChange}

              name="noticeBody"
              minRows={4}
              placeholder="Event Details"
              style={{ padding: "10px", backgroundColor: "inherit", border: "2px solid white", width: "100%" }}
              defaultValue=""
            >

            </TextareaAutosize>
          </div>

          <div>
            <label htmlFor="Date">Date</label><br /><br />
            <input required onChange={handleChange} type="date" style={{ backgroundColor: 'inherit', border: '1px solid white', padding: '10px' }} name="date" id="" />
          </div>
          <button type='submit' className='btn'>Post</button>
        </form>

      </section>
    </Container>
  );
};

export default Notice;