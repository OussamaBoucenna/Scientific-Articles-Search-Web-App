import { Link, useParams } from "react-router-dom";
import Navbar from "../../../components/NavBar/Navbar";
import FormInput from "./../../../components/inputFormRespo/index"
import { useEffect, useState } from "react";
import axios from 'axios';
const EditModPage = () => {
    
    const {id} = useParams();
    const [firstName,setFirstName] = useState("");
   const [lastName,setLastName] = useState(""); 
   const [email,setEmail] = useState(""); 
   const [paassword,setPassword] = useState(""); 
   const [data, setData] = useState({
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
    setFirstName(data.first_name);
    setLastName(data.last_name);
    setEmail(data.email);
    setPassword(data.hashed_password);
  };
  const handleSaveClick = async () => {
    // on save les donnes dans la base de donnees ici 
    try {
      const myKey = localStorage.getItem('token');
    console.log("the acces token is :",myKey); 
    const response =  await axios.put(
      'http://localhost:8080/mods/'+id,
      { 
        email: email,
        is_active:true, 
        is_superuser:false ,
        first_name: firstName,
        last_name: lastName,
        paassword : "hahaha"
      },
      {
        headers: {
          Authorization: `Bearer ${myKey}`, // Set the Authorization header
        },}
    )
    } catch (error) {
      console.error("erreur de mise a jour des données")
    }
  }
  useEffect(() => {
    // lors de l'integration on recupere a partire d'ici 
    const fetchData = async () => {
      try {
          const myKey = localStorage.getItem('token');
          console.log("the acces token is :",myKey); 
          const response = await axios.get(
              'http://localhost:8080/mods/'+id,
              {
                  headers: {
                    Authorization: `Bearer ${myKey}`, // Set the Authorization header
                  },}
              )
              console.log(response.data); 
          setData(response.data); 
      } catch (error) {
          console.error("Erreur de recuperation des données");
      }
      
  } 
   fetchData();
  }, [id]); // Ajoutez id comme dépendance pour recharger les données lorsque id change

  useEffect(() => {
    initialize();
  }, [data]); // Ajoutez data comme dépendance pour recharger les données lorsque data change
    return ( 
        <div>  
                <Navbar typeId="admin"/>
            <div className="flex-col justify-center items-center">
                <div className="text-center my-12 md:my-14"><p className="font-medium text-xl text-darkBlue">Edit the moderator’s info</p></div>
                <div className="flex justify-center items-center ">
                    <div></div>
                    <div className="w-4/5 md:w-1/2 space-y-10  md:space-y-6">  
                  <FormInput type="text" label="First name" icon= {null} valInput={firstName} onChange={onFirstNameChange} /> 
                  <FormInput type="text" label="Last name" icon={null} valInput={lastName} onChange={onLastNameChange}/> 
                  <FormInput type="email" label="E-mail" icon="email" valInput={email} onChange={onEmailChange}/>
                  <FormInput type="password" label="Password" icon="password" valInput={paassword} onChange={onPasswordChange}/>
                  <div className="space-y-7 md:space-y-0 md:flex md:justify-evenly  font-bold">
                    <div className="flex justify-center">
                        <button className="border-2 border-green-400 text-green-400  rounded-full px-7 py-2" onClick={handleSaveClick}>&nbsp;Save&nbsp;</button>
                    </div>
                    <div className="flex justify-center">
                
                     <Link to={"/admin/ListEdit"}> <button className="border-2 border-red-500 text-red-500 rounded-full px-7 py-2">Cancel</button></Link>    
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