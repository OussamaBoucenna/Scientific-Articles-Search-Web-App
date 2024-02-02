import { TbEditCircle } from "react-icons/tb";
import { TiDeleteOutline } from "react-icons/ti";
const ModeratorComponent = () => {
    const modName = "oussama" ;
    return ( 
        <div className=" border-darkBlue border-2 bg-gradient-to-b from-myBlue via-myBlue to-white mx-auto  px-4 pb-1 pt-1  flex justify-between rounded-xl">
        <div className=" flex-col text-darkBlue">
             {/* this div will containe name of moderator */}
            <div className=""><p className="font-bold">{modName}</p>
            </div>
        </div>
        <div className="flex-col  items-center justify-center">
            {/* this div will containe the two icons  */}
            <button>
                <TbEditCircle className="w-8 h-8 text-darkBlue" />
            </button>
            <button>
                <TiDeleteOutline className="w-8 h-8 text-red-500"/>
            </button>
        </div>
    </div>
     );
}
export default ModeratorComponent;