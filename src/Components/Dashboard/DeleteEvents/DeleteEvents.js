import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, CardMedia, Container } from '@mui/material';


function Row(props) {
  const { event } = props;
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = useState();
  const [events, setEvent] = useState([])

  const handleDelete = id => {

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
  useEffect(() => {
    fetch('https://desolate-headland-20264.herokuapp.com/currentevents')
    .then(res => res.json())
    .then(data => setEvent(data))
  }, [])

  
  return (
    // =============  From hare start showing table data  ====================
    <React.Fragment>
      <StyledTableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <StyledTableCell align="center">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" align="center">{event.title}</StyledTableCell>
        <StyledTableCell align="center">{event.time.slice(0, 10)}</StyledTableCell>
        <StyledTableCell align="center">{event.time.slice(11,)}</StyledTableCell>
        <StyledTableCell align="center">
          <Button onClick={() => handleDelete(event._id)}><DeleteIcon></DeleteIcon></Button>
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto">
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                DESCRIPTION
              </Typography>
              {/*  this is nested table or accordians where showing the  description of events  */}
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {/* {event.image} */}
                  <CardMedia
                    component="img"
                    height="150"
                    style={{ width: "150px" }}
                    image={`data:image/png;base64,${event.image}`}
                    alt="green iguana"
                  />
                  {event.description}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </StyledTableRow>
    </React.Fragment>
  );
}


// =============Style for Table column and Row===========

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: "bold"
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

export default function DeleteEvents() {

  // ================= Fetching data from API ===========================
  const [success, setSuccess] = useState();
  const [events, setEvent] = useState([])
  const handleDelete = id => {

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
            const remaining = events.filter((order) => order._id !== id);
            setEvent(remaining);
          }
        }).finally(()=>{
          window.location.reload()
        });
    }
  };
  useEffect(() => {
    fetch('https://desolate-headland-20264.herokuapp.com/currentevents').then(res => res.json()).then(data => setEvent(data))
  }, [])
events.map(event=><div>
    <h1>{event.title}</h1>
    <p>{event.description}</p>
<p>{event.time}</p>
    <img alt='' width="200px" src={`data:image/png;base64,${event.image}`}></img>
    <Button onClick={()=>handleDelete(event._id)}><DeleteIcon></DeleteIcon></Button>
</div>)

            
  return (
    <Container style={{ color: "white", borderRadius: "20px", marginBottom: "50px" }}>
      <center><h1 style={{ color: "white", marginBottom: "50px", marginTop: "40px" }}>Manage ALl Blogs </h1></center>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          {/* ===========Here is the headings of table =====================*/}
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Details</StyledTableCell>
              <StyledTableCell align="center" >EVENTS NAME</StyledTableCell>
              <StyledTableCell align="center" >DATE</StyledTableCell>
              <StyledTableCell align="center" >TIME</StyledTableCell>
              <StyledTableCell align="center" >ACTION</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* ==================send data to the above code which is for table data ================*/}
            {events.map((event) => (
              <Row key={event._id} event={event} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )};
