import React from 'react'

const Steps = () => {
  return (
    <div>
      <div className="row p-md-5 m-3 m-md-5">
    <div className="col-md-7">
        <div className="row gap-5">
            <div className="col-md-11">
                <div className="row">
                    <div className="col">
                        <h6>HOW IT WORKS</h6>
                        <h3>Easy Step to Get Private Nursing</h3>
                        <p>
                            Volutpat nullam leo velit mollis litora vivamus turpis gravida integer. Sed aenean
                            tempor dolor ipsum ridiculus elit velit pellentesque dictumst.
                        </p>
                    </div>
                </div>
                <div className="row my-md-1">
                    <div className="col-md col-11">
                        {[1, 2, 3, 4].map((step, index) => (
                            <div key={index}>
                                <div className="row gap-2 my-3">
                                    <div 
                                        className="col-1 rounded text-white mx-3 d-flex fs-2 justify-content-center align-items-center"
                                        style={{ backgroundColor: index === 0 ? "#3d9aa1" : "#b7e6e9", color: index === 0 ? "white" : "#3d9aa1" }}
                                    >
                                        {step}
                                    </div>
                                    <div className="col-md-9 col-9">
                                        <div className="row">
                                            <div className="col-md-12 fs-4 fw-bolder">
                                                Make an Appointment
                                            </div>
                                            <div className="col-md-12">
                                                Ultricies odio arcu inceptos orci pulvinar mus. Himenaeos sollicitudin
                                                mauris quis ac scelerisque lobortis auctor nec.
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
        <img 
            src="https://tebewebe.online/ivycare/wp-content/uploads/sites/105/2024/04/portrait-of-young-asian-smiling-female-nurse-working-on-laptop-in-private-clinic-positive-emotional-3.jpg"
            className="img-fluid h-100 rounded-3" 
            alt="Nurse Working"
            style={{ objectFit: "cover" }}
        />
        <img 
            src="https://tebewebe.online/ivycare/wp-content/uploads/sites/105/2024/04/health-insurance-service-young-asian-caregiver-nurse-examine-senior-man-or-woman-patient-at-home-1-e1714026481357.jpg"
            alt="Caregiver Examining Patient" 
            className="rounded-3 d-md-block d-none" 
            style={{ width: "40vh", position: "absolute", left: "-1em", top: "20em" }}
        />
    </div>
</div>

    </div>
  )
}

export default Steps
