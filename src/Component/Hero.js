import React from 'react'

const Hero = () => {
  return (
    <div className='row gap-3' style={{height:"100vh"}}>
        <div className='col d-flex align-items-center justify-content-center w-75'>
             <h3 className='fs-2'>This is online Doctor Consultant service</h3>
        </div>
        <div className='col d-flex align-item-center justify-content-center'>
             <img src={"https://cdn.wallpapersafari.com/58/72/hdFWYX.jpg"} className='img 'width={"1000px"} alt="" />
        </div>
    </div>
  )
}

export default Hero
