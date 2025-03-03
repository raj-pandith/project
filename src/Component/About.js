// import React from 'react';

// const About = () => {
//   return (
//     <div>
//       <div className="row gap-3 p-4" style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
//         <div className="col-md-5 mx-auto m-3">
//           <div className="row">
//             <div className="col-6">
//               <img
//                 src="https://tebewebe.online/ivycare/wp-content/uploads/sites/105/2024/04/young-orthodontist.jpg"
//                 alt=""
//                 className="img-fluid rounded-4"
//                 style={{ objectFit: "cover", height: "100%" }}
//               />
//             </div>
//             <div className="col-6">
//               <div className="row gap-3">
//                 <div className="col-12">
//                   <img
//                     src="https://tebewebe.online/ivycare/wp-content/uploads/sites/105/2024/04/healthcare-homecare-and-caregiver-with-grandma-to-support-her-in-retirement-medical-and-old-age--e1714026286978.jpg"
//                     alt=""
//                     className="img-fluid rounded-4"
//                   />
//                 </div>
//                 <div className="col-12">
//                   <img
//                     src="https://tebewebe.online/ivycare/wp-content/uploads/sites/105/2024/04/health-insurance-service-young-asian-caregiver-nurse-examine-senior-man-or-woman-patient-at-home-e1714026333745.jpg"
//                     alt=""
//                     className="img-fluid rounded-4"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-5 mx-auto mx-2 m-3 order-first order-sm-2">
//           <div className="row">
//             <h5 className="col-md-12" style={{ color: "#e275b6" }}>ABOUT IVYCARE</h5>
//             <h2 className="col-md-12">We provide the care, you enjoy the peace of mind</h2>
//             <p>
//               Nullam suscipit nec vel senectus habitant augue. Aliquam viverra egestas enim dui montes. Aptent efficitur
//               vestibulum dictumst quis sodales tempor sagittis. Laoreet pellentesque sollicitudin dui facilisi per
//               iaculis.
//             </p>
//             <div className="row">
//               <div className="col-md-2">
//                 <i className="ri-verified-badge-line fs-1"></i>
//               </div>
//               <div className="col-md-10">
//                 <h4>Committed to your health and well-being.</h4>
//               </div>
//             </div>
//           </div>
//           <button className="btn btn-primary my-md-4">Discover More</button>
//         </div>
//       </div>

//       <div className="row background-img">
//         <div className="col-md-12" style={{ backgroundColor: "rgba(0, 0, 0, 0.423)" }}>
//           <div className="row" style={{ height: "100%" }}>
//             <div className="col-md-5 px-5 offset-md-2 text-light my-auto p-2">
//               <h2>Health is wealth, let us help you</h2>
//               <h6>
//                 Suspendisse cras mi primis suscipit si ipsum urna neque faucibus. Senectus eros euismod lacus ultrices
//                 vivamus fusce vehicula porttitor ac. Nulla pellentesque suscipit odio orci congue maecenas quis. Congue
//                 tellus est semper libero primis non
//               </h6>
//               <button className="btn btn-primary">Consultations</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";

const About = () => {
  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto", backgroundColor: "white", textAlign: "center", fontFamily: '"Arial", "Helvetica Neue", "Segoe UI", "Roboto", "Ubuntu", sans-serif' }}>
      <div className="row gap-3 p-4" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0", marginBottom: "0", flexDirection: "row" }}>
        
        {/* Images Section */}
        <div className="col-md-5 mx-auto m-3 d-flex flex-column justify-content-center order-md-1 order-2">
          <div className="row h-100 d-flex flex-column flex-md-row align-items-center">
            <div className="col-12 d-md-flex flex-md-column">
              <img
                src="https://tebewebe.online/ivycare/wp-content/uploads/sites/105/2024/04/young-orthodontist.jpg"
                alt=""
                className="img-fluid rounded-4 w-100"
                style={{ objectFit: "cover", objectPosition: "top", height: "300px", margin: "10px" }}
              />
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <img
                src="https://tebewebe.online/ivycare/wp-content/uploads/sites/105/2024/04/healthcare-homecare-and-caregiver-with-grandma-to-support-her-in-retirement-medical-and-old-age--e1714026286978.jpg"
                alt=""
                className="img-fluid rounded-4"
                style={{ objectFit: "cover", objectPosition: "top", height: "300px", width: "100%", maxWidth: "400px", margin: "10px" }}
              />
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <img
                src="https://tebewebe.online/ivycare/wp-content/uploads/sites/105/2024/04/health-insurance-service-young-asian-caregiver-nurse-examine-senior-man-or-woman-patient-at-home-e1714026333745.jpg"
                alt=""
                className="img-fluid rounded-4"
                style={{ objectFit: "cover", objectPosition: "top", height: "300px", width: "100%", maxWidth: "400px", margin: "10px" }}
              />
            </div>
          </div>
        </div>
        
        {/* Text Section */}
        <div className="col-md-5 mx-auto mx-2 m-3 order-md-2 order-1 d-flex flex-column justify-content-center">
          <h2 className="about-heading" style={{ fontSize: "3rem" }}>Dedicated to Your Health and Well-being</h2>
          <p className="about-text" style={{ fontSize: "1.5rem" }}>
            At HealthCare24, we are committed to providing compassionate healthcare services designed to ensure your comfort and peace of mind. Whether it's homecare, personalized treatment, or ongoing support, we are here to make sure your needs are met with the highest standard of care.
          </p>
          <div className="d-flex align-items-center gap-3 justify-content-center">
            <i className="ri-verified-badge-line icon" style={{ fontSize: "2rem" }}></i>
            <h4 className="about-subheading" style={{ fontSize: "2rem" }}>Your health is our priority, and we're here to help every step of the way.</h4>
          </div>
          <button className="btn btn-primary my-4 about-button" style={{ fontSize: "1.5rem", padding: "15px 30px" }}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;