import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




export default function DeleteNotice() {
    const [success, setSuccess] = React.useState();
    const [notices,setNotice]=React.useState([])
    const handleDelete = id => {

        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed === true) {
          const url = `https://desolate-headland-20264.herokuapp.com/notice/${id}`;
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
                const remaining = notices.filter((order) => order._id !== id);
                setNotice(remaining.reverse());
              }
            }).finally(()=>{
            alert("deleted Succefully")
            });
        }
      };
      React.useEffect(() => {
        fetch('https://desolate-headland-20264.herokuapp.com/notice').then(res => res.json()).then(data => setNotice(data.reverse()))
      }, [])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Notice Subject</StyledTableCell>
            <StyledTableCell align="right">Post Date</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {notices.map((notice) => (
            <StyledTableRow key={notice._id}>
              <StyledTableCell component="th" scope="row">
                {notice.Subject}
              </StyledTableCell>
              <StyledTableCell align="right">{notice.date}</StyledTableCell>
              <StyledTableCell align="right"><Button onClick={()=>handleDelete(notice._id)}><DeleteIcon></DeleteIcon></Button></StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
