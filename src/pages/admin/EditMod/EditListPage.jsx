import { useEffect, useState } from "react";
import Navbar from "../../../components/NavBar/Navbar";
import ModeratorComponent from "../ModeratorComponent";
import axios from "axios";

const EditListPage = () => {
     // il faut faire une methode pour recuperer tout les moderateur dans cette liste de la base de donner , 
        // et les mettres dans cette liste ,cepandant , sa sera UseEffect // Contacter moi lors de l'integration
   const [listModerator,setListModerators] = useState(null);
    useEffect(  ()  =>  {
        const fetchData = async () => {
            try {
                const myKey = localStorage.getItem('token');
                console.log("the acces token is :",myKey); 
                const response = await axios.get(
                    'http://localhost:8080/mods/',
                    {
                        headers: {
                          Authorization: `Bearer ${myKey}`, // Set the Authorization header
                        },}
                    )
                    console.log(response.data); 
                setListModerators(response.data); 
            } catch (error) {
                console.error("Erreur de recuperation des données");
            }
            
        } 
         fetchData();
    },[listModerator]);
    return ( 
        <div>
            <Navbar/>
             <div className="text-center mt-12 mb-6 md:mt-20 md:mb-12">
                <p className="text-darkBlue font-semibold text-xl md:text-2xl">Moderators list</p>
             </div>
             <div  className="mx-4 md:mx-32 space-y-4 md:space-y-8"
             style={{ overflowY: 'scroll', maxHeight: '440px',  }}>
               {
               listModerator &&  listModerator.map((item,index)=>(
                      <ModeratorComponent  nameOfModerator={item.first_name} id={item.id} />
                )
                )
               }
             </div>
        </div>
     );
}
 
export default EditListPage;