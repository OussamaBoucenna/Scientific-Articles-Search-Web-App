import FormInput from '../../components/inputForm';
import'./newPass.css' ; 
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
        <main className='main-new'>
        <section className='left-section-new'>
              <div>
                  logo
              </div>
              <div className='join-us-new'>
                  <p className='lexen-bold'>Secure your account!</p>
              </div>
        </section>
        <section className='right-section-new'>
           <form className='flex-container-new' onSubmit={handleSubmitClick}>
                <div className='item1-new'><FormInput type="password" label="New Password" icon="password" onChange={onNewPasswordChange}/></div>
                <div className='item2-new'><FormInput type="password" label="Confirm Password" icon="password" onChange={onConfirmedPasswordChange}/></div>            
                <div  className='item3-new'><p className='lexen-bold' >The password must be at least 6 characters long</p></div>
                <div></div>
                <div></div>
   
                  <button className='item4-new' >
                      Done
                  </button>
              
           </form>
          
        </section>
      </main>
    );
}
 
export default NewPassword;