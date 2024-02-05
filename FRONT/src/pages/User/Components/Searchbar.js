import React from 'react';



const Searchbar = () => {
    return ( 
        <div className="flex justify-center items-center"> 
        <div className="px-4 space-x-4 border-2 border-darkBlue rounded-2xl mt-10 flex 
        justify-start items-center w-full max-w-[250px] 
        sm:max-w-[300px] md:max-w-xl xl:max-w-2xl" style={{backgroundColor: '#ffffff'}}>   
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#04445f" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input type="text"
            className="w-full outline-none rounded-md px-4 py-2 placeholder-darkBlue font-bold"
            placeholder="search"
            ></input>
        </div>
        </div>
    );
}
 
export default Searchbar;
