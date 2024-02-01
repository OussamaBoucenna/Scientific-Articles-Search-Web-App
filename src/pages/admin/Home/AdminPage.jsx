import AdminItems from "./AdminItems";
import Navbar from "../../../components/NavBar/Navbar";
import { Link } from "react-router-dom";

const AdminPage = () => {
    return ( 
        <main>
            <Navbar/>
            <div className="flex flex-col ">
                {/* flex general fih 2 flex ldakhlo */}
                <div className="flex flex-col  md:flex-row  items-center  md:justify-center">
                    {/* flex lwl jey b toul */}
                    <Link className="w-3/4 md:w-1/4" to={"/admin/AddMod"} ><AdminItems choix="add"/></Link>
                    <Link className="w-3/4 md:w-1/4" to={"/admin/DeletePage"} ><AdminItems choix="delete"/></Link>
               
                </div>
                <div className="flex flex-col md:flex-row items-center md:justify-center">
                    {/* flex 2eme jey b toul */}
                    <Link className="w-3/4 md:w-1/4" to={"/admin/ListEdit"} ><AdminItems choix="edit"/></Link>
                    <Link className="w-3/4 md:w-1/4" to={"/admin/Upload"} ><AdminItems choix="upload"/></Link>
                    
                    
                </div>
            </div>
            
        </main>
     );
}
 
export default AdminPage;