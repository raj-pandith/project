import './App.css';
import Home from './pages/Home';
import Room from './pages/Room';
import DoctorForm from './pages/DoctorForm.js';
import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import WebHome from './pages/webpages/WebHome.js';
import DoctorList from './pages/DoctorList.js';
import MyIssues from './Component/MyIssues.js';
import ChatApp from './ChatApp.js';
import DownloadPDF from './Component/DownloadPDF.js';
import Footer from './Component/Footer.js';
function App() {
   const [refresh, setRefresh] = useState(false);
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<WebHome/>}></Route>
        <Route path="/all-doctors" element={<DoctorList/>}></Route>
        <Route path="/add-doctor" element={<DoctorForm/>}></Route>
         <Route path="/create-room" element={<Home></Home>}></Route>
         <Route path="/room/:roomId" element={<Room></Room>}></Route>
         <Route path="/send-myissue" element={<MyIssues></MyIssues>}></Route>
         <Route path="/healthmate" element={ <ChatApp/>}></Route>
         <Route path="/DownloadPDF" element={<DownloadPDF/>}></Route>
       </Routes>
        
    </BrowserRouter>
  );
}

export default App;
