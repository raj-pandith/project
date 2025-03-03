// import React from 'react'

// const ServicesSection = () => {
//   return (
// <div>
//  <div className="row text-center p-md-5">
//   <div className="col-12">
//     <h5 style={{ color: "#e275b6" }}>OUR SERVICES</h5>
//     <div className="row">
//       <div className="col-md-5 p-3 offset-md-3">
//         <h2>We believe the heart of healthcare is service to others</h2>
//         <h6>
//           Cursus integer conubia erat aenean nisi velit tincidunt molestie
//           curabitur. Suscipit ac feugiat blandit lectus quis maecenas pede
//           mattis.
//         </h6>
//       </div>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-md-12 p-4">
//       <div className="row gap-5">
//         <div className="col-md-3 offset-md-1 border rounded shadow p-4">
//           <i className="ri-home-smile-line" style={{ fontSize: "90px" }}></i>
//           <h5>Home Care Service</h5>
//           <h6>Dignissim lobortis orci porta penatibus ornare blandit massa euismod cursus</h6>
//           <button className="btn btn-primary w-100" style={{ backgroundColor: "#e275b6", border: "none" }}>Learn More →</button>
//         </div>
//         <div className="col-md-3 border rounded shadow p-4">
//           <i className="ri-group-line" style={{ fontSize: "90px" }}></i>
//           <h5>Senior Care Service</h5>
//           <h6>Dignissim lobortis orci porta penatibus ornare blandit massa euismod cursus</h6>
//           <button className="btn btn-primary w-100" style={{ backgroundColor: "#e275b6", border: "none" }}>Learn More →</button>
//         </div>
//         <div className="col-md-3 border rounded shadow p-4">
//           <i className="ri-heart-add-2-line" style={{ fontSize: "90px" }}></i>
//           <h5>Intensive Care Service</h5>
//           <h6>Dignissim lobortis orci porta penatibus ornare blandit massa euismod cursus</h6>
//           <button className="btn btn-primary w-100" style={{ backgroundColor: "#e275b6", border: "none" }}>Learn More →</button>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="row">
//     <div className="col-12 p-4">
//       <div className="row gap-5">
//         <div className="col-md-3 offset-md-1 border rounded shadow p-4">
//           <i className="ri-group-2-fill" style={{ fontSize: "90px" }}></i>
//           <h5>Baby Care Service</h5>
//           <h6>Dignissim lobortis orci porta penatibus ornare blandit massa euismod cursus</h6>
//           <button className="btn btn-primary w-100" style={{ backgroundColor: "#e275b6", border: "none" }}>Learn More →</button>
//         </div>
//         <div className="col-md-3 border rounded shadow p-4">
//           <i className="ri-capsule-fill" style={{ fontSize: "90px" }}></i>
//           <h5>Home Medical Check</h5>
//           <h6>Dignissim lobortis orci porta penatibus ornare blandit massa euismod cursus</h6>
//           <button className="btn btn-primary w-100" style={{ backgroundColor: "#e275b6", border: "none" }}>Learn More →</button>
//         </div>
//         <div className="col-md-3 border rounded shadow p-4">
//           <i className="ri-survey-line" style={{ fontSize: "90px" }}></i>
//           <h5>Health Consultation</h5>
//           <h6>Dignissim lobortis orci porta penatibus ornare blandit massa euismod cursus</h6>
//           <button className="btn btn-primary w-100" style={{ backgroundColor: "#e275b6", border: "none" }}>Learn More →</button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// </div>
//   )
// }

// export default ServicesSection


import React from 'react'

