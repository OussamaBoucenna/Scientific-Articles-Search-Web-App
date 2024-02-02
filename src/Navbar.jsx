import myImage from  './image/myimage.png'
import myBackroundImage from './image/backroundNav.png'
import { useState } from 'react'
import {Link} from 'react-router-dom'; // not used


const Navbar = () => {
  const [isMenuVisible,setMenuVisibility]= useState(false); 
  const showMenu = () => {
     setMenuVisibility(!isMenuVisible);
  }
  
    return ( 
      <nav
      style={{ backgroundImage: `url(${myBackroundImage})` }} 
      className="bg-cover p-2"
      >
      <div className="mx-4 flex justify-between  items-center">
        <div className="text-white font-bold">Your Logo</div>
        <div className="sm:hidden  md:flex md:space-x-8">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-yellow-500">About</a>
          <a href="#" className="text-white">Contact</a>
        </div>
        <div className=' relative flex justify-center space-x-6'>
        
          <button className='block md:hidden '
           onClick={()=>showMenu()}
          >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block md:hidden text-white  w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          </button>
          {isMenuVisible &&  (
           <div className='block  md:hidden  mt-4 px-8 py-4 absolute top-8 right--2 bg-myBlue'>
           <ul className='text-darkBlue space-y-4'>
             <li>Home</li>
             <li>About</li>
             <li>Contact</li>
           </ul>
         </div>
         )}
             
          <img className='w-10 h-10 md:w-14 md:h-14 rounded-full'  src={myImage} alt="profil pictur"/>
        </div>
      </div>
    </nav>
     );
}
 
export default Navbar;