// import React, { useEffect } from 'react'
// import NavBarChatBot from './Components/NavBarChatBot.js'
// import Prompt from './Components/Prompt.js'
// import axios from 'axios'
// import { useState } from 'react'
// import Navbar from './Component/Navbar.js'
// import "./App.css"

// const ChatApp = () => {

//     let [question,setQuestion]=useState("");
//     let [ans,setAns]=useState("");

//     async function fetchPrompt(){
//         addMessage(true);
//       try{
//           const fetchContent=await axios({
//             url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyADP20dzPgLwwkD5VBfJJbG5-Uy8CaDN3A",
//               method:"post",
//               data:{contents:[{parts:[{text:question+"suggest to cure myself with medicin or home remidies but in  short for longer suggestion and proper presentation strickly only in 2-3 lines"}]}]}
//             })
            
//                let  respond=fetchContent.data.candidates[0].content.parts[0].text;
//                    ans = respond.replaceAll('*', ''); 
//                    ans = ans.replaceAll('#', ''); 
//                  setAns(ans);
                 
//                 }catch(err){

//                     setAns(err.message +": please check the internet connection ! ");
//        }
//     }

    
//   useEffect(() => {
//         if (ans) {
//             addMessage(false);
//         }
//     }, [ans]); 



//     function addMessage(isUser){

//         let container=document.querySelector(".msg-container");
//         let div=document.createElement('div');
//         let p=document.createElement('p');
//         let boldiv=document.createElement('div');
//         if(isUser){
//             boldiv.classList.add('right-boll')
//             div.classList.add('right-text')
//             p.innerText=question;
//         }else{
//             boldiv.classList.add('left-boll')
//             div.classList.add('left-text')
//             p.innerText=ans;
//         }
//         div.appendChild(boldiv);
//         div.appendChild(p);
//         container.appendChild(div);
//         console.log(container)
//     }
    

//   return (
//     <div style={{backgroundColor:"skyblue",height:"100vh"}}>
//       <Navbar></Navbar>
//     <div className='container  d-flex flex-column align-items-center '  >
//         <NavBarChatBot/>
//             <div className='msg-container' style={{height:"60vh",width:"70vw"}}>
//                 <div className='left-text' style={{textAlign:"left"}}>
//                     <div class='left-boll '></div>
//                     <p>what health problem do you have?</p>
//                  </div>
//             </div>
//         <Prompt fetchPrompt={fetchPrompt} modifyQuestion={setQuestion}/>
      
//     </div>
//     </div>
//   )
// }

// export default ChatApp

// import React, { useEffect, useRef } from "react";
// import NavBarChatBot from "./Components/NavBarChatBot.js";
// import Prompt from "./Components/Prompt.js";
// import axios from "axios";
// import { useState } from "react";
// import Navbar from "./Component/Navbar.js";
// import "./App.css";

// const ChatApp = () => {
//   let [question, setQuestion] = useState("");
//   let [ans, setAns] = useState("");
//   const containerRef = useRef(null);

//   async function fetchPrompt() {
//     addMessage(true);
//     try {
//       const fetchContent = await axios({
//         url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_API_KEY",
//         method: "post",
//         data: {
//           contents: [
//             {
//               parts: [
//                 {
//                   text:
//                     question +
//                     " suggest to cure myself with medicine or home remedies but in short for longer suggestion and proper presentation strictly only in 2-3 lines",
//                 },
//               ],
//             },
//           ],
//         },
//       });

//       let respond = fetchContent.data.candidates[0].content.parts[0].text;
//       ans = respond.replaceAll("*", "").replaceAll("#", "");
//       setAns(ans);
//     } catch (err) {
//       setAns(err.message + ": please check the internet connection!");
//     }
//   }

//   useEffect(() => {
//     if (ans) {
//       addMessage(false);
//     }
//   }, [ans]);

