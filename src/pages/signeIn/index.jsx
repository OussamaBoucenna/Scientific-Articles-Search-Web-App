import { useState } from 'react';
import axios from 'axios';
import './in.css';
import FormInput from './../../components/inputForm';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate(); 
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
                'http://localhost:8080/login/access-token-user',
                {
                    email:email ,
                    is_active: true,
                    is_superuser: false,
                    first_name: "string",
                    last_name: "string",
                    password: password
                }
            );      
             // Store the token in local storage or session storage
            console.log('Received token:', response.data.access_token);
            localStorage.setItem('token', response.data.access_token);
            try {
                const response_test = await axios.post(
                    'http://localhost:8080/login/test-token-user',
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`, // Set the Authorization header
                          },
                    }
                 )
                 if (response_test.status === 200 ){
                    console.log("it's user")
                    console.log('the user',response_test.data);
                    console.log('ID of users is : ' ,response_test.data.id)
                    if (response_test.data.is_superuser===true){
                        navigate('/admin');
                        
                    }else {
                        // ici il faut pusher la page de l'utilisateur avec son id comme parametre ok ?
                        navigate('/admin/addMod');
                    }
                  }
           
             } catch (error) {
                console.log("erreur lors de la verification du token :",error)
             }
        } catch (error) {
            console.error('Error signing in:', error);
        }
        try {
            const response = await axios.post(
                'http://localhost:8080/login/access-token-mod',
                {
                    email:email ,
                    is_active: true,
                    is_superuser: false,
                    first_name: "string",
                    last_name: "string",
                    password: password
                }
            );      
             // Store the token in local storage or session storage
            console.log('Received token:', response.data.access_token);
            localStorage.setItem('token', response.data.access_token);
            try {
                const response_test = await axios.post(
                    'http://localhost:8080/login/test-token-mod',
                    {}, 
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`, // Set the Authorization header
                          },
                    }
                 )
                 if (response_test.status === 200 ){
                    console.log("it's mod")
                    console.log('the mod',response_test.data);
                    console.log('ID of mod is : ' ,response_test.data.id);
                    // ICI IL FAUT SPECIFIER LA PAGE DE MODERATEUR DANS APP.JS DANS ROUTER/ROUTES
                    navigate("/moderator");
                  }
           
             } catch (error) {
                console.log("erreur lors de la verification du token :",error)
             }
            
        } catch (error) {
            
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
