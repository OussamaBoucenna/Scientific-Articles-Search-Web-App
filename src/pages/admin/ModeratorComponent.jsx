import { TbEditCircle } from "react-icons/tb";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
const ModeratorComponent = ({nameOfModerator,id}) => {
       const uId  = id ; 
    return ( 
        <div className=" border-darkBlue border-2 bg-gradient-to-b from-myBlue via-myBlue to-white mx-auto px-2 py-2 md:px-8 :py-6  flex justify-between items-center rounded-xl">
        <div className=" flex-col text-darkBlue">
             {/* this div will containe name of moderator */}
            <div className=""><p className="font-bold md:text-lg">{nameOfModerator}</p>
            </div>
        </div>
        <div className="flex-col  space-x-1 md:space-x-4  items-center justify-center">
            {/* this div will containe the two icons  */}    
             <Link to={`/EditModPage/${uId}`} className="w-6 h-6 md:w-10 md:h-10  inline-flex items-center justify-center" ><TbEditCircle className="w-full h-full text-darkBlue"/></Link>
            <button>
                <TiDeleteOutline className="w-6 h-6 md:w-10 md:h-10 text-red-500"/>
            </button>
        </div>
    </div>
     );
}
export default ModeratorComponent;