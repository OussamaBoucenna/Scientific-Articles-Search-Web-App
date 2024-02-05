import { useState } from "react";
import Navbar from "./../../../components/NavBar/Navbar";
import { Link } from "react-router-dom";
import axios from 'axios';

const UploadPage = () => {
    
    const [url,setUrl]=useState(""); 
    const  handleInputeChange = (e) => {
        setUrl(e.target.value);
    }
    const handleAddClick = async (event) => {
        event.preventDefault();

    try {
      const myKey = localStorage.getItem('token');
      console.log("the acces token is :",myKey); 
      const response = await axios.post(
        'http://localhost:8080/mods/articles',
        {
          url : url
        },{
        headers: {
          Authorization: `Bearer ${myKey}`, // Set the Authorization header
        },}
      );

      console.log('User created successfully:', response.data);
    } catch (error) {
      console.error('Error uploading:', error);
    }
        
     }
    return ( 
        <div className="">
        <Navbar />
    <div className="flex-col  mx-10 md:mx-32 space-y-9 mt-20 flex justify-center ">
        {/* hna tbda la page te3na */}
        <div className="font-bold text-3xl  text-darkBlue text-center"><p>Upload file</p></div>
        <div className="text-2xl font-medium block  text-darkBlue text-center">Please enter the file URL here</div>
        <div className="border-2 py-3 px-4  border-darkBlue rounded-lg">
            <input className="outline-none w-full text-darkBlue placeholder:text-darkBlue" required type="url" placeholder="Url" value={url} onChange={handleInputeChange} />
        </div>
        <div className="bg-white  space-y-7 md:space-y-0 md:space-x-12 md:flex md:justify-center font-bold">
            <div className="flex justify-center">
                <button className="border-2 border-green-500 text-green-500 text-xl rounded-xl px-7 py-2" onClick={handleAddClick}>&nbsp;&nbsp;Add&nbsp;</button>
            </div>
            <div className="flex justify-center">
                <Link to={"/"}><button className="border-2 border-red-500 text-red-500 text-xl rounded-xl px-7 py-2">Cancel</button></Link>
            </div>
        </div>
    </div>
    </div>
    
     );
}
 
export default UploadPage;


// import { useState } from "react";
// import Navbar from "./../../../components/NavBar/Navbar";
// import { Link } from "react-router-dom";

// const UploadPage = () => {
    
//     const [url,setUrl]=useState(""); 
//     const  handleInputeChange = (e) => {
//         setUrl(e.target.value);
//     }
//      const handleAddClick = () => {
//         // n'oublie pas de verifier que le contenue de l'inpute n'est pas vide 
//      }
//     return ( 
//         <div className="">
//         <Navbar typeId="admin"/>
//     <div className="flex-col  mx-10 md:mx-32 space-y-9 mt-20 flex justify-center ">
//         {/* hna tbda la page te3na */}
//         <div className="font-bold text-3xl  text-darkBlue text-center"><p>Upload file</p></div>
//         <div className="text-2xl font-medium block  text-darkBlue text-center">Please enter the file URL here</div>
//         <div className="border-2 py-3 px-4  border-darkBlue rounded-lg">
//             <input className="outline-none w-full text-darkBlue placeholder:text-darkBlue" required type="url" placeholder="Url" value={url} onChange={handleInputeChange} />
//         </div>
//         <div className="bg-white  space-y-7 md:space-y-0 md:space-x-12 md:flex md:justify-center font-bold">
//             <div className="flex justify-center">
//                 <button className="border-2 border-green-500 text-green-500 text-xl rounded-xl px-7 py-2" onClick={handleAddClick}>&nbsp;&nbsp;Add&nbsp;</button>
//             </div>
//             <div className="flex justify-center">
//                 <Link to={"/"}><button className="border-2 border-red-500 text-red-500 text-xl rounded-xl px-7 py-2">Cancel</button></Link>
//             </div>
//         </div>
//     </div>
//     </div>
    
//      );
// }
 
// export default UploadPage;