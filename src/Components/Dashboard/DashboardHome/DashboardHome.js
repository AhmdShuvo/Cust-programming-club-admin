import { Button } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
const DashboardHome = () => {

   
    const [success, setSuccess] = useState();

    const [events,setEvent]=useState([])
    useEffect(()=>{
fetch('https://desolate-headland-20264.herokuapp.com/currentevents').then(res=>res.json()).then(data=>setEvent(data))
    },[])

    const handleDelete=id=>{
        // console.log(id);

        const proceed = window.confirm('Are you sure you want to delete?');
          if (proceed === true) {
            const url = `https://desolate-headland-20264.herokuapp.com/currentevents/${id}`;
            fetch(url, {
              method: 'DELETE',
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount) {
                  
                  setSuccess(true);
                  setTimeout(() => {
                    setSuccess(false);
                  }, 5000);
                  const remaining = events.filter((event) => event._id !== id);
                  setEvent(remaining);
                }
              });
          }
        };

        console.log(events);


        // fetch(`https://desolate-headland-20264.herokuapp.com/currentevents/${id}`, {
        //     method: 'DELETE',
        // }).then(response => response.json()).then(result=>console.log(result));
    return (
        <div>
            <Container style={{ backgroundColor: "white", padding: '50px', borderRadius: "20px" }}>
               {


events.map(event=><div>
    <h1>{event.title}</h1>
    <p>{event.description}</p>
     {console.log(event.image)}
<p>{event.time}</p>
    <img alt='' width="200px" src={`data:image/png;base64,${event.image}`}></img>
    <Button onClick={()=>handleDelete(event._id)}><DeleteIcon></DeleteIcon></Button>
</div>)

               }
            </Container>
        </div>
    );
};

export default DashboardHome;