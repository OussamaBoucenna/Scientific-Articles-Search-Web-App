import axios from "axios";
import { Link } from "react-router-dom";

const ModeratorItem = ({nameOfModerator,id}) => {
     
   const handleDeleteACtion = async () =>{
    // ici il faut supprimer ce moderateur de la base de donner 
      try { 
         const myKey = localStorage.getItem('token'); 
         console.log("access token is ",myKey)
        const response  = await axios.delete(
            'http://localhost:8080/mods/'+id,
            {
                headers: {
                  Authorization: `Bearer ${myKey}`, // Set the Authorization header
                },}
        )
      } catch (error) {
        console.error("erreur lors de la suppression du moderateur ")
      }
   }
    return (  
    
    <div className=" border-darkBlue border-2 bg-gradient-to-b from-myBlue via-myBlue to-white mx-auto px-2 py-2 md:px-8 :py-6  flex justify-between items-center rounded-xl">
    <div className=" flex-col text-darkBlue">
        <div className=""><p className="font-bold md:text-lg">{nameOfModerator}</p></div>
    </div>
    <div className="">
        <button onClick={handleDeleteACtion} className="border-2 border-red-500 font-bold text-xl rounded-xl py-1 px-4  text-red-500">
            Delete
        </button>
    </div>
</div> );
}
 
export default ModeratorItem;