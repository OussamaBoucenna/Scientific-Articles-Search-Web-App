// AuthorsList.js
import React from 'react';
import AuthorComponents from './AuthorComponents';

const AuthorsList = ({ authorsData }) => {
  return (
    <div className="flex flex-wrap justify-center  items-center">
      {authorsData.map((author, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4">
          <AuthorComponents
            name={author.name}
            speciality={author.speciality}
            mail={author.mail}
          />
        </div>
      ))}
    </div>
  );
}

export default AuthorsList;
