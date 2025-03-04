import React from "react";
import { useNavigate } from "react-router-dom";

const DownloadPDF = () => {
   
  const navigate=useNavigate();

  const handleDownload = () => {
    const pdfUrl = "/firstAid.pdf"; // Correct path
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "firstAid.pdf"; // Correct file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  handleDownload();
  return(
    <div className="d-flex align-items-center justify-content-center flex-column " style={{height:"100vh"}}>
    <h3 style={{textAlign:"center"}}>Your have downloaded the first aid resource</h3>
    <div>
    <button className="btn btn-primary " onClick={()=>navigate('/')}>Home</button>
    </div>
    </div>
  )

};

export default DownloadPDF;
