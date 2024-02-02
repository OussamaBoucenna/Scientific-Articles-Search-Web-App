import myImage from  './image/myimage.png'
import myBackroundImage from './image/backroundNav.png'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuVisible,setMenuVisibility]= useState(false); 
  const showMenu = () => {
     setMenuVisibility(!isMenuVisible);
  }
  /*const showListFavoris = () => {
    console.log('button for large device clicked');
  }*/
    return ( 
      <nav
      style={{ backgroundImage: `url(${myBackroundImage})` }} 
      className="bg-cover p-2"
      >
      <div className="mx-4 flex justify-between  items-center">
        <div className="text-white font-bold">Your Logo</div>
        <div className="sm:hidden  md:flex md:space-x-8">
          <a href="/" className="text-white">Home</a>
          <a href="/" className="text-white">About</a>
          <a href="/" className="text-white">Contact</a>
        </div>
        <div className=' relative flex justify-center space-x-6'>
          <Link to="/favorites">
          <button className='hidden md:block'>
          <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="hidden md:block text-white w-12 h-12">
             <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
          </button>
          </Link>
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
             <li>favorites </li>
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