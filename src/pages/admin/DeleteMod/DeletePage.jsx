import { Link } from "react-router-dom";
import Navbar from "../../../components/NavBar/Navbar";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import ModeratorItem from "./ModeratorItem";

const DeletePage = () => {
    
    const [listModerator,setListModerator] = useState([
        {firstName:"oussama", id:"23"},
        {firstName:"hahaHDk", id:"25"},
        {firstName:"Anis", id:"22"},
        {firstName:"Walid", id:"26"},
        {firstName:"Hoaml", id:"11"},
        {firstName:"oussama", id:"23"},
        {firstName:"hahaHDk", id:"25"},
        {firstName:"Anis", id:"22"},
        {firstName:"Walid", id:"26"},
        {firstName:"Hoaml", id:"11"},
    ]); 
    const[valueInput,setValueInput] = useState("");
   const handleSearch = (e) => {
    // hed methode hiya li lzm troutournilna la liste te3 moderateur li ybda asamhom b wsh rew keteb ll'utilisteur f la bar de recherche 
    const nouvelInput = e.target.value;
    setValueInput(nouvelInput);
}
    return ( 
        <div className="flex-col ">
            <Navbar/>
            <div className="relative bg-myBlue pt-16 pb-16 md:px-auto md:pt-16 md:pb-24  flex-col space-y-4 justify-center items-center text-darkBlue font-bold">
                <div className="text-center font-bold text-3xl"><p>Delete Moderator</p></div>
                <div className="absolute bottom-[-30px] bg-myBlue w-full h-8"></div>
            </div>
            <div className="flex  space-x-2 items-center relative mx-6 md:mx-10 p-2 bg-white border-darkBlue text-darkBlue border-2 rounded-2xl ">
                   <IoSearchOutline className=" h-8 w-8  md:h-10 md:w-10"/>
                   <input type="text" onChange={handleSearch} value={valueInput} placeholder="Enter the moderator name please" className="w-full outline-none font-normal text-2xl"  />
            </div>
           { !valueInput  &&  <div className="flex-grow  mt-16 md:mt-10">
                <div className="flex-col space-y-8 justify-center items-center " >
                    <div className="text-center text-darkBlue text-xl font-semibold md:text-3xl md:font-normal"><p className="mx-4">You can consult the list of moderators</p></div>
                    <div className=" flex justify-center "><Link to="/ListDelete" className="bg-darkBlue font-semibold rounded-2xl md:rounded-xl text-white text-xl md:text-3xl px-8 py-2">Moderators list</Link></div>
                </div>
            </div>}
            {
                valueInput && <div  className="mx-8 mt-5 md:mx-32 space-y-4 md:space-y-8"
                >
                  {
                  listModerator &&  listModerator.map((item,index)=>(
                         <ModeratorItem  nameOfModerator={item.firstName} id={item.id} />
                   )
                   )
                  }
                </div>
            }
        </div>
       
     );
}
 
export default DeletePage;