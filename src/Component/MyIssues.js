import React from 'react'
import Navbar from './Navbar'
const MyIssues = () => {
  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
     <Navbar></Navbar>
    <div className='row'>
        <div className=' col'>
            <div>
                <input type="text" placeholder='enter patient name' /> <br /> <br />
                <input type="text" placeholder='patient age' /> <br /> <br />
                <input type="number" placeholder='patient phone number'/> <br /> <br />
                <input type="number" placeholder='patient email id'/> <br /> <br />
            </div>
        </div>
        <div className='col'>
         <textarea name="" id="" className='' style={{width:"50vw",height:"60vh"}} placeholder='type your health issue'></textarea>
        </div>
    </div>
    </div>
  )
}

export default MyIssues
