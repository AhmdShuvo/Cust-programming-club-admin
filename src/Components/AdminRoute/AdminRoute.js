import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Navigate ,useLocation} from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';




const AdminRoute = (props) => {
    const [admin,setIsAdmin]=useState(false)
    const {user,LogOUt}=useAuth()
        
useEffect(()=>{

      fetch(`https://desolate-headland-20264.herokuapp.com/user/admin/${user.email}`).then(res=>res.json()).then(data=>setIsAdmin(data.admin))
    
    },[user.email])
    const location = useLocation();
    const {children,...rest}=props

    if(user.email && admin){
        return children;
    }
   return <> <h1 style={{color:"white"}}> {!admin&& <h1>  {user.email} not an admin </h1>}</h1>
   
   {user.email?<Button onClick={LogOUt}>Logout</Button>:<Link to="/login" ><Button>Login</Button></Link>}
   </>;
                    
   
};

export default AdminRoute;