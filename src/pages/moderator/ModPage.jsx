import React, { useEffect, useState } from 'react';
import Navbar from './../../components/NavBar/Navbar';
import SearchBar from './SearchBar'
import ArticleList from './ArticleList';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ModPage = () => {
  // Static array of articles with multiple authors
  const [modData,setData] = useState(""); 
  
  // il reste de recuper les articles de la base de donnes et les metres dans la listes des articles // n'oublie pas de mapper just qui ne sont pas encore valider 
  useEffect( ()  =>{
    // recuperation des donner de moderateur correspondante à ID dans params
    const fetchData = async () => {
      try {
          const myKey = localStorage.getItem('token');
          console.log("the acces token is :",myKey); 
          const response = await axios.get(
              'http://localhost:8080/mods/me_mod',
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
  },[]);
  

  return (
    <div>
      <Navbar typeId="mod"/>

      <div className="bg-myBlue pt-4 pb-10 md:px-auto md:pt-8 md:py-16 md:text-xl flex-col space-y-4 justify-center items-center text-darkBlue font-bold">
        <div className="flex-col justify-center items-center">
          <div className="text-center"><p>Welcome</p></div>
          <div className="text-center">{modData.first_name} {modData.last_name}</div>
        </div>
      </div>

      <SearchBar />

      <div className="mt-4">
        <ArticleList />
      </div>
    </div>
  );
}

export default ModPage;
