import React from 'react';
import { useNavigate } from "react-router-dom";
import FirstAidDownload from './DownloadPDF';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="  navbar navbar-expand-lg navbar-light bg-white shadow px-4 py-3" style={{ fontSize: '1.2rem' }}>
      <div className="container-fluid">
        <a className="navbar-brand fs-2 fw-bold text-primary" href="#" onClick={() => navigate('/')}>HealthCare24</a>
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className='nav-link text-primary active ' aria-current="page" onClick={() => navigate("/all-doctors")} style={{ cursor: 'pointer' }}>Doctors</a>
            </li>
            <li className="nav-item">
               <a className="nav-link text-primary" style={{fontWeight:'400',cursor:"pointer"}}  onClick={()=>navigate("/healthmate")}>MediBot</a>
            </li>

            <li className="nav-item">
               <a className="nav-link text-primary" style={{fontWeight:'400',cursor:"pointer"}}  onClick={()=>navigate(`/room/${Date.now()}`)}>Rooms</a>
            </li>

            <li className="nav-item">
               <a className="nav-link text-primary" style={{fontWeight:'400',cursor:"pointer"}}  onClick={()=>navigate(`/DownloadPDF`)}>FirstAid</a>
            </li>
          </ul>
          <form className="d-flex ms-lg-3 mt-3 mt-lg-0" role="search">
            <input className="form-control me-2 fs-5 border-0 shadow-sm" type="search" placeholder="Search" aria-label="Search" style={{ maxWidth: '200px' }}/>
            <button className="btn btn-primary fs-5 px-4" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;