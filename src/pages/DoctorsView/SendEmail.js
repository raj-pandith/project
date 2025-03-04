import { useState } from "react";

const SendEmail = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "Appointment Details",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      setStatus("Error sending email.");
    }
  };

  return (
    <div className="container">
      <h2>Send Appointment Email</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Patient's Email" required onChange={handleChange} />
        <textarea name="message" placeholder="Enter appointment details" required onChange={handleChange}></textarea>
        <button type="submit">Send Email</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default SendEmail;
