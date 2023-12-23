import './Style.css'
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
        <main>
      <section className='left-section'>
            <div>
                logo
            </div>
            <div className='join-us'>
                <p className='lexen-bold'>Welcome back !</p>
            </div>
      </section>
      <section className='right-section'>
         <h1 className='lexen-medium'>Sign In</h1>
         <form className='grid-container' onSubmit={handleSubmitClick}>
              <div className='grid item1'><FormInput type="email" label="E-mail" icon="email" onChange={onEmailChange}/></div>
              <div className='grid item2'><FormInput type="password" label="Password" icon="password" onChange={onPasswordChange}/></div>            
              <div  className='grid item3'><a className='lexen-medium' href=''>Forgot your Password ?</a></div>
            <div className='grid item4'> 
 
                <button>
                    Log in
                </button>
            </div>
            <div className='grid question'>
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