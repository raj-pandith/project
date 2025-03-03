import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="d-flex justify-content-center align-items-center ps-4" style={{height:"200px",backgroundColor:"rgb(61,154,161)"}}>
          <div className="col-md-3">
            <h5>About Us</h5>
            <p>We provide top-notch healthcare services with a team of expert professionals dedicated to your well-being.</p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="#appointments" className="text-white text-decoration-none">Appointments</a></li>
              <li><a href="#doctors" className="text-white text-decoration-none">Our Doctors</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact Us</a></li>
            </ul>
          </div>
             <div className="col-md-3">
            <h5>Contact Us</h5>
            <p>123 Health St, Wellness City, HC 45678</p>
            <p>Email: support@healthcare.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-4"><FaFacebookF /></a>
              <a href="#" className="text-white fs-4"><FaTwitter /></a>
              <a href="#" className="text-white fs-4"><FaInstagram /></a>
              <a href="#" className="text-white fs-4"><FaLinkedinIn /></a>
            </div>
          </div>
    </footer>
  );
};

export default Footer;
