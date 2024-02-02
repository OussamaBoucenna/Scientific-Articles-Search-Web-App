import React from "react";
import { RiVerifiedBadgeLine } from "react-icons/ri"; 
import { IoMdCloseCircleOutline } from "react-icons/io";

const ArticleComponents = (props) => {
  // props: titre, auteurs (list of authors)

  return (  
    <div className="bg-gradient-to-b from-myBlue via-myBlue to-white rounded border-2 mx-auto max-w-screen sm:max-w-[98%] md:max-w-[95%] xl:max-w-[80%] px-4 pb-1 pt-1 flex justify-between rounded items-center">
      <div className="flex-col text-darkBlue">
        <div>
          <p className="font-bold">{props.titre}</p>
        </div>
        <div>
          <b>Authors: </b> {props.auteurs.join(', ')}
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <button className="bg-inherit text-white rounded px-2 py-1" onClick={() => {
          console.log("Verification button clicked");
          // handle verification process here
        }}>
          <RiVerifiedBadgeLine className="text-green-500" size={35} />
        </button>

        <button className="bg-inherit text-white rounded px-2 py-1" onClick={() => {
          console.log("Delete button clicked");
          // handle delete process here
        }}>
          <IoMdCloseCircleOutline className="text-red-500" size={35} />
        </button>
      </div>
    </div>
  );
}

export default ArticleComponents;
