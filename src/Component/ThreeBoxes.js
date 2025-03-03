import React from 'react'
const ThreeBoxes = () => {
  return (
    <div className='row'>
      <div className="row gap-5 px-5 p-3 text-light" style={{ backgroundColor: "#2d7479" }}>
        <div className="col-lg-3 rounded-3 px-5 py-4 offset-lg-1" style={{ backgroundColor: "#3d9aa1" }}>
          <div className="row">
            <div className="col-lg-3 fs-1 text-lg-center">
              <i className="ri-shield-check-line"></i>
            </div>
            <div className="col-lg-9">
              <h5>Satisfaction Guarantee</h5>
              <h6>Lobortis augue pede vitae conubia non ad mauris erat blandit.</h6>
            </div>
          </div>
        </div>

        <div className="col-lg-3 rounded-3 px-5 py-4" style={{ backgroundColor: "#3d9aa1" }}>
          <div className="row">
            <div className="col-lg-3 fs-1 text-lg-center">
              <i className="ri-group-line"></i>
            </div>
            <div className="col-lg-9">
              <h5>Professional Nurse</h5>
              <h6>Lobortis augue pede vitae conubia non ad mauris erat blandit.</h6>
            </div>
          </div>
        </div>
        
        <div className="col-lg-3 rounded-3 px-5 py-4" style={{ backgroundColor: "#3d9aa1" }}>
          <div className="row">
            <div className="col-lg-3 fs-1 text-lg-center">
              <i className="ri-money-rupee-circle-line"></i>
            </div>
            <div className="col-lg-9">
              <h5>Low Cost Service</h5>
              <h6>Lobortis augue pede vitae conubia non ad mauris erat blandit.</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThreeBoxes
