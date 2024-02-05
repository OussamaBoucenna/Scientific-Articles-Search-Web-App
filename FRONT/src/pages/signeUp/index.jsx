import './up.css';
import FormInput from './../../components/inputForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const onFirstNameChange = (newFirstName) => {
    setFirstName(newFirstName);
  };

  const onLastNameChange = (newLastName) => {
    setLastName(newLastName);
  };

  const onEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const onPasswordChange = (newPassword) => {
    setPassword(newPassword);
  };

  const onConfirmedPasswordChange = (newConfirmedPassword) => {
    setConfirmedPassword(newConfirmedPassword);
  };
   const navigate =  useNavigate(); 
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8080/users/open',
        {
          password: password,
          email: email,
          first_name: firstName,
          last_name: lastName,
        },
      );

      console.log('User created successfully:', response.data);
       navigate("/signIn")
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <main className='main-up'>
      <section className='left-section-up'>
        <div>logo</div>
        <div className='join-us-up'>
          <p className='lexen-bold'>Join us now!</p>
        </div>
      </section>
      <section className='right-section-up'>
        <h1 className='lexen-bold'>Sign Up</h1>
        <form className='grid-container-up' onSubmit={handleSubmit}>
          <div className='grid-up item1-up'>
            <FormInput type="text" label="First name" icon={null} onChange={onFirstNameChange} />
          </div>
          <div className='grid-up item2-up'>
            <FormInput type="text" label="Last name" icon={null} onChange={onLastNameChange} />
          </div>
          <div className='grid-up item3-up'>
            <FormInput type="email" label="E-mail" icon="email" onChange={onEmailChange} />
          </div>
          <div className='grid-up item4-up'>
            <FormInput type="password" label="Password" icon="password" onChange={onPasswordChange} />
          </div>
          <div className='grid-up item5-up'>
            <FormInput type="password" label="Confirm password" icon="password" onChange={onConfirmedPasswordChange} />
          </div>
          <div className='grid-up item6-up'>
            <button type="submit">Sign Up</button>
          </div>
        </form>
        <div className='question-up'>
          <p className='lexen-medium'>Already have an account? <a className='lexen-bold' href='#'>Sign in</a></p>
        </div>
      </section>
    </main>
  );
};

export default SignUp;