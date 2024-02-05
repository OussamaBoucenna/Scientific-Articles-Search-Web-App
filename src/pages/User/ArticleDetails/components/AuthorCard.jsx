import React from "react";

const AuthorCard = ({author}) => {
  return (
    <div>
      <div className=" flex flex-col items-center font-semibold">
        <p className=" font-semibold text-xl ">{author.name}</p>
        <p className=" text-lg">{author.level}</p>
        <p className=" text-lg">{author.departement}</p>
        <p className=" text-blue-light underline">{author.email}</p>
      </div>
    </div>
  );
};

export default AuthorCard;
