import { useEffect, useState } from "react";
import Navbar from "../../../components/NavBar/Navbar";
import ModeratorComponent from "../ModeratorComponent";

const EditListPage = () => {
     // il faut faire une methode pour recuperer tout les moderateur dans cette liste de la base de donner , 
        // et les mettres dans cette liste ,cepandant , sa sera UseEffect // Contacter moi lors de l'integration
   const [listModerator,setListModerators] = useState(null);
    useEffect(() => {
        fetch("http://localhost:8000/Moderator")
        .then(res => (
            res.json()
        ))
        .then(data => {
           setListModerators(data);
        }).catch(error => {
            console.log("erreurrrrrr");
        }

        );
    },[]);
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
                      <ModeratorComponent  nameOfModerator={item.firstName} id={item.id} />
                )
                )
               }
             </div>
        </div>
     );
}
 
export default EditListPage;