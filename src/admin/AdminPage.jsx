import AdminItems from "./AdminItems";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const AdminPage = () => {
    return ( 
        <main>
            <Navbar/>
            <div className="flex flex-col ">
                {/* flex general fih 2 flex ldakhlo */}
                <div className="flex flex-col  md:flex-row  items-center  md:justify-center">
                    {/* flex lwl jey b toul */}
                    <Link className="w-1/4" to={"/UserPage/add"} ><AdminItems choix="add"/></Link>
                    <Link className="w-1/4" to={"/UserPage/upload"} ><AdminItems choix="delete"/></Link>
               
                </div>
                <div className="flex flex-col md:flex-row items-center md:justify-center">
                    {/* flex 2eme jey b toul */}
                    <Link className="w-1/4" to={"/UserPage/delete"} ><AdminItems choix="edit"/></Link>
                    <Link className="w-1/4" to={"/UserPage/edit"} ><AdminItems choix="upload"/></Link>
                    
                    
                </div>
            </div>
            
        </main>
     );
}
 
export default AdminPage;