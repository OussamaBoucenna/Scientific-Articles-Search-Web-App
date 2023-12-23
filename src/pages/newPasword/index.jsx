import FormInput from '../../components/inputForm';
import'./style.css' ; 
import React, { useState } from 'react';

const NewPassword = () => {
    const [newPassword,setNewPassword] = useState(null); 
    const [confirmedPassword,setConfirmedPassword] = useState(null); 
    const onNewPasswordChange = (password) => {
        setNewPassword(password); 
    } 
    const onConfirmedPasswordChange = (confirmedpassword) => {
        setConfirmedPassword(confirmedpassword); 
    }

    const handleSubmitClick =()=> {
                  // send data new password and confirmed password 
                  console.log("fffkefjke")
    }
    return (  
        <main>
        <section className='left-section'>
              <div>
                  logo
              </div>
              <div className='join-us'>
                  <p className='lexen-bold'>Secure your account!</p>
              </div>
        </section>
        <section className='right-section'>
           <form className='flex-container' onSubmit={handleSubmitClick}>
                <div className='item1'><FormInput type="password" label="New Password" icon="password" onChange={onNewPasswordChange}/></div>
                <div className='item2'><FormInput type="password" label="Confirm Password" icon="password" onChange={onConfirmedPasswordChange}/></div>            
                <div  className='item3'><p className='lexen-bold' >The password must be at least 6 characters long</p></div>
                <div></div>
                <div></div>
   
                  <button className='item4' >
                      Done
                  </button>
              
           </form>
          
        </section>
      </main>
    );
}
 
export default NewPassword;