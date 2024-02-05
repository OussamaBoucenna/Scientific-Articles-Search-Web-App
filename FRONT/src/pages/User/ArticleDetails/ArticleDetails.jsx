import React, { useState } from "react";
import AuthorCard from "./components/AuthorCard";
import AbstractCard from "./components/AbstractCard";
import KeywordsBar from "./components/KeywordsBar";
import ReferencesBar from "./components/ReferencesBar";
import DivideBar from "./components/DivideBar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
// Il reste seulement d'afficher les donnees de l'article recuperer du bdd  ArticleD
const ArticleDetails = () => {
  // variable a utiliser 
  const [articleDetails,setArticleDetails] = useState({
    abstract:
      "The main addition ahhaha  ah aha a ha ha ha ha ha ha ha ha ah ah ah ah hn ahhaha  ah aha a ha ha ha ha ha ha ha ha ah ah ah ah ha ha ha ha ha n ahhaha  ah aha a ha ha ha ha ha ha ha ha ah ah ah ah ha ha ha ha ha a ha ha ha ha ha ha ha that this paper makes to the previous version is to note a poten-tially key contribution that Empirical Methods could make to these understandings key contribution that Empirical Methods could make to these understandings",
    body: "this paper focuses as a case in point on how to another one particular basic measure of software, namely to be. This paper focuses as a case in point on how to deﬁne one particular basic measure of software, namely its size. This would seem to be a basic measure and yet we note that no such satisfactory measure of software size seems to exist. Grappling with this and related questions has been a focus .That being the case, Empirical Methods research should be viewed as being essential to gaining knowledge and establishing the science of the nature of software, in that it addresses issues of how to measure various aspects of software.  This paper focuses as a[1] case in point on how to deﬁne one particular basic measure of software, namely its size. This would seem to be a basic measure and yet we note that no such satisfactory measure of software size seems to exist. Grappling with this and related questions has been a focus of the Empirical Methods community. The community’s success in understanding how to establish such measures of. computer software is[2]. clearly important to progress in being more effective in computer software engineering, but might indeed[3] also have important ramiﬁcations That being the case, Empirical Methods research should be viewed as being essential to gaining knowledge and establishing the science of the nature of software, in that it addresses issues of how to measure various aspects of software. This paper focuses as a case[4] in point on how to deﬁne one particular basic measure of software, namely its size. This would seem to be a basic measure and yet we note that no such satisfactory measure of software size seems to exist. Grappling with this and related questions has been a \focus of the Empirical Methods community. The community's success in understanding how to establish such measures of computer software is clearly important to progress in being more effective in computer software engineering, but might indeed also have important ramiﬁcations  ",
    keywords: ["Agile Development", "Scrum", "Waterfall Model", "DevOps"],
    references: [
      'Daniel Kahneman. (2011). "Thinking, Fast and Slow." Farrar, Straus and Giroux.',
      'Watson JD, Crick FH. (1953). "Molecular Structure of Nucleic Acids: A Structure for Deoxyribose Nucleic Acid." Nature, 171, 737-738.',
      'David W. Keith et al. (2018). "A Process for Capturing CO2 from the Atmosphere." Joule, 2(8), 1573-1594.',
      'Erving Goffman. (1967). "The Presentation of Self in Everyday Life." In "Interaction Ritual: Essays on Face-to-Face Behavior," Anchor Books.'
    ],
    link:"https://www.example.com/path/to/document.pdf"
  }); 
  const[authors,setAuthors] = useState([
    {
      name: "akhrib abderahmane",
      level: "2cp student",
      departement: "SIL Department CSE 2023",
      email: "la_akhrib@esi.dz",
    },
    {
      name: "akhrib abderahmane",
      level: "2cp student",
      departement: "SIL Department CSE 2023",
      email: "la_akhrib@esi.dz",
    },
    {
      name: "akhrib abderahmane",
      level: "2cp student",
      departement: "SIL Department CSE 2023",
      email: "la_akhrib@esi.dz",
    },
  ]); 
  const id = useParams(); 

//  fin var 
  const addToFavoriteClick = () => {
    console.log("added to favorites");
  };
    // USEFFECT
    const[articleD,setArticleD] = useState(""); 
    useEffect( ()  =>{
      // recuperation des donner de l'article correspondante à ID dans params
      const fetchData = async () => {
        try {
            const myKey = localStorage.getItem('token');
            console.log("the acces token is :",myKey); 
            const response = await axios.get(
                'http://localhost:8080/items/'+id,
                {
                    headers: {
                      Authorization: `Bearer ${myKey}`, // Set the Authorization header
                    },}
                )
                console.log(response.data); 
            setArticleD(response.data); 
        } catch (error) {
            console.error("Erreur de recuperation des données de l'article ", error);
        }
        
    } 
     fetchData();
    },[]);
  return (
    <div className=" max-w-7xl  mx-auto ">
      <div className=" flex flex-col gap-6 sm:gap-10 px-5 sm:px-10 py-4 pb-8">
        <div className=" w-full flex justify-end">
          <button
            onClick={addToFavoriteClick}
            className=" flex flex-row items-center gap-1 px-2 py-[1px] border-[1px] border-darkBlue rounded-md hover:border-2"
          >
            <p>Add to favorite list</p>
            {starIcon}
          </button>
        </div>
        {/* authors */}
        <div className=" w-full">
          <div className=" w-full flex justify-center mb-4">
            <h2 className=" text-3xl font-bold text-darkBlue">
              What is Software ?
            </h2>
          </div>
          <div className=" w-full grid grid-cols-1 sm:grid-cols-3 gap-y-4 px-6 sm:px-10">
            {authors.map((author,index) => {
              return (
               <AuthorCard author={author} key={index} />
              );
            })}
          </div>
        </div>
         {/* article details  */}
         <div className=" flex flex-col justify-center items-center sm:block">
            <div className=" float-none  sm:float-start mr-6 mb-4 ">
                <AbstractCard abstract={articleDetails.abstract}/>
            </div>
            <div className=" mt-2 sm:mt-8 font-bold text-lg">
                <p>{articleDetails.body}</p>
            </div>
         </div>
         {/* keywords */}
         <KeywordsBar keywords={articleDetails.keywords} />
         <DivideBar />
         {/* references */}
         <ReferencesBar references={articleDetails.references} />
         <DivideBar />
         {/* link  */}
         <div className=" flex flex-col items-center">
            <p className=" text-darkBlue text-xl">Hit the link to get the article in PDF</p>
            <a href={articleDetails.link} className=" text-blue-light underline">{articleDetails.link}</a>
         </div>
      </div>
    </div>
  );
  
};

export default ArticleDetails;

const starIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.7422 18.3691L24.375 30L15 22.793L5.625 30L9.25781 18.3691L0 11.25H11.4844L15 0L18.5156 11.25H30L20.7422 18.3691ZM20.8154 24.9023C20.4443 23.6914 20.0732 22.4902 19.7021 21.2988C19.3311 20.1074 18.9502 18.9014 18.5596 17.6807C19.5654 16.9287 20.5566 16.1719 21.5332 15.4102C22.5098 14.6484 23.4961 13.8867 24.4922 13.125H17.1387L15 6.28418L12.8613 13.125H5.50781C6.50391 13.8867 7.49023 14.6484 8.4668 15.4102C9.44336 16.1719 10.4346 16.9287 11.4404 17.6807C11.0498 18.8916 10.6689 20.0928 10.2979 21.2842C9.92676 22.4756 9.55566 23.6816 9.18457 24.9023L15 20.4199L20.8154 24.9023Z"
      fill="#04445F"
    />
  </svg>
);
