import Navbar from "../../../components/NavBar/Navbar";
import FormInput from "./../../../components/inputFormRespo/index";
import { useState } from "react";
import axios from "axios";
const AddModPage = () => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState(""); 
    const [email,setEmail] = useState(""); 
    const [password,setPassword] = useState(""); 

    const handleAddClick = async () =>{
        // hedi li n'etulisiwha ki n'integriw
        // lazem tani ndir retour ki ndero add 
        try {
          const response = await axios.post(
            "https://localhost:8080/", // Remplacez par l'URL de votre backend
            {
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: password,
            },
            {
              headers: {
                "Content-Type": "application/json",
                // 'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDU5MjI2MDQsInN1YiI6IjEifQ.flvl43W7JAvIgK7ixk23a87KpQlYdPd2i8K5eZuFH3Q' , 
               //   'My-Custom-Header' : 'foobar'
                 // Ajoutez d'autres en-têtes si nécessaire
              },
            }
          );
    
          console.log("Réponse du serveur :", response.data);
          // Ajoutez ici le code pour traiter la réponse si nécessaire
    
        } catch (error) {
          console.error("Erreur lors de la requête POST :", error);
          // Ajoutez ici le code pour gérer les erreurs si nécessaire
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
        <Navbar/>
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