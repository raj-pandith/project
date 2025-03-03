import React, { useEffect } from 'react'
import NavBarChatBot from './Components/NavBarChatBot.js'
import Prompt from './Components/Prompt.js'
import axios from 'axios'
import { useState } from 'react'
import Navbar from './Component/Navbar.js'
import "./App.css"

const ChatApp = () => {

    let [question,setQuestion]=useState("");
    let [ans,setAns]=useState("");

    async function fetchPrompt(){
        addMessage(true);
      try{
          const fetchContent=await axios({
            url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyADP20dzPgLwwkD5VBfJJbG5-Uy8CaDN3A",
              method:"post",
              data:{contents:[{parts:[{text:question+"suggest to cure myself with medicin or home remidies but in short and proper presentation"}]}]}
            })
            
               let  respond=fetchContent.data.candidates[0].content.parts[0].text;
                   ans = respond.replaceAll('*', ''); 
                   ans = ans.replaceAll('#', ''); 
                 setAns(ans);
                 
                }catch(err){

                    setAns(err.message +": please check the internet connection ! ");
       }
    }

    
  useEffect(() => {
        if (ans) {
            addMessage(false);
        }
    }, [ans]); 



    function addMessage(isUser){

        let container=document.querySelector(".msg-container");
        let div=document.createElement('div');
        let p=document.createElement('p');
        let boldiv=document.createElement('div');
        if(isUser){
            boldiv.classList.add('right-boll')
            div.classList.add('right-text')
            p.innerText=question;
        }else{
            boldiv.classList.add('left-boll')
            div.classList.add('left-text')
            p.innerText=ans;
        }
        div.appendChild(boldiv);
        div.appendChild(p);
        container.appendChild(div);
        console.log(container)
    }
    

  return (
    <div style={{backgroundColor:"skyblue",height:"100vh"}}>
      <Navbar></Navbar>
    <div className='container  d-flex flex-column align-items-center '  >
        <NavBarChatBot/>
            <div className='msg-container' style={{height:"60vh",width:"70vw"}}>
                <div className='left-text' style={{textAlign:"left"}}>
                    <div class='left-boll '></div>
                    <p>what health problem do you have?</p>
                 </div>
            </div>
        <Prompt fetchPrompt={fetchPrompt} modifyQuestion={setQuestion}/>
      
    </div>
    </div>
  )
}

export default ChatApp
