import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";

const DoctorForm = ({ refreshDoctors }) => {
  const navigate=useNavigate();
  const [doctor, setDoctor] = useState({
    name: "",
    email: "",
    qualification: "",
    city: "",
    state: "",
    country: "",
    consultationFee: "",
  });
  const [image, setImage] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  // Handle file selection
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(doctor).forEach((key) => formData.append(key, doctor[key]));
    if (image) formData.append("file", image);

    try {
      await axios.post("http://localhost:8080/api/doctors", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Doctor added successfully!");
      setDoctor({
        name: "",
        email: "",
        qualification: "",
        city: "",
        state: "",
        country: "",
        consultationFee: "",
      });
      setImage(null);
      refreshDoctors(); // Refresh doctor list after adding
    } catch (error) {
      console.error("Error adding doctor:", error);
      alert("Failed to add doctor.");
    }
  };

  return (
    
    <div>
      <Navbar></Navbar>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2>Add Doctor</h2>
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-4 w-25">
          <input type="text" name="name" placeholder="Name" value={doctor.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={doctor.email} onChange={handleChange} required />
          <input type="text" name="qualification" placeholder="Qualification" value={doctor.qualification} onChange={handleChange} required />
          <input type="text" name="city" placeholder="City" value={doctor.city} onChange={handleChange} required />
          <input type="text" name="state" placeholder="State" value={doctor.state} onChange={handleChange} required />
          <input type="text" name="country" placeholder="Country" value={doctor.country} onChange={handleChange} required />
          <input type="number" name="consultationFee" placeholder="Consultation Fee" value={doctor.consultationFee} onChange={handleChange} required />
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <button type="submit">Add Doctor</button>
        </form>
        <br />
        <button className="btn-primary" onClick={() => navigate("/all-doctors")}>show doctors</button>
      </div>
    </div>
  );
};

export default DoctorForm;
