import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import HowToRegIcon from '@mui/icons-material/HowToReg';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



export default function Pending() {
  const [rows,setRows]=React.useState([])
  const [success, setSuccess] = React.useState();


  React.useEffect(()=>{
    fetch("http://localhost:9000/users").then(res=>res.json()).then(data=>setRows(data.reverse()))

  },[])


  const handleUpdate=id=>{ 

    fetch(`http://localhost:9000/user/${id}`,{
        method:"PUT",
          headers: { "content-type" :'application/json'},

        body:JSON.stringify()
    }).catch((err)=>console.log(err.message)).finally(()=>{
        window.location.reload()
        alert("Profile Updated")
    })

    
   

    
  

}

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User name </TableCell>
            <TableCell align="right">Email Address</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Action</TableCell>
          
        
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.displayName}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right" component="th" scope="row">
                {row.status==="approved"? <BeenhereIcon></BeenhereIcon>:"Not approved"}
              </TableCell>
            
            {row.status!=="approved"&&  <TableCell align="right"><Button onClick={()=>handleUpdate(row._id)}><HowToRegIcon /></Button></TableCell>}
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
