import { Container } from '@mui/material';
import React, { useState } from 'react';

import { Document, Page } from 'react-pdf';

const Notice = () => {
    
    const [PdfFile,setFile]=useState(null)
    const [viewPdf, setViewPdf]=useState(null);
    console.log(PdfFile);
    const fileType=['application/pdf'];
    const handleChange=e=>{
        let selectedFile=e.target.files[0];
        if(selectedFile){
          if(selectedFile&&fileType.includes(selectedFile.type)){
            let reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onloadend = (e) =>{
                  setFile(e.target.result);
                 
                }
          }
          else{
            setFile(null);
           
          }
        }
        else{
          console.log('select your file');
        }
          



    };


    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    const handleSubmit=e=>{
e.preventDefault()
fetch("http://localhost:9000/pdf",{
         
    method:"POST",headers:{"content-type":'application/pdf'},
    body:PdfFile

    }).then(
        response => response.json() // if the response is a JSON object
      ).then(
        success => console.log(success) // Handle the success response object
      ).catch(
        error => console.log(error) // Handle the error response object
      ).finally(()=>{

        alert("suu")
      });
    

    }
    return (
        <Container style={{backgroundColor:'white'}}>
           <form action="" onSubmit={handleSubmit}>
           <input onChange={handleChange} type="file" accept='application/pdf' name="" id="" />
           <button type="submit">Submit</button>
           </form>




            
        </Container>
    );
};

export default Notice;