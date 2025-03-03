import { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";

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
    <div>
      <Navbar></Navbar>
    <div>
      <h2>Doctors List</h2>
      <div className="row">

      <div className="col d-flex flex-wrap gap-4 border shadow" style={{"height":"100vh","cursor":"pointer"}}>
            {doctors.map((doctor) => (
              <tr key={doctor.id} className="d-flex justify-content-start flex-column p-5  " >
                <td className="d-flex align-items-center justify-content-center">
                  {doctor.image ? (
                    <img src={`data:image/png;base64,${doctor.image}`} className="" alt="Doctor" width="150" height="100" />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.qualification}</td>
                <td>address : {doctor.city +" "+doctor.state}</td>
                <td>${doctor.consultationFee}</td>
                {/* <td><button className="btn btn-primary" onClick={()=>navigate('/create-room')}> request appointment</button></td> */}
                <td><button className="btn btn-primary" onClick={()=>navigate('/send-myissues')}> request appointment</button></td>
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
