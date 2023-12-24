import './in.css'
import FormInput from '../../components/inputForm';
import { useState } from 'react';


const SignIn = () => {
    const [email,setEmail] = useState(null); 
    const [password,setPassword] = useState(null); 
    const onEmailChange = (newEmail) => {
        setEmail(newEmail); 
    }
    const onPasswordChange = (newPassword) => {
        setPassword(newPassword);
    }

    const handleSubmitClick = () => {
        // send data to the controller 
    }
    return (  
        <main className='main-in'>
      <section className='left-section-in'>
            <div>
                logo
            </div>
            <div className='join-us-in'>
                <p className='lexen-bold'>Welcome back !</p>
            </div>
      </section>
      <section className='right-section-in'>
         <h1 className='lexen-medium'>Sign In</h1>
         <form className='grid-container-in' onSubmit={handleSubmitClick}>
              <div className='grid-in item1-in'><FormInput type="email" label="E-mail" icon="email" onChange={onEmailChange}/></div>
              <div className='grid-in item2-in'><FormInput type="password" label="Password" icon="password" onChange={onPasswordChange}/></div>            
              <div  className='grid-in item3-in'><a className='lexen-medium' href=''>Forgot your Password ?</a></div>
            <div className='grid-in item4-in'> 
 
                <button>
                    Log in
                </button>
            </div>
            <div className='grid-in question-in'>
            <p className='lexen-medium'>
            You don't have an account ? <a className='lexen-bold' href='#'>Sign up</a>
            </p>
         </div>
         </form>
        
      </section>
    </main>
    );
}
 
export default SignIn;