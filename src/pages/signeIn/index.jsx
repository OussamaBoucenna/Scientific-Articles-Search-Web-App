import { useState } from 'react';
import axios from 'axios';
import './in.css';
import FormInput from './../../components/inputForm';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (newEmail) => {
        setEmail(newEmail);
    };

    const onPasswordChange = (newPassword) => {
        setPassword(newPassword);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                'http://localhost:8080/login/access-token',
                {
                    email:email ,
                    is_active: true,
                    is_superuser: true,
                    first_name: "Aniss",
                    last_name: "benstaali",
                    password: "adminmeryoul"
                }
            );

            console.log('Received token:', response.data.access_token);
            localStorage.setItem('token', response.data.access_token);

            // Store the token in local storage or session storage


        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    return (
<main className='main-in'>
    <section className='left-section-in'>
        <div>logo</div>
        <div className='join-us-in'>
            <p className='lexen-bold'>Welcome back !</p>
        </div>
    </section>
    <section className='right-section-in'>
        <h1 className='lexen-medium'>Sign In</h1>
        <form className='grid-container-in' onSubmit={handleSubmit}>
            <div className='grid-in item1-in'>
                <FormInput type="email" label="E-mail" icon="email" onChange={onEmailChange}/>
            </div>
            <div className='grid-in item2-in'>
                <FormInput type="password" label="Password" icon="password" onChange={onPasswordChange}/>
            </div>
            <div  className='grid-in item3-in'>
                <a className='lexen-medium' href=''>Forgot your Password ?</a>
            </div>
            <div className='grid-in item4-in'> 
                <button type="submit">Log in</button>
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
};

export default SignIn;
