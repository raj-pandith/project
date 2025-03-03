import React from 'react'

const Prompt = ({fetchPrompt,modifyQuestion,question}) => {
  function dualWork(e){
    fetchPrompt(e)
    let inputClear=document.querySelector("#input").value="";
  }

  return (
     <div className="form d-flex justify-content-center" style={{position:"relative",top:"50%",width:"100%"}}>
        <input type="text" 
          className='promptfield'
         placeholder='say your health problem' id="input" value={question} onChange={e=>modifyQuestion(e.target.value)} required/>
        <button type="submit" className='send-btn px-5' onClick={(e)=>dualWork(e)}>
          send
        </button>
    </div>
  )
}

export default Prompt