//   function addMessage(isUser) {
//     let container = containerRef.current;
//     let div = document.createElement("div");
//     let p = document.createElement("p");
//     let boldiv = document.createElement("div");

//     if (isUser) {
//       boldiv.classList.add("right-boll");
//       div.classList.add("right-text");
//       p.innerText = question;
//     } else {
//       boldiv.classList.add("left-boll");
//       div.classList.add("left-text");
//       p.innerText = ans;
//     }
//     div.appendChild(boldiv);
//     div.appendChild(p);
//     container.appendChild(div);

//     // Smooth scroll to latest message
//     container.scrollTop = container.scrollHeight;
//   }

//   return (
//     <div className="chat-app">
//       <Navbar />
//       <div className="chat-container">
//         <NavBarChatBot />
//         <div ref={containerRef} className="msg-container">
//           <div className="left-text">
//             <div className="left-boll"></div>
//             <p>What health problem do you have?</p>
//           </div>
//         </div>
//         <Prompt fetchPrompt={fetchPrompt} modifyQuestion={setQuestion} />
//       </div>
//     </div>
//   );
// };

// export default ChatApp;
import React, { useEffect, useRef, useState } from 'react'
import NavBarChatBot from './Components/NavBarChatBot.js'
// import Prompt from './Components/Prompt.js'
import axios from 'axios'
import Navbar from './Component/Navbar.js'
import "./App.css"

const ChatApp = () => {

    const [question, setQuestion] = useState("");
    const [ans, setAns] = useState([]);
    const chatContainerRef = useRef(null);

    async function fetchPrompt() {
        addMessage(true);
        try {
            const fetchContent = await axios({
                url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyADP20dzPgLwwkD5VBfJJbG5-Uy8CaDN3A",
                method: "post",
                data: { contents: [{ parts: [{ text: question + " suggest to cure myself with medicine or home remedies but in short and proper presentation" }] }] }
            });

            let respond = fetchContent.data.candidates[0].content.parts[0].text;
            let cleanedAns = respond.replaceAll('*', '');
            cleanedAns = cleanedAns.replaceAll('#', '');
            setAns(prevAns => [...prevAns, { message: cleanedAns, isUser: false }]);

        } catch (err) {
            setAns(prevAns => [...prevAns, { message: err.message + ": please check the internet connection!", isUser: false }]);
        }
    }

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [ans]);

    function addMessage(isUser) {
        setAns(prevAns => [...prevAns, { message: question, isUser: true }]);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && question.trim() !== '') {
            fetchPrompt();
            setQuestion('');
        }
    }

    const handleSend = () => {
        if (question.trim() !== '') {
            fetchPrompt();
            setQuestion('');
        }
    }

    return (
        <div style={{ backgroundColor: "skyblue", height: "100vh" }}>
            <Navbar />
            <div className='container d-flex flex-column align-items-center'>
                <NavBarChatBot />
                <div className='msg-container' ref={chatContainerRef} style={{ height: "60vh", width: "80vw",margin:"10px", overflowY: "auto" }}>
                    <div className='left-text' style={{ textAlign: "left", margin:"20px"}}>
                        <div className='left-boll'></div>
                        <p>What health problem do you have?</p>
                    </div>
                    {ans.map((response, index) => (
                      <div className='m-3'>
                        <div key={index}  className={response.isUser ? 'right-text' : 'left-text'}>
                            <div className={response.isUser ? 'right-boll' : 'left-boll'}></div>
                            <p>{response.message}</p>

                        </div>
                      </div>
                    ))}
                </div>
                <div className="input-container d-flex" style={{ marginTop: "20px", width: "70vw" }}>
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type your question here..."
                        style={{ width: "80%", padding: "10px", borderRadius: "50px" }}
                    />
                    <button onClick={handleSend} style={{ width: "20%", padding: "10px", borderRadius: "50px", backgroundColor: "#4CAF50", color: "white" }}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatApp;