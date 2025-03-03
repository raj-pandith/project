import { useState, useEffect } from "react";
import axios from "axios";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

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
      <h2>Doctors List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Qualification</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Consultation Fee</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.name}</td>
              <td>{doctor.email}</td>
              <td>{doctor.qualification}</td>
              <td>{doctor.city}</td>
              <td>{doctor.state}</td>
              <td>{doctor.country}</td>
              <td>${doctor.consultationFee}</td>
              <td>
                {doctor.image ? (
                  <img src={`data:image/png;base64,${doctor.image}`} alt="Doctor" width="50" height="50" />
                ) : (
                  "No Image"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorList;
