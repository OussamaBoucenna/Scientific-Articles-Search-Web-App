import React from 'react';
import { BsFilterRight } from "react-icons/bs";


const FilterMenu = ({ donnees }) => {
  const filterItem = ["Keywords","Authors","Institutes","Dates"]
  return (
    <div className="flex w-fit items-center border-darkBlue  border-solid border-2 rounded-2xl ">
      <div className="mr-2 md:mr-4">
        <BsFilterRight className="w-6 h-6 md:w-10 md:h-10 text-darkBlue" />
      </div>
      <div className=" text-ls font-medium md:text-xl md:font-bold text-darkBlue">
        Filter by
      </div>
      <div className="w-32">
        <select className="p-2 border-none font-medium outline-none md:font-semibold text-darkBlue">
          {filterItem.map((option, index) => (
            <option className="font-semibold" key={index} value={option}>
            {option} 
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterMenu;

// import React, { useState } from 'react';

// const FilterMenu = () => {
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <button className="mt-5 cursor-default block m-auto">
//     <div className="rounded-md flex justify-center items-center w-18 border-2 max-w-[210px] h-10 border-darkBlue">
//         <svg className="ml-1 mr-1" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#04445f" class="w-6 h-6">
//            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
//         </svg>
  
//           <label className="text-darkBlue font-bold" htmlFor="simpleComboBox">Filter by</label>
//           <select
//               id="simpleComboBox"
//               value={selectedOption}
//               onChange={handleChange}
//               className="appearance-none bg-transparent border-darkBlue outline-none p-2 pl-6 cursor-pointer"
//           >
//             <option className="text-darkBlue" value=""></option>
//             <option className="text-darkBlue" value="option1">Keywords</option>
//             <option className="text-darkBlue" value="option2">Authors</option>
//             <option className="text-darkBlue" value="option3">Institutes</option>
//             <option className="text-darkBlue" value="option4">Dates</option>
//           </select>
      
      
//         <svg className="mt-1 ml-1 mr-2" width="12" height="12" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M16 25L0.411545 0.25H31.5885L16 25Z" fill="#04445F"/>
//         </svg>
//     </div>
//     </button>
//   );
// };

// export default FilterMenu;
