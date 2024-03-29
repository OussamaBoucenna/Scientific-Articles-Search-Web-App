import Navbar from "../../../components/NavBar/Navbar";
import FormInput from "./../../../components/inputFormRespo/index";
import { useState } from "react";
import axios from 'axios';
const AddModPage = () => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState(""); 
    const [email,setEmail] = useState(""); 
    const [password,setPassword] = useState(""); 

    const handleAddClick = async (event) =>{
      
        // hedi li n'etulisiwha ki n'integriw
        // lazem tani ndir retour ki ndero add 
        event.preventDefault();

    try {
      const myKey = localStorage.getItem('token');
      console.log("the acces token is :",myKey); 
      const response = await axios.post(
        'http://localhost:8080/mods/',
        {
          password: password,
          email: email,
          first_name: firstName,
          last_name: lastName,
        },{
        headers: {
          Authorization: `Bearer ${myKey}`, // Set the Authorization header
        },}
      );

      console.log('User created successfully:', response.data);
    } catch (error) {
      console.error('Error creating user:', error);
    }
    }

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

    return ( 
        <div>  
        <Navbar typeId="admin"/>
    <div className="flex-col justify-center items-center">
        <div className="text-center my-12 md:my-14"><p className="font-medium text-xl text-darkBlue">Fill the following form with the moderator’s info </p></div>
        <div className="flex justify-center items-center ">
            <div></div>
            <div className="w-4/5 md:w-1/2 space-y-10  md:space-y-6">  
          <FormInput type="text" label="First name" icon= {null} valInput={firstName} onChange={onFirstNameChange} /> 
          <FormInput type="text" label="Last name" icon={null} valInput={lastName} onChange={onLastNameChange}/> 
          <FormInput type="email" label="E-mail" icon="email" valInput={email} onChange={onEmailChange}/>
          <FormInput type="password" label="Password" icon="password" valInput={password} onChange={onPasswordChange}/>
          <div className="space-y-7 md:space-y-0 md:flex md:justify-evenly  font-bold">
            <div className="flex justify-center">
                <button className="border-2 border-green-400 text-green-400  rounded-full px-7 py-2" onClick={handleAddClick}>Add</button>
            </div>
          </div>
      </div> 
      <div></div>
        </div>
    </div>
</div>
     );
}
 
export default AddModPage;