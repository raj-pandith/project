// import React from 'react'
// const ThreeBoxes = () => {
//   return (
//     <div className='row'>
//       <div className="row gap-5 px-5 p-3 text-light" style={{ backgroundColor: "#2d7479" }}>
//         <div className="col-lg-3 rounded-3 px-5 py-4 offset-lg-1" style={{ backgroundColor: "#3d9aa1" }}>
//           <div className="row">
//             <div className="col-lg-3 fs-1 text-lg-center">
//               <i className="ri-shield-check-line"></i>
//             </div>
//             <div className="col-lg-9">
//               <h5>Satisfaction Guarantee</h5>
//               <h6>Lobortis augue pede vitae conubia non ad mauris erat blandit.</h6>
//             </div>
//           </div>
//         </div>

//         <div className="col-lg-3 rounded-3 px-5 py-4" style={{ backgroundColor: "#3d9aa1" }}>
//           <div className="row">
//             <div className="col-lg-3 fs-1 text-lg-center">
//               <i className="ri-group-line"></i>
//             </div>
//             <div className="col-lg-9">
//               <h5>Professional Nurse</h5>
//               <h6>Lobortis augue pede vitae conubia non ad mauris erat blandit.</h6>
//             </div>
//           </div>
//         </div>
        
//         <div className="col-lg-3 rounded-3 px-5 py-4" style={{ backgroundColor: "#3d9aa1" }}>
//           <div className="row">
//             <div className="col-lg-3 fs-1 text-lg-center">
//               <i className="ri-money-rupee-circle-line"></i>
//             </div>
//             <div className="col-lg-9">
//               <h5>Low Cost Service</h5>
//               <h6>Lobortis augue pede vitae conubia non ad mauris erat blandit.</h6>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ThreeBoxes
import React from 'react';

const ThreeBoxes = () => {
  return (
    <div className="row">
      <div className="row gap-5 px-5 p-3 text-light" style={{ backgroundColor: "#2d7479" }}>
        
        {/* Satisfaction Guarantee Box */}
        <div className="col-lg-3 rounded-3 px-5 py-4 offset-lg-1" style={{ backgroundColor: "#3d9aa1" }}>
          <div className="row">
            <div className="col-lg-3 fs-1 text-lg-center">
              <i className="ri-shield-check-line"></i>
            </div>
            <div className="col-lg-9 text-center">
              <h5 style={{ color: "black" }}>100% Satisfaction Guarantee</h5>
              <h6>We ensure the highest quality of service and customer satisfaction.</h6>
            </div>
          </div>
        </div>

        {/* Professional Nurse Box */}
        <div className="col-lg-3 rounded-3 px-5 py-4" style={{ backgroundColor: "#3d9aa1" }}>
          <div className="row">
            <div className="col-lg-3 fs-1 text-lg-center">
              <i className="ri-group-line"></i>
            </div>
            <div className="col-lg-9 text-center">
              <h5 style={{ color: "black" }}>Experienced Professional Nurses</h5>
              <h6>Our team of certified nurses are dedicated to providing exceptional care.</h6>
            </div>
          </div>
        </div>
        
        {/* Low-Cost Service Box */}
        <div className="col-lg-3 rounded-3 px-5 py-4" style={{ backgroundColor: "#3d9aa1" }}>
          <div className="row">
            <div className="col-lg-3 fs-1 text-lg-center">
              <i className="ri-money-rupee-circle-line"></i>
            </div>
            <div className="col-lg-9 text-center">
              <h5 style={{ color: "black" }}>Affordable Care Plans</h5>
              <h6>We offer competitive and low-cost services without compromising quality.</h6>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ThreeBoxes;