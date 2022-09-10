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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



export default function BasicTable() {
  const [rows,setRows]=React.useState([])
  const [success, setSuccess] = React.useState();


  React.useEffect(()=>{
    fetch("http://localhost:9000/blogs").then(res=>res.json()).then(data=>setRows(data))

  },[])


  const handleDelete = id => {

    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed === true) {
      const url = `http://localhost:9000/blog/${id}`;
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
            const remaining = rows.filter((event) => event._id !== id);
            setRows(remaining);
          }
        });
    }
  };


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Blog Heading</TableCell>
            <TableCell align="right">Posted by</TableCell>
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
                {row.heading}
              </TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right"><Button onClick={()=>handleDelete(row._id)}><DeleteIcon/></Button></TableCell>
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
