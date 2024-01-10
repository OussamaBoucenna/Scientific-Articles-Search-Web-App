 import'./forgetPass.css' ; 
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
    <main className='main-for'>
      <section className='left-section-for'>
            <div>
                logo
            </div>
            <div className='join-us-for'>
                <p className='lexen-bold'>We got you !</p>
            </div>
      </section>
      <section className='right-section-for'>
         <h1 className='lexen-bold'>Verification code</h1>
        
         <form className='flex-container-for' onSubmit={handleSendClick} >
           <div className='flex-for item1-for'><p className='lexen-bold'>A verification code is sent to your e-mail adress</p></div>
           <div className='flex-for item2-for'><p className='lexen-bold'>Enter the code here</p></div>
           <div className='flex-for item3-for'> <VerificationComponent code ={code} inputRefs={inputRefs} onCodeChange={onCodeChange}  /></div>
           <div className='flex-for item4-for'><p className='lexen-medium'>You didn't receive a code ? <a className='lexen-bold' href="##">Resend</a></p></div>
           <div></div>
           <div></div>
          <div className='flex-for item5-for'> <button>
              Send
            </button>
            </div>
         </form>
       
           
         
      </section>
    </main>
   );
}
 
export default ForgetPassword;