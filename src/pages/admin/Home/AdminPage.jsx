import AdminItems from "./AdminItems";
import Navbar from "../../../components/NavBar/Navbar";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import AddModPage from "../AddMod/AddMod";
import DeletePage from "../DeleteMod/DeletePage";
import EditListPage from "../EditMod/EditListPage";
import UploadPage from "../Upload/UploadPage";

const AdminPage = () => {
    const navigate = useNavigate(); // Utilisez useNavigate pour obtenir la fonction de navigation

    return ( 
        <main>
            <Navbar/>
            <div className="flex flex-col ">
                <div className="flex flex-col md:flex-row items-center md:justify-center">
                    <Link className="w-3/4 md:w-1/4" to={"/admin/addMod"}><AdminItems choix="add"/></Link>
                    <Link className="w-3/4 md:w-1/4" to={"/admin/DeletePage"}><AdminItems choix="delete"/></Link>
                </div>
                <div className="flex flex-col md:flex-row items-center md:justify-center">
                    <Link className="w-3/4 md:w-1/4"  to={"/admin/ListEdit"}><AdminItems choix="edit"/></Link>
                    <Link className="w-3/4 md:w-1/4" to={"/admin/Upload"}><AdminItems choix="upload"/></Link>
                </div>
            </div>
          
        </main>
          
     );
}
 
export default AdminPage;





// import AdminItems from "./AdminItems";
// import Navbar from "../../../components/NavBar/Navbar";
// import { Link, Route, Routes, useRoutes } from "react-router-dom";
// import AddModPage from "../AddMod/AddMod";
// import DeletePage from "../DeleteMod/DeletePage";
// import EditListPage from "../EditMod/EditListPage";
// import UploadPage from "../Upload/UploadPage";

// const AdminPage = () => {
//     const {path , url } = useRoutes(); 
//     return ( 
//         <main>
//             <Navbar/>
//             <div className="flex flex-col ">
//                 {/* flex general fih 2 flex ldakhlo */}
//                 <div className="flex flex-col  md:flex-row  items-center  md:justify-center">
//                     {/* flex lwl jey b toul */}
//                     <Link className="w-3/4 md:w-1/4" to={"admin/AddMod"} ><AdminItems choix="add"/></Link>
//                     <Link className="w-3/4 md:w-1/4" to={"admin/DeletePage"} ><AdminItems choix="delete"/></Link>
               
//                 </div>
//                 <div className="flex flex-col md:flex-row items-center md:justify-center">
//                     {/* flex 2eme jey b toul */}
//                     <Link className="w-3/4 md:w-1/4" to={"admin/ListEdit"} ><AdminItems choix="edit"/></Link>
//                     <Link className="w-3/4 md:w-1/4" to={"admin/Upload"} ><AdminItems choix="upload"/></Link>
//                 </div>
//             </div>
//             <Routes>
//                 <Route path="addMod" element={ <AddModPage/>} />
//                 <Route path="DeletePage" element={<DeletePage/> } />
//                 <Route path="ListEdit" element={ <EditListPage/> } />
//                 <Route path="Upload" element={ <UploadPage/> } />
//             </Routes>
//         </main>
//      );
// }
 
// export default AdminPage;