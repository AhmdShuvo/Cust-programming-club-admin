import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import OutlinedCard from './User';
import User from './User';

const DashboardHome = () => {

  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("https://desolate-headland-20264.herokuapp.com/users").then(res => res.json()).then(data => setUsers(data))
  }, [])

  console.log(users);
  return (
    <Container>
           
      <section className='form-container'>
        <div className='form' >
        <center> <h1>Users </h1></center>

          <div style={{display:"grid",gridTemplateColumns:'auto auto auto',gridGap:"20px"}}>
          {

            users.map(user=><OutlinedCard
            key={user._id}
            user={user}
            ></OutlinedCard>)
          }
          </div>



        </div>


      </section>


    </Container>
  );
};

export default DashboardHome;