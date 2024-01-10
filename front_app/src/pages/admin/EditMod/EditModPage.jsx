import { Link, useParams } from "react-router-dom";
import Navbar from "../../../components/NavBar/Navbar";
import FormInput from "./../../../components/inputFormRespo/index"
import { useEffect, useState } from "react";


const EditModPage = () => {
    
    const {id} = useParams();
    const [firstName,setFirstName] = useState("");
   const [lastName,setLastName] = useState(""); 
   const [email,setEmail] = useState(""); 
   const [password,setPassword] = useState(""); 
   const [data, setData] = useState({
    id:'123',
    firstName: 'test',
    lastName: 'test',
    e_mail: 'test@gmail.com',
    password:'test',
    // ... autres propriétés
  });
   
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
   const initialize = () => {
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setEmail(data.e_mail);
    setPassword(data.password);
  };
  const handleSaveClick = () => {
    // on save les donnes dans la base de donnees ici 
  }
  useEffect(() => {
    // lors de l'integration on recupere a partire d'ici 
    fetch("http://localhost:8000/Moderator/" + id)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log("Erreur lors de la récupération des données du modérateur");
      });
  }, [id]); // Ajoutez id comme dépendance pour recharger les données lorsque id change

  useEffect(() => {
    initialize();
  }, [data]); // Ajoutez data comme dépendance pour recharger les données lorsque data change
    return ( 
        <div>  
                <Navbar/>
            <div className="flex-col justify-center items-center">
                <div className="text-center my-12 md:my-14"><p className="font-medium text-xl text-darkBlue">Edit the moderator’s info</p></div>
                <div className="flex justify-center items-center ">
                    <div></div>
                    <div className="w-4/5 md:w-1/2 space-y-10  md:space-y-6">  
                  <FormInput type="text" label="First name" icon= {null} valInput={firstName} onChange={onFirstNameChange} /> 
                  <FormInput type="text" label="Last name" icon={null} valInput={lastName} onChange={onLastNameChange}/> 
                  <FormInput type="email" label="E-mail" icon="email" valInput={email} onChange={onEmailChange}/>
                  <FormInput type="password" label="Password" icon="password" valInput={password} onChange={onPasswordChange}/>
                  <div className="space-y-7 md:space-y-0 md:flex md:justify-evenly  font-bold">
                    <div className="flex justify-center">
                        <button className="border-2 border-green-400 text-green-400  rounded-full px-7 py-2" onClick={handleSaveClick}>&nbsp;Save&nbsp;</button>
                    </div>
                    <div className="flex justify-center">
                
                     <Link to={"/ListEdit"}> <button className="border-2 border-red-500 text-red-500 rounded-full px-7 py-2">Cancel</button></Link>    
                    </div>
                  </div>
              </div> 
              <div></div>
                </div>
            </div>
        </div>
     );
}
 
export default EditModPage;