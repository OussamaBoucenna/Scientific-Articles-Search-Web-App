import './Style.css'
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
    <main>
      <section className='left-section'>
            <div>
                logo
            </div>
            <div className='join-us'>
                <p className='lexen-bold'>Join us now !</p>
            </div>
      </section>
      <section className='right-section'>
         <h1 className='lexen-bold'>Sign Up</h1>
         <form className='grid-container'>
             <div className='grid item1'><FormInput type="text" label="First name" icon= {null} onChange={onFirstNameChange} /></div>
              <div className='grid item2'><FormInput type="text" label="Last name" icon={null} onChange={onLastNameChange}/></div>
              <div className='grid item3'><FormInput type="email" label="E-mail" icon="email" onChange={onEmailChange}/></div>
              <div className='grid item4'><FormInput type="password" label="Password" icon="password" onChange={onPasswordChange}/></div>
              <div className='grid item5'><FormInput type="password" label="Confirme password" icon="password" onChange={onConfirmedPasswordChange}/></div> 
            
            <div className='grid item6'>
                <button>
                    Sign Up
                </button>
            </div>
         </form>
         <div className='question'>
            <p className='lexen-medium'>
            You already have an account ? <a className='lexen-bold' href='#'>Sign in</a>
            </p>
         </div>
      </section>
    </main>
  ); 
}
 
export default SignUp;