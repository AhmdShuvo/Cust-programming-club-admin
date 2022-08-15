import { PhotoCamera } from '@mui/icons-material';
import { Button, List, ListItem, TextareaAutosize, TextField, } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, {  useState } from 'react';

// import FileBase64 from 'react-file-base64';


const PostEvent = () => {

    // const [image,setimage]=useState([]);
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

        fetch('https://desolate-headland-20264.herokuapp.com/currentevents', {
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
        <>
         
            <Container  >
               
               <section className="form-container">
               <Box >
                    <form className='form' action="" onSubmit={handleSubmit}>
                   <h3>Current Events</h3>
                        <List>

                            {/* Event Name Feild  */}
                            <ListItem>
                                <TextField
                                 aria-label="minimum height"
                                style={{color:'white',}}
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
                                    minRows={4}
                                    placeholder="Event Details"
                                    style={{backgroundColor:"inherit",border:"2px solid white",width:"100%"}}
                                    defaultValue=""
                                />

                            </ListItem>
                            <ListItem>
                                <Button variant="contained" component="label">
                                    Upload image
                                    <input required hidden onChange={(e => setFile(e.target.files[0]))} accept="image/*" multiple type="file" />  <PhotoCamera />
                                </Button>
                            </ListItem>
                            <ListItem>

                                <div style={{ display: "block" }}>
                                    <label htmlFor=""> Date and Time</label> <br />
                                    <input required  style={{backgroundColor:"inherit",border:"2px solid white" ,padding:'10px'}} onBlur={handleChange} name='date' type="datetime-local" id="" />
                                </div>
                            </ListItem>

                        </List>

                        <Button
                        style={{marginLeft:"12px"}}
                            type='submit'
                            variant='contained'
                        >Post Event </Button>

                    </form>
                </Box>
               </section>
            </Container>

        </>
    );
};

export default PostEvent;