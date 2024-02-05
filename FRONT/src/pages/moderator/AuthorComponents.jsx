// AuthorComponent.js
import React from 'react';

const AuthorComponents = ({ name, speciality, mail }) => {
  return (
    <div className="bg-white border border-2 border-darkBlue rounded-md p-4 mb-4 flex flex-col items-center">
      <p className="text-darkBlue font-bold">{name}</p>
      <p>{speciality}</p>
      <p>{mail}</p>
    </div>
  );
};

export default AuthorComponents;
