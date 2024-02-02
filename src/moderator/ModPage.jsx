import React from 'react';
import Navbar from '../Navbar';
import SearchBar from '../SearchBar';
import ArticleList from './ArticleList';

const ModPage = (props) => {
  // Static array of articles with multiple authors
  const articles = [
    { titre: 'Article 1', auteurs: ['Author 1', 'Author 2'] },
    { titre: 'Article 2', auteurs: ['Author 3', 'Author 4'] },
    { titre: 'Article 3', auteurs: ['Author 5', 'Author 6'] },
    { titre: 'Article 4', auteurs: ['Author 7', 'Author 8'] },
    { titre: 'Article 5', auteurs: ['Author 9', 'Author 10'] },
    { titre: 'Article 6', auteurs: ['Author 11', 'Author 12'] },
    { titre: 'Article 7', auteurs: ['Author 13', 'Author 14'] },
    // Add more articles as needed
  ];

  return (
    <div>
      <Navbar />

      <div className="bg-myBlue pt-4 pb-10 md:px-auto md:pt-8 md:py-16 md:text-xl flex-col space-y-4 justify-center items-center text-darkBlue font-bold">
        <div className="flex-col justify-center items-center">
          <div className="text-center"><p>Welcome</p></div>
          <div className="text-center">{props.NOM} {props.Prenom}</div>
        </div>
      </div>

      <SearchBar />

      <div className="mt-4">
        <ArticleList articles={articles} />
      </div>
    </div>
  );
}

export default ModPage;
