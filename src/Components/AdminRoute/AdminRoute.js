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
   return <> <center><h1 style={{color:"white"}}> {!user.email && <h1> Not Logged In </h1>}</h1>
 {!user.email&& <Link to='/login'><Button  variant="contained">Login Now</Button></Link>}
   </center>
   
  {user.email&&  !admin&& <center><h1 style={{color:"white"}}>  {user.email}  Not An Admin</h1></center>}
   </>;
                    
   
};

export default AdminRoute;