import './App.css';
import Home from './pages/Home';
import Room from './pages/Room';
import DoctorForm from './pages/DoctorForm.js';
import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Component/Navbar.js';
import Hero from './Component/Hero.js';
import ThreeBoxes from './Component/ThreeBoxes.js';
import About from './Component/About.js';
import ServicesSection from './Component/ServicesSection.js';
import Steps from './Component/Steps.js';
import WebHome from './pages/webpages/WebHome.js';
import DoctorList from './pages/DoctorList.js';

function App() {

   const [refresh, setRefresh] = useState(false);
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<WebHome/>}></Route>
        <Route path="/all-doctors" element={<DoctorList/>}></Route>

         {/* <Route path="/" element={<Home></Home>}></Route>
         <Route path="/room/:roomId" element={<Room></Room>}></Route> */}
       </Routes>
    </BrowserRouter>

    // <div>
    //     <DoctorForm refreshDoctors={() => setRefresh(!refresh)} />
    //     <DoctorList key={refresh} />

        // <Navbar></Navbar>
        // <Hero></Hero>
        // <ThreeBoxes></ThreeBoxes>
        // <About></About>
        // <ServicesSection/>
        // <Steps/> 
        



    // </div>
  );
}

export default App;
