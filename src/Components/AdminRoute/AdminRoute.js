import { Button } from '@mui/material';
import React from 'react';
import { Navigate ,useLocation} from 'react-router';
import useAuth from '../Hooks/useAuth';




const AdminRoute = (props) => {
        
    const location = useLocation();
    const {children,...rest}=props
    const {user,admin,LogOUt}=useAuth()
    console.log(admin);
    if(user.email && admin){
        return children;
    }
   return <> <h1 style={{color:"white"}}> {!admin&& <h1> Looks Like {user.email} not an admin </h1>}</h1>
   
   <Button onClick={LogOUt}>Logout</Button>
   </>;
                    
   
};

export default AdminRoute;