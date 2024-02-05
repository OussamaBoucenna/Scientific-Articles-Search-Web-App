
import ArticleComponents from "./Components/ArticleComponents";
import { IoSearchOutline } from "react-icons/io5";
import FilterMenu from './Components/FilterMenu';
import Navbar from "../../components/NavBar/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const SearchPage = () => {
    const donnees = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango', 'Strawberry'];
  const optionsFiltre = ['Tous', 'A', 'B', 'C'];
    const [listArticles,setListARticles] = useState([
        {nbJaime : "243" , date : "21/04/2023",titre:"oussama", id:"23" ,auteur : ["B.iej","D.iejf","N.Walid"]},
        {nbJaime : "37" ,date : "21/04/2023",titre:"hahaHDk", id:"25" , auteur : ["B.iec","D.Mohammed","N.Walid"]},
        {nbJaime : "092" ,date : "21/04/2023",titre:"Anis", id:"22" , auteur : ["B.eije","D.Mohammed","N.Walid"]},
        {nbJaime : "22" ,date : "21/04/2023",titre:"Walid", id:"26" , auteur : ["B.efij","D.Mohammed","N.Walid"]},
        {nbJaime : "882" ,date : "21/04/2023",titre:"Hoaml", id:"11" , auteur : ["B.ejfn","D.Mohammed","N.Walid"]},
        {nbJaime : "72" ,date : "21/04/2023",titre:"oussama", id:"23" , auteur : ["B.ejf","D.Mohammed","N.Walid"]},
        {nbJaime : "425" ,date : "21/04/2023",titre:"hahaHDk", id:"25", auteur : ["B.Oeama","D.Mohammed","N.Walid"]},
        {nbJaime : "324" ,date : "21/04/2023",titre:"Anis", id:"22" , auteur : ["B.e","D.Mohammed","N.Walid"]},
        {nbJaime : "392" ,date : "21/04/2023",titre:"Walid", id:"26" , auteur : ["B.Ouseifjsama","D.Mohammed","N.Walid"]},
        {nbJaime : "267" ,date : "21/04/2023",titre:"Hoaml", id:"11" , auteur : ["B.hah","D.eijei","N.Walid"]},
    ]); 
    const [valueInput,setValueInput] = useState(""); 
    const handleChangeSearch = (e) => {
        setValueInput(e.target.value)
    }
   const [user,setUser] = useState("") ; 
    useEffect( ()  =>{
        // recuperation des donner de user correspondante à ID dans params
        const fetchData = async () => {
          try {
              const myKey = localStorage.getItem('token');
              console.log("the acces token is :",myKey); 
              const response = await axios.get(
                  'http://localhost:8080/users/me',
                  {
                      headers: {
                        Authorization: `Bearer ${myKey}`, // Set the Authorization header
                      },}
                  )
                  console.log(response.data); 
              setUser(response.data); 
          } catch (error) {
              console.error("Erreur de recuperation des données");
          }          
      } 
       fetchData();
      },[user]);


    return (
        <div>
            <Navbar typeId="user"/>
            <div className="flex mt-10 md:mt-20 space-x-2 items-center relative mx-6 md:mx-10 p-2 bg-white border-darkBlue text-darkBlue border-2 rounded-2xl ">
           <IoSearchOutline className=" h-8 w-8  md:h-10 md:w-10"/>
           <input type="text"  onChange={handleChangeSearch} value={valueInput} placeholder="Article informations" className="w-full outline-none font-normal text-2xl"  />
             </div>
             <div className="flex  mt-4 mx-6 md:mx-10 justify-end ">
                
             <FilterMenu  donnees={donnees} />
             </div>
           
            <div className="my-6 mx-6 md:my-10 md:mx-10">
            {listArticles.map((item, index) => (
                // Ajoutez un return ici
                <ArticleComponents idUser={user.items} idArticle={item.id} titre={item.titre} nbJaime={item.nbJaime} auteur={item.auteur} />
            ))}
            </div>
        </div>
    );
}
 
export default SearchPage;