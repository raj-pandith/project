// import React from 'react'

// const Hero = () => {
//   return (
//     <div className='row gap-3' style={{height:"100vh"}}>
//         <div className='col d-flex align-items-center justify-content-center w-75'>
//              <h3 className='fs-2'>This is online Doctor Consultant service</h3>
//         </div>
//         <div className='col d-flex align-item-center justify-content-center'>
//              <img src={"https://cdn.wallpapersafari.com/58/72/hdFWYX.jpg"} className='img 'width={"1000px"} alt="" />
//         </div>
//     </div>
//   )
// }

// export default Hero
import React from 'react';

const Hero = () => {
  return (
    <div className='position-relative d-flex flex-column flex-lg-row align-items-center justify-content-end' 
      style={{ 
        height: '100vh', 
        padding: '2rem' 
      }}>

      {/* Black Overlay for Lower Opacity */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: 'url(https://cdn.wallpapersafari.com/58/72/hdFWYX.jpg)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
          filter: 'brightness(90%)' // Darker background for better contrast
        }}>
      </div>

      <div data-aos="fade-left" className='text-white text-end' 
        style={{ 
          maxWidth: '600px',
          width: '100%',
          marginRight: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: '100%',
          fontFamily: 'Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif',
          fontWeight: '900',
          textAlign: 'right'
        }}>
        <h3 
          style={{
            fontSize: 'clamp(3rem, 5vw, 5.5rem)', // Increased font size
            fontWeight: '1000', // Bolder font weight
            lineHeight: '1.2',
            wordBreak: 'break-word',
            whiteSpace: 'normal',
            maxWidth: '550px',
            textShadow:"0px 0px 30px  black"
            
          }}>
          Your Health, <br /> Your Doctor, <br /> Anytime
        </h3>
      </div>

    </div>
  );
};

export default Hero;