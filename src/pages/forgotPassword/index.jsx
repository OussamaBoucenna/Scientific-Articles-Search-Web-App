 import'./style.css' ; 
 import React from "react";
import { useState , useRef} from "react";
import VerificationComponent  from "../../components/verifcationCode";

const ForgetPassword = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const handleSendClick =() => {
    // send the data to the controller and change the code // 
  }
  const onCodeChange = (newCode) =>{
    setCode(newCode); 
  }
  return ( 
    <main>

 
      <section className='left-sections'>
            <div>
                logo
            </div>
            <div className='join-us'>
                <p className='lexen-bold'>We got you !</p>
            </div>
      </section>
      <section className='right-sections'>
         <h1 className='lexen-bold'>Verification code</h1>
        
         <form className='flex-container'>
           <div className='flex item1'><p className='lexen-bold'>A verification code is sent to your e-mail adress</p></div>
           <div className='flex item2'><p className='lexen-bold'>Enter the code here</p></div>
           <div className='flex item3'> <VerificationComponent code ={code} inputRefs={inputRefs} onCodeChange={onCodeChange}  /></div>
           <div className='flex item4'><p className='lexen-medium'>You didn't receive a code ? <a className='lexen-bold' href="##">Resend</a></p></div>
           <div></div>
           <div></div>
           <button className='flex item5'
            onClick={handleSendClick}
           >
              Send
            </button>
         </form>
       
           
         
      </section>
    </main>
   );
}
 
export default ForgetPassword;