import { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";
import { Route ,Routes} from "react-router-dom";
import MyIssues from "../Component/MyIssues"

import "./hover.css"

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/doctors");
      setDoctors(response.data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  return (
    <div >
    <Navbar></Navbar>
      <h2 style={{"textAlign":"center"}} className="mt-5">Our Doctors</h2>

      <div className="row  " style={{position:"relative",top:"20px"}}>
    <div > 
      <div className="col d-flex flex-wrap gap-4 p-3" style={{"height":"100vh","cursor":"pointer"}}>
            {doctors.map((doctor) => (
              <tr key={doctor.id} className="d-flex justify-content-start flex-column p-5 border  onhover" style={{borderRadius:"8px"}} >
                <td className="d-flex align-items-center justify-content-center">
                  {doctor.image ? (

                    <div className="pb-1">
                      <img src={`data:image/png;base64,${doctor.image}`} className="" alt="Doctor" width="150vw" height="100vh" />
                    </div>
                  
                ) : (
                    "No Image"
                  )}

                </td>
                <td>DR.{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.qualification}</td>
                <td>{doctor.city +" "+doctor.state}</td>
                <td>Rs.{doctor.consultationFee}</td>
                 <button className="btn btn-primary mt-" onClick={() => navigate("/send-myissue", { state: { fee:doctor.consultationFee,doctorQuali:doctor.qualification,doctorName:doctor.name,email: doctor.email,img:`data:image/png;base64,${doctor.image}` } })}>
                    Request Appointment
               </button>

              </tr>
            ))}
          </div>
      </div>
    </div>
    {/* <button className="btn btn-primary" onSubmit={()=>navigate('/add-doctor')}>add doctor</button> */}
          </div>
  );
};

export default DoctorList;


