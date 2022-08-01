import { Button, List, ListItem, TextareaAutosize, TextField } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';

const UpcommingEvents = () => {

    const [image,setimage]=useState([]);
    const [imagefile, setFile] = useState('')
    const [eventData, setData] = useState({});

    const handleChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newEventData = { ...eventData }
        newEventData[field] = value;
        setData(newEventData);


    }

    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('title',eventData.eventTitle);
        formData.append('image', imagefile);
        formData.append('time', eventData.date);
        formData.append('description', eventData.eventDeails);
        console.log(formData);
        console.log(imagefile);

        fetch('http://localhost:9000/comingevents', {
            method: 'POST',
            body: formData
        }).then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
                
            })
            .catch((error) => {
                console.error('Error:', error);
            }).finally(()=>{

                alert("posted")
            })


            
    }

    
    return (
        <Container style={{ backgroundColor: "white", padding: '50px', borderRadius: "20px" }} >

            <center><h1>comming Events</h1></center>
            <Box style={{ border: "2px solid white", padding: "20px", boxShadow: "10px 10px 20px 10px lightBlue", borderRadius: "20px" }}>
                    <form action="" onSubmit={handleSubmit}>
                        <List>

                            {/* Event Name Feild  */}
                            <ListItem>
                                <TextField
                                    name='eventTitle'
                                    required
                                    id="standard-required"
                                    label="Event name"
                                    defaultValue=""
                                    variant="standard"
                                    onChange={handleChange}
                                />

                            </ListItem>


                            {/* Event Details*/}
                            <ListItem>

                                <TextareaAutosize
                                required

                                    name="eventDeails"
                                    onChange={handleChange}
                                    minRows={10}
                                    placeholder="Event Details"
                                    style={{ width: "100%" }}
                                    defaultValue=""
                                />

                            </ListItem>
                            <ListItem>
                                <Button variant="contained" component="label">
                                    Upload image
                                    <input required hidden onChange={(e => setFile(e.target.files[0]))} accept="image/*" multiple type="file" />
                                </Button>
                            </ListItem>
                            <ListItem>

                                <div style={{ display: "block" }}>
                                    <label htmlFor=""> Date and Time</label> <br />
                                    <input required style={{ padding: "10px" }} onBlur={handleChange} name='date' type="datetime-local" id="" />
                                </div>
                            </ListItem>

                        </List>

                        <Button
                            type='submit'
                            variant='outlined'
                        >Post Event </Button>

                    </form>
                </Box>


        </Container>
    );
};

export default UpcommingEvents;