const ServicesSection = () => {
  return (
    <div style={{ marginTop: "0", maxWidth: "1400px", margin: "0 auto" }}>
      <div className="row text-center p-md-5">
        <div className="col-12">
          <h1 style={{ color: "#007bff", fontFamily: "'Arial', sans-serif", fontSize: "48px", fontWeight: "bold" }}>HealthCare24 Services</h1>
          <div className="row justify-content-center">
            <div className="col-md-5 p-3">
              <h2 style={{ fontFamily: "'Arial', sans-serif", fontSize: "32px" }}>
                We believe the heart of healthcare is service to others
              </h2>
              <h6 style={{ fontFamily: "'Arial', sans-serif", fontSize: "20px" }}>
                Our goal is to offer a wide range of services to ensure the best care for you and your loved ones.
              </h6>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 p-4">
            <div className="row gap-5 justify-content-center">
              <div className="col-md-3 border rounded shadow p-4" style={{ width: "300px", backgroundColor: "#f0f8ff", height: "300px" }}>
                <h5 style={{ fontFamily: "'Arial', sans-serif", fontSize: "30px", fontWeight: "bold", color: "#003366" }}>Video Consulting</h5>
                <h6 style={{ fontFamily: "'Arial', sans-serif", fontSize: "18px", fontWeight: "400" }}>
                  Connect with medical professionals from the comfort of your home. Through video consultations, you can access high-quality healthcare advice and diagnosis without leaving your home.
                </h6>
                <a href="https://en.wikipedia.org/wiki/Telemedicine" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary w-100" style={{ backgroundColor: "#007bff", border: "none", marginTop: "auto", fontSize: "18px" }}>
                    Learn More →
                  </button>
                </a>
              </div>
              <div className="col-md-3 border rounded shadow p-4" style={{ width: "300px", backgroundColor: "#f0f8ff", height: "300px" }}>
                <h5 style={{ fontFamily: "'Arial', sans-serif", fontSize: "30px", fontWeight: "bold", color: "#003366" }}>Health Tips</h5>
                <h6 style={{ fontFamily: "'Arial', sans-serif", fontSize: "18px", fontWeight: "400" }}>
                  Get personalized health tips to lead a healthier lifestyle. From diet to exercise, our experts provide guidance on maintaining a balanced lifestyle to improve your overall well-being.
                </h6>
                <a href="https://en.wikipedia.org/wiki/Health" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary w-100" style={{ backgroundColor: "#007bff", border: "none", marginTop: "auto", fontSize: "18px" }}>
                    Learn More →
                  </button>
                </a>
              </div>
              <div className="col-md-3 border rounded shadow p-4" style={{ width: "300px", backgroundColor: "#f0f8ff", height: "300px" }}>
                <h5 style={{ fontFamily: "'Arial', sans-serif", fontSize: "30px", fontWeight: "bold", color: "#003366" }}>Pregnancy Monitoring</h5>
                <h6 style={{ fontFamily: "'Arial', sans-serif", fontSize: "18px", fontWeight: "400" }}>
                  Monitor your pregnancy health with our specialized services. Track key milestones and receive expert advice on ensuring the health of both mother and baby.
                </h6>
                <a href="https://en.wikipedia.org/wiki/Pregnancy" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary w-100" style={{ backgroundColor: "#007bff", border: "none", marginTop: "auto", fontSize: "18px" }}>
                    Learn More →
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 p-4">
            <div className="row gap-5 justify-content-center">
              <div className="col-md-3 border rounded shadow p-4" style={{ width: "300px", backgroundColor: "#f0f8ff", height: "300px" }}>
                <h5 style={{ fontFamily: "'Arial', sans-serif", fontSize: "30px", fontWeight: "bold", color: "#003366" }}>Child Care</h5>
                <h6 style={{ fontFamily: "'Arial', sans-serif", fontSize: "18px", fontWeight: "400" }}>
                  Providing specialized care for your little ones with love and attention. Our child care services cover everything from early health checks to developmental monitoring and more.
                </h6>
                <a href="https://en.wikipedia.org/wiki/Child_care" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary w-100" style={{ backgroundColor: "#007bff", border: "none", marginTop: "auto", fontSize: "18px" }}>
                    Learn More →
                  </button>
                </a>
              </div>
              <div className="col-md-3 border rounded shadow p-4" style={{ width: "300px", backgroundColor: "#f0f8ff", height: "300px" }}>
                <h5 style={{ fontFamily: "'Arial', sans-serif", fontSize: "30px", fontWeight: "bold", color: "#003366" }}>Mental Care</h5>
                <h6 style={{ fontFamily: "'Arial', sans-serif", fontSize: "18px", fontWeight: "400" }}>
                  Providing emotional support and therapy for mental well-being. Our mental care services include therapy, counseling, and mindfulness practices to support mental health.
                </h6>
                <a href="https://en.wikipedia.org/wiki/Mental_health" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary w-100" style={{ backgroundColor: "#007bff", border: "none", marginTop: "auto", fontSize: "18px" }}>
                    Learn More →
                  </button>
                </a>
              </div>
              <div className="col-md-3 border rounded shadow p-4" style={{ width: "300px", backgroundColor: "#f0f8ff", height: "300px" }}>
                <h5 style={{ fontFamily: "'Arial', sans-serif", fontSize: "30px", fontWeight: "bold", color: "#003366" }}>Diet Planning</h5>
                <h6 style={{ fontFamily: "'Arial', sans-serif", fontSize: "18px", fontWeight: "400" }}>
                  Stay healthy with personalized diet plans tailored to your needs. Our expert nutritionists will guide you with meal plans that support your health goals and lifestyle.
                </h6>
                <a href="https://en.wikipedia.org/wiki/Dieting" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary w-100" style={{ backgroundColor: "#007bff", border: "none", marginTop: "auto", fontSize: "18px" }}>
                    Learn More →
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection