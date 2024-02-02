import { MdDeleteSweep } from "react-icons/md";
import { RiEditCircleLine } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import { VscCloudUpload } from "react-icons/vsc";
import backroundImage from './../image/AdminItem.png'
import { useEffect, useState } from "react";

const AdminItems = ({choix}) => {
  const  [myLabel,setMyLabel] = useState('null'); 
    useEffect (() => {
      switch (choix) {
        case 'delete':
          setMyLabel('Delete a moderator');
          break;
        case 'add':
          setMyLabel('Add a moderator');
          break;
        case 'edit':
          setMyLabel('Edit a moderator');
          break;
        case 'upload':
          setMyLabel('Upload file');
          break;
        default:
          break;
      }
    },[]);
 
    return ( 
       <div className="m-4 border rounded-2xl border-darkBlue   ">
         <div  
        style={{background: `url(${backroundImage})`}}
       className="bg-cover rounded-tl-2xl rounded-tr-2xl flex justify-center items-center  w-full h-48 ">
         <div className="flex w-28 h-28 rounded-full bg-white text-center items-center  justify-center">
           { choix ==="delete" && <MdDeleteSweep className="w-16 h-16  text-darkBlue"/> }
           { choix ==="edit" && <RiEditCircleLine className="w-16 h-16 text-darkBlue"/> }
           { choix ==="add" &&<IoIosAddCircleOutline className="w-16 h-16 text-darkBlue"/> }
           { choix ==="upload" && <VscCloudUpload className="w-16 h-16 text-darkBlue"/> }
        </div>
       </div>
       <div className=" w-full py-2 text-center text-darkBlue font-semibold text-2xl">
         {myLabel}
       </div>
       </div>
     );
}
export default AdminItems;