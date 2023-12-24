import './up.css'
import FormInput from './../../components/inputForm'
import { useState } from 'react';
const SignUp = () => {

   const [firstName,setFirstName] = useState(null);
   const [lastName,setLastName] = useState(null); 
   const [email,setEmail] = useState(null); 
   const [password,setPassword] = useState(null); 
   const [confirmedPassword,setConfirmedPassword] = useState(null); 
   
   const onFirstNameChange = (newFirstName) => {
     setFirstName(newFirstName); 
   }
   const onLastNameChange = (newLastName) => {
     setLastName(newLastName); 
   }
   const onEmailChange = (newEmail) => {
    setEmail(newEmail); 
   }
   const onPasswordChange = (newPassword) => {
     setPassword(newPassword) ; 
   }
   const onConfirmedPasswordChange = (newConfirmedPassword) => {
    setConfirmedPassword(newConfirmedPassword); 
   }
  return (
    <main className='main-up'>
      <section className='left-section-up'>
            <div>
                logo
            </div>
            <div className='join-us-up'>
                <p className='lexen-bold'>Join us now !</p>
            </div>
      </section>
      <section className='right-section-up'>
         <h1 className='lexen-bold'>Sign Up</h1>
         <form className='grid-container-up'>
             <div className='grid-up item1-up'><FormInput type="text" label="First name" icon= {null} onChange={onFirstNameChange} /></div>
              <div className='grid-up item2-up'><FormInput type="text" label="Last name" icon={null} onChange={onLastNameChange}/></div>
              <div className='grid-up item3-up'><FormInput type="email" label="E-mail" icon="email" onChange={onEmailChange}/></div>
              <div className='grid-up item4-up'><FormInput type="password" label="Password" icon="password" onChange={onPasswordChange}/></div>
              <div className='grid-up item5-up'><FormInput type="password" label="Confirme password" icon="password" onChange={onConfirmedPasswordChange}/></div> 
            
            <div className='grid-up item6-up'>
                <button>
                    Sign Up
                </button>
            </div>
         </form>
         <div className='question-up'>
            <p className='lexen-medium'>
            You already have an account ? <a className='lexen-bold' href='#'>Sign in</a>
            </p>
         </div>
      </section>
    </main>
  ); 
}
 
export default SignUp;