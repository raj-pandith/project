import React from "react";

const DownloadPDF = () => {
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

};

export default DownloadPDF;
