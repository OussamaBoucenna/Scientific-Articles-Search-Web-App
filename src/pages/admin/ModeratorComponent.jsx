import { TbEditCircle } from "react-icons/tb";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import axios from "axios"
const ModeratorComponent = ({nameOfModerator,id}) => {
       const uId  = id ; 
       const handleDeleteModACtion =  async () => {
        try { 
            const myKey = localStorage.getItem('token'); 
            console.log("access token is ",myKey)
           const response  = await axios.delete(
               'http://localhost:8080/mods/'+uId,
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
             {/* this div will containe name of moderator */}
            <div className=""><p className="font-bold md:text-lg">{nameOfModerator}</p>
            </div>
        </div>
        <div className="flex-col  space-x-1 md:space-x-4  items-center justify-center">
            {/* this div will containe the two icons  */}    
             <Link to={`/admin/EditModPage/${uId}`} className="w-6 h-6 md:w-10 md:h-10  inline-flex items-center justify-center" ><TbEditCircle className="w-full h-full text-darkBlue"/></Link>
            <button onClick={handleDeleteModACtion}>
                <TiDeleteOutline className="w-6 h-6 md:w-10 md:h-10 text-red-500"/>
            </button>
        </div>
    </div>
     );
}
export default ModeratorComponent;