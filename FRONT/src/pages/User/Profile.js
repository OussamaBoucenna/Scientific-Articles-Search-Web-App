import Searchbar from './Components/Searchbar';
import ArticleComponents from './Components/ArticleComponents';
import { IoSearchOutline } from "react-icons/io5";
import { useEffect } from 'react';
import axios from 'axios'
import Navbar from './../../components/NavBar/Navbar'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const id =useParams; 
    // const [listArticles,setListARticles] = useState([
    //     {nbJaime : "243" , date : "21/04/2023",titre:"oussama", id:"23" ,auteur : ["B.iej","D.iejf","N.Walid"]},
    //     {nbJaime : "37" ,date : "21/04/2023",titre:"hahaHDk", id:"25" , auteur : ["B.iec","D.Mohammed","N.Walid"]},
    //     {nbJaime : "092" ,date : "21/04/2023",titre:"Anis", id:"22" , auteur : ["B.eije","D.Mohammed","N.Walid"]},
    //     {nbJaime : "22" ,date : "21/04/2023",titre:"Walid", id:"26" , auteur : ["B.efij","D.Mohammed","N.Walid"]},
    //     {nbJaime : "882" ,date : "21/04/2023",titre:"Hoaml", id:"11" , auteur : ["B.ejfn","D.Mohammed","N.Walid"]},
    //     {nbJaime : "72" ,date : "21/04/2023",titre:"oussama", id:"23" , auteur : ["B.ejf","D.Mohammed","N.Walid"]},
    //     {nbJaime : "425" ,date : "21/04/2023",titre:"hahaHDk", id:"25", auteur : ["B.Oeama","D.Mohammed","N.Walid"]},
    //     {nbJaime : "324" ,date : "21/04/2023",titre:"Anis", id:"22" , auteur : ["B.e","D.Mohammed","N.Walid"]},
    //     {nbJaime : "392" ,date : "21/04/2023",titre:"Walid", id:"26" , auteur : ["B.Ouseifjsama","D.Mohammed","N.Walid"]},
    //     {nbJaime : "267" ,date : "21/04/2023",titre:"Hoaml", id:"11" , auteur : ["B.hah","D.eijei","N.Walid"]},
    // ]); 
    const [listArticles,setListARticles] = useState("")
    const[valueInput,setValueInput] = useState("");

    const handleSearch = (e) => {
        // hed methode hiya li lzm troutournilna la liste te3 moderateur li ybda asamhom b wsh rew keteb ll'utilisteur f la bar de recherche 
        // lzm tpouchi paga jdida b argument li howa wsh kteb utilisateur 
        if (e.key === 'Enter' && valueInput.trim() !== '') {
            navigate('/user/SearchPage');
          }
        
    }
    const [user,setUser] = useState(""); 
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
        try {
          const myKey = localStorage.getItem('token');
          console.log("the acces token is :",myKey); 
          const response = await axios.get(
              'http://localhost:8080/items/articl',
              {
                  headers: {
                    Authorization: `Bearer ${myKey}`, // Set the Authorization header
                  },}
              )
          console.log("before response ");
          // const filteredArticles = response.data.filter(article => article.checked === true);
           setListARticles(response.data) // dok hna nwedo check
        } catch (error) {
        //    console.error("the error ",error)
           console.error("Error:", error.message);
    console.error("Response data:", error.response.data);
        }
        
    } 
    useEffect( ()  =>{
        // recuperation des donner de user correspondante à ID dans params
       
       fetchData();
      },[]);
    return (  
    <div className="flex-col ">
    <Navbar typeId="user"/>
    <div className="relative bg-myBlue pt-16 pb-16 md:px-auto md:pt-16 md:pb-24  flex-col space-y-4 justify-center items-center text-darkBlue font-bold">
        <div className="text-center font-bold text-2xl">
            <p>Welcome</p>
            <p>{user.first_name} {user.last_name}</p>
            <p>Are you looking for a specific scientific article ?</p>
            </div>
        <div className="absolute bottom-[-30px] bg-myBlue w-full h-8"></div>
    </div>
    <div className="flex  space-x-2 items-center relative mx-6 md:mx-10 p-2 bg-white border-darkBlue text-darkBlue border-2 rounded-2xl ">
           <IoSearchOutline className=" h-8 w-8  md:h-10 md:w-10"/>
           <input type="text" onKeyDown={handleSearch} onChange={(e)=>setValueInput(e.target.value)} value={valueInput} placeholder="Enter the moderator name please" className="w-full outline-none font-normal text-2xl"  />
    </div>
    <div  className="mx-8 mb-5 mt-5  md:mx-32 py-4 pb-8 px-4 md:px-12 border-4 border-myBlue rounded-3xl space-y-4 md:space-y-8" >
   <p className="text-darkBlue font-bold text-xl">Recent articles</p>
          {
             listArticles &&  listArticles.map((item,index)=>(
                <ArticleComponents auteur="{item.auteur} " date="hahahhahahhah" titre={item.title} nbJaime="{item.nbJaime}" idUser={user.items} idArticle="{item.id}" />
          )
          )
          }
        </div>
</div>

    // <div> 
    //     <NavBar/>
    //     <div style={{ height: '100vh', position: 'relative' ,zIndex:'1'}}> 
    //         <div className="text-center bg-myBlue"  style={{ width:'100%' , height: '47%', position:'absolute',top:'0px',zIndex:'2'}}>
    //         <p className="text-darkBlue font-bold mt-12">Welcome</p>
    //         <p className="text-darkBlue font-bold">NOM Prenom</p>
    //         <p className="text-darkBlue font-bold mt-16">Are you looking for a specific</p>
    //         <p className="text-darkBlue font-bold">scientific article ?</p>
    //         </div>
    //         <div style={{width:'100%',position:'absolute' ,marginTop:'256px',zIndex:'3'}}>
    //             <Searchbar/>
    //         </div>
    //         <div className="h-12"style={{width:'100%',position:'absolute',zIndex:'2',}} >
    //     </div>
    //         <div className="border-2 rounded-2xl text-left mx-auto max-w-[250px] 
    //     sm:max-w-[280px] md:max-w-xl xl:max-w-2xl" 
    //     style={{width:'700px',borderColor:'#D4F2F4',padding:'20px',left: '50%',zIndex:'3',
    //     transform: 'translate(-50%, -50%)',position:'absolute',top:'460px',maxHeight: '200px', overflowY: 'auto',
    //     WebkitOverflowScrolling: 'touch', 
            
    //         scrollbarWidth: 'thin', // Firefox
    //         scrollbarColor: '#D4F2F4 #E5E7EB', // Firefox
    //         '&::-webkit-scrollbar': {
    //           width: '12px',
    //         },
    //         '&::-webkit-scrollbar-track': {
    //           backgroundColor: '#E5E7EB',
    //         },
            
    //     }}>
    //         <p className="text-darkBlue font-bold">Recent articles</p>
    //         <ArticleComponents/> 
    //         <ArticleComponents/> 
    //         <ArticleComponents/> 
    //         <ArticleComponents/> 
    //         <ArticleComponents/> 
    //         <ArticleComponents/> 
    //         <ArticleComponents/> 
    //         <ArticleComponents/> 
    //         <ArticleComponents/> 
    //         <ArticleComponents/> 
    //         <ArticleComponents/> 
    //         <ArticleComponents/> 
          
    //     </div>
    //     </div>
    //     <div className="h-12">
    //     </div>
    //     </div>
    );
}
 
export default Profile;