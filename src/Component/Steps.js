// import React from 'react'

// const Steps = () => {
//   return (
//     <div>
//       <div className="row p-md-5 m-3 m-md-5">
//     <div className="col-md-7">
//         <div className="row gap-5">
//             <div className="col-md-11">
//                 <div className="row">
//                     <div className="col">
//                         <h6>HOW IT WORKS</h6>
//                         <h3>Easy Step to Get Private Nursing</h3>
//                         <p>
//                             Volutpat nullam leo velit mollis litora vivamus turpis gravida integer. Sed aenean
//                             tempor dolor ipsum ridiculus elit velit pellentesque dictumst.
//                         </p>
//                     </div>
//                 </div>
//                 <div className="row my-md-1">
//                     <div className="col-md col-11">
//                         {[1, 2, 3, 4].map((step, index) => (
//                             <div key={index}>
//                                 <div className="row gap-2 my-3">
//                                     <div 
//                                         className="col-1 rounded text-white mx-3 d-flex fs-2 justify-content-center align-items-center"
//                                         style={{ backgroundColor: index === 0 ? "#3d9aa1" : "#b7e6e9", color: index === 0 ? "white" : "#3d9aa1" }}
//                                     >
//                                         {step}
//                                     </div>
//                                     <div className="col-md-9 col-9">
//                                         <div className="row">
//                                             <div className="col-md-12 fs-4 fw-bolder">
//                                                 Make an Appointment
//                                             </div>
//                                             <div className="col-md-12">
//                                                 Ultricies odio arcu inceptos orci pulvinar mus. Himenaeos sollicitudin
//                                                 mauris quis ac scelerisque lobortis auctor nec.
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <hr />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className="col-md-5 my-5" style={{ position: "relative" }}>
//         <img 
//             src="https://tebewebe.online/ivycare/wp-content/uploads/sites/105/2024/04/portrait-of-young-asian-smiling-female-nurse-working-on-laptop-in-private-clinic-positive-emotional-3.jpg"
//             className="img-fluid h-100 rounded-3" 
//             alt="Nurse Working"
//             style={{ objectFit: "cover" }}
//         />
//         <img 
//             src="https://tebewebe.online/ivycare/wp-content/uploads/sites/105/2024/04/health-insurance-service-young-asian-caregiver-nurse-examine-senior-man-or-woman-patient-at-home-1-e1714026481357.jpg"
//             alt="Caregiver Examining Patient" 
//             className="rounded-3 d-md-block d-none" 
//             style={{ width: "40vh", position: "absolute", left: "-1em", top: "20em" }}
//         />
//     </div>
// </div>

//     </div>
//   )
// }

// export default Steps


import React from 'react';

const Steps = () => {
  return (
    <div>
      <div className="row p-md-5 m-3 m-md-5">
        <div className="col-md-7">
          <div className="row gap-5">
            <div className="col-md-12">
              <div className="row">
                <div className="col">
                  <h6 className="text-center">HOW IT WORKS</h6>
                  <h3 className="text-center">Easy Steps to Get Private Nursing</h3>
                  <p className="text-center">
                    Follow these simple steps to schedule a private nursing service for your loved ones. Our professional nurses are here to help provide the best care possible.
                  </p>
                </div>
              </div>
              <div className="row my-md-1">
                <div className="col-md col-12">
                  {[1, 2, 3, 4].map((step, index) => (
                    <div key={index}>
                      <div className="row gap-2 my-3">
                        <div 
                          className="col-2 col-sm-1 rounded text-white mx-3 d-flex fs-2 justify-content-center align-items-center"
                          style={{ backgroundColor: index === 0 ? "#3d9aa1" : "#b7e6e9", color: index === 0 ? "white" : "#3d9aa1" }}
                        >
                          {step}
                        </div>
                        <div className="col-md-9 col-9">
                          <div className="row">
                            <div className="col-md-12 fs-4 fw-bolder">
                              {index === 0 ? "Make an Appointment" : index === 1 ? "Consult with Our Nurse" : index === 2 ? "Home Visit Schedule" : "Get Your Care Plan"}
                            </div>
                            <div className="col-md-12">
                              {index === 0 
                                ? "Choose a convenient time for your appointment and book it online."
                                : index === 1
                                ? "Consult with our professional nurse to discuss your requirements."
                                : index === 2
                                ? "Our nurse will visit your home at the scheduled time."
                                : "Receive a customized care plan based on your needs."
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-5 my-5" style={{ position: "relative" }}>
          <div className="position-relative d-flex justify-content-center align-items-center" style={{ maxHeight: "45vh" }}>
            <img 
              src="https://tebewebe.online/ivycare/wp-content/uploads/sites/105/2024/04/portrait-of-young-asian-smiling-female-nurse-working-on-laptop-in-private-clinic-positive-emotional-3.jpg"
              className="img-fluid rounded-3" 
              alt="Nurse Working"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "45vh", // Set height to half of the previous height
              }}
            />
            <img 
              src="https://tebewebe.online/ivycare/wp-content/uploads/sites/105/2024/04/health-insurance-service-young-asian-caregiver-nurse-examine-senior-man-or-woman-patient-at-home-1-e1714026481357.jpg"
              alt="Caregiver Examining Patient" 
              className="rounded-3 d-md-none"
              style={{
                width: "45%", 
                position: "absolute", 
                bottom: "5%", 
                left: "50%", 
                transform: "translateX(-50%)", // Center the second image horizontally
                zIndex: 2, // Ensures this image is on top of the first image
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;