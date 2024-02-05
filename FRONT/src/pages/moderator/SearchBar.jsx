import  { useState } from 'react';
import React from 'react';
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log(`Performing search for: ${searchQuery}`);
  };

  return (
    <div className="bg-white border border-2 rounded-xl border-darkBlue   mx-auto max-w-screen sm:max-w-[98%] md:max-w-[95%] xl:max-w-[80%] px-4 pb-1 pt-1  flex flex-row justify-between items-center  ">
       
      < IoIosSearch className="text-darkBlue" size={35} />
      <input
      
        type="text"
        placeholder="Search"
        value={searchQuery}
        className="w-full pl-5 p-2 outline-none"
        
      />
     
    </div>
  );
};

export default SearchBar;
