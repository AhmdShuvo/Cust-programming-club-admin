import { Label } from '@mui/icons-material';
import { Button, List, ListItem, TextareaAutosize, TextField, } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';

import FileBase64 from 'react-file-base64';


const PostEvent = () => {

    const [imagefile, setFile] = useState('')
    const [eventData, setData] = useState({})

    const handleChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newEventData = { ...eventData }
        newEventData[field] = value;


        newEventData.imagefile = imagefile.selectedFile
        setData(newEventData);


    }
    console.log(eventData);

    return (
        <>
            <Container style={{ backgroundColor: "white", padding: '50px', borderRadius: "20px" }}>
                <Box style={{ border: "2px solid white", padding: "20px", boxShadow: "10px 10px 20px 10px lightBlue", borderRadius: "20px" }}>
                    <form action="">
                        <List>

                            {/* Event Name Feild  */}
                            <ListItem>
                                <TextField
                                    name='event-title'
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
                                  
                                    name="event-deails"
                                    onChange={handleChange}
                                    minRows={10}
                                    placeholder="Event Details"
                                    style={{ width: "100%" }}
                                    defaultValue=""
                                />

                            </ListItem>
                            <ListItem>
                                <div>
                                    <FileBase64 type="file" multiple={false} onDone={({ base64 }) => setFile({ selectedFile: base64 })} />
                                </div>
                            </ListItem>
                            <ListItem>

                                <div style={{ display: "block" }}>
                                    <label htmlFor=""> Date and Time</label> <br />
                                    <input style={{ padding: "10px" }} onBlur={handleChange} name='date' type="datetime-local" id="" />
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

        </>
    );
};

export default PostEvent;