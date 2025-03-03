// import React from 'react'
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {

//    const navigate = useNavigate();

//   return (
//     <div className='' style={{cursor:"pointer"}}>
//       <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{"backgroundColor":""}}>
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#" onClick={()=>navigate('/')}>HeadthCare24</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
         
//             <a className='nav-link active' aria-current="page" onClick={() => navigate("/all-doctors")}>Doctors</a>
//         </li>
//         <li class="nav-item">

//           <a class="nav-link"  onClick={()=>navigate("/healthmate")}>MediBot</a>
//         </li>
//         {/* <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul class="dropdown-menu">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             <li><hr class="dropdown-divider"/></li>
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li> */}
//         {/* <li class="nav-item">
//           <a class="nav-link disabled" aria-disabled="true">Disabled</a>
//         </li> */}
//       </ul>
//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//     </div>
//   )
// }

// export default Navbar

import React from 'react';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-lg px-4 py-3" style={{ fontSize: '1.2rem' }}>
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
              <a className='nav-link text-primary active fw-semibold' aria-current="page" onClick={() => navigate("/all-doctors")} style={{ cursor: 'pointer' }}>Doctors</a>
            </li>
            <li className="nav-item">
               <a class="nav-link"  onClick={()=>navigate("/healthmate")}>MediBot</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
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