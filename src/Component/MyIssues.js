// import React, { useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import Navbar from './Navbar'

// import { useLocation } from "react-router-dom";

// const PatientForm =  ({doctorEmail}) => {

//   let sendBtn=document.querySelector("send-btn");

//     const location = useLocation();
//   const doctoremail = location.state?.email || "No email provided"; 
//   const doctorPhoto = location.state?.img || "No doctor photo provided"; 
//   const doctorName = location.state?.doctorName || "No doctor name "; 
//   const fee = location.state?.fee || "doctor fee "; 
//   const doctorQuali = location.state?.doctorQuali || "doctor qualification "; 
//   if(doctorEmail==="No email provided"){
//     alert("no doctor email is provided")
//   }

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     age: "",
//     gender: "",
//     healthproblem:"",
//     email: doctoremail,
//   });

//   const [file, setFile] = useState(null);
//   const[loading,setLoading]=useState(false);
//   const[confim,setConfim]=useState(false);

  

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!file) {
//       alert("Please upload a document");
//       return;
//     }

//     const formDataToSend = new FormData();
//     Object.keys(formData).forEach((key) => {
//       formDataToSend.append(key, formData[key]);
//     });
//     formDataToSend.append("file", file);

//     try {
//       setLoading(false);
//       const response = await axios.post("http://localhost:8080/send-email", formDataToSend, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       alert(response.data);
//       // setConfim(true);
//       // setLoading(false);
//         sendBtn.textContent="sent"
//     } catch (error) {
//       console.error("Error sending email:", error);
//       alert("Failed to send email.");
//     }
// };

//   return (
//     <div>
//       <Navbar></Navbar>
//     <div className="row">
//         <div className="col">
//             <img src={doctorPhoto} alt="" className="img " style={{borderRadius:"100%",width:"10vw"}}/>
//              <h3>{doctorName}</h3>
//            <input type="email" name="email" placeholder="doctor Email" className="border-0" value={doctoremail} required readOnly />
//            <input type="email" name="email" placeholder="doctor Email" className="border-0" value={doctorQuali} required readOnly />
//            <input type="email" name="email" placeholder="doctor Email" className="border-0" value={"Rs."+fee} required readOnly />
//         </div>
        
//      { 
     
//      loading===false?(<form onSubmit={handleSubmit} className="col">

//         <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required /><br />
//         <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required /><br />
//         <input type="text" name="address" placeholder="Address" onChange={handleChange} required /><br />
//         <input type="number" name="age" placeholder="Age" onChange={handleChange} required /><br />
//         <select name="gender" onChange={handleChange} required>
//           <option value="">Select Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Other">Other</option>
//         </select><br />
//         <textarea type="text" name="healthproblem" placeholder="enter your health issue" onChange={handleChange} required style={{width:"60vw",height:"30vh"}} /><br />
//         <input type="file" onChange={handleFileChange} required/><br />
//         <button type="submit" className="send-btn">send</button>
//       </form>):""

      

//   }

//   {
//     confim===true?<h2>email sent successfully</h2>:""
//   }
//     </div>
//     </div>
//   );
// };

// export default PatientForm;

import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import "./PatientForm.css"; // Importing external CSS file

const MyIssues = () => {
  const location = useLocation();
  const doctoremail = location.state?.email || "No email provided";
  const doctorPhoto = location.state?.img || "No doctor photo provided";
  const doctorName = location.state?.doctorName || "No doctor name";
  const fee = location.state?.fee || "Doctor fee";
  const doctorQuali = location.state?.doctorQuali || "Doctor qualification";

  if (doctoremail === "No email provided") {
    alert("No doctor email is provided");
  }

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    age: "",
    gender: "",
    healthproblem: "",
    email: doctoremail,
  });

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload a document");
      return;
    }

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
    formDataToSend.append("file", file);

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:8080/send-email", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(response.data);
      setConfirm(true);
      setLoading(false);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

    <div className="container">
      <div className="form-container">
        <div className="doctor-details">
          <img src={doctorPhoto} alt="Doctor" className="doctor-photo" />
          <h3>{doctorName}</h3>
          <p>{doctorQuali}</p>
          <p>Fee: Rs. {fee}</p>
        </div>
      <h6>About your HealthProblem</h6>
        {!loading ? (
          <form onSubmit={handleSubmit} className="patient-form">
            <input type="text" name="name" placeholder="patient Name" onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
            <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
            <select name="gender" onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <textarea name="healthproblem" placeholder="Enter your health issue" onChange={handleChange} required></textarea>
            <label htmlFor="file"><h6>Any Reports ?</h6></label>
            <input type="file" id="file" onChange={handleFileChange} required />
            <button type="submit" className="submit-btn">Send</button>
          </form>
        ) : (
          <p className="loading-text">Sending...</p>
        )}
        {confirm && <h2 className="success-message">Email sent successfully!</h2>}
      </div>
    </div>
        </>
  );
};

export default MyIssues;